<template>
   <b-container>
      <b-container class="name-heading">
         <b-jumbotron class="name-jumbo" id="name-jumbo">
            <h1 class="name-header">Nigel Chao</h1>
            <h5 class="name-lead">Software Developer, Game Designer</h5>
            <hr id=name-divider class="divider my-3" />
         </b-jumbotron>
      </b-container>

      <b-container class="project-details">
         <div class="section-heading">
            <h1>{{ projectDetails.title }}</h1>
            <h6>{{ projectDetails.subtitle }}</h6>
         </div>
         <div class="portfolio-item">
            <div class="portfolio-description">
               <div :is="projectDetails.descriptionComponent"></div>
            </div>
         </div>
      </b-container>
   </b-container>
</template>

<script>
import FeelTheDisasterDesc from './projDescriptions/FeelTheDisasterDesc.vue';
import TouchingHeartsDesc from './projDescriptions/TouchingHeartsDesc.vue';
import TimeloopMetroidDesc from './projDescriptions/TimeloopMetroidDesc.vue';
import GetMeowtOfHereDesc from './projDescriptions/GetMeowtOfHereDesc.vue';
import TronReplicaDesc from './projDescriptions/TronReplicaDesc.vue';
import JengaFortressDesc from './projDescriptions/JengaFortressDesc.vue';

export default {
	props: ['projectDetails'],
    components: { 
        FeelTheDisasterDesc,
        TouchingHeartsDesc,
        TimeloopMetroidDesc,
        GetMeowtOfHereDesc,
        TronReplicaDesc,
        JengaFortressDesc
    },
    methods: {

    }
}
</script>

<style scoped>
.name-jumbo {
   background-color: #2d3142;
   color: #d8dcff;
}
.name-header {
   color: #ecf1ff;
}
.name-lead {
  color: #cacfff;
  /* color:  #fde4c8; */
}
#name-divider {
  background:  #6c759e;
}

.project-details {
  color:  #fdf8b4;
}
</style>