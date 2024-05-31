<template>
  <div class="NavBarBody">
    <div @click="GetIdPage('MaxShop')" class="ButtonNav">MaxShop</div>
    <div @click="GetIdPage('Home')" class="ButtonNav">Home</div>
    <div @click="GetIdPage('Button#1')" class="ButtonNav">Button#1</div>
    <div @click="GetIdPage('Button#2')" class="ButtonNav">Button#2</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    GetIdPage(id) {
      console.log("id", id);
      this.$emit("IdPageForAcces", id);
    },
  },
};
</script>

<style scoped>
.NavBarBody {
  display: flex;
  justify-content: center;
}
.ButtonNav {
  font-size: 16px;
  margin-right: 10px;
  border: 1px;
  height: 40px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.ButtonNav:hover {
  background-color: rgb(217, 217, 217);
}
</style>
