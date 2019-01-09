import Vue from 'vue'
import App from './App.vue'
import { apikey } from '../apikey'

Vue.config.productionTip = false

const baseUrl = "https://api.harvardartmuseums.org"

const Gallery = {
  template: '#gallery-template',
  data: () => ({
    posts: [],
    images: [],
    search: ""
  }),
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get(`${baseUrl}/image?apikey=d4537190-135f-11e9-baea-f75a4720f151`).then(response => {
        this.posts = response.data.records
        this.posts.forEach(post => console.log(post.baseimageurl))
      })
    }
  }
}


new Vue({
  render: h => h(App),
}).$mount('#app')
