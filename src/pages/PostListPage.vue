<template>
	<div
		class="posts-list"
		v-if="posts && posts.length && likes && comments && visits && $store.state.auth.currentUser"
	>
		<SearchForm :executor="searchHandler" class="input_gr" />
		<a-card
			class="card"
			:class="{'card_updated': post.updated}"
			hoverable
			size="small"
			v-for="post in pagList"
			:key="post.id"
			:data-id="post.id"
			@click.prevent="cardClick"
		>
			<div class="card_post">
				<div class="post_preview">
					<img :src="post.previewURL" :alt="post.previewName" />
				</div>
				<div class="post_desc">
					<h3>{{ post.title }}</h3>
					<span class="post_author">by {{ post.author }}</span>
				</div>
			</div>
			<div class="card_badge_new" v-if="post.isNew">NEW</div>
			<div class="card_options" :class="[{'card_options_show': isMobile}]" @click.stop>
				<PersonalLike
					:parentUpd="updLike"
					:postId="post.id"
					:valueId="
						likes?.[post.id]?.[$store.state.auth.currentUser.uid]?.uid
							? likes[post.id][$store.state.auth.currentUser.uid].uid
							: ''
					"
				/>
				<PostListCardControls :deleteCard="deleteCard" :post="post" />
			</div>
		</a-card>
	</div>
	<a-pagination
		v-if="posts && filtered.length > itemLimit"
		:total="filtered.length"
		v-model:current="currentPage"
		v-model:pageSize="itemLimit"
		
	/>
	<h1 v-if="posts && !posts.length">No posts yet</h1>
	<a-spin v-if="!posts" class="loading" size="large" />
</template>

<script>
import PostListCardControls from "@/components/PostListCardControls.vue";
import PersonalLike from "@/components/PersonalLike.vue";
import SearchForm from "@/components/SearchForm.vue";
import dateInRange from "@/utils/dateInRange";
import { downloadPosts, downloadLikesBase, downloadCommentsBaseObj,downloadVisitsBase } from "@/firebase/methods";
import { PATH_POSTS } from "@/firebase/constants";
import isMobile from "@/utils/isMobile";
import getVolumeOfCards from "@/utils/getVolumeOfCards";

export default {
	components: {
		PersonalLike,
		PostListCardControls,
		SearchForm,
	},
	data() {
		return {
			posts: this.$store.state.data.posts,
			filtered: [],
			timefiltered: [],
			timeFilter: "all",
			likes: null,
			likedFilter: false,
			comments: null,
			visits: null,
			//
			currentPage: this.$store.state.pagination.page,
			itemLimit: 50,
			pagList: null,
		};
	},
	computed:{
		isMobile(){
			return isMobile();
		},
	},
	methods: {
		setFilteredPosts(value) {
			this.filtered = value;
		},
		cardClick(e) {
			if (e.target.class === "card_delete") return;
			const parent = e.target.closest(".card");
			const id = parent.dataset.id;
			this.$router.push({ name: PATH_POSTS, params: { id } });
		},
		isNew(post){
			//return dateInRange(createdAt.toDate(), 'week')
			if(post.uid === this.$store.state.auth.currentUser.uid) return;
			return !this.visits[post.id]?.[this.$store.state.auth.currentUser.uid]?.createdAt
		},
		checkPostChanges(post){
			const changedAt = post?.changedAt?.toDate();
			const lastVisit = this.visits[post.id]?.[this.$store.state.auth.currentUser.uid]?.createdAt?.toDate();
			const postComments = Object.entries(this.comments[post.id] ?? []).sort((a,b)=> a[1].createdAt.toDate() - b[1].createdAt.toDate())
			const lastCommentDate = postComments[postComments.length-1]?.[1]?.createdAt?.toDate();
	
			if(postComments.length && lastCommentDate > lastVisit){
				//console.log('новый комментарий')
				return true
			}
			if((!lastVisit || (changedAt && changedAt > lastVisit)) && post.uid !== this.$store.state.auth.currentUser.uid){
				//console.log('нет просмотра или содержание поста обновлено')
				return true
			}
			
			return false
		},


		updLike(postId) {
			const uid = this.$store.state.auth.currentUser.uid;

			if (this.likes[postId]?.[uid]) {
				if (this.likedFilter) {
					this.filtered = this.filtered.filter((p) => postId !== p.id);
				}
				delete this.likes[postId]?.[uid];
			} else {
				if (this.likes[postId]) {
					this.likes[postId][uid] = { uid };
				} else {
					this.likes[postId] = { [uid]: { uid } };
				}
			}
			this.pagListUpd();
		},

		searchHandler(value, selectType, timeFilter, likedFilter) {
			let result;
			// Фильтруем по времени
			if (timeFilter !== this.timeFilter) {
				result = this.posts.filter((post) =>
					dateInRange(post.createdAt.toDate(), timeFilter)
				);
				this.timeFilter = timeFilter;
				this.timefiltered = result;
			}
			// Фильтруем по лайкам
			let likedFiltered = [];
			this.likedFilter = likedFilter;
			if (likedFilter) {
				for (let p of this.timefiltered) {
					if (this.likes[p.id]?.[this.$store.state.auth.currentUser.uid]) {
						likedFiltered.push(p);
					}
				}
			} else {
				likedFiltered = this.timefiltered;
			}
			// Фильтруем по параметру автор/тайтл
			result = likedFiltered.filter((post) =>
				post?.[selectType].toLowerCase().includes(value.toLowerCase())
			);
			this.setFilteredPosts(result);
			this.pagListUpd();
		
		},
		deleteCard(id) {
			this.setFilteredPosts(this.filtered.filter((post) => post.id !== id));
			this.timefiltered = this.timefiltered.filter((post) => post.id !== id);
			this.posts = this.posts.filter((post) => post.id !== id);
			this.pagListUpd();
		},
		pagListUpd() {
			//проверка изменения номера страницы
			if (this.filtered.length <= this.itemLimit) {
				this.currentPage = 1;
			} else {
				const updatedPageIndex = Math.ceil(this.filtered.length / this.itemLimit);
				if(this.currentPage > updatedPageIndex){
					this.currentPage = updatedPageIndex
				}
			}
			
			this.pagList = this.filtered.filter(
				(_, index) =>
					index + 1 <= this.itemLimit * this.currentPage &&
					index + 1 > this.itemLimit * this.currentPage - this.itemLimit
			);
			
		},
		updCardsNumber() {
            if(!this.isMobile){
                this.itemLimit = getVolumeOfCards();
                //console.log('this.itemLimit',this.itemLimit);
            }
		},
		resizeUpd(){
			this.updCardsNumber();
			this.pagListUpd();

			// if(this.filtered.length < this.itemLimit){
            //     console.log('remove resize watcher')
            //     window.removeEventListener('resize', this.resizeUpd);
			// }
		}
	},
	watch: {
		currentPage(value) {
			this.$store.dispatch('updatePageNumber',value)
			this.pagListUpd();
		},
	},
	created() {
		const postsPromise = downloadPosts();
		const likesPromise = downloadLikesBase();
		const commsPromise = downloadCommentsBaseObj();//downloadCommentsBase();
		const visitPromise = downloadVisitsBase();
		Promise.all([postsPromise, likesPromise, commsPromise, visitPromise])
			.then((responses) => {
				let [res_posts, res_likesObj, res_commentsObj, res_visitsObj] = responses;
				this.likes = res_likesObj;
				this.comments = res_commentsObj;
				this.visits = res_visitsObj;

				res_posts.forEach(post=>{
					post.updated = this.checkPostChanges(post);
					post.isNew = this.isNew(post);
				})
				res_posts = res_posts.reverse();
				
				this.setFilteredPosts(res_posts);
				this.timefiltered = res_posts;
				this.posts = res_posts;
				this.$store.dispatch('updatePosts',this.posts)
				this.pagListUpd();


				
				console.log("res post", res_posts);
				//console.log("res likes", res_likesObj);
				console.log('comms',res_commentsObj)
				//console.log('visits',res_visitsObj)
			})
			.catch(() => {
				// Обработка ошибки
			});
	},
	beforeMount(){
		this.updCardsNumber();
	},
	mounted() {
		window.addEventListener('resize', this.resizeUpd);
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.resizeUpd);
	},
};
</script>

