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
            title: "Jenga Fortress",
            subtitle: "Physics-based Local Multiplayer AR Duel",
            mainImage: {name: "", index: 0},
            images: [],
            descriptionComponent: "jenga-fortress-desc"
        }
    }
  }
}
</script>