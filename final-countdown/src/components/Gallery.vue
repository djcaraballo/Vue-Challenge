<template id="gallery-template">
  <div class="images-container">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div 
      v-for="(image, imageIndex) in images" 
      class="image"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="image">
      <img :src="image"></img>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { apikey } from '../../apikey'
import VueGallery from 'vue-gallery';

const baseUrl = "https://api.harvardartmuseums.org"

export default {
  name: "Gallery",
  template: '#gallery-template',
  data: () => ({
    message: "",
    posts: [],
    images: [],
    search: "",
    index: null
  }),
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get(`${baseUrl}/image?apikey=${apikey}`).then(response => {
        this.posts = response.data.records
        this.posts.forEach(post => console.log(post.baseimageurl))
        this.posts.forEach(post => this.images.push(`${post.baseimageurl}?height=500&width=500`))
        // console.log(this.images)
        // console.log(this.posts)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    'gallery': VueGallery
  }
}
</script>

<style scoped>
.images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eecf6e;
  width: 90%;
  margin: auto; 
  border: 20px #cecece solid;
  justify-content: center;
}

img {
  border-radius: 10px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
}

.image {
  margin: 0.5em;
  border-radius: 10px;

  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /*border: 1px solid #ebebeb;*/
  /*margin: 5px;*/
}
</style>
