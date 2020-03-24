<template>
  <div class="about">
    <div id="intro">
      <h1>What is CV Tutor Web?</h1>
      <p>
        In this time of upheaval, children have had their education routines
        disrupted and parents have had to take on larger role in their
        child(ren)'s education. At the same time, college students have returned
        home with their activities eliminated and, in most cases, unable to
        perform jobs they were doing previously. CV Tutor Web was created to be
        a platform to for parents to find students who are willing to provide
        online tutoring services.
      </p>
    </div>
    <div id="parents">
      <h2>Information For Parents</h2>
      <h5>About the Tutors</h5>
      <p>
        The tutors on this platform are primarily college students and recent graduates. While we believe
        that the information they have provided is accurate, they have not been formally vetted nor have background
        checks been performed. As always, parents should trust their judgement and use the contact information provided
        to ensure their own comfort level.
      </p>
      <h5>Technology Platform</h5>
      <p>
        This site is intended to be a resource for parents in finding a tutor. There is no built in video software.
        Parents should coordinate with the tutor(s) to select a platform that both are comfortable with. Depending on
        the tutoring needs there are many options including Zoom, Skype, FaceTime, etc.
      </p>
      <h5>Fees</h5>
      <p>
        CV Tutor Web charges no fees to either the tutors or parents for this service. Some of the tutors may elect
        to charge for their services. This site does not include built-in payment options and the specific payment
        option will be up to the respective parties to decide. Again, there are planty of options to choose from
        including PayPal, the Cash App, Facebook Messenger, Venmo, etc.
      </p>
    </div>
    <div id="tutors">
      <h2>Information for Tutors</h2>
      <h5>Your Profile</h5>
      <p>
        Your profile is the "face" you show to parents looking for tutoring help. The platform allows you to customize
        a number of different attributes.
      </p>
      <div id="profileDetails">
        <p>
          <span class="subhead">Grade Range</span> - You can set mininmum and maxium grades you are willing to worth
          with a minimum of first grade and maximum of eigth grade.
        </p>
        <p>
          <span class="subhead">Communication</span> - You are required to display an email address to allow parents
          to contact you (and it is also your user ID for logging in). You can choose whether or not to also display
          your phone number.
        </p>
        <p>
          <span class="subhead">Subjects</span> - At present the site utilizes six subjects/skills - math, reading,
          science, social studies, special needs, and spelling. You can select as many as you feel comfortable with.
          Parents have the option of filtering the tutor list by subject to help find the best tutor for their
          circumstances.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  font-size: 18px;
}

/* #intro {
  padding: 10px;
} */

#parents {
  margin-top: 25px;
  background-color: #fcdfd7;
  padding: 10px;
  color: #000;
}

.subhead {
  font-style: italic;
  font-weight: 700;
}

#profileDetails {
  padding-left: 15px;
}

#tutors {
  margin-top: 25px;
  background-color: lightgreen;
  padding: 10px;
}
</style>
