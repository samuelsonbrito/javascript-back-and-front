<template>
  <div id="app">
    <input type="text" v-model="valor1">
    <input type="text" v-model="valor2">
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      valor1: '',
      valor2: '',
    }
  },

  methods:{
    enviar(){

      let total = 0
      let valor1 = parseInt(this.valor1)
      let valor2 = parseInt(this.valor2)
      total = valor1 + valor2

      alert(total)
    }
  }

}
</script>

<style>


</style>
