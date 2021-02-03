<template>
  <div>
    <div class="div1">{{txt}} qklwejklqjwr</div>
    <img src="../assets/design.png" alt="png">
  </div>
</template>

<style>
  div {
      color: red;
  }
</style>

<script>
  export default {
    name: 'App',
    data() {
      return {
        txt: '这是App.vue',
      };
    },
    methods: {
      sum(a, b){
        return a + b;
      }
    },
    created() {
      console.log(this.sum(1, 5));
    }
  };
</script>
