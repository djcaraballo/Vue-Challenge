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
#app {
  color: #ffffff;
  text-align: center;
}
</style>
