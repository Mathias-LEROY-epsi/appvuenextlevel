<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />

      <label for="password">Mot de passe</label>
      <input id="password" v-model="password" type="password" required />

      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 40vw;
  margin-inline: auto;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  margin-bottom: 0.5rem;
  width: 100%;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
}

button[type="submit"] {
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
