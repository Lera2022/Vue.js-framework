<script>
import {navigationRoutes} from "@routes/navigationRoutes.js";

export default {
  name: "InternoHeader",
  data() {
    return {
      routes: navigationRoutes,
    }
  }
};
</script>

<template>
  <header class="header">
    <div class="header__container"><router-link to="/"
                                      class="header__logo"><img src="../assets/icons/Logo.svg"
                                                                alt="#"> Interno</router-link>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item"
              v-for="([name, path]) in Object.entries(routes)">
            <router-link :to="path"
               class="nav__link">{{ name[0].toUpperCase() + name.slice(1) }}</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped lang="scss">

.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 44px;
  padding-bottom: 44px;
  background-color: #fefefe;
  &__container {

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
  }
}
.nav {
  &__list {
    display: flex;
    align-items: center;
  }
  &__item {
    list-style-type: none;
    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
  &__link {

  }
}
</style>
