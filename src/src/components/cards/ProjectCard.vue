<template>
  <div :data-aos="fadeStyle" data-aos-duration="100" data-aos-easing="ease-out-sine">
   <b-card class="proj-card overflow-hidden shadow-sm" >
      <b-row no-gutters>

         <b-col v-if="project.num % 2 > 0" class="card-img-col" lg="5">
            <b-card-img v-if="project.imgsrc != ''" :src="require(`@/assets/${project.imgsrc}`)" alt="Image" class="card-image"></b-card-img>
            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <div v-if="project.title == 'Jenga Fortress'" class="jenga-vid">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </b-col>

         <!-- hide on lg and wider screens -->
         <b-col v-if="project.num % 2 == 0" class="card-img-col d-lg-none" lg="5">
            <b-card-img v-if="project.imgsrc != ''" :src="require(`@/assets/${project.imgsrc}`)" alt="Image" class="card-image"></b-card-img>
            <div v-if="project.title == 'Jenga Fortress'" class="jenga-vid">
               <iframe  width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </b-col>

<!-- pc d-none d-lg-block -->
         <b-col class="card-contents-col" id="card-contents-col" lg="7">
            <b-row>
               <b-col>

                  <b-row class="text-row"><b-col class="text-col">
                     <b-card-body class="cardbody">
                        <b-card-sub-title class="mb-2">{{project.course}}</b-card-sub-title>
                        <b-card-title class="card-title">
                           {{project.title}}
                        </b-card-title>
                        <b-card-text class="card-text">{{project.text}}</b-card-text>
                        <span class="align-middle font-weight-bolder">Technologies: {{project.tech}}</span>
                        <hr class="d-none d-lg-block mb-3 ml-0" />
                     </b-card-body>
                  </b-col> </b-row>

                  <b-row class="linkbutton-row"><b-col class="linkbutton-col">
                     <a v-if="this.showLink" type="button" class="linkbutton btn btn-outline-dark btn-lg float-right" v-bind:href="project.link" target="_blank">
                        <em :class="this.linkClass" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
                     </a>
                     <a v-if="this.showDetailsLink" class="details-link float-left">
                        <router-link :to="`${project.detailslink}`"><strong>Details</strong></router-link>
                     </a>
                  </b-col></b-row>

               </b-col>
            </b-row>
         </b-col>

         <!-- hide on screens smaller than lg -->
         <b-col v-if="project.num % 2 == 0" class="card-img-col d-none d-lg-block" lg="5">
            <b-card-img v-if="project.imgsrc != ''" :src="require(`@/assets/${project.imgsrc}`)" alt="Image" class="card-image"></b-card-img>
            <div v-if="project.title == 'Jenga Fortress'" class="jenga-vid">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/l_vUDjO9Uzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
         </b-col>

      </b-row>
   </b-card>
  </div>
</template>

<script>
export default {
  name: 'project-card-item',
  props: ['project'],
  data() {
    return {
      fadeStyle: '',
      showLink: true,
      linkClass: 'bi bi-github',
      showDetailsLink: true 
    }
  },
  mounted() {
    this.getFadeInStyle(this.project.num)
    this.checkLink(this.project.link)
    this.checkDetails(this.project.detailslink)
  },
  methods: {

    getFadeInStyle(projectnum) {
      this.fadeStyle = 'fade-up-left'
      if (this.project.num % 2 !== 0) {
        this.fadeStyle = 'fade-up-right'
      }
    },

    checkLink(projectlink) {
      const githubSubstr = 'github.com'
      if (this.project.link === '') {
        this.showLink = false
      } else if (this.project.link.includes(githubSubstr)) {
        this.showLink = true
        this.linkClass = 'bi bi-github'
      } else {
        this.showLink = true
        this.linkClass = 'bi bi-box-arrow-up-right'
      }
    },
    
    checkDetails(detailslink) {
       if (detailslink == "") {
          this.showDetailsLink = false;
       }
       else {
          this.showDetailsLink = true;
       }

    }

  }
}
</script>
<style scoped>
.proj-card {
   max-width: 2000px;
   background: transparent;
   border-color: #96a5eb;
   background-color: #cacfff;
}
.card-img-col {
   padding: 0%;
   margin: 0%;
   align-self: center;
}
#card-contents-col {
   margin-left: auto;
   margin-right: auto;
   align-self: center;
   text-align: left;

}

@media (max-width: 430px) {
   .proj-card {
      padding:0;
   }
   #card-contents-col {
      text-align: center;
      margin-top: 1.5rem;
   }
   .jenga-vid {
      /* height: 0px; */
      /* padding-top: 25px; */
      /* padding-bottom: 56.2%; */
      max-width: 300px;
      position: relative;
   }
   .jenga-vid iframe {
      width: 100%;
      height: 100%;
   }
   .card-text {
      text-align: left;
   }
}

.jenga-vid {
   position: relative;
   height: 0;
   padding-bottom: 56.25%;
   padding-right: 100%;
   /* padding-left: 0; */
}
.jenga-vid iframe {
   position: absolute;
   top:0;
   bottom: 0;
   width: 100%;
   height: 100%;
}

.cardbody {
   padding: 0%;
   margin-left: 5%;
   margin-right: 5%;
   margin-top: 5%;
   margin-bottom: 2%;
}
.linkbutton-col {
   margin-top: 0%;
   margin-left: 5%;
   margin-right: 5%;
}

</style>
