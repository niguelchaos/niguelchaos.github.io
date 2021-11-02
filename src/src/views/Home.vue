<template>
  <b-container fluid id="top" class="base">
    <b-row>
      <b-col id="content-col" class="content-col" no-gutters>
        <b-container fluid class="home-section" id="home">
          <b-jumbotron class="home-jumbo" id="home-jumbo" header="Nigel Chao" lead="Software Developer, Game Designer" fluid>
          </b-jumbotron>
        </b-container>
        <!-- Mobile (< 768px): stack columns by making one half-width and one full-width
              Desktop (>= 768px): keep both columns in same row in 4:8 ratio -->
        <b-container fluid id="about" class="about-section overflow-auto" >
          <section data-aos="fade-in">
            <header class="masthead">
              <div class="about-container" >
                <b-row class="about-row" >
                  <b-col class="about-col" lg="8" md="10">
                      <h1 class="text-white font-weight-bold">About Me</h1>
                      <hr id=about-divider class="divider my-3" />
                  </b-col>
                  <b-col id=about-details class="about-details" lg="8" md="10">
                      <p class="font-weight-light">{{about.text1}}</p>
                      <p class="font-weight-light">{{about.text2}}</p>
                  </b-col>
                </b-row>
                <section class="edu-section">
                  <b-row class="edu-row">
                    <b-col class="edu-col">
                      <b-card id="education-card" class="education-card overflow-hidden shadow-sm">
                        <b-card-body class="edu-cardbody">
                          <h2 class="education-title font-weight-bold">Education</h2>
                          <b-container class="edu-entry" v-for="edu in education" :key="edu.id">
                            <b-row>
                              <b-col lg="9">
                                <b-card-title class="edu-title">{{edu.location}}</b-card-title>
                                <b-card-text class="edu-degree font-weight-bolder">{{edu.degree}}</b-card-text>
                                <b-card-text class="edu-text">{{edu.text}}</b-card-text>
                              </b-col>
                              <b-col lg="3">
                                <b-card-text class="edu-date">{{edu.date}}</b-card-text>
                              </b-col>
                            </b-row>
                            <hr id=dark-divider class="divider my-4" />
                          </b-container>

                        </b-card-body>
                      </b-card>
                    </b-col>
                  </b-row>
                </section>
              </div>
            </header>
          </section>
        </b-container>

        <b-container fluid class="skills-container" id="skills" >
          <b-row>
            <b-col class="skills-header-col">
              <h1 class="skills-header">Skills</h1>
              <hr id="dark-divider" class="divider my-3" />
            </b-col>
          </b-row>

          <b-row id="skills-row">
            <b-col id="skills-main-col" v-for="a in skills" :key="a.id" sm="12" md="6" lg="6" xl="3">
              <skill-card :skill="a"></skill-card>
            </b-col>
          </b-row>
        </b-container>

        <b-container fluid id="projects" class="projects">
          <!-- Projects-->
          <section class="projects-section">
            <h1 class="project-header">Projects</h1>
            <hr id=dark-divider class="divider my-4" />
            <!-- <b-card no-body> -->
              <b-tabs class="projects-tabs" pills align="center">

                <b-tab title="Software Engineering">
                  <b-container class="projectcards-container" fluid>
                    <b-row>
                      <b-col class="proj-main-col" v-for="softengproj in softengProjects" :key="softengproj.id" xl="12" no-gutters>
                        <project-card :project="softengproj"></project-card>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-tab>

                <b-tab title="Game Development" active>
                  <b-container class="projectcards-container" fluid>
                    <b-row>
                      <b-col class="proj-main-col" v-for="gamedevproj in gamedevProjects" :key="gamedevproj.id" xl="12" no-gutters>
                        <project-card :project="gamedevproj"></project-card>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-tab>
              </b-tabs>

          </section>
        </b-container>

        <!-- Contact-->
        <b-container class="contact" id="contact" fluid>
          <section class="contact-section">

            <h2 class="contact-header"> Contact Me </h2>
              <b-row>
                <b-col class="contact-divider-col">
                    <hr class="contact-divider divider my-3" />
                </b-col>
              </b-row>
              <b-row id="contact-row" class="row justify-content-center">
                <b-col class="mx-2">
                  <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.linkedin" target="_blank">
                    <em class="bi bi-linkedin" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
                  </a>

                  <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.email">
                    <em class="bi bi-envelope-open-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
                  </a>

                  <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.github" target="_blank">
                    <em class="bi bi-github" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
                  </a>
                </b-col>
              </b-row>
          </section>
        </b-container>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import { Api } from '@/Api'
