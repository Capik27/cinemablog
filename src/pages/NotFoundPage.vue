<template>
	<a-result
		status="404"
		title="404"
		sub-title="Sorry, the page you visited does not exist."
	>
		<template #extra>
			<a-button type="primary">Back Home</a-button>
		</template>
	</a-result>
</template>
<script>
export default {
	//
};
</script>
<style lang="scss" scoped>
.ant-result {
	padding: 10px;
}
</style>
