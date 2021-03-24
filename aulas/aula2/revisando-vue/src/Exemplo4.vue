<template>
  <div id="app">
    <input type="text" v-model="nome" placeholder="Informe o nome">
    <input type="text" v-model="idade" placeholder="Informe a idade">
    <button @click="enviar">Enviar</button>

    <div v-show="teste_covid">

      Teste COVID

    </div>

    <div v-if="tomou_vacina">

      Tomou Vacina

    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      nome: '',
      idade: '',
      teste_covid: false,
      tomou_vacina: false
    }
  },

  methods:{

    enviar(){

      

    }
  }

}
</script>

<style>


</style>
