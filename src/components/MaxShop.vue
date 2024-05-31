<template>
  <div class="hello">
     <NavBar @IdPageForAcces="IdPageForAcces"/>
  </div>
</template>

<script>
import NavBar from "@/components/Elements/NavBar.vue"
export default {
  data() {
    return {
    }
  },
  name: 'MaxShop',
  props: {
  },
  components: {
    NavBar,
  },
  methods:{
    IdPageForAcces(idPage){
console.log('IdPageForAcces',idPage);
    },
  },

}
</script>
 
<style scoped>
 
</style>
