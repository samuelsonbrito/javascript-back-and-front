<template>
  <div id="app">
    <input type="text" v-model="valor">
    <button @click="enviar">Enviar</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      valor: ''
    }
  },

  methods:{
    enviar(){
      alert(this.valor)
    }
  }

}
</script>

<style>


</style>
