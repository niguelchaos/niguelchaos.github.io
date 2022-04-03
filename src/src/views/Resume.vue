<template>
  <b-container id="resume">
    <name-header></name-header>

    <b-container class="details">
      <b-container class="section-heading">
        <h1>Resume</h1>
        <h6>Documents & Reports</h6>
        <hr id="heading-divider" class="divider my-3" />
      </b-container>

      <b-container class="details-item">
        <b-row>
          <b-col class="link-col">
            <a class="link-item float-center">
              <b-button class="link-button cv-button" href="./NigelChao_Resume.pdf" target="_blank"><strong>Download CV (PDF)</strong></b-button>
            </a>
          </b-col>
        </b-row>
      </b-container>
      

      <b-container class="details-item">
        <h4>Academic Reports</h4>
        <p>
          A myriad of reports which give me PTSD or I simply like. Or both.
        </p>

        <b-row>
          <b-col class="link-col">
            <a class="link-item float-left">
              <b-button class="link-button" href="./AcademicReports/DecisiveFinishers.pdf" target="_blank">Gameplay Style: Decisive Finishers</b-button>
            </a>

            <a class="link-item float-left">
              <b-button class="link-button" href="./AcademicReports/KaraokeAsGame.pdf" target="_blank">Karaoke as a Game</b-button>
            </a>

            <a class="link-item float-left">
              <b-button class="link-button" href="https://gupea.ub.gu.se/bitstream/2077/67100/1/gupea_2077_67100_1.pdf" target="_blank">Evaluating the Trade-offs of Diversity-Based Test Prioritization: An Experiment</b-button>
            </a>
          </b-col>
        </b-row>
      </b-container>

      <education-card></education-card>

    </b-container>

    <b-container class="details-item">
      <skills></skills>
    </b-container>

  </b-container>
</template>

<script>
import NameHeader from '@/components/NameHeader.vue';
import EducationCard from '@/components/aboutdetails/Education.vue';
import Skills from '@/components/Skills.vue';


export default {
  // name: "resume",
  components: { NameHeader, EducationCard, Skills },
  data() {
      return {
      }
    },
    mounted() {
      this.scrollToTop()
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0,0)
      }
    }
}
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;

  color:  #dfe2ff;
  padding-bottom: 7rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}
.details-content {
  align-content: left;
  align-items: left;
  align-self: left;
  justify-items: left;
}
.details-item {
  padding-bottom: 3rem;
}
#heading-divider {
  /* height: 10px; */
  background:  #6c759e;
}
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}
.link-button {
  color:  #e9edff;
  background-color: #5C6299;
  margin-right: 1rem;
  font-size: 1rem;
}
.cv-button {
  font-size: 20px;
  padding: 1rem;
  background-color: #D1603D;
}
.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>