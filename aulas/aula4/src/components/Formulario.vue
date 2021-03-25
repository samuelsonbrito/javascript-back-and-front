<template>

<div>

    <h1>{{texto}}</h1>

    <input type="text" placeholder="Titulo" v-model="titulo">
    <hr>
    <textarea cols="30" rows="10" placeholder="Assunto" v-model="assunto">

    </textarea>

    <hr>
    <button @click="enviar()">Enviar</button>

    <hr>

    {{titulo}} 

    <hr>

    {{assunto}} 
</div>

</template>

<script>
export default {

    name: 'Formulario',

    data(){

        return {
            titulo: '',
            assunto: ''
        }
    },

    props: ['texto'],
    //metodos
    methods: {

        enviar(){
            alert(this.titulo)
        }  

    }

}
</script>

<style>

</style>