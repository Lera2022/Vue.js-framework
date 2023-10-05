<template>


    <ProjectPage/>

</template>

<script>
import ProjectPage from './components/ProjectPage.vue'

export default {
  name: 'App',
  components: {
    ProjectPage,
  }
}
</script>

<style lang="scss">
  * {
      margin: 0;
      padding: 0;
  }

  .page-body {
      font-family: 'Jost', sans-serif;
      color: #292F36;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  ul {
      list-style-type: none;
  }

  .center {
      padding-left: calc(50% - 600px);
      padding-right: calc(50% - 600px);
  }

  .heading,
  .num__indicator,
  .subheading {
      font-family: 'DM Serif Display', serif;
      font-weight: inherit;
  }

  .top__blog {
    height: 356px;
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    background-image: url(./assets/top__blog.jpg);
    position: relative;
    margin-bottom: 200px;
}

.top__blog-details {
    background-image: url(./assets/top__blog-details.jpg);
}

.wrapper__blog {
    position: absolute;
    bottom: 0;
    left: calc(50% - 250px);
    padding: 41px 78px;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
}

.heading__blog {
    font-size: 50px;
    padding-bottom: 15px;
}

.breadcrumbs__blog {
    color: #4D5053;
    line-height: 150%;
    text-align: center;
}
</style>
