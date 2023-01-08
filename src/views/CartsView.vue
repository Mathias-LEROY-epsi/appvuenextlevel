<template>
  <h1 style="color: greenyellow">Votre panier:</h1>
  <div v-if="carts">
    <div v-for="products in carts.carts">
      <div v-for="product in products.products">
        <CartsItem :cart="product"></CartsItem>
      </div>
      <h1 style="color: greenyellow">
        Total de votre panier est de : {{ products.total }}
      </h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CartsItem from "@/components/CartsItem.vue";
import axios from "axios";

export default {
  name: "CartView",
  components: {
    CartsItem,
  },
  data() {
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
    async addItem() {
      await this.cartsItem.add(this.newItem);
      this.newItem = {
        name: "",
        price: 0,
      };
      this.getItems();
    },
    async remove(itemId) {
      await this.cartsItem.remove(itemId);
      this.getItems();
    },
  },
};
</script>