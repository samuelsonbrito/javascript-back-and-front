<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MeuComponente msg="IFAM"/>
    <h1>IFAM - fora do componente</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import MeuComponente from '@/components/MeuComponente'

export default {
  name: 'Home',
  components: {
    MeuComponente
  }
}
</script>
