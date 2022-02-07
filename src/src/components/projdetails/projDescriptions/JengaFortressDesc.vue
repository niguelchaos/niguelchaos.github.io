<template>
  <div>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            Jenga Fortress is a physics-based, local 2-player Augmented Reality(AR) game for the Experimental Game Design Course.
            Players need to force the opponent's "core block", which is hidden from them, out of their boundary in order to win.
            They then take turns firing explosive blocks at each other, and can pick apart their fortresses to "fortify" their own core block.
          </p>
          <p>
            Originally, there was the feature of letting players build their own fortresses. 
            Ammo was supposed to be limited, forcing players to take apart their own fortress to use as ammo - hence the "Jenga" inspiration.
            The development time of ~1 month required us to reduce our scope.
            It was a challenge to reduce the scope while maintaining the central concepts of strategy and skill.
          </p>

        </b-col>

        <b-col lg="7">
          <div class="yt-vid">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </b-col>
      </b-row>

    </b-container>

    <h3>Challenges</h3>
    <p>
      There were many challenges along the way. Our team was new to AR, and much time was spent fixing technical issues resulting from that.
      Scaling in AR was especially difficult, as the game objects looked enormous in AR. Yet, scaling the objects down reduced physics stability. 
      Rather than making the game objects smaller, the camera is actually made bigger and farther away from the content.
      Optimizing the physics engine for the game was particularly important for our game. Each block is a rigidbody, and a single fortress has ~450 blocks.  
      Much discussion revolved around optimizing the code architecture for easier task splitting and development, resulting in the usage of broadcasted events, singletons, and state machines.
    </p>

    <h3>Tools used:</h3>
    <ul>
      <li>Unity3D - ARFoundation</li>
      <li>C#</li>
      <li>Version Control - Git</li>
    </ul>

    <h3>Roles & Responsibilities</h3>
      <h5>Game Design</h5>
      <ul>
        <li>Came up with original game concept, helped finalize mechanics.</li>
        <li>Communicated concept and vision to the team, establishing a common understanding. While the concept was easier to explain, tt was a bit difficult conveying the feeling of strategy and skill I wanted the game to have.</li>
        <li>Participated in prioritizing features and reducing scope while maintaining central concept.</li>
        <li>Optimized fortress to reduce rigidbodies in mobile.</li>
      </ul>
      
      <h5>Programmer</h5>
      <ul>
        <li>Established and improved code architecture to facilitate collaboration + development for the team.</li>
        <li>Partially designed in-game block structures.</li>
        <li> Implemented:
          <ul>
            <li>General Game Flow</li>
            <li>AR tracking, placing Gameobjects into AR.</li>
            <li>Multitude of behaviours, including but not limited to Explosive block behaviour, Moving blocks, and Win Conditions.</li>
          </ul>
        </li>
        <li>Facilitated testing to prevent constantly building to mobile, resulting in faster iterations.</li>
        <li>Physics Optimizations. Our game has around ~900+ rigidbodies on mobile. Pain.</li>
        <li>Early UI, for debugging and visualization purposes. We don't talk about that.</li>
      </ul>
    <h3 class="align-center">Links</h3>
    <!-- <p>Codebase:</p> -->
    <b-row class="link-row" align-v="center">

      <b-col class="link-item">
        <a type="button" class="btn btn-outline-light btn-lg pr-3" v-bind:href="'https://github.com/niguelchaos/JengaFortress'" target="_blank">
          <em :class="'bi bi-github'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
        </a>
      </b-col>

      <b-col class="link-item">
        <b-button class="link-button" href="./ProjectDocuments/JengaFortressReport.pdf" target="_blank"><strong>Read Game Report</strong></b-button>
      </b-col>
      
      <b-col class="link-item">
        <b-button class="link-button" href="./ProjectDocuments/JengaFortressMidPresentation.pdf" target="_blank"><strong>Mid-term Presentation</strong></b-button>
      </b-col>

      <b-col class="link-item">
        <b-button class="link-button" href="./ProjectDocuments/JengFort.apk" target="_blank"><strong>Download JengFort.apk</strong></b-button>
      </b-col>

    </b-row>
    <!-- <br> <a href="./JengaFortressReport.pdf" target="_blank"><strong>Report</strong></a> -->
    
   </div>
</template>

<style scoped>
.link-row {
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
}
.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.link-button {
  background-color: #5C6299;
}
.description-container {
  padding-bottom: 5%;
}
.yt-vid {
   position: relative;
   height: 0;
   padding-bottom: 56.25%;
   padding-right: 100%;
   /* padding-left: 0; */
}
.yt-vid iframe {
   position: absolute;
   top:0;
   bottom: 0;
   width: 100%;
   height: 100%;
}

@media (max-width: 430px) {
   .yt-vid {
      /* height: 0px; */
      /* padding-top: 25px; */
      /* padding-bottom: 56.2%; */
      max-width: 300px;
      position: relative;
   }
   .yt-vid iframe {
      width: 100%;
      height: 100%;
   }
}
</style>
