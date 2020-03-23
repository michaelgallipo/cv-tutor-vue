<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link>&ensp;|&ensp;
        <router-link to="/about">About</router-link>&ensp;|&ensp;
        <router-link to="/tutors">Find a Tutor</router-link>
        <router-link v-if="!isLoggedIn()" to="/create">&ensp;|&ensp;Become a Tutor</router-link>
        <router-link v-if="!isLoggedIn()" to="/login">&ensp;|&ensp;Tutor Login</router-link>
        <router-link v-if="isLoggedIn()" to="/edit">&ensp;|&ensp;Edit Profile</router-link>
        <router-link v-if="isLoggedIn()" to="/logout">&ensp;|&ensp;Logout</router-link>
      </div>
      <router-view />
      <footer>
        <!-- <div> -->
        <img style="height: 60px; width: 60px" alt="Hippo Web logo" src="./assets/hippo.jpg" />
        <p class="hippo">Created by Hippo Web Development</p>
        <!-- </div> -->
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4169e1;
}

footer {
  display: inline-block;
  padding-top: 20px;
}

footer p {
  /* display: inline-block; */
  display: unset;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-bottom: 20px;
}

.hippo {
  margin-left: 20em;
}
</style>

<script>
// import Login from "./components/Login.vue";
const axios = require("axios");
export default {
  //   components: {
  //     Login
  //   },
  //   data() {
  //     return {
  //       isLoginVisible: true
  //     };
  //   },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
    //     showLogin() {
    //       this.isLoginVisible = true;
    //       console.log("clicked", this.isLoginVisible);
    //     },
    //     closeLogin() {
    //       this.isLoginVisible = false;
    //     }
  }
};
</script>
