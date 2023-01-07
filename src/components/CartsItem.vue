<template>
<div>
    <div class = "item">
      <h1 style="color: blue;">{{ cart.title }}</h1>
    </div>
    <div>
      <h3 ><p>Prix à l'unité: {{ cart.price }}€</p>
      <p>Quantity: {{ cart.quantity }}</p></h3>
      <button @click="incrementQuantity"> + </button>
      <button @click="decrementQuantity"> - </button>
    </div>
    <div>
      <h2 style="color: red;" ><p>Total: {{ cart.total }} €</p></h2>
    </div>
</div>
</template>

<script>
export default {
  props: {
    cart:[],
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