<style lang="scss" scoped>
$maxImageSize: 64px;
$bg_color: #fffbfb;
.loading {
	margin-top: 55px;
}

.posts-list {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
	justify-content: center;
	gap: 10px;
	padding-bottom: 35px;

	/* display: flex;
	flex-wrap: wrap; */
	@media(max-width: 400px) {
		padding-bottom: 12px;
	}
}

.input_gr {
	margin-bottom: 25px;
	grid-column: 1 / -1;

	@media(max-width: 400px) {
		margin-bottom: 0px;
	}
}

.post_preview {
	display: flex;
	margin-right: 10px;
	border: 1px solid #d9d9d9;
	overflow: hidden;
	border-radius: 2px;

	width: $maxImageSize;
	min-width: $maxImageSize;
	height: $maxImageSize;
	//min-height: 64px;

	background-color: rgb(219, 219, 219);
	overflow: hidden;
}
.post_preview img {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.post_desc {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.post_desc h3 {
	margin: 0;
	line-height: 22px;
	max-height: 44px;
	word-break: break-word;
	overflow: hidden;
}
.post_author {
	font-size: 11px;
	line-height: 12px;
}

.card {
	background-color: $bg_color;
	border: 1px solid hsl(0, 0%, 90%);
	border-radius: 2px;
	overflow: hidden;
	position: relative;
	flex-grow: 1;
	transition: all 0.33s;

	&_updated {
		animation: flashing 3s ease infinite;
	}

	&_post {
		display: flex;
		height: 100%;
	}

	&_badge_new {
		font-size: 11px;
		line-height: 12px;
		position: absolute;
		bottom: 2px;
		right: 2px;
		display: inline-block;
		background-color: #f6ff00df;
		border: 1px solid #796e61;
		color: #000;
		border-radius: 4px;
		padding: 2px;
		//width: 25px;
		//height: 14px;
		
	}

	&_options {
		height: 14px;
		font-size: 14px;
		display: flex;
		gap: 4px;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 4px;
		top: 4px;
		transition: all 0.33s;
		opacity: 0;

		&_show{
			transition: all 0.33s;
			opacity: 1;
		}
	}

	&:hover {
		.card_options {
			opacity: 1;
		}
	}

	@media (max-width: 567px){
		width: 100%;
		max-width: 300px;
		justify-self: center;
	}
}
.card_deleting_animation {
	transition: all 0.33s;
	transform: scale(0);
}

@keyframes flashing {
	from {
		opacity: 1;
		background-color: initial;
	}
	50%{
		opacity: 0.75;
		background-color: rgba(255, 255, 0, 0.193);
	}
	to {
		opacity: 1;
		background-color: initial;
	}
}


</style>
