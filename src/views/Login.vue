<template>
  <div class="login">
    <h1>Tutor Login</h1>
    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group">
      <label>Email:</label>
      <input type="email" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <button class="btn btn-primary" v-on:click="submit()">Submit</button>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: () => {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          console.log(response);
          localStorage.setItem("jwt", response.data.jwt);
          // localStorage.setItem("admin", response.data.member.admin);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>