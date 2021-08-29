<template>
	<v-card class="pa-10 text-center">
		<v-card color="pink" class="pa-2 d-inline-block mr-3">
			<h1>Mail</h1>
			<div>
				<div>
					<v-btn width="200" @click="openBox('in')">Inbox</v-btn>
				</div>
				<div class="mt-2">
					<v-btn width="200" @click="openBox('out')">outbox</v-btn>
				</div>
			</div>
		</v-card>
		<router-view ref="content" style="vertical-align: top" />
	</v-card>
</template>

<script>
export default {
	name: 'mailPage',
	data() {
		return {
			boxType: 'in'
		}
	},
	created() {
		
	},
	methods: {
		openBox(box) {
			if(this.$route.path != '/mail') this.$router.push('/mail')
			if(box == this.boxType) return
			this.boxType = box
			const url = this.boxType == 'in' ? 'getMailInbox' : 'getMailOutBox'
			this.$axios.get(this.server + url + '?sid=' + this.$store.state.common.sid).then(res => {
				this.$refs.content.mailList = res.data
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style>

</style>