<template>
	<v-card class="pa-10 text-center">
		<v-card color="green" class="pa-2 d-inline-block mr-3">
			<h1>Approval</h1>
			<div>
				<div>
					<v-btn width="200" @click="openApproval('new')">New</v-btn>
				</div>
				<div class="mt-2">
					<v-btn width="200" disabled @click="openApproval('com')">Complete</v-btn>
				</div>
				<br>
				<v-btn width="200" @click="writeApproval()">Write</v-btn>
			</div>
		</v-card>
		<router-view ref="content" style="vertical-align: top" />
	</v-card>
</template>

<script>
export default {
	name: 'approvalPage',
	data() {
		return {
			approvalType: 'new'
		}
	},
	methods: {
		openApproval(box) {
			if(this.$route.path != '/approval') this.$router.push('/approval')
			if(box == this.approvalType) return
			this.approvalType = box
			//const url = this.approvalType == 'new' ? 'getNewApproval' : 'getCompleteApproval'
			const url = 'getNewApproval'
			this.$axios.get(this.server + url + '?sid=' + this.$store.state.common.sid).then(res => {
				this.$refs.content.approvalList = res.data
			}).catch(err => {
				console.log(err)
			})
		},
		writeApproval() {
			if(this.$route.path != '/approval/write') this.$router.push('/approval/write')
		}
	}
}
</script>

<style>

</style>