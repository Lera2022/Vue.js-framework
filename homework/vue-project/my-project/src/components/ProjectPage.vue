
<script>
import Projects from './Projects.vue'
export default {
  name: 'HelloWorld',
  components: {Projects},
  props: {
    msg: String
  }
}
</script>

<template>
    <main class="main">
        <section class="top__blog">
            <div class="wrapper__blog">
                <h1 class=" heading heading__blog">Our Project</h1>
                <p class="breadcrumbs__blog">Home / Project</p>
            </div>
        </section>

        <section class="articles center">
            <h2 class="heading heading__articles_blog">Articles & News</h2>
            <Projects/>
            <nav>
                <ul class="pagination">
                    <li class="pagination__item"><img src="../assets/1.svg" alt="1"></li>
                    <li class="pagination__item"><img src="../assets/2.svg" alt="2"></li>
                    <li class="pagination__item"><img src="../assets/3.svg" alt="3"></li>
                    <li><img src="../assets/parrow.svg" alt="arrow forward"></li>
                </ul>
            </nav>
        </section>
    </main>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
