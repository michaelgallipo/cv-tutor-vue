<template>
	<div class="create">
		<div class="container">
			<h1>Create an Account to Become a Tutor</h1>
			<ul>
				<li class="text-danger" v-for="error in errors">{{ error }}</li>
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
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="true"
							v-model="phone_visible"
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
							v-model="phone_visible"
						/>
						<label class="form-check-label" for="inlineRadio2">No</label>
					</div>
				</div>
			</div>
			<div class="form-group">
				<label>About Me:</label>
				<textarea
					type="textarea"
					class="form-control"
					rows="5"
					v-model="about"
				/>
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
						id="inlineRadio1"
						value="true"
						v-model="accept_new"
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
						v-model="accept_new"
					/>
					<label class="form-check-label" for="inlineRadio2">No</label>
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
      phone: "",
      phone_visible: "",
      about: "",
      grade_min: "",
      grade_max: "",
      rate: "",
      accept_new: "",
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
        phone: this.phone,
        phone_visible: this.phone_visible,
        about: this.about,
        grade_min: this.grade_min,
        grade_max: this.grade_max,
        rate: this.rate,
        accept_new: this.accept_new
      };
      console.log(params);
      axios
				.post("/api/tutors", params)
				.then(response => {
					if (response.status === 200) {
            window.alert("Account successfully created");
            router.push('/');
					}
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
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
