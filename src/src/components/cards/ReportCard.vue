<template>
  <!-- <div :data-aos="fadeStyle" data-aos-duration="100" data-aos-easing="ease-out-sine"> -->
  <b-container class="rep-card-container">
   <b-card class="rep-card overflow-hidden shadow-sm">
      <b-row no-gutters>

         <b-col class="card-contents-col" id="card-contents-col" lg="12">
            <b-row>
               <b-col>

                  <b-row class="text-row">
                    <b-col class="text-col">
                      <b-card-body class="cardbody">

                        <b-card-sub-title class="rep-course">{{report.course}}</b-card-sub-title>
                        <!-- <hr class="text-divider" /> -->
                        <b-card-title class="rep-title">
                            <a class="rep-title-link" v-bind:href="report.link" target="_blank">{{report.title}}</a>
                        </b-card-title>
                        
                        <p class="rep-roles">{{report.roles}}</p>

                        <b-card-text class="card-text">{{report.text}}</b-card-text>
                        <span class="align-middle font-weight-bolder">{{report.highlightTitle}}: {{report.tech}}</span>
                        <!-- <hr class="mb-3 ml-0" /> -->
                        <!-- <hr class="text-divider" /> -->
                      </b-card-body>
                    </b-col> 
                  </b-row>
                  
                  <b-row class="linkbutton-row" align-v="baseline">
                     <b-col class="linkbutton-col">
                        <!-- <a v-if="this.showLink" type="button" class="linkbutton btn btn-outline-light btn-lg float-right" v-bind:href="report.link" target="_blank">
                           <em :class="this.linkClass" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
                        </a> -->
                        <!-- <b-button v-if="this.showDetailsLink" class="details-button float-left" variant="outline" :to="`${report.detailslink}`"><strong>More Details</strong></b-button> -->

                        <!-- <a v-if="this.showDetailsLink" class="details-link float-left">
                           <router-link :to="`${project.detailslink}`"><strong>More Details</strong></router-link>
                        </a> -->
                     </b-col>
                  </b-row>

               </b-col>
            </b-row>
         </b-col>

      </b-row>
   </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'report-card-item',
  props: ['report'],
  data() {
    return {
      fadeStyle: '',
      showLink: true,
      linkClass: 'bi bi-github',
      showDetailsLink: true,
      isYoutubeLink: false,
    }
  },
  mounted() {
    // this.getFadeInStyle(this.report.num)
    this.checkLink(this.report.link)
    this.checkDetails(this.report.detailslink)
    this.checkImage(this.report.imgsrc)
  },
  methods: {

    // getFadeInStyle(reportnum) {
    //   this.fadeStyle = 'fade-up-left'
    //   if (this.report.num % 2 !== 0) {
    //     this.fadeStyle = 'fade-up-right'
    //   }
    // },

    checkLink(reportlink) {
      const githubSubstr = 'github.com'
      if (this.report.link === '') {
        this.showLink = false
      } else if (this.report.link.includes(githubSubstr)) {
        this.showLink = true
        this.linkClass = 'bi bi-github'
      } else {
        this.showLink = true
        this.linkClass = 'bi bi-box-arrow-up-right'
      }
    },

    checkImage(reportImage) {
      const youtubeSubstr = 'youtube.com'
      if (this.project.imgsrc.includes(youtubeSubstr)) {
         this.isYoutubeLink = true;
      }
      else {
         this.isYoutubeLink = false;
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
.rep-card-container {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  padding-bottom: 1.5rem;

}
.rep-card {
   max-width: 2000px;
   background: transparent;
   color:#cacfff;
   border-color: #96a5eb;
   /* background-color: #cacfff; */
   /* background-color: #5f6994; */
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

.text-divider {
   margin-bottom: 1rem;
   margin-top: 0.5rem;
   /* background-color: #2c3e504d; */
}
.rep-course {
  color: #96a5eb;
   text-align: left;
   margin-bottom: 0.5rem;
}
.rep-title {
  margin-bottom: 0.4rem;
}
.rep-title-link {
  color: #e6e8ff
}
.rep-roles {
   margin-bottom: 1rem;
   font-weight: bold;
   font-size: 0.9rem;
}

@media (max-width: 430px) {
   .rep-card {
      padding:0;
   }
   #card-contents-col {
      /* text-align: center; */
      margin-top: .5rem;
   }
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
   .card-text {
      text-align: left;
   }
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

.cardbody {
   padding: 0%;
   /* margin-left: 5%; */
   /* margin-right: 5%; */
   /* margin-top: 5%; */
   /* margin-bottom: 2%; */
}
.card-body {
  /* padding: 0%; */
}
.linkbutton-col {
   margin-top: 0%;
   margin-left: 5%;
   margin-right: 5%;
}
.details-button {
   border-color: #5f6994;
   border-radius: 0.5rem;
}

</style>
