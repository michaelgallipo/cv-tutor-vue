<template>
	<div class="tutors">
		<div class="title">
			<h1>See Our Tutors</h1>
		</div>
		<div v-for="tutor in tutors" class="col-lg-9">
			<div class="card border-2" style="margin-bottom: 20px">
				<div class="card-body">
					<h4>{{ tutor.name }}</h4>
					<p>
						Location: {{ tutor.state }} &emsp; &emsp; School: {{ tutor.school }}
					</p>
					<p style="font-size:18px; margin-top:7px; font-style: italic">
						About Me
					</p>
					<p>{{ tutor.about }}</p>
					<p>Grade Levels: {{ tutor.grade_min }} - {{ tutor.grade_max }}</p>
					<p>Rate: {{ tutor.rate }}</p>
					<p>Contact: {{ tutor.email }}</p>
					<p v-if="tutor.phone">Phone: {{ tutor.phone }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
	padding-bottom: 20px;
}
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
