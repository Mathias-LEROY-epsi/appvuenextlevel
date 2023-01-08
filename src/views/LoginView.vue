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
          <button @click="logIn()" type="submit" class="logIn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
    <div v-else>
      <div v-for="user in data" class="results">
        <div class="userData">
          <ul style="display: flex; flex-direction: column">
            <li>
              <img :src="user.image" alt="r.lastName" style="width: 300px" />
            </li>
            <li>
              <h2>
                Vous êtes connecté {{ user.lastName }} {{ user.firstName }}
              </h2>
            </li>
            <button
              @click="logOut()"
              type="submit"
              class="logOut"
              style="width: 200px; margin-inline: auto; font-size: medium"
            >
              Se déconnecter
            </button>
          </ul>
          <ul>
            <li>
              <strong>Date de naissance:</strong> {{ user.birthDate }} ({{
                user.age
              }}
              ans)
            </li>
            <li><strong>Sexe:</strong> {{ user.gender }}</li>
            <li style="overflow-wrap: break-word">
              <strong>Mail:</strong> {{ user.email }}
            </li>
            <li><strong>Tel:</strong> {{ user.phone }}</li>
            <li><strong>Adresse:</strong> {{ user.address.address }}</li>
            <li><strong>Code postal:</strong> {{ user.address.postalCode }}</li>
            <li>
              <strong>Ville:</strong> {{ user.address.city }} ({{
                user.address.state
              }})
            </li>
          </ul>
        </div>
      </div>
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
      data: [],
      password: "",
    };
  },

  created: async function () {
    if (sessionStorage.getItem("isConnected") === "true") {
      this.isConnected = true;
      this.data = JSON.parse(sessionStorage.getItem("data"));
    }
  },

  methods: {
    logIn: async function () {
      const pwd = this.password;

      await axios
        .get(`https://dummyjson.com/users/filter?key=password&value=${pwd}`)
        .then((res) => {
          this.data = res.data.users;
          console.log(this.data);
          if (this.data.length === 0) {
            this.passwordIsWrong = !this.passwordIsWrong;
          } else {
            this.isConnected = !this.isConnected;
            sessionStorage.setItem("isConnected", this.isConnected);
            sessionStorage.setItem("data", JSON.stringify(this.data));
          }
        });
    },
    logOut: async function () {
      this.isConnected = !this.isConnected;
      sessionStorage.setItem("isConnected", this.isConnected);
      sessionStorage.setItem("data", JSON.stringify((this.data = [])));
    },
    getData: async function () {
      console.log(this.data);
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
  border: 2px solid var(--vt-c-black-soft);
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 100%;
}

.userData {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
  width: 80vw;
}

.logIn,
.logOut {
  background-color: var(--vt-c-black-soft);
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logIn:hover {
  background-color: var(--vt-c-green);
}

.logOut:hover {
  background-color: var(--vt-c-red);
}

.results ul {
  list-style: none;
  text-align: left;
  border: var(--color-primary) 5px solid;
  border-radius: var(--border-radius);
}

.results ul li {
  padding: 8px;
  letter-spacing: 2px;
}

.results ul li a {
  color: var(--color-primary-light);
}

.results ul li strong {
  color: var(--vt-c-red);
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: larger;
}
</style>
