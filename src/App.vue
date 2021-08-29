<template>
  <v-app>
    <v-card color="primary">
		<header class="pa-3">
			<v-card class="pa-2 d-inline-block float-left" dark @click="clickMainLogo">
				Portal
			</v-card>
			<div class="d-flex justify-space-around">
				<v-btn :disabled="!$store.state.common.sid" min-width="120" @click="$router.push('/mail')">Mail</v-btn>
				<v-btn :disabled="!$store.state.common.sid" min-width="120" @click="$router.push('/approval')">Approval</v-btn>
			</div>
		</header>
	</v-card>

    <v-main class="text-center pa-4">
		<router-view id="router-view"/>
    </v-main>

	<pulse-loader id="pulse-loader" :loading="loading">call</pulse-loader>
  </v-app>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
	components: {
		PulseLoader
	},
	data() {
		return {
			loading: false
		}
	},
	beforeCreate() {
		this.$axios.interceptors.request.use(
			(config) => {
				this.loading = true
				return config
			},
			function (error) {
				return Promise.reject(error)
			}
		)
		this.$axios.interceptors.response.use(
			(response) => {
				this.loading = false
				return response
			},
			(error) => {
				this.loading = false
				return Promise.reject(error)
			}
		);
	},
	methods: {
		clickMainLogo() {
			if(this.$route.path == '/main') return
			this.$router.push('/main')
		}
	}
}
</script>

<style lang="scss" scoped>
#pulse-loader {
	position: fixed;
	left: 50%;
	top: 50%;
}
</style>

<style lang="scss">
hr {
	margin: 12px 0;
}
</style>