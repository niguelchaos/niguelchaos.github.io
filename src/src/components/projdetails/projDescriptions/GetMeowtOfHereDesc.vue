<template>
  <div>

     
     <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            This game project aimed to design a game to meet the requirements of the Chalmers Student Union - to create increase inclusion between students.
            To this end, this game was made to bring relative strangers together by increasing empathy between players, 
            assuming that a greater understanding between students can make students more accepting of student culture. 
            To do so, a game experience was created with mechanics that emphasized cooperation, attempting to put players in each others' shoes.
          </p>
        </b-col>

        <b-col lg="7">
            <!-- <b-img center :src="require(`@/assets/tron.gif`)" alt="Image" class="details-image"></b-img> -->
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Concept</h3>
    <p>
      Two player puzzler game where you embark on a journey alongside your companion, working together in order to solve puzzles and boost each other across obstacles.
    </p>
    
    <h3>Roles & Responsibilities</h3>
      <p>
        As a programmer, I generally coded puzzle tools other level designers could use, specifically the gravity reversal mechanic.
        As a level designer, I collaborated with others to sketch out level ideas and puzzle designs. 
        There was much discussion surrounding how the different puzzles could help evoke empathy, taking the narrative into consideration.
        Many sketches were made to not only try to encourage the players to communicate, 
        but also fit in an in-game narrative where the cats gradually had a greater understanding of each other's "world". 
      </p>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Unity2D</li>
      <li>C#</li>
      <li>Version Control - Git</li>
    </ul>

    <h3>Challenges</h3>
    <p>
      During development, there was much discussion and level sketches on symbolizing that the cats gradually knew more of the other's "world".
      As such, many levels were planned to be implemented, illustrating this in-game narrative as well as hoping that players also could better understand each other in reality.  
      As time progressed, we constantly reduced our scope to fit the timeframe, resulting in 3 levels. 
      This meant that we had to condense much of the in game narrative, and also lowered our chances with giving players a chance to know each other, as the game was being too short to do so.
      The timeframe also meant that very little user testing was done to nail down the aesthetics of the game before the exhibition - which essentially became our user testing session.
      This project also taught me to not shy away from using existing assets, and the various ways to use them.
    </p>
    <p>
      During playtests, many players did not feel like their empathy increased after playing, since puzzles were seen as too easy, resulting in a lack of player communication. 
      We did try to prioritize the game being fun rather than raising empathy, as we thought that it was a more achievable goal. 
    </p>

      
    <h3 class="align-center">Links</h3>
    <b-container>
    <b-row>
      <b-col class="link-col">

        <a class="link-item float-left">
          <a type="button" class="btn btn-outline-light btn-lg pr-3" v-bind:href="'https://natashamangan.itch.io/get-meowt-of-here'" target="_blank">
            <em :class="'bi bi-box-arrow-up-right'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
          </a>
        </a>

        <a class="link-item">
          <b-button class="link-button" href="./ProjectDocuments/GetMeowtofHereReport.pdf" target="_blank"><strong>Read Game Report</strong></b-button>
        </a>
      
        
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
