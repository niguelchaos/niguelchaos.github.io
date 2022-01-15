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
            title: "Get Meowt Of Here",
            subtitle: "",
            mainImage: {name: "", index: 0},
            images: [],
            descriptionComponent: "get-meowt-of-here-desc"
        }
    }
  }
}
</script>