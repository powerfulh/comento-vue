<template>
	<v-card width="800" min-height="160" class="pa-2 text-center d-inline-block">
		<h1>{{ mail.title }}</h1>
		<div class="float-right">{{ mail.date }}</div>
		<div class="text-left">
			<div class="">Writer : {{ mail.writer }}</div>
			<div class="">Target : {{ mail.target }}</div>
		</div>
		<hr>
		<div class="pa-3">
			{{ mail.body }}
		</div>
	</v-card>	
</template>

<script>
export default {
	props: ['mail']
}
</script>