<script>
import TheLogin from "../components/TheLogin.vue";
import axios from "axios";

export default {
  name: "LoginView",
  components: {
    TheLogin,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          email: this.email,
          password: this.password,
        });
        // Récupération du token dans la réponse
        const token = response.data.token;

        // Stockage du token dans le local storage
        localStorage.setItem("token", token);
        console.log("Token stocké dans le local storage : " + token);

        // Redirection vers la page d'accueil
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <main>
    <TheLogin />
  </main>
</template>
