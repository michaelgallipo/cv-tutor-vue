<template>
	<div class="tutors">
		<h1>See Our Tutors</h1>
		<div v-for="tutor in tutors">
			<h4>{{ tutor.name }}</h4>
			<p>school: {{ tutor.school }}</p>
			<p>location: {{ tutor.state }}</p>
			<p style="font-size:18px; margin-top:7px">About Me</p>
			<p>{{ tutor.about }}</p>
			<p>Grade Levels: {{ tutor.grade_min }} - {{ tutor.grade_max }}</p>
			<p>Rate: {{ tutor.rate }}</p>
			<p>Contact: {{ tutor.email }}</p>
			<p v-if="tutor.phone">Phone: {{ tutor.phone }}</p>
		</div>
	</div>
</template>

<style scoped>
p {
	margin-block-start: 1px;
	margin-block-end: 1px;
}
</style>

<script>
var axios = require("axios");
export default {
	data: function() {
		return {
			tutors: []
		};
	},

	created: function() {
		axios.get("api/tutors").then(response => {
			this.tutors = response.data;
			console.log(this.tutors);
		});
	}
};
</script>
