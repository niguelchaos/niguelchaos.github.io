<template>
  <b-container id="reports">

    <name-header></name-header>

    <b-container class="details">
      <b-container class="details-item">
        <h4>Academic Reports</h4>
        <p>
          A myriad of reports which give me PTSD or I simply like. Or both.
          I mean who gon read this
        </p>
        <hr id=dark-divider class="divider my-4" />


        <!-- <b-row>
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
        </b-row> -->

          <b-container class="reportcards-container" fluid>
            <b-row>
              <b-col class="rep-main-col" v-for="report in reports" :key="report.id" xl="12" no-gutters>
                <report-card :report="report"></report-card>
              </b-col>
            </b-row>
          </b-container>

      </b-container>

    </b-container>
  </b-container>




</template>

<script>
import NameHeader from '@/components/NameHeader.vue';
import ReportCard from '@/components/cards/ReportCard.vue'


export default {
  // name: "resume",
  components: { NameHeader, ReportCard },
  data() {
      return {
        reports: [
          { num: 2, course: 'Gameplay Design', title: 'Gameplay Style: Decisive Finishers', text: 'Explorations of a gameplay pattern identified in a wide range of games. The actual goal of the entire report was to justify putting Lamar roasting Franklin on the first page eyyyy gottem', 
              highlightTitle:"Highlights", tech: 'big meme energy', link: './AcademicReports/DecisiveFinishers.pdf', detailslink: ""},
          { num: 1, course: 'Introduction to Game Design', title: 'Karaoke - Behavioural changes of a Non-Game considered as a Game', text: 'Where I am forced to consider, if you will, hypothetically, that karaoke is a game.', 
              highlightTitle:"Highlights", tech: 'Game Models, Gamification, Mechanics, Role Playing', link: './AcademicReports/KaraokeAsGame.pdf', detailslink: ""},
          { num: 0, course: 'Bachelor Thesis', title: 'Evaluating the Trade-offs of Diversity-Based Test Prioritization: An Experiment', text: 'Jaccard. Very nice. Fast and good on the Unit level. But thats nothing look at NCD. Nice jesus NCD is really super. But wait you ain\'t seen SS yet. Impressive, very nice. Lets see Random\'s performance. Look at that speed, the ignorance of the test contents. Oh my god its so cheap too- ', 
              highlightTitle:"Highlights", tech: 'Diversity-based Testing, Test Case Prioritization, Natural Language Processing', link: 'https://gupea.ub.gu.se/bitstream/2077/67100/1/gupea_2077_67100_1.pdf', detailslink: ""}
        ]
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

.reportcards-container {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}
.rep-main-col {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}
.details {
  display: flex;
  flex-direction: column;

  color:  #dfe2ff;
  padding-bottom: 7rem;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
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
.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>