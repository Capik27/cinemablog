import { createStore } from "vuex";
import { auth, firestore, storage } from "@/firebase/init_firebase";

const pagination = { page: 1 };
const data = { posts: null };

export default createStore({
  state: {
    auth,
    firestore,
    storage,
    //
    pagination,
    data,
  },
  getters: {},
  mutations: {
    setPage(state, payload) {
      state.pagination.page = payload;
    },
    setPosts(state, payload) {
      state.data.posts = payload;
    },
  },
  actions: {
    updatePageNumber({ commit }, newValue) {
      commit("setPage", newValue);
    },
    updatePosts({ commit }, newValue) {
      commit("setPosts", newValue);
    },
  },
});
