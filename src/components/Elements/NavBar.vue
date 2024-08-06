NavBar

<template>
  <div class="NavBarBody">
    <div class="NavBar">
    <div @click="GetIdPage('HomePage')" class="ButtonNav">
      <img src="@/assets/MaxShop.png" alt="MaxShop_Logo" class="ImgCLick" />
    </div>
    <div @click="GetIdPage('Catalog')" class="ButtonNav">Catalog</div>
    <div @click="GetIdPage('Livrare')" class="ButtonNav">Livrare</div>
    <div @click="GetIdPage('Button#2')" class="ButtonNav">Button#2</div>
    <v-text-field hide-details="auto" label="Main input" class="textfiledNav"></v-text-field>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    GetIdPage(id) {
      this.$emit("IdPageForAcces", id);
    },
  },
};
</script>

<style scoped>
</style>
