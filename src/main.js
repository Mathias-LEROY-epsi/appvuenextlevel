import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App, {
    data() {
      return {
        searchString: '',
        data: [],
      }
    },
  
    created: async function () {
      await this.getProducts()
    },
  
    methods: {
      getProducts: async function () {
        return await axios
          .get('https://dummyjson.com/products?limit=100')
          .then((res) => {
            this.data = res.data
          })
      },
  
      searchProduct: async function () {
        const search = this.searchString.trim().toLowerCase()
  
        return await axios
          .get(`https://dummyjson.com/products/search?q=${search}`)
          .then((res) => {
            this.data = res.data
          })
      },
  
      urlGoogleMap: function (lat, long) {
        return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
      },
    },
  });

app.use(router);

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

app.mount("#app");
