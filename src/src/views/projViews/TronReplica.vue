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
            title: "Tron Replica",
            subtitle: "SDL Nightmare",
            mainImage: {name: "", index: 0},
            images: [],
            descriptionComponent: "tron-replica-desc"
        }
    }
  }
}
</script>