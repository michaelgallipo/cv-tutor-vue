<template>
  <div class="tutors">
    <div class="title">
      <h1>See Our Tutors</h1>
    </div>
    <div id="filters" class="row">
      <div id="subFilter">
        Subject Filter: &ensp;
        <select
          v-model="subject_filter"
          class="selectpicker"
          data-style="btn-info"
        >
          <option class="dropdown-item" value>All</option>
          <option class="dropdown-item" value="math">Math</option>
          <option class="dropdown-item" value="reading">Reading</option>
          <option class="dropdown-item" value="science">Science</option>
          <option class="dropdown-item" value="social_studies">Social Studies</option>
          <option class="dropdown-item" value="special_needs">Special_Needs</option>
          <option class="dropdown-item" value="spelling">Spelling</option>
        </select>
      </div>
      <div id="gradeFilter">
        Grade: &ensp;
        <select v-model="grade_filter" class="selectpicker" data-style="btn-info">
          <option class="dropdown-item" value>All</option>
          <option class="dropdown-item" value="1">First</option>
          <option class="dropdown-item" value="2">Second</option>
          <option class="dropdown-item" value="3">Third</option>
          <option class="dropdown-item" value="4">Fourth</option>
          <option class="dropdown-item" value="5">Fifth</option>
          <option class="dropdown-item" value="6">Sixth</option>
          <option class="dropdown-item" value="7">Seventh</option>
          <option class="dropdown-item" value="8">Eight</option>
        </select>
      </div>
      <div id="stateFilter">
        State: &ensp;
        <select v-model="state_filter" class="selectpicker" data-style="btn-info">
          <option class="dropdown-item" value>All</option>
          <option
            v-for="(state, index) in states"
            :key="index"
            class="dropdown-item"
            v-bind:value="state"
          >{{state}}</option>
        </select>
      </div>
    </div>
    <!-- <div>
      <button
        class="btn btn-info"
        v-if="!show_all"
        v-on:click="toggleShowAll()"
      >Include those not accepting new students</button>
      <button
        class="btn-info"
        v-if="show_all"
        v-on:click="toggleShowAll()"
      >Hide those not accepting new students</button>
    </div>-->
    <div class="form-check" id="showAll">
      <input class="form-check-input" type="checkbox" v-on:click="toggleShowAll()" />
      <label class="form-check-label">Include those not accepting new students in listings</label>
    </div>
    <div v-if="!data_loaded" class="d-flex align-items-center">
      <strong>Data Loading...</strong>
      <div class="spinner-grow ml-auto" role="status" aria-hidden="true"></div>
    </div>
    <div v-for="tutor in tutors" :key="tutor.id" class="col-lg-12">
      <div
        v-if="subject_filter == 'math' && tutor.math == true 
			 || subject_filter == 'reading' && tutor.reading == true 
			 || subject_filter == 'science' && tutor.science == true 
			 || subject_filter == 'social_studies' && tutor.social_studies == true 
			 || subject_filter == 'special_needs' && tutor.special_needs == true 
			 || subject_filter == 'spelling' && tutor.spelling == true 
			 || subject_filter == ''"
      >
        <div
          v-if="grade_filter >= tutor.grade_min && grade_filter <= tutor.grade_max || grade_filter == ''"
        >
          <div v-if="state_filter === tutor.state || state_filter == ''">
            <div v-if="tutor.accept_new === true || show_all === true">
              <div class="card border-2" style="margin-bottom: 20px">
                <div class="card-body">
                  <h4 style="font-weight:bold">{{ tutor.name }}</h4>
                  <p>Location: {{ tutor.state }} &emsp; &emsp; School: {{ tutor.school }}</p>
                  <p style="font-size:18px; margin-top:7px; font-style: italic">About Me</p>
                  <p>{{ tutor.about }}</p>
                  <label id="subjects">Subjects</label>
                  <ul class="list-group list-group-horizontal-sm">
                    <div v-for="(subject, index) in tutor.subjects" :key="index">
                      <li class="list-group-item border-0" id="subject">{{subject}}</li>
                    </div>
                  </ul>
                  <p>Grade Levels: {{ tutor.grade_min }} - {{ tutor.grade_max }}</p>
                  <p>Rate: {{ tutor.rate }}</p>
                  <p>
                    Contact:
                    <a v-bind:href="'mailto:' + tutor.email">{{ tutor.email }}</a>
                  </p>
                  <p v-if="tutor.phone_visible">Phone: {{ tutor.phone }}</p>
                  <!-- <p v-if="tutor.accept_new">Accepting New Students</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  padding-bottom: 20px;
}
p {
  margin-block-start: 1px;
  margin-block-end: 1px;
}

#subjects {
  font-weight: bold;
  padding-top: 5px;
}

#subject {
  padding: 0rem 1.25rem 0.4rem 0.4rem;
}

.selectpicker {
  background-color: ghostwhite;
  margin-bottom: 20px;
  height: 40px;
  width: 200px;
}

#filters {
  margin-left: 18px;
}

#showAll {
  margin-left: 18px;
  margin-bottom: 0.75em;
}

#gradeFilter {
  margin-left: 25px;
}

#stateFilter {
  margin-left: 20px;
}
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      tutors: [],
      subject_filter: "",
      grade_filter: "",
      state_filter: "",
      data_loaded: false,
      show_all: false,
      states: []
    };
  },
  created: function() {
    axios.get("api/tutors").then(response => {
      this.data_loaded = true;
      this.tutors = response.data;
      console.log(this.tutors);
      let all_states = this.tutors.map(tutor => tutor.state);
      this.states = Array.from(new Set(all_states)).sort();
      console.log(this.states);
    });
  },
  methods: {
    toggleShowAll: function() {
      this.show_all = !this.show_all;
      console.log(this.show_all);
    }
  }
};
</script>
