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
            title: "Timeloop Metroidvania",
            subtitle: "",
            mainImage: {name: "", index: 0},
            images: [],
            descriptionComponent: "timeloop-metroid-desc"
        }
    }
  }
}
</script>