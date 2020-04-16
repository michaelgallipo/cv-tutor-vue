<template>
  <div class="create">
    <div class="container">
      <h1>Create an Account to Become a Tutor</h1>
      <ul>
        <li class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <tutorForm v-bind:tutorData="tutorData" />
      <button class="btn btn-primary" v-on:click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
import tutorForm from "@/components/TutorForm.vue";
var axios = require("axios");
export default {
  components: {
    tutorForm
  },
  data: function() {
    return {
      tutorData: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        school: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        phone_visible: "",
        about: "",
        grade_min: "",
        grade_max: "",
        rate: "",
        accept_new: true,
        math: false,
        reading: false,
        spelling: false,
        special_needs: false,
        science: false,
        social_studies: false
      },
      errors: []
    };
  },
  methods: {
    submit: function() {
      console.log(this.tutorData);
      var params = { ...this.tutorData };
      if (this.validate_entry(params)) {
        axios
          .post("/api/tutors", params)
          .then(response => {
            if (response.status === 200) {
              window.alert("Account successfully created");
              this.$router.push("/");
            }
          })
          .catch(error => {
            this.errors = [
              "There was a problem saving your data. Please double check your responses"
            ];
            window.scrollTo(0, 0);
          });
      } else {
        window.scrollTo(0, 0);
      }
    },
    validate_entry: function(params) {
      this.errors = [];
      if (params.grade_min < 1 || params.grade_min > 8) {
        this.errors.push("Grade Minimum must be between 1-8");
      }
      if (params.grade_max < 1 || params.grade_max > 8) {
        this.errors.push("Grade Maximum must be between 1-8");
      }
      if (params.grade_max < params.grade_min) {
        this.errors.push("Grade Maximim can not be less than Grade Minimum");
      }
      if (params.state.length > 2) {
        this.errors.push("State field should use two letter abbreviation");
      }
      if (params.password !== params.password_confirmation) {
        this.errors.push("Password and Password Confirmation should match");
      }
      if (params.password.length < 8) {
        this.errors.push("Password should be at least 8 characters");
      }
      return this.errors.length > 0 ? false : true;
    }
  }
};
</script>

<style>
.create h1 {
  text-align: center;
  padding-bottom: 50px;
}
</style>
