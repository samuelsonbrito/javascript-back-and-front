<template>

<div>

    <h1>{{texto}}</h1>
    <form @submit.prevent="enviar">

        <input type="text" placeholder="Titulo" v-model="titulo" required>
        <br>
        <input type="password" placeholder="Senha">
        <br><br>
        <textarea cols="30" rows="10" placeholder="Assunto" v-model="assunto" required>

        </textarea>

        <br>

        <button type="submit">Enviar</button>

    </form>

    <br>

    {{titulo}} 

    <br>

    {{assunto}} 
</div>

</template>

<script>
export default {

    name: 'FormularioSubmit',

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