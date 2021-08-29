<template>
	<v-card class="pa-10 text-center">
		<v-card width="400" color="blue" class="pa-2 d-inline-block">
			<h1>Login page</h1>
			<div>
				<input v-model="inputid" type="text" class="white rounded px-1" placeholder="ID">
			</div>
			<div class="mt-2">
				<input v-model="inputpw" type="password" class="white rounded px-1" placeholder="PW" @keyup.enter="loginProc">
			</div>
			<v-btn color="success" class="mt-2" @click="loginProc">Login</v-btn>
		</v-card>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			inputid: '',
			inputpw: ''
		}
	},
	methods: {
		loginProc() {
			if(!this.inputid) return
			const params = {
				id: this.inputid,
				pw: this.inputpw
			}
			this.$axios.get(this.server + 'loginProc', {params: params}).then(res => {
				if(res.data == 1) {
					this.$store.state.common.sid = this.inputid
					this.$router.push('/main')
				} else alert('wrong')
				console.log(res.data)
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

<style>

</style>