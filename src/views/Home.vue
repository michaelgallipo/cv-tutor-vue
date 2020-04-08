<template>
  <div class="home">
    <!-- <div class="container"> -->
    <!-- <HelloWorld msg="Welcome to CV Tutor Web" /> -->
    <h1>Welcome to CV Tutor Web</h1>
    <main id="intro">
      <p>
        In this time of upheaval, children have had their education routines disrupted and parents have had
        to take on a larger role in their child(ren)'s education. At the same time, college students have returned
        home with their activities eliminated and, in most cases, unable to perform jobs they were doing previously.
        CV Tutor Web was created to be a platform for parents to find students who are willing to provide
        online tutoring services. Tutors can be found for the following areas - math, reading, science, social
        studies, special needs, and spelling.
      </p>
    </main>
    <img alt="Vue logo" src="@/assets/splash_image.jpg" style="width: 100%" />
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home"
  // components: {
  // 	HelloWorld
  // }
};
</script>
<style scoped>
.home {
  text-align: center;
}
#intro {
  text-align: left;
  font-size: 18px;
}
</style>
