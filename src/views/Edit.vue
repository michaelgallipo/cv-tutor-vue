<template>
  <div class="edit">
    <div class="container">
      <h1>Edit Your Profile</h1>
      <ul>
        <li class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <tutorForm :tutorData="tutorData" />
      <button class="btn btn-primary" v-on:click="submit()">Save Changes</button>
      <button
        id="deleteButton"
        class="btn btn-danger"
        data-toggle="modal"
        data-target="#deleteModal"
      >Delete Account</button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDeleteTitle">Delete Account?</h5>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete your account? This action cannont be undone.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" v-on:click="deleteAccount()">Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tutorForm from "@/components/TutorForm.vue";
const axios = require("axios");

export default {
  components: {
    tutorForm
  },
  data: function() {
    return {
      tutorData: {},
      errors: []
    };
  },
  created: function() {
    axios
      .get("api/tutors/1")
      .then(response => {
        this.tutorData = response.data;
        console.log(this.tutorData.phone_visible);
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
  },
  methods: {
    submit: function() {
      console.log(this.tutorData.social_studies);
      const params = { ...this.tutorData };
      console.log(params.social_studies);
      if (this.validate_entry(params)) {
        axios
          .patch("api/tutors/" + this.tutorData.id, params)
          .then(response => {
            if (response.status === 200 || 201) {
              this.tutorData = response.data;
              window.alert("Changes Saved");
            }
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            console.log(this.errors, error);
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
        this.errors.push("Grade Maximum can not be less than Grade Minimum");
      }
      if (params.state.length > 2) {
        this.errors.push("State field should use two letter abbreviation");
      }
      if (params.password !== params.password_confirmation) {
        this.errors.push("Password and Password Confirmation should match");
      }
      if (params.password !== "" && params.password.length < 8) {
        this.errors.push("Password should be at least 8 characters");
      }
      return this.errors.length > 0 ? false : true;
    },
    deleteAccount: function() {
      axios
        .delete("api/tutors/" + this.tutorData.id)
        .then(response => {
          if (response.status === 200) {
            axios.defaults.headers.common["Authorization"] = undefined;
            localStorage.removeItem("jwt");
            this.$router.push("/");
          }
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 20px;
}
#deleteButton {
  margin-left: 30px;
}
</style>