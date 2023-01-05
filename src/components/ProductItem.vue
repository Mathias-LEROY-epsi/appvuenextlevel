<template>
  <div class="item">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <div class="details">
      <slot></slot>
    </div>
  </div>
</template>

<!-- <body>
  <div id="app" v-cloak>
    <div class="container">
      <ul v-for="r in data.users" class="results">
        <li>
          <div
            style="width:100%; display: flex; justify-content: center;">
            <img :src="r.image" alt="r.lastName" style="width:200px;"></img>
          </div>
        </li>
        <li><strong>Nom: </strong>{{ r.lastName }}</li>
        <li><strong>Prénom: </strong>{{ r.firstName }}</li>
        <li>
          <strong>Date de naissance: </strong>{{ r.birthDate }} ({{ r.age }} ans)
        </li>
        <li><strong>Sexe: </strong>{{ r.gender }}</li>
        <li style="overflow-wrap: break-word;"><strong>Mail: </strong>{{ r.email }}</li>
        <li><strong>Tel: </strong>{{ r.phone }}</li>
        <li><strong>Adresse: </strong>{{ r.address.address }}</li>
        <li><strong>Code postal: </strong>{{ r.address.postalCode }}</li>
        <li>
          <strong>Ville: </strong>{{ r.address.city }} ({{ r.address.state }})
        </li>
        <li><strong>Localisation GPS: </strong>
          <a
            :href="urlGoogleMap(r.address.coordinates.lat, r.address.coordinates.lng)"
            target="”_blank”"
            rel="noreferrer noopener">
            maps ↗
          </a>
        </li>
      </ul>
    </div>
  </div>
</body> -->

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
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
