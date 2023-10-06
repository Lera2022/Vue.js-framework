<script>
export default {
  name: "ProjectTags",
  props: {
    tags: Array,
    action: Function,
    providedTag: String,
  },
};
</script>

<template>
  <div class="tags">
    <button class="tags__btn"
            :class="{active:tag===providedTag}"
            v-for="tag in tags"
            @click="action(tag)">{{ tag }}
    </button>
  </div>
</template>

<style scoped
       lang="scss">

.tags {
  max-width: max-content;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  border: 1px solid #CDA274;
  &__btn {
    &:hover {
      color: #fff;
    }
  }
}
.active {
  color: #fff;
}
</style>
