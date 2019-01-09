<template>
  <div id="app">
    <header>
      <h1>Harvard Museum Gallery</h1>
    </header>
    <Gallery />
  </div>
</template>

<script>
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    Gallery
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
