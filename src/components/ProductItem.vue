<template>
  <div class="item">
    <li>{{ title }}</li>
    <button class="panier">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  margin-block: 0.5rem;
  display: flex;
}

.panier {
  margin-left: 1.5rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
