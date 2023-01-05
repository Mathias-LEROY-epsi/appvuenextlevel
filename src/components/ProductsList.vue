<script setup>
import { ProductItem } from "./ProductItem.vue";
</script>

<template>
  <ProductItem>
    <template #heading>Produit</template>
    <template #details>Détails</template>
  </ProductItem>

  <!-- <ProductItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >becoming a sponsor</a
    >.
  </ProductItem> -->
</template>
