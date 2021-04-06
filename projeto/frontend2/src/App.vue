<template>
  <div id="app">

<b-container>

  <b-navbar type="dark" variant="primary">
      <b-navbar-brand tag="h4">Pacientes</b-navbar-brand>
  </b-navbar>

    <b-form @submit.prevent="salvar">

      <b-form-group
        label="Nome:"
        description="Digite seu nome completo"
      >
      <b-form-input
          v-model="paciente.nome"
          type="text"
          placeholder="Informe o nome"
          required
        ></b-form-input>

      </b-form-group>

       <b-form-group
        label="E-mail:">

        <b-form-input
          v-model="paciente.email"
          type="email"
          placeholder="Informe o email"
          required
        ></b-form-input>

      </b-form-group>

      <b-form-checkbox v-model="paciente.teste_covid">
        Teste Covid
      </b-form-checkbox>

      <b-form-checkbox v-model="paciente.tomou_vacina">
        Tomou Vacina
      </b-form-checkbox>
      
      <b-button type="submit" variant="success">Salvar</b-button>

    </b-form>

    <b-table :fields="colunas" striped hover :items="pacientes">

      <template #cell(opcoes)="data">
        <b-button type="button" variant="outline-primary" @click="editar(data.item)">Editar</b-button>
        <b-button type="button" variant="outline-danger" @click="remover(data.item)">Remover</b-button>
      </template>

    </b-table>
   
    </b-container>

  </div>
</template>

<script>

import Paciente from './services/pacientes'

export default {
  name: 'App',
  components: {

  },

  data(){
    return {

      colunas: [
          // A virtual column that doesn't exist in items
          'id',
          // A column that needs custom formatting
          { key: 'nome', label: 'Nome Completo' },
          // A regular column
          'email',
          // A regular column
          'teste_covid',
          'tomou_vacina',
          { key: 'opcoes', label: 'Opcoes'},
          
      ],
      paciente: {
        id: '',
        nome: '',
        email: '',
        teste_covid: false,
        tomou_vacina: false,
      },
      pacientes: []
    }
  },

  mounted(){
    this.listar()
  },

  methods: {
    salvar(){
      
      if(!this.paciente.id){

        Paciente.salvar(this.paciente).then(()=>{
          this.paciente = {}
          this.listar()
          alert('Salvo com sucesso!')
        }).catch(e => {
          console.log(e)
        })

      }else{

        Paciente.atualizar(this.paciente).then(()=>{
          this.paciente = {}
          this.listar()
          alert('Atualizado com sucesso!')
        }).catch(e => {
          console.log(e)
        })

      }
      
    },
    listar(){

      Paciente.listar().then((resposta)=>{
        this.pacientes = resposta.data
      }).catch(e => {
          console.log(e)
      })

    },

    editar(paciente){

      this.paciente = paciente
      console.log(this.paciente)

    },

    remover(paciente){

      if(confirm(`Deseja realmente excluir ${paciente.nome}?`)){

         Paciente.remover(paciente).then(()=> {
            this.listar()
        }).catch(e => {
            console.log(e)
        })

      }

     

    }
  }
}
</script>

<style>



</style>
