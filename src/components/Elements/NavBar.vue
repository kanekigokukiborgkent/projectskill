NavBar

<template>
  <div class="NavBarBody">
    <div @click="GetIdPage('MaxShop')" class="ButtonNav">
      <img src="@/assets/MaxShop.png" alt="MaxShop_Logo" class="ImgCLick" />
    </div>
    <div @click="GetIdPage('Catalog')" class="ButtonNav">Catalog</div>
    <div @click="GetIdPage('Livrare')" class="ButtonNav">Livrare</div>
    <div @click="GetIdPage('Button#2')" class="ButtonNav">Button#2</div>
    <v-text-field hide-details="auto" label="Main input" ></v-text-field>
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
.NavBarBody {
  display: flex;
  justify-content: flex-start;
  height: 80px;
  width: 100%;
  align-items: center;
  box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
}
.ButtonNav {
  font-size: 16px;
  margin-right: 10px;
  margin-left: 80px;
  border: 1px;
  height: 40px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.ButtonNavSearch {
  margin-right: 10px;
  margin-left: 80px;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  background-color: red;
}
.ButtonNav:hover {
  background-color: rgb(217, 217, 217);
}
.ImageButtonNav {
  margin-left: -600px;
}
.ImgCLick {
  height: 40px;
  width: 150px;
}
.ImgCLick:hover {
  cursor: pointer;
}
</style>
