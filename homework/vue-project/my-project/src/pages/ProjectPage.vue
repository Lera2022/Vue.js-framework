<script>
import PageHeader from "@components/PageHeader.vue";
import logo from "@assets/img/HeaderBackgrounds/project.jpg";
import img1 from "@assets/img/projects/Image5.png";
import img2 from "@assets/img/projects/Image6.png";
import img3 from "@assets/img/projects/Image7.png";
import img4 from "@assets/img/projects/Image8.png";
import img5 from "@assets/img/projects/Image9.png";
import img6 from "@assets/img/projects/Image10.png";
import img7 from "@assets/img/projects/Image11.png";
import img8 from "@assets/img/projects/Image12.png";
import ProjectTags from "@components/ProjectTags.vue";
import ProjectsList from "@components/ProjectsList.vue";
import PaginationButtons from "@components/PaginationButtons.vue";

export default {
  name: "ProjectPage",
  data() {
    return {
      image: logo,
      projects: [
        {
          img: img1,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 1,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img2,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 2,
          tags: ['Bed Room', 'Living Area']
        },
        {
          img: img3,
          title: "Classic Minimal Bedroom",
          text: "Decor / Artchitecture",
          id: 3,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img4,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          id: 4,
          tags: ['Bed Room', 'Living Area']
        },
        {
          img: img5,
          title: "Minimal Bedroom table",
          text: "Decor / Artchitecture",
          id: 5,
          tags: ['Bed Room', 'Bathroom']
        },
        {
          img: img6,
          title: "System Table",
          text: "Decor / Artchitecture",
          id: 6,
          tags: ['Bed Room', 'Bathroom']
        },
        {
          img: img7,
          title: "Modern Medroom",
          text: "Decor / Artchitecture",
          id: 7,
          tags: ['Bed Room', 'Kitchan']
        },
        {
          img: img8,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          id: 8,
          tags: ['Bed Room', 'Living Area']
        }
      ],
      tags: [
        "Bathroom",
        "Bed Room",
        "Kitchan",
        "Living Area"
      ],
      providedTag: "",
      currentPage: 1,
    };
  },
  methods: {
    setProvidedTag(tag) {
      if (tag === this.providedTag) {
        this.providedTag = "";
      } else {
        this.providedTag = tag;
      }
    },
    setCurrentPage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    totalPages() {
      return Math.ceil((this.showedProjects.length) / 8)
    },
    mockProjects() {
      const mock = [];
      let j = 0;
      for (let i = 0; i < 4; i ++) {
        this.projects.forEach(project => {
          mock.push({
            ...project,
            id: j++,
          })
        })
      }
      return mock;
    },
    showedProjects() {
      if (!this.providedTag) {
        return this.mockProjects;
      }
      return this.mockProjects.filter(project => project.tags.includes(this.providedTag));
    },
    renderedProjects() {
      return this.showedProjects.slice((this.currentPage - 1) * 8, this.currentPage * 8);
    }
  },
  components: {PaginationButtons, ProjectsList, ProjectTags, PageHeader}
};
</script>

<template>
  <div class="project">
    <PageHeader :image="image"
                title="Our Project"/>
    <div class="project__container">
      <ProjectTags :tags="tags"
                   :action="setProvidedTag"
                   :provided-tag="providedTag"/>
      <div class="project__list">
        <ProjectsList :projects="renderedProjects"/>
      </div>
      <PaginationButtons :total="totalPages" :current="currentPage" :action="setCurrentPage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.project {
  margin-bottom: 200px;
  &__container {

  }
  &__list {
    padding: 61px 0;
  }
}
</style>
