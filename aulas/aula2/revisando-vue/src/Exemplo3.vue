<template>
  <div id="app">
    <input type="text" v-model="nome" placeholder="Informe o nome">
    <input type="text" v-model="idade" placeholder="Informe a idade">
    <button @click="enviar">Enviar</button>
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

      //alert(typeof this.teste_covid)

      let qtdNome = 0
      let idade = 0
      //let data = '01-01-2021'
      let dataBR = '01/01/2021'
      //let dataSplit = ''
      let dataBRSplit = ''

      //console.log(data.split('-'))
      //dataSplit = data.split('-')
      //console.log(dataSplit[0]+'-'+dataSplit[1]+'-'+dataSplit[2])
      //console.log(`${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}`)
      //console.log(this.nome.substring(0,6))

      //padrao BR para US
      dataBRSplit = dataBR.split('/')
      console.log(dataBRSplit)

      console.log(`${dataBRSplit[2]}-${dataBRSplit[1]}-${dataBRSplit[0]}`)

      qtdNome = this.nome.length

      //alert(typeof this.idade)

      idade = parseInt(this.idade)

      //alert(typeof idade)

      if(qtdNome <= 3){

        //alert('Tamanho do nome deve ser maior que 3!')

        return
      }

      if(idade < 18){

        //alert('Esta proibido!')

        return

      }

      //alert('Nome: '+this.nome+" - Idade: "+this.idade)
      //alert(`Nome: ${this.nome} - Idade: ${this.idade}`)

      //alert('Salvo')

     //alert(this.nome.charAt(1))
     //alert(this.nome.indexOf('a'))

    }
  }

}
</script>

<style>


</style>
