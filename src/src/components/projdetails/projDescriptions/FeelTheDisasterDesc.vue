<template>
  <div>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            My god this game was made in like November 2019 which meant that Unity integration with Quest 1 was terrible
            I decided to use the VRTK sdk and at the time they had terrible incomplete documentation so it ate like 2 weeks off of my 3 week development time just to get basic actions working
          </p>
        </b-col>

        <b-col lg="7">
            <!-- <b-img center :src="require(`@/assets/tron.gif`)" alt="Image" class="details-image"></b-img> -->
        </b-col>
      </b-row>
    </b-container>
    

    <h3>Specification</h3>
    <p>
      
    </p>
    
    <h3>Mechanics</h3>
    <b-container>
      <b-row>
        <b-col md="6">
          <p><strong>Player</strong></p>
          <ul>
              <li>Pick, and throw objects in VR</li>
              <li>Wash Milk Carton</li>
              <li>Pick apart objects</li>
              <li>Teleport/Movement</li>
          </ul>
        </b-col>
        
        <b-col md="6">
          <p><strong>Game</strong></p>
          <ul>
              <li>Change Levels</li>
              <li>Win and Lose conditions</li>
              <li>General Game Flow</li>
              <!-- <li>Change Background</li> -->
          </ul>
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Roles & Responsibilities</h3>
      <p>
        As the sole creator of the game, I was responsible for the design, programming, and sound integration for the game. 
      </p>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Unity3D</li>
      <li>Version Control - Git</li>
    </ul>

      
    <h3 class="align-center">Links</h3>
    <b-container>
    <b-row>
      <b-col class="link-col">

        <a class="link-item float-left">
          <a type="button" class="btn btn-outline-light btn-lg pr-3" v-bind:href="'https://github.com/niguelchaos/FeelTheDisaster'" target="_blank">
            <em :class="'bi bi-github'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
          </a>
        </a>
        
        <!-- <a class="link-item float-left">
          <b-button class="link-button" href="./ProjectDocuments/GEATronReport.pdf" target="_blank"><strong>Read Tron Report</strong></b-button>
        </a> -->
        
      </b-col>
    </b-row>
    </b-container>
    
   </div>
</template>

<style scoped>
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}
.link-button {
  background-color: #5C6299;
}
.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.details-image {
  width: 100%;
  height: auto;
}
.description-container {
  padding-bottom: 5%;
}
</style>
