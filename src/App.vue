<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link>&ensp;|&ensp;
        <router-link to="/about">About</router-link>&ensp;|&ensp;
        <router-link to="/tutors">Find a Tutor</router-link>
        <span v-if="!isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="!isLoggedIn()" to="/create">Become a Tutor</router-link>
        <span v-if="!isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="!isLoggedIn()" to="/login">Tutor Login</router-link>
        <span v-if="isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="isLoggedIn()" to="/edit">Edit Profile</router-link>
        <span v-if="isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      </div>
      <router-view />
      <footer>
        <div class="row" style="width: 100vw">
          <div class="col-sm-2">
            <img style="height: 60px; width: 60px" alt="Hippo Web logo" src="./assets/hippo.jpg" />
          </div>
          <div class="col-sm-5 offset-sm-2">
            <p class="hippo">Created by Hippo Web Development</p>
          </div>
        </div>
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
  font-size: 20px;
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

.hippo {
  padding-top: 1em;
}
</style>

<script>
const axios = require("axios");
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    }
  }
};
</script>
