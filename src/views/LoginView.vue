<template>
  <div v-cloak>
    <div v-if="isConnected === false">
      <div class="login-form">
        <form @submit.prevent="login">
          <label for="password">Mot de passe</label>
          <input id="password" v-model="password" type="password" required />
          <p v-if="passwordIsWrong" style="color: red">
            Mot de passe incorrect
          </p>
          <button @click="findUser()" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
    <div v-else>
      <h1 style="color: greenyellow">Vous êtes connecté</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      isConnected: false,
      passwordIsWrong: false,
      data: null,
      password: "",
    };
  },

  created: async function () {
    if (localStorage.getItem("isConnected") === "true") {
      this.isConnected = true;
    }
  },

  methods: {
    findUser: async function () {
      const pwd = this.password;

      await axios
        .get(`https://dummyjson.com/users/filter?key=password&value=${pwd}`)
        .then((res) => {
          this.data = res.data.users;
          console.log(this.isConnected);
          if (this.data.length === 0) {
            this.passwordIsWrong = !this.passwordIsWrong;
          } else {
            this.isConnected = !this.isConnected;
            window.localStorage.setItem("isConnected", this.isConnected);
          }
        });
    },
  },
};
</script>

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
