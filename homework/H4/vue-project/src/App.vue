<template>
  <div id="app">
            <blog-details/>
            <blogs-list/>
            <blog/>

  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    blog,
    blogsList,
    blogDetails
  },
};
</script>

<style lang="scss">

</style>
