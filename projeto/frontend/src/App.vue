<template>
  <div id="app">

    <div class="container">

      <b-button variant="outline-primary">Button</b-button>
<b-card no-body>
    <b-tabs card>
      <b-tab title="Tab 1" active>
        <b-card-text>Tab contents 1</b-card-text>
      </b-tab>
      <b-tab title="Tab 2">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
       <nav>
        <div class="nav-wrapper blue darken-1">
          <div class="brand-logo center">Pacientes</div>
        </div>
      </nav>
    
    <form @submit.prevent="salvar">

      <label>Nome</label><br>
      <input type="text" v-model="paciente.nome" placeholder="Nome" required><br>
      <label>E-mail</label><br>
      <input type="email" v-model="paciente.email" placeholder="E-mail" required><br>
      <p>
      <label>
        <input type="checkbox" v-model="paciente.teste_covid"/>
        <span>Teste Covid</span>
      </label>
      </p>

      <p>
      <label>
        <input type="checkbox" v-model="paciente.tomou_vacina"/>
        <span>Tomou Vacina</span>
      </label>
      </p>

      <button class="waves-effect waves-light btn">Salvar <i class="material-icons right">save</i> </button>

    </form>

    <table>

      <thead>

        <tr>
          <th>NOME</th>
          <th>EMAIL</th>
          <th>TESTE COVID</th>
          <th>TOMOU VACINA</th>
          <th>OPCOES</th>
        </tr>

      </thead>

      <tbody>

        <tr v-for="paciente of pacientes" :key="paciente.id">

          <td>{{ paciente.nome }}</td>
          <td>{{ paciente.email }}</td>
          <td>{{ paciente.teste_covid ? 'Sim' : 'Nao' }}</td>
          <td>{{ paciente.tomou_vacina ? 'Sim' : 'Nao' }}</td>
          <td>
            <button class="waves-effect waves-light btn blue darken-1" @click="editar(paciente)"> <i class="material-icons">mode_edit</i></button>
            <button class="waves-effect waves-light btn red darken-1" @click="remover(paciente)"><i class="material-icons">delete</i></button>
          </td>

        </tr>

      </tbody>

    </table>
   
    </div>
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
