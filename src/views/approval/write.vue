<template>
	<v-card width="800" min-height="160" class="pa-2 text-center d-inline-block">
		<h1>{{ selectedForm.formName }}</h1>
		<div class="float-right">
			<select v-model="selectedForm">
				<option :value="{}" disabled>Select form</option>
				<option v-for="(item, i) in formList" :key="i" :value="item">{{ item.formName }}</option>
			</select>
		</div>
		<div class="text-left">
			<div class="">Writer : {{ $store.state.common.sid }}</div>
			<div class="">Target : <input v-model="inputTarget" type="text" required></div>
		</div>
		<hr>
		<div class="pa-3">
			<div ref="formDiv" v-html="selectedForm.formHtml">
				formDiv
			</div>
			<v-btn color="success" :disabled="!selectedForm.formHtml" @click="onClickSubmit">submit</v-btn>
		</div>
	</v-card>	
</template>

<script>
export default {
	data() {
		return {
			selectedForm: {},
			inputTarget: '',
			formList: []
		}
	},
	created() {
		this.$axios.get(this.server + 'getApprovalFormList').then(res => {
			this.formList = res.data
		}).catch(err => {
			console.log(err)
		})
	},
	methods: {
		onClickSubmit() {
			if(!this.inputTarget.trim()) {
				alert('target require')
				return
			}
			// 각 타입에 대한 양식정보를 디비에 전송하려면?

			alert('submit complete')
			this.$router.push('/approval')
		}
	}
}
</script>

<style>
select, input, textarea {
	border: 2px dashed gray;
}
</style>