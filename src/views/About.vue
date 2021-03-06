<template>
  <div class="about">
    <div class="container">
      <header>
        <div id="logo" class="col-sm-3 offset-sm-5">
          <img
            id="logoImage"
            alt="CV Tutor Web logo"
            src="../assets/cv-tutor-web.png"
            style="width: 150px"
          />
        </div>
        <div id="title">CV TUTOR WEB</div>
      </header>
      <main>
        <div id="subtitle">Matching Students with the Tutors They Need</div>
        <div class="row">
          <div id="parent" class="col-sm-6">
            <div id="aboutHeader">For Parents</div>
            <div class="col-sm-10 offset-sm-1">
              Parents can search all of our tutors or filter based on grade, subject or location.
              <br />
              <br />
              <br />
            </div>
            <div class="col-sm-8 offset-sm-2" style="padding-top: 1em">
              <button
                id="parentInfoButton"
                class="btn-outline-success btn-lg btn-block"
                data-toggle="modal"
                data-target="#parentInfoModal"
              >More Info For Parents</button>
            </div>
          </div>
          <div id="tutor" class="col-sm-6">
            <div id="aboutHeader">For Tutors</div>
            <div class="col-sm-10 offset-sm-1">
              Whether you want to tutor on a volunteer basis or to try to make up for a lost job, you can customize
              your profile to make it easy for parents and students to find you.
            </div>
            <div class="col-sm-8 offset-sm-2" style="padding-top: 1em">
              <button
                id="tutorInfoButton"
                class="btn-outline-info btn-lg btn-block"
                data-toggle="modal"
                data-target="#tutorInfoModal"
              >More Info For Tutors</button>
            </div>
          </div>
        </div>
      </main>
      <!-- Modal -->
      <div
        class="modal fade"
        id="parentInfoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="parentModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="parentModalLongTitle">Information for Parents</p>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <section class="modal-body" id="parentModal">
              <p class="sectionTitle">About the Tutors</p>
              <p>
                The tutors on this platform are primarily college students and recent graduates. While we believe
                that the information they have provided is accurate, they have not been formally vetted nor have background
                checks been performed. As always, parents should trust their judgement and use the contact information provided
                to ensure their own comfort level.
              </p>
              <p class="sectionTitle">Technology Platform</p>
              <p>
                This site is intended to be a resource for parents in finding a tutor. There is no built in video software.
                Parents should coordinate with the tutor(s) to select a platform that both are comfortable with. Depending on
                the tutoring needs there are many options including Zoom, Skype, FaceTime, etc.
              </p>
              <p class="sectionTitle">Fees</p>
              <p>
                CV Tutor Web charges no fees to either the tutors or parents for this service. Some of the tutors may elect
                to charge for their services. This site does not include built-in payment options and the specific payment
                option will be up to the respective parties to decide. Again, there are planty of options to choose from
                including PayPal, the Cash App, Facebook Messenger, Venmo, etc.
              </p>
            </section>
          </div>
        </div>
      </div>

      <!-- Modal 2-->
      <div
        class="modal fade"
        id="tutorInfoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="tutorModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="tutorModalLongTitle">Information for Tutors</p>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="tutorModal">
              <p class="sectionTitle">Your Profile</p>
              <p>
                Your profile is the "face" you show to parents looking for tutoring help. The platform allows you to customize
                a number of different attributes.
              </p>
              <section id="profileDetails">
                <p>
                  <span class="subhead">Grade Range</span> - You can set the mininmum and maximum grades you are willing to tutor
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
                <p>
                  <span class="subhead">Rates</span> - Some tutors may be looking at this as an opportunity for community
                  service. But others may be looking to supplement their income/make up for lost jobs. The rate field allows
                  you to indicate what, if anything, you'd like to charge. It's a text entry field so you can enter a number
                  or a range or whatever else you would like.
                </p>
                <p>
                  <span class="subhead">Accepting New Students</span> - By default when you set up a new profile, "accepting
                  new students" is set to true. However, down the road, if you have as many students as you want/can handle,
                  then you can set it to no and it will be reflected in your directory listing.
                </p>
              </section>
              <section>
                <p class="sectionTitle">Technology</p>
                <p>
                  This site is designed to be a directory and a way for parents to find tutors. It does not currently have
                  technology for messaging or video conferencing (but your email is clickable and will launch the parent's
                  email client). It will be up to individual tutors to decide with parents what the best technology is for
                  doing the remote tutoring. Zoom is one service that might work well for
                  tutors. The free account allows unlimited length one on one calls and has built in screen sharing. But
                  there are plenty of other choices including Skype, FaceTime, GoToMeeting, and others.
                </p>
                <p>
                  In addition, the site does not have any payment processing software built in. So if you charge for your
                  services, you will need to make arrangements with the parents on your own via whatever system you prefer.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  font-size: 18px;
}

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
  padding-top: 0.75em;
  padding-bottom: 1em;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
}

#aboutHeader {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 0.5em;
}

#parentInfoModal {
  background-color: lightgreen;
}

.modal-title {
  font-size: 1.25rem;
}

.sectionTitle {
  font-size: 1.25rem;
}

#tutorInfoModal {
  background-color: lightsteelblue;
}

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

@media screen and (max-width: 450px) {
  #title {
    margin-left: 15vw;
  }

  #logoImage {
    margin-left: 20vw;
  }
}
</style>
