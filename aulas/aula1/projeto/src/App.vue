<template>
  <div id="app">

    <b-form-input v-model="nome" placeholder="Informe seu nome: ">
    </b-form-input>
    <br>
    {{nome}}
    <br>
    <b-button @click="enviar">Enviar</b-button>
    <b-button v-b-modal="'modal-1'">Abrir modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">{{ nossaVariavel }}</p>
    </b-modal>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      nossaVariavel: 'Teste',
      nome: ''
    }
  },

  methods: {
    enviar() {
      //alert('Nome: ' + this.nome)
      alert(`Nome: ${this.nome}`)
    },
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
