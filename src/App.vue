<template>
  <v-app class='primary info--text text--lighten-3 text-size font-weight-light'>

    <NavBar />

    <v-content>
      <router-view />
    </v-content>
    
  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
   NavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .text-size{
    font-size: 1.2rem;
    line-height: 1.7;
  }
</style>