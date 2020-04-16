<template>
  <div class="TutorForm">
    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" v-model="tutorData.name" maxlength="40" />
    </div>
    <div class="form-group">
      <label>Street:</label>
      <input type="text" class="form-control" v-model="tutorData.street" maxlength="70" />
    </div>
    <div class="form-group row">
      <label class="col-sm-1 col-form-label">City:</label>
      <div class="col-sm-3">
        <input
          type="text"
          class="form-control"
          v-model="tutorData.city"
          maxlength="30"
          style="font-size: .9rem"
        />
      </div>
      <label class="col-sm-1 col-form-label">State:</label>
      <div class="col-sm-1">
        <input
          type="text"
          class="form-control"
          v-model="tutorData.state"
          maxlength="2"
          style="font-size: .9rem"
        />
      </div>
      <label class="col-sm-2 col-form-label">Zip Code:</label>
      <div class="col-sm-2">
        <input
          type="text"
          class="form-control"
          v-model="tutorData.zip"
          maxlength="10"
          style="font-size: .9rem"
        />
      </div>
    </div>
    <div class="form-group">
      <label>School:</label>
      <input type="text" class="form-control" v-model="tutorData.school" maxlength="50" />
    </div>
    <div class="form-group">
      <label>Email:</label>
      <input type="email" class="form-control" v-model="tutorData.email" maxlength="60" />
    </div>
    <div class="form-group row">
      <div class="form-group col-sm-6">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
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
        <input type="text" class="form-control" v-model="tutorData.phone" maxlength="15" />
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
            v-model="tutorData.phone_visible"
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
            v-model="tutorData.phone_visible"
          />
          <label class="form-check-label" for="phoneVis2">No</label>
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
        <label class="form-check-label" for="checkbox3">Spelling &emsp;</label>
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
        <label class="form-check-label" for="checkbox6">Social Studies &emsp;</label>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Min Grade:</label>
      <div class="col-sm-1">
        <input type="number" class="form-control" v-model="tutorData.grade_min" min="1" max="8" />
      </div>
      <label class="col-sm-2 col-form-label">Max Grade:</label>
      <div class="col-sm-1">
        <input type="number" class="form-control" v-model="tutorData.grade_max" min="1" max="8" />
      </div>
      <label class="col-sm-1 col-form-label">Rate:</label>
      <div class="col-sm-3">
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
          id="acceptNew1"
          value="true"
          v-model="tutorData.accept_new"
        />
        <label class="form-check-label" for="acceptNew1">Yes</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="acceptNew2"
          value="false"
          v-model="tutorData.accept_new"
        />
        <label class="form-check-label" for="acceptNew2">No</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tutorForm",
  props: {
    tutorData: Object
  }
};
</script>