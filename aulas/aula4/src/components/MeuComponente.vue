<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'MeuComponente',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  color: rgb(62, 122, 156);
  background-color: aquamarine;
}

</style>
