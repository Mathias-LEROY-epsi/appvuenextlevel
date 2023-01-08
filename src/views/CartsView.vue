<template>
  <div>
    {{ isConnected }}
  </div>
</template>
<!-- <h1 style="color: greenyellow">Votre panier:</h1>
<div v-if="carts">
  <div v-for="products in carts.carts">
    <div v-for="product in products.products">
      <CartsItem :cart="product"></CartsItem>
    </div>
    <h1 style="color: greenyellow">
      Total de votre panier est de : {{ products.total }}
    </h1>
  </div>
</div> -->
<script>
// @ is an alias to /src
import CartsItem from "@/components/CartsItem.vue";
import {isConnected} from "@/views/LoginView.vue";
import axios from "axios";

export default {
  name: "CartView",
  userId: "",
  components: {
    CartsItem,
  },
  data() {
  isConnected: false;
    return {
      items: [],
      carts: [],
      apiURL: "https://dummyjson.com/carts/user/5",
    };
  },
  created: async function () {
    await this.getCarts();
  },
  methods: {
    getCarts: async function () {
      return await axios.get(this.apiURL).then((res) => {
        console.log(res.data);
        this.carts = res.data;
      });
    },
  },
};
</script>