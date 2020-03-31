<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">HOME</router-link>&ensp;|&ensp;
        <router-link to="/about">ABOUT</router-link>&ensp;|&ensp;
        <router-link to="/tutors">FIND A TUTOR</router-link>
        <span v-if="!isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="!isLoggedIn()" to="/create">BECOME A TUTOR</router-link>
        <span v-if="!isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="!isLoggedIn()" to="/login">TUTOR LOGIN</router-link>
        <span v-if="isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="isLoggedIn()" to="/edit">EDIT PROFILE</router-link>
        <span v-if="isLoggedIn()">&ensp;|&ensp;</span>
        <router-link v-if="isLoggedIn()" to="/logout">LOGOUT</router-link>
        <span>&ensp;|&ensp;</span>
        <router-link to="/contact">CONTACT/SUPPORT</router-link>
      </div>
      <router-view />
      <footer>
        <div class="row">
          <div class="col-sm-2">
            <img style="width: 60px" alt="Hippo Web logo" src="./assets/hippo.jpg" />
          </div>
          <div class="col-sm-5 offset-sm-2">
            <p class="hippo">
              Created by
              <a href v-on:click="openLink()" style="color: navy">Hippo Web Development</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Roboto, "Avenir", Helvetica, Arial, sans-serif;
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
  width: 100%;
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
    },
    openLink: function() {
      window.open("https://www.hippowebdevelopment.com");
    }
  }
};
</script>

