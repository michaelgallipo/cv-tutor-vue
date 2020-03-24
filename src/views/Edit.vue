<template>
  <div class="edit">
    <div class="container">
      <h1>Edit Your Profile</h1>
      <ul>
        <li class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="tutorData.name" />
      </div>
      <div class="form-group">
        <label>Street:</label>
        <input type="text" class="form-control" v-model="tutorData.street" />
      </div>
      <div class="form-group row">
        <label class="col-sm-1 col-form-label">City:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="tutorData.city" />
        </div>
        <label class="col-sm-1 col-form-label">State:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="tutorData.state" />
        </div>
        <label class="col-sm-2 col-form-label">Zip Code:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" v-model="tutorData.zip" />
        </div>
      </div>
      <div class="form-group">
        <label>School:</label>
        <input type="text" class="form-control" v-model="tutorData.school" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="tutorData.email" />
      </div>
      <div class="form-group row">
        <div class="form-group col-sm-6">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Only enter if you want to change"
            v-model="tutorData.password"
          />
        </div>
        <div class="form-group col-sm-6">
          <label>Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Repeat Password"
            v-model="tutorData.password_confirmation"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1 col-form-label">Phone:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="tutorData.phone" />
        </div>
        <label class="col-sm-2 col-form-label">Phone Visible?:</label>
        <div class="col-sm-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="true"
              v-model="tutorData.phone_visible"
            />
            <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="false"
              v-model="tutorData.phone_visible"
            />
            <label class="form-check-label" for="inlineRadio2">No</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>About Me:</label>
        <textarea type="textarea" class="form-control" rows="5" v-model="tutorData.about" />
      </div>
      <div class="form-group">
        <label>Subjects</label>
        <br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox1"
            value="true"
            v-model="tutorData.math"
          />
          <label class="form-check-label" for="checkbox1">Math &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox2"
            value="true"
            v-model="tutorData.reading"
          />
          <label class="form-check-label" for="checkbox2">Reading &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox3"
            value="true"
            v-model="tutorData.spelling"
          />
          <label class="form-check-label" for="checkbox2">Spelling &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox4"
            value="true"
            v-model="tutorData.special_needs"
          />
          <label class="form-check-label" for="checkbox4">Special Needs &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox5"
            value="true"
            v-model="tutorData.science"
          />
          <label class="form-check-label" for="checkbox5">Science &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox6"
            value="true"
            v-model="tutorData.social_studies"
          />
          <label class="form-check-label" for="checkbox4">Social Studies &emsp;</label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Min Grade:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="tutorData.grade_min" />
        </div>
        <label class="col-sm-2 col-form-label">Max Grade:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="tutorData.grade_max" />
        </div>
        <label class="col-sm-1 col-form-label">Rate:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" v-model="tutorData.rate" />
        </div>
      </div>
      <div class="form-row">
        <label class="col-form-label">Accept New Students: &emsp;</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="true"
            v-model="tutorData.accept_new"
          />
          <label class="form-check-label" for="inlineRadio1">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="false"
            v-model="tutorData.accept_new"
          />
          <label class="form-check-label" for="inlineRadio2">No</label>
        </div>
      </div>
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
const axios = require("axios");

export default {
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
      })
      .catch(error => {
        this.errors = error.response.data.errors;
      });
  },
  methods: {
    submit: function() {
      const params = { ...this.tutorData };
      console.log(params);
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
        });
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