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

          <!-- swiper1 -->
          <!-- <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>  -->
              <!-- swiper2 Thumbs -->
          <!-- <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
          </swiper> -->



          <!-- <CoolLightBox 
            :items="items" 
            :index="index"
            @close="index = null">
          </CoolLightBox>

          <div class="images-wrapper">
            <div
              class="image"
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            ></div>
          </div> -->

          <div>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              controls
              indicators
              :interval="0"
            >
            <b-carousel-slide
              v-for="image in this.images" :key="image.url"
              caption=""
              :img-src="image.url"
            ></b-carousel-slide>
            </b-carousel>
            
            <light-box :media="media" :showLightBox="false" :showThumbs="true"></light-box>
          </div>
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
      We did try to prioritize the game being fun rather than raising empathy, as we thought that it was a more achievable goal. The majority of players enjoyed the game, however, which is a good sign.
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

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import LightBox from 'vue-image-lightbox'
  export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',

    components: {
      Swiper,
      SwiperSlide,
      LightBox
    },
    data() {
      return {
        media: [
          { // For image
            thumb: require('@/assets/empathuzzler.png'),
            src: require('@/assets/empathuzzler.png'),
            // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
            // srcset: '...' // Optional for displaying responsive images
          },
          {
            thumb: require('@/assets/empathuzzler.png'),
            src: require('@/assets/empathuzzler.png'),
            // caption: 'caption to display. receive <html> <b>tag</b>', // Optional
            // srcset: '...' // Optional for displaying responsive images
          },
        ],
        images: [
          { url: require('@/assets/empathuzzler.png')  },
          // { url: require('@/assets/empathuzzler.png')  }
        ]
        // swiperOptionTop: {
        //   loop: false,
        //   loopedSlides: 5, // looped slides should be the same
        //   spaceBetween: 10,
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   }
        // },
        // swiperOptionThumbs: {
        //   loop: false,
        //   loopedSlides: 5, // looped slides should be the same
        //   spaceBetween: 10,
        //   centeredSlides: true,
        //   slidesPerView: 'auto',
        //   touchRatio: 0.2,
        //   slideToClickedSlide: true
        // },

      // items: [

      // ],
      // index: null
      }
    },
    mounted() {
      // this.$nextTick(() => {
      //   const swiperTop = this.$refs.swiperTop.$swiper
      //   const swiperThumbs = this.$refs.swiperThumbs.$swiper
      //   swiperTop.controller.control = swiperThumbs
      //   swiperThumbs.controller.control = swiperTop
      // })
      console.log(this.$router.currentRoute.path);
    }
  }
</script>


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

/* lightbox */

.images-wrapper {
  /* height: 100px; */
}
.image {
  /* min-height: 100px; */
}

/* slider */

.thumb-example {
	 height: 480px;
	 background-color: black;
}
 .swiper .swiper-slide {
	 background-size: cover;
	 background-position: center;
}
 .swiper .swiper-slide.slide-1 {
	 background-image: url('~@/assets/empathuzzler.png');
}
 .swiper .swiper-slide.slide-2 {
	 background-image: url('/smugportfolio2.png');
}

 .swiper.gallery-top {
	 height: 80%;
	 width: 100%;
}
 .swiper.gallery-thumbs {
	 height: 20%;
	 box-sizing: border-box;
	 padding: 0;
}
 .swiper.gallery-thumbs .swiper-slide {
	 width: 25%;
	 height: 100%;
	 opacity: 0.4;
}
 .swiper.gallery-thumbs .swiper-slide-active {
	 opacity: 1;
}
 
</style>