import SkillCard from '@/components/SkillCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'home',
  components: { SkillCard, ProjectCard },
  data() {
    return {
      about: {
        text1: 'I am a Master\'s student in Game Design and Technology at Gothenburg University, with a Bachelor\'s in Software Engineering and Management. I am currently looking for opportunities to deepen my knowledge of Game Development.',
        text2: 'Oh, and rhythm games. Those are nice.'
      },
      skills: [
        { id: 1, title: 'Full Stack Developer', text: 'Experience in Web, Desktop, Distributed and Embedded Systems. Increasing hatred for Web Development every passing moment though.' },
        { id: 2, title: 'Software Design', text: 'Experienced in designing software to be maintainable and readable.' },
        { id: 3, title: 'Gameplay Design', text: 'Able to analyze, criticize, and investigate how mechanics function together. Somewhat painful.' },
        { id: 4, title: 'Game Programming', text: 'Adequate scripting capabilities in C# and C++.' }
      ],
      softengProjects: [
        { num: 1, course: 'Cyberphysical Systems: Systems of Systems', title: 'Autonomous Vehicles: Intersection Handling', text: 'Microservices developed and delivered for miniature vehicles to handle various traffic situations of an intersection. The self-driving minicar was built on Raspberry Pi and Beagle Bone boards.', tech: 'C++, Docker, OpenCV, Git', link: 'https://github.com/niguelchaos/Cybercar-G5-copy', imgsrc: 'kiwicaractual.jpg' },
        { num: 2, course: 'Distributed Systems', title: 'Java Project Dependency Visualizer', text: 'Visualizer which illustrates the dependencies of a public Github Java Project. The backend was developed to be run on 5 separate physical systems across a WLAN network.', tech: 'MongoDB, Vue.js, Node.js, D3.js, Git', link: 'https://github.com/TiEkl/GrOneContinued', imgsrc: 'gronecropped.gif' },
        { num: 3, course: 'Systems Development', title: 'Autonomous Vehicles: Parallel Parking', text: 'Arduino project of using a miniature vehicle to parallel park itself. Software was implemented and deployed on the self-driving Arduino minicar. We had to build the car ourselves with the provided parts. Best part of the project.', tech: 'Arduino(C/C++), OpenCV', link: 'https://github.com/Mokkants/group3car', imgsrc: 'personalityparapark.png' },
        { num: 4, course: 'Team Programming', title: 'Java Library Manager', text: 'A library management system tasked with book keeping, customer handling, and book lending.', tech: 'Java, JavaFX, PostgreSQL, Git', link: 'https://gitlab.com/TeamTen/DIT092-LibSys', imgsrc: 'librarymanager.png' }
      ],
      gamedevProjects: [
        { num: 1, course: 'Game Engine Architecture', title: 'Tron(1982) Replica', text: 'Partial recreation of the light cycle minigame from the Tron arcade video game by Bally Midway in C++ using SDL, with a focus on architectural decisions made during development. Due to tight time constraints, local multiplayer was implemented instead.', tech: 'C++, SDL', link: 'https://github.com/niguelchaos/GEATron', imgsrc: 'tron.gif' },
        { num: 2, course: 'Game Development Project', title: 'Empathetic Puzzler', text: 'Group project for the course. A local 2-player game designed to elicit feelings of empathy between the players, highlighting to importance of diversity. Featuring 2 controllable cats within their own "world", players had to solve puzzles together to progress.', tech: 'Unity, C#, Git', link: '', imgsrc: 'empathuzzler.png' },
        { num: 3, course: 'Personal Project', title: 'Timeloop Metroidvania', text: 'A metroidvania inspired by The Legend of Zelda: Majora\'s Mask and Hollow Knight involving a 3-day system. A joint collaboration with Fabian Fröding, whose portfolio is linked below.', tech: 'Unity, C#, PlasticSCM', link: 'https://fabianfroding.github.io/gamedev#portfolio', imgsrc: 'timeloop.png' },
        { num: 4, course: 'Gameplay Design', title: 'Touching Hearts (Board Game)', text: 'Group project with a focus on prototyping and reflecting on design decisions. The 4 player card game had a dark but humourous theme, involving harvesting and trading organs to achieve their individual goals.', tech: 'Tabletopia (Website)', link: '', imgsrc: 'touchinghearts.png' },
        { num: 5, course: 'Product Design (Korean Exchange)', title: 'Feel The Disaster', text: 'A VR game made to teach the player the intricacies of recycling, requiring the player to recycle a milk carton correctly. My first Unity project, I had to learn Unity alongside the limitations of the Oculus Quest. Many mistakes were made - Without a clear initial vision, I highly overscoped, and the game was not fun. Sure learned a lot.', tech: 'Unity, Oculus Quest, C#', link: '', imgsrc: 'feelthedisaster.png' },
        { num: 6, course: 'Product Design (Korean Exchange)', title: 'The Biggest Brain', text: 'A simple 2-player button masher. Created using the frustratingly buggy Gameblox editor, it was my first game ever made. Surprisingly fun. ', tech: 'Gameblox(Website)', link: 'https://gameblox.org/play/23256/', imgsrc: 'thebiggestbrain.png' }
      ],
      education: [
        { location: 'University of Gothenburg', degree: 'Master\'s Programme in Game Design and Technology', date: '2020 - now', text: 'Slight Headache.' },
        { location: 'University of Gothenburg', degree: 'Bachelor\'s Programme in Software Engineering and Management', date: '2017 - 2020', text: 'Moderate Pain.' },
        { location: 'Hvitfeldtska Gymnasiet', degree: 'International Baccalaureate', date: '2014 - 2017', text: 'Pain.' }
      ],
      contacts: {
        linkedin: 'https://www.linkedin.com/in/nigel-chao/',
        email: 'mailto:niguelchaos@gmail.com',
        github: 'https://github.com/niguelchaos?tab=repositories'
      }
    }
  },

  methods: {

  }
}
</script>

