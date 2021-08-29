<template>
	<v-card width="800" min-height="160" class="pa-2 text-center d-inline-block">
		<div v-for="(item, i) in mailList" :key="i" class="mb-1">
			<v-btn color="cyan" block @click="openMail(item)">
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
			mailList: null
		}
	},
	created() {
		this.$axios.get(this.server + 'getMailInbox?sid=' + this.$store.state.common.sid).then(res => {
			if(this.mailList == null) this.mailList = res.data
		}).catch(err => {
			console.log(err)
		})
	},
	methods: {
		openMail(mail) {
			this.$router.push({name: 'mail detail', params: {mail: mail}})
		}
	}
}
</script>

<style>
.no-text-transform {
	text-transform: none;
}
</style>