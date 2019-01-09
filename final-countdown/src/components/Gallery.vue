<template id="gallery-template">
  <div class="images-container">
    <div v-for="image in images" class="image">
      <img :src="image"></img>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { apikey } from '../../apikey'

const baseUrl = "https://api.harvardartmuseums.org"

export default {
  name: "Gallery",
  template: '#gallery-template',
  data: () => ({
    message: "",
    posts: [],
    images: [],
    search: ""
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
        console.log(this.images)
        console.log(this.posts)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.image {
  margin: 1em;
}
</style>