<style>
body, html {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}
.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgb(167, 202, 255);
  border: 2px solid rgb(178, 151, 252);
}
.base{
  height:100%;
  width:100%;
  background-color: #f3e0ff;
}
#vertical-nav {
  flex-direction: column;
}
#content-col {
  padding: 0%;
}

.home-section{
  display: flex;
  min-height: 85vh;
  background-color: #d8dcff;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
#home-jumbo {
  background: transparent;
}
.about-section{
  display: block;
  background-color: #2d3142;
  text-align: center;
  align-items: center;
  align-self: center;
}
.about-col {
  font-size: 3.2rem;
}
.about-row {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8em;
  padding-bottom: 8em;
  padding-right: 2rem;
  padding-left: 2rem;
}
.edu-section {
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
  padding-bottom: 5%;
}
#education-card {
   background: transparent;
   border-color: #96a5eb;
   background-color: #e4e6ff;
}
.education-title {
  text-align: left;
  padding: 1.5%;
}
.edu-entry {
  padding-bottom: 2%;
  text-align: left;
}
.edu-date {
  text-align: right;
}
@media (max-width: 430px) {
  .edu-section {
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 20%;
  }
  .education-title {
    text-align: center;
    padding-bottom: 20%;
  }
  .edu-entry {
    padding-bottom: 20%;
    text-align: center;
  }
  .edu-degree {
    text-align: left;
  }
  .edu-date {
    text-align: center;
  }
}

#about-divider {
  background:  #dfe2ff;
}
#dark-divider {
  background:  #6c759e;
}
.about-details {
  color:  #dfe2ff;
  font-size: 1.2rem;
}
.skills-header {
  font-weight: bold;
  font-size: 3.2rem;
}
.skills-header-col {
  margin-left: 15%;
  margin-right: 15%;
}
.skills-container{
  display: block;
  background-position: center;
  background-size: cover;
  text-align: center;
  align-items: center;
  background-color: #fcd0a1;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  justify-content:center;
  overflow: auto;
}
#skills-row {
  padding-right: 10%;
  padding-left: 10%;
}
.projects {
  display: block;
  background-color: #d8dcff;
  padding-top: 3rem;
}
.project-header {
  font-weight: bold;
  font-size: 3.2rem;
}
.projects-section {
  background-color: #d8dcff;
  align-items: center;
  padding-right: 23%;
  padding-left: 23%;
  padding-top: 8%;
  padding-bottom: 8%;
}

.projects-tabs .nav-pills .nav-link.active {
  background-color: #5C6299;
  color: #eeefff;
}
.projects-tabs .nav-pills .nav-link:not(.active) {
  /* background-color: #5C6299; */
  color: #5C6299;
  border: #2d3142;
}
@media (max-width: 430px) {
  .projects-section {
    padding-right: 0%;
    padding-left: 0%;
  }
}
.proj-main-col {
  padding: 1.5rem;
}
.contact {
  background-color: #2d3142;
  display: block;
  padding: 4rem;
}
.contact-header {
  color:  #dfe2ff;
}
.contact-divider {
  background-color: #cacfff;
}
.contactbtn {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.contact-divider-col {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
