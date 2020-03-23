<template>
  <h2>Logout</h2>
</template>

<script>
const axios = require("axios");
export default {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    this.$router.push("/");
  }
};
</script>