<script>
import Header from "@/components/Header.vue";
import InternoFooter from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<template>
  <div class="pages">
    <Header />
    <div class="pages__view">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.pages {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__view {
    flex-grow: 1;
  }
}
</style>
