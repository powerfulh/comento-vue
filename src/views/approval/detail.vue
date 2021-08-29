<template>
	<v-card width="800" min-height="160" class="pa-2 text-center d-inline-block">
		<h1>{{ approval.form }}</h1>
		<div class="float-right">{{ approval.date }}</div>
		<div class="text-left">
			<div class="">Writer : {{ approval.writer }}</div>
			<div class="">Target : {{ approval.target }}</div>
		</div>
		<hr>
		<div class="pa-3">
			<div v-html="approval.body">

			</div>
			<hr>
			<v-btn color="success" :disabled="!approval" @click="onClickApprove">approve</v-btn>
		</div>
	</v-card>	
</template>

<script>
export default {
	props: ['approval'],
	methods: {
		onClickApprove() {
			
		}
	}
}
</script>

<style>

</style>