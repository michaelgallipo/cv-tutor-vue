<template>
  <div class="contact">
    <div class="container">
      <div id="logo" class="col-sm-3 offset-sm-5">
        <img
          id="logoImage"
          alt="CV Tutor Web logo"
          src="../assets/cv-tutor-web.png"
          style="width: 150px"
        />
      </div>
      <div id="title">CV Tutor Web</div>
      <div id="subtitle">Contact and Support</div>
      <div id="mainText">
        <div style="padding-bottom: 0.5em">
          If you have questions, comments or suggestions on how to make this site better (whether you're
          a parent or a tutor), we want to hear from you.
        </div>
        <div>
          You can contact us at
          <a
            href="mailto:cvtutor@hippowebdevelopment.com"
          >CVTutor@HippoWebDevelopment.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  font-size: 24px;
  text-align: center;
  font-weight: 900;
  color: #fcf8ff;
  text-shadow: 3px 3px black;
  letter-spacing: 3px;
  background-color: #feeaa7;
  width: 9em;
  margin-left: 40%;
  margin-top: 0.25em;
}
#subtitle {
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
}
#mainText {
  font-size: 20px;
  margin-bottom: 2em;
}

@media screen and (max-width: 450px) {
  #title {
    margin-left: 15vw;
  }

  #logoImage {
    margin-left: 20vw;
  }
}
</style>