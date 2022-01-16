<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
    </div>
</template>

<script>
import ProjectDetails from '@/components/projdetails/ProjectDetails.vue';
export default {
  components: { ProjectDetails },
  data: () => {
    return {
      projectDetails: {
          title: "Feel The Disaster",
          subtitle: "Second game ever being a VR game was a mistake",
          mainImage: {name: "", index: 0},
          images: [],
          descriptionComponent: "feel-the-disaster-desc"
      }
    }
  }
}
</script>