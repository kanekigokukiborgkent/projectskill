<template>
  <div class="hello">
    <NavBar @IdPageForAcces="IdPageForAcces" />
    <HomePage v-if="showHome" />
    <CatalogProduse v-if="showCatalogProduse" />
    <LivrareInformatii v-if="showLivrare" />
  </div>
</template>

<script>
import NavBar from "@/components/Elements/NavBar.vue";
import CatalogProduse from "@/components/Pages/CatalogProduse.vue";
import LivrareInformatii from "@/components/Pages/LivrareInformatii.vue";
import HomePage from "@/components/Pages/HomePage.vue.js";

export default {
  data() {
    return {
      showCatalogProduse: false,
      showLivrare: false,
      showHome: false,
      lastIdPageOpen: null,
      namePage: "HomePage",
    };
  },
  name: "MaxShop",
  props: {},
  components: {
    NavBar,
    LivrareInformatii,
    CatalogProduse,
    HomePage,
  },
  created: {
    IdPageForAcces(namePage);
  },
  methods: {
    showHomeFunc() {
      this.showHome = true;
    },
    IdPageForAcces(idPage) {
      console.log("MaxShop IdPageForAcces", idPage);

      if (idPage === "HomePage") {
        this.showHome = true;
      } else this.showHome = false;

      if (idPage === "Catalog") {
        this.showCatalogProduse = true;
      } else this.showCatalogProduse = false;

      if (idPage === "Livrare") {
        this.showLivrare = true;
      } else this.showLivrare = false;

      this.lastIdPageOpen = idPage;
    },
  },
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hello {
  height: 600px;
  box-sizing: border-box;

}
</style>
