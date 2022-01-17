<template>
  <b-container fluid id="projects" class="projects">
    <h1 class="project-header">Projects</h1>
    
    <b-container fluid class="project-divider">
        <hr id=dark-divider class="divider my-4" />
    </b-container>  
    <!-- Projects-->
    <b-container class="projects-section p-0">
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
    </b-container>
  </b-container>
</template>

<script>
import ProjectCard from '@/components/cards/ProjectCard.vue'
export default {
  components: {   ProjectCard  },
  name: 'projects-section',
  data() {
    return {
      softengProjects: [
        { num: 3, course: 'Cyberphysical Systems: Systems of Systems', title: 'Autonomous Vehicles: Intersection Handling', text: 'Microservices developed and delivered for miniature vehicles to handle various traffic situations of an intersection. The self-driving minicar was built on Raspberry Pi and Beagle Bone boards.', tech: 'C++, Docker, OpenCV, Git', link: 'https://github.com/niguelchaos/Cybercar-G5-copy', imgsrc: 'kiwicaractual.jpg', detailslink: "" },
        { num: 2, course: 'Distributed Systems', title: 'Java Project Dependency Visualizer', text: 'Visualizer which illustrates the dependencies of a public Github Java Project. The backend was developed to be run on 5 separate physical systems across a WLAN network.', tech: 'MongoDB, Vue.js, Node.js, D3.js, Git', link: 'https://github.com/TiEkl/GrOneContinued', imgsrc: 'gronecropped.gif', detailslink: "" },
        { num: 1, course: 'Systems Development', title: 'Autonomous Vehicles: Parallel Parking', text: 'Arduino project of using a miniature vehicle to parallel park itself. Software was implemented and deployed on the self-driving Arduino minicar. We had to build the car ourselves with the provided parts. Best part of the project.', tech: 'Arduino(C/C++), OpenCV', link: 'https://github.com/Mokkants/group3car', imgsrc: 'personalityparapark.png', detailslink: "" },
        { num: 0, course: 'Team Programming', title: 'Java Library Manager', text: 'A library management system tasked with book keeping, customer handling, and book lending.', tech: 'Java, JavaFX, PostgreSQL, Git', link: 'https://gitlab.com/TeamTen/DIT092-LibSys', imgsrc: 'librarymanager.png', detailslink: "" }
      ],
      gamedevProjects: [
        { num: 6, course: 'Experimental Game Design', title: 'Jenga Fortress', text: 'AR game where you explode fortresses made out of wooden blocks.', tech: 'Unity', link: 'https://github.com/niguelchaos/JengaFortress', imgsrc: '', detailslink: "/jengafortress" },
        { num: 5, course: 'Game Engine Architecture', title: 'Tron(1982) Replica', text: 'Partial recreation of the light cycle minigame from Bally Midway\'s Tron arcade video game, with a focus on architectural decisions made during development. Due to tight time constraints, local multiplayer was implemented instead.', tech: 'C++, SDL', link: 'https://github.com/niguelchaos/GEATron', imgsrc: 'tron.gif', detailslink: "/tronreplica" },
        { num: 4, course: 'Game Development Project', title: 'Get Meowt of Here', text: 'A local 2-player puzzler designed to elicit empathy between the players by highlighting the importance of diversity. Featuring 2 controllable cats within their own "world", players had to solve puzzles together to progress.', tech: 'Unity, C#, Git', link: 'https://natashamangan.itch.io/get-meowt-of-here', imgsrc: 'empathuzzler.png', detailslink: "/getmeowtofhere" },
        { num: 3, course: 'Personal Project', title: 'Timeloop Metroidvania', text: 'A metroidvania inspired by The Legend of Zelda: Majora\'s Mask and Hollow Knight involving a 3-day system. A joint collaboration with Fabian Fröding, whose portfolio is linked below.', tech: 'Unity, C#, PlasticSCM', link: 'https://fabianfroding.github.io/', imgsrc: 'timeloop.png', detailslink: "/timeloopmetroid" },
        { num: 2, course: 'Gameplay Design', title: 'Touching Hearts (Board Game)', text: 'Group project with a focus on prototyping and reflecting on design decisions. The 4 player card game had a dark but humourous theme, involving harvesting and trading organs to achieve their individual goals.', tech: 'Tabletopia (Website)', link: '', imgsrc: 'touchinghearts.png', detailslink: "/touchinghearts" },
        { num: 1, course: 'Product Service System Design', title: 'Feel The Disaster', text: 'A VR game made to teach the player the intricacies of recycling, requiring the player to recycle a milk carton correctly. My first Unity project, I had to learn Unity alongside the limitations of the Oculus Quest. Many mistakes were made.', tech: 'Unity, Oculus Quest, C#', link: '', imgsrc: 'feelthedisaster.png', detailslink: "/feelthedisaster" },
        { num: 0, course: 'Product Service System Design', title: 'The Biggest Brain', text: 'A simple 2-player button masher. Created using the frustratingly buggy Gameblox editor, it was my first game ever made. Surprisingly fun. For like, 30 seconds. ', tech: 'Gameblox(Website)', link: 'https://gameblox.org/play/23256/', imgsrc: 'thebiggestbrain.png', detailslink: "" }
      ],
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: #d8dcff;
  padding-top: 3rem;
  align-content: center;
  justify-content: center;
}
.project-header {
  font-weight: bold;
  font-size: 3.2rem;
}
.project-divider {
  padding-left: 15% !important;
  padding-right: 15% !important;
}
.projects-section {
  display: flex;
  flex-direction: column;
  background-color: #d8dcff;

  align-items: center;
  justify-content: center;
  align-self: center;
  /* width: auto; */
}

@media (max-width: 430px) {
  .container {
    padding: 0;
  }
  .projects-section { 
    padding: 0;
    margin: 0;
  }

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
</style>