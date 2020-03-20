<template>
	<div class="home">
		<!-- <div class="container"> -->
		<!-- <HelloWorld msg="Welcome to CV Tutor Web" /> -->
		<h1>Welcome to CV Tutor Web</h1>
		<img alt="Vue logo" src="../assets/splash_image.jpg" style="width: 100%" />
		<!-- </div> -->
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "home",
	components: {
		HelloWorld
	}
};
</script>
<style scoped>
.home {
	text-align: center;
}
</style>
