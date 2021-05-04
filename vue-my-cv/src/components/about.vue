<template>
  <section class="about py-5" id="about">
    <div class="container">
      <div class="row">
        <!-- title starts -->
        <div class="col-lg-12">
          <div class="about-title py-3 text-center">
            <h1>ABOUT <span>ME</span></h1>
            <div class="separator d-none d-lg-block"></div>
          </div>
        </div>
        <!-- end of title -->
        <div class="col-lg-6 pt-5 pr-lg-5">
          <div class="about-text">
            <h4>
              Hello! I'M <span>{{ getMyInfo.name }}</span>
            </h4>
            <p>
              {{ getMyInfo.intro }}
            </p>
          </div>
          <div class="col-sm-12 col-md-6 p-0">
            <a class="description-btn" href="#">
              <span class="name-description">DOWNLOAD CV</span>
              <div class="btn-icon">
                <i class="mdi mdi-download"></i>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-6 pt-5 mt-4">
          <div class="about-details">
            <ul>
              <li>
                <span>Age :</span><span> {{ getAge }}</span>
              </li>
              <li><span>Nationality :</span><span> Viet Nam</span></li>
              <li><span>Frelance :</span><span> Available</span></li>
              <li>
                <span>Address :</span
                ><span> {{ getMyInfo.contact.address }}</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>Phone :</span><span> {{ getMyInfo.contact.phone }}</span>
              </li>
              <li>
                <span>E-mail :</span><span>{{ getMyInfo.contact.email }}</span>
              </li>
              <li><span>Language :</span><span> English</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
          <div class="about-box">
            <h1 class="text-right"><span>5+</span></h1>
            <h5>
              YEARS OF <br />
              EXPERIENCE
            </h5>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
          <div class="about-box">
            <h1 class="text-right"><span>100+</span></h1>
            <h5>
              COMPLETED <br />
              PROJECTS
            </h5>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
          <div class="about-box">
            <h1 class="text-right"><span>83+</span></h1>
            <h5>
              HAPPY <br />
              CLIENTS
            </h5>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3 mb-4">
          <div class="about-box">
            <h1 class="text-right"><span>32+</span></h1>
            <h5>
              AWARDS <br />
              WON
            </h5>
          </div>
        </div>
      </div>
      <!---------------------- EXPERIENCE & EDUCATION ---------------------->
      <div class="row py-5">
        <div class="col-lg-12 text-center">
          <h3>EXPERIENCE & EDUCATION</h3>
        </div>
        <div class="col-lg-6 pt-5">
          <h4 class="education-title text-center">EDUCATION</h4>
          <div class="education pl-4 mt-5">
            <div class="education-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
            <div class="education-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
            <div class="education-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pt-5">
          <h4 class="experince-title text-center">EXPERIENCE</h4>
          <div class="experince pl-4 mt-5">
            <div class="experince-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
            <div class="experince-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
            <div class="experince-box">
              <h5 class="box-title">Specialization Course</h5>
              <span class="item-period">2017</span>
              <span class="item-small"> | The IT Aid</span>
              <p class="box-description">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!---------------------- end of EXPERIENCE & EDUCATION ---------------------->

      <!---------------------- skill ---------------------->
      <div class="row">
        <div class="col-lg-12 text-center pb-5">
          <h3>SKILLS</h3>
        </div>
        <div class="col-lg-6">
          <p class="skill-name">HTML</p>
          <div id="html"></div>
          <p class="skill-name">CSS</p>
          <div id="css"></div>
          <p class="skill-name">JavaScript</p>
          <div id="java"></div>
          <p class="skill-name">jQuery</p>
          <div id="jquery"></div>
        </div>
        <div class="col-lg-6">
          <p class="skill-name">WordPress</p>
          <div id="wp"></div>
          <p class="skill-name">Web Design</p>
          <div id="web-des"></div>
          <p class="skill-name">PHP</p>
          <div id="php"></div>
          <p class="skill-name">Web Development</p>
          <div id="web-dev"></div>
        </div>
      </div>
      <!---------------------- end of skill ---------------------->
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapGetters([
      "getMyInfo",
      //   "getMyName",
    ]),
    getAge() {
      var currentTime = new Date();
      var dob = new Date(this.getMyInfo.dob);

      return currentTime.getFullYear() - dob.getFullYear();
    },
  },
};
</script>

<style>
</style>