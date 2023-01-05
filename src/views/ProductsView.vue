<script setup>
import { Products } from "../components/ProductsList.vue";
</script>

<template>
  <h3>Liste des produits</h3>
  <main>
    <Products />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
