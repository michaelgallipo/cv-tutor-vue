<template>
  <div class="tutors">
    <div class="title">
      <h1>See Our Tutors</h1>
    </div>
    <div v-for="tutor in tutors" :key="tutor.id" class="col-lg-12">
      <div class="card border-2" style="margin-bottom: 20px">
        <div class="card-body">
          <h4 style="font-weight:bold">{{ tutor.name }}</h4>
          <p>Location: {{ tutor.state }} &emsp; &emsp; School: {{ tutor.school }}</p>
          <p style="font-size:18px; margin-top:7px; font-style: italic">About Me</p>
          <p>{{ tutor.about }}</p>
          <label id="subjects">Subjects</label>
          <ul class="list-group list-group-horizontal">
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
          <p v-if="tutor.accept_new">Accepting New Students</p>
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
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      tutors: []
    };
  },

  created: function() {
    axios.get("api/tutors").then(response => {
      this.tutors = response.data;
      console.log(this.tutors);
    });
  }
};
</script>
