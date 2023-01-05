<template>
    <div v-if="products">
      <div v-for="product in products.products">
        <ul>
          <ProductItem :title="product.title"></ProductItem>
        </ul>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ProductItem from "@/components/ProductItem.vue";
import axios from 'axios';

export default {
  name: "ProductsView",
  components: {
    ProductItem
  },
  data() {
    return {
      products: [],
    }
  },

  created: async function () {
    await this.getProducts()
  },
 
  methods: {
    getProducts: async function () {
      return await axios
        .get('https://dummyjson.com/products')
        .then((res) => {
          console.log(res.data)
          this.products = res.data
        })
    },

    urlGoogleMap: function (lat, long) {
      return `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
    },
  }
};
</script>
