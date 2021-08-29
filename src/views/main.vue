<template>
	<v-card class="pa-10 text-center">
		<v-card width="400" color="red" class="pa-2 d-inline-block mr-3">
			<h1>My info</h1>
			<div>
				ID : {{ $store.state.common.sid }}
				<div>
					<v-btn color="grey" @click="logout">Logout</v-btn>
				</div>
			</div>
		</v-card>
		<v-card width="400" height="200" color="blue" class="pa-2 d-inline-block mr-3 vertical-top">
			<h1>Recent mails</h1>
			<div v-for="(item, i) in mailList" :key="i" class="mb-1">
				<v-btn color="" block @click="openMail(item)">{{ item.title }}</v-btn>
			</div>
		</v-card>
		<v-card width="400" height="200" color="green" class="pa-2 d-inline-block mr-3 vertical-top">
			<h1>Recent approval</h1>
			<div v-for="(item, i) in approvalList" :key="i" class="mb-1">
				<v-btn color="" block @click="openApproval(item)">{{ item.form }}</v-btn>
			</div>
		</v-card>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			mailList: [],
			approvalList: []
		}
	},
	created() {
		this.$axios.get(this.server + 'getMainMail?sid=' + this.$store.state.common.sid).then(res => {
			this.mailList = res.data
		}).catch(err => {
			console.log(err)
		})
		this.$axios.get(this.server + 'getMainApproval?sid=' + this.$store.state.common.sid).then(res => {
			this.approvalList = res.data
		}).catch(err => {
			console.log(err)
		})
	},
	methods: {
		logout() {
			this.$store.state.common.sid = ''
			this.$router.push('/')
		},
		openMail(mail) {
			this.$router.push({name: 'mail detail', params: {mail: mail}})
		},
		openApproval(approval) {
			this.$router.push({name: 'approval detail', params: {approval: approval}})
		}
	}
}
</script>

<style>
.vertical-top {
	vertical-align: top;
}
</style>