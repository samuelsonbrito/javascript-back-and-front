<template>
  <div id="app">
    

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      frutas: []
    }
  },

  created(){
    this.enviar()
  },

  methods:{

    enviar(){

      let frutasCopia = ''

      this.frutas = ['Maçã', 'Banana']

      frutasCopia = this.frutas.slice()
      
      this.frutas.push('Laranja') //adiciona no ultimo elemento

      this.frutas.pop() // remove do ultimo elemento

      this.frutas.shift() // remove do primeiro elemento

      this.frutas.unshift('Morango') // adiciona elemento no inicio

      let pos = this.frutas.indexOf('Banana')

      console.log(`POSICAO: ${pos}`)

      this.frutas.splice(pos, 1)

      this.frutas.forEach(function (item, indice) {
        console.log(item, indice);
      })

      console.log('Antigo:')
      console.log(frutasCopia)

    }
  }

}
</script>

<style>


</style>
