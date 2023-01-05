<script setup>
import Products from "../components/Products.vue";
</script>

<template>
  <h1>Liste des produits</h1>
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