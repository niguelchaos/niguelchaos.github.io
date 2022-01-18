<template>
   <b-container>
      <name-header></name-header>
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
import NameHeader from '../NameHeader.vue';
import FeelTheDisasterDesc from './projDescriptions/FeelTheDisasterDesc.vue';
import TouchingHeartsDesc from './projDescriptions/TouchingHeartsDesc.vue';
import TimeloopMetroidDesc from './projDescriptions/TimeloopMetroidDesc.vue';
import GetMeowtOfHereDesc from './projDescriptions/GetMeowtOfHereDesc.vue';
import TronReplicaDesc from './projDescriptions/TronReplicaDesc.vue';
import JengaFortressDesc from './projDescriptions/JengaFortressDesc.vue';
import RaphlAnimDesc from './projDescriptions/RaphlAnimDesc.vue';

export default {
	props: ['projectDetails'],
    components: { 
      NameHeader,
      FeelTheDisasterDesc,
      TouchingHeartsDesc,
      TimeloopMetroidDesc,
      GetMeowtOfHereDesc,
      TronReplicaDesc,
      JengaFortressDesc,
      RaphlAnimDesc
    },
    methods: {

    }
}
</script>

<style scoped>
.section-heading {
  padding-bottom: 2rem;
}

.project-details {
  display: flex;
  flex-direction: column;

  color:  #dfe2ff;
  padding-bottom: 7rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}
.portfolio-description {
   align-items: left;
   text-align: left;
}
</style>