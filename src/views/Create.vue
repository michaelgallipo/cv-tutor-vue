<template>
  <div class="create">
    <div class="container">
      <h1>Create an Account to Become a Tutor</h1>
      <ul>
        <li class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Street:</label>
        <input type="text" class="form-control" v-model="street" />
      </div>
      <div class="form-group row">
        <label class="col-sm-1 col-form-label">City:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="city" />
        </div>
        <label class="col-sm-1 col-form-label">State:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="state" />
        </div>
        <label class="col-sm-2 col-form-label">Zip Code:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" v-model="zip" />
        </div>
      </div>
      <div class="form-group">
        <label>School:</label>
        <input type="text" class="form-control" v-model="school" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="email" />
      </div>
      <div class="form-group row">
        <div class="form-group col-sm-6">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" v-model="password" />
        </div>
        <div class="form-group col-sm-6">
          <label>Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Repeat Password"
            v-model="password_confirmation"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-1 col-form-label">Phone:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="phone" />
        </div>
        <label class="col-sm-2 col-form-label">Phone Visible?:</label>
        <div class="col-sm-3">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="phoneVisibleOptions"
              id="phoneVis1"
              value="true"
              v-model="phone_visible"
            />
            <label class="form-check-label" for="phoneVis1">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="phoneVisibleOptions"
              id="phoneVis2"
              value="false"
              v-model="phone_visible"
            />
            <label class="form-check-label" for="phoneVis2">No</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>About Me:</label>
        <textarea type="textarea" class="form-control" rows="5" v-model="about" />
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
            v-model="math"
          />
          <label class="form-check-label" for="checkbox1">Math &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox2"
            value="true"
            v-model="reading"
          />
          <label class="form-check-label" for="checkbox2">Reading &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox3"
            value="true"
            v-model="spelling"
          />
          <label class="form-check-label" for="checkbox2">Spelling &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox4"
            value="true"
            v-model="special_needs"
          />
          <label class="form-check-label" for="checkbox4">Special Needs &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox5"
            value="true"
            v-model="science"
          />
          <label class="form-check-label" for="checkbox5">Science &emsp;</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox6"
            value="true"
            v-model="social_studies"
          />
          <label class="form-check-label" for="checkbox4">Social Studies &emsp;</label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Min Grade:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="grade_min" />
        </div>
        <label class="col-sm-2 col-form-label">Max Grade:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" v-model="grade_max" />
        </div>
        <label class="col-sm-1 col-form-label">Rate:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" v-model="rate" />
        </div>
      </div>
      <div class="form-row">
        <label class="col-form-label">Accept New Students: &emsp;</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="acceptNew1"
            value="true"
            v-model="accept_new"
          />
          <label class="form-check-label" for="acceptNew1">Yes</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="acceptNew1"
            value="false"
            v-model="accept_new"
          />
          <label class="form-check-label" for="acceptNew2">No</label>
        </div>
      </div>
      <button class="btn btn-primary" v-on:click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
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
      social_studies: false,
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        street: this.street,
        city: this.city,
        state: this.state,
        zip: this.zip,
        school: this.school,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        phone: this.phone,
        phone_visible: this.phone_visible,
        about: this.about,
        grade_min: this.grade_min,
        grade_max: this.grade_max,
        rate: this.rate,
        accept_new: this.accept_new,
        math: this.math,
        reading: this.reading,
        spelling: this.spelling,
        special_needs: this.special_needs,
        science: this.science,
        social_studies: this.social_studies
      };
      // console.log(params);
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
            // this.errors = error.response.data.errors;
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
