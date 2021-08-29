<template>
	<v-card width="800" min-height="160" class="pa-2 text-center d-inline-block">
		<div v-for="(item, i) in approvalList" :key="i" class="mb-1">
			<v-btn color="cyan" block @click="openApproval(item)">
				Title : <span class="no-text-transform">{{ item.title }}</span>
				<span class="ml-auto no-text-transform">date : {{ item.date }}</span>
			</v-btn>
		</div>
	</v-card>	
</template>

<script>
export default {
	data() {
		return {
			approvalList: null
		}
	},
	created() {
		this.$axios.get(this.server + 'getNewApproval?sid=' + this.$store.state.common.sid).then(res => {
			if(this.approvalList == null) this.approvalList = res.data
		}).catch(err => {
			console.log(err)
		})
	},
	methods: {
		openApproval(approval) {
			this.$router.push({name: 'approval detail', params: {approval: approval}})
		}
	}
}
</script>

<style>
.no-text-transform {
	text-transform: none;
}
</style>