<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          Project with the goal to learn multiplayer basics. 

        </b-col>

        <b-col lg="7">
          <!-- <div class="yt-vid"> -->
              <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          </div>
        </b-col>
      </b-row>

    </b-container>


    <h3>Tools used:</h3>
    <ul>
      <li>Unity Netcode</li>
      <li>C#</li>
      <li>Version Control - Git</li>
    </ul>
    
   </b-container>
</template>

<script>
  // import LightBox from 'vue-image-lightbox'
  export default {
    components: {
    },
    data() {
      return {
        media: [
        ]
      }
    },
    mounted() {
      // console.log(this.$router.currentRoute.path);
    }
  }
</script>

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
  background-color: #5c629900;
  border-color: #B298DC;
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

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}
</style>
