<template>
  <div id="app">
    <header>
      <!-- <nav @click="clickMenu">
        <a href="#dashboard" class="menu__link">Dashboard</a>
        <a href="#about" class="menu__link">About</a>
        <a href="#notFound" class="menu__link">NotFound</a>
      </nav> -->
      <nav>
        <router-link to="/dashboard">DashBoard</router-link>
        <router-link to="/about-content">About Page</router-link>
        <router-link to="/hello">Hello</router-link>
      </nav>
      <router-view />
    </header>
  </div>
</template>

<script>
// import AboutContent from './pages/AboutContent.vue'
// import DashBoard from './pages/DashBoard.vue'
// import NotFound from './pages/NotFound.vue'

export default {
  name: 'App',
  components: {
    // AboutContent,
    // DashBoard,
    // NotFound
  },
  data() {
    return {
      // page: 'dashboard',
    };
  },
  methods: {
    // setPage() {
    //   this.page = window.location.hash.slice(1);
    // },
    // clickMenu() {
    //   // console.log(window.location.hash)
    //   this.setPage();
    //   window.addEventListener('hashchange', function () {
    //     this.setPage();
    //   })
    // }
  },
  mounted() {
    // const links = document.guerySelectorAll('.menu__link');
    // links.forEach(element => {
    //   element.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     history.pushState({}, '', element.href)
    //   });
    // });
  },
  created() {
    this.$router.push({ name: 'Dashboard' })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}
</style>
