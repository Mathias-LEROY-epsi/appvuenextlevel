<template>
  <div class="cart">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.price }}
        <button @click="remove(item.id)">Remove</button>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <label>
        Name:
        <input v-model="newItem.name" />
      </label>
      <br />
      <label>
        Price:
        <input v-model="newItem.price" />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import CartsItem from "@/components/CartsItem.vue";

export default {
  name: 'CartView',
  data() {
    return {
      items: [],
      apiURL = 'https://dummyjson.com/carts/1';
      newItem: {
        name: '',
        price: 0,
      },
      cartsItem: new CartsItem(),
    };
  },
  created() {
    this.getCart();
    this.getItems();
  },
  methods: {
    async getCart(){
      try {
      const response = await axios.get();
      this.items = response.data;
    } catch (error) {
      console.error(error);
    }
    },
    async getItems() {
      this.items = await this.cartsItem.get();
    },
    async addItem() {
      await this.cartsItem.add(this.newItem);
      this.newItem = {
        name: '',
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
