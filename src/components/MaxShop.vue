MaxShop
<template>
  <div class="hello">
    <NavBar @IdPageForAcces="IdPageForAcces" />

    <CatalogProduse v-if="showCatalogProduse" />
    <LivrareInformatii v-if="showLivrare" />
    <p>Versiune: 1</p>
  </div>
</template>

<script>
import NavBar from "@/components/Elements/NavBar.vue";
import CatalogProduse from "@/components/Pages/CatalogProduse.vue";
import LivrareInformatii from "@/components/Pages/LivrareInformatii.vue";

export default {
  data() {
    return {
      showCatalogProduse: false,
      showLivrare: false,
      lastIdPageOpen: null,
    };
  },
  name: "MaxShop",
  props: {},
  components: {
    NavBar,
    LivrareInformatii,
    CatalogProduse,
  },
  methods: {
    IdPageForAcces(idPage) {
      console.log("MaxShop IdPageForAcces", idPage);

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
html, body, #app {
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
