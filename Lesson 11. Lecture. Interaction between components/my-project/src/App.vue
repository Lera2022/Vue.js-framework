<template>
  <div id="app">
    <CounterButton />
    <CounterButton />
    <CounterButton />
    <Hover/>
  </div>
</template>

<script>
import CounterButton from './components/CounterButton.vue'
import Hover from './components/Hover.vue'

export default {
  name: 'App',
  components: {
    CounterButton,
    Hover
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
