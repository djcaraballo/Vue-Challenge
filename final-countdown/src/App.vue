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
@import url('https://fonts.googleapis.com/css?family=Alex+Brush|Thasadith');

#app {
  color: #ffffff;
  text-align: center;
  font-family: 'Alex Brush', cursive;
  font-size: 2em;  
}
</style>
