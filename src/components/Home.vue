<template lang="html">
  <body class="dashboard">
    <TheNav></TheNav>
    <TheHeader></TheHeader>
    <TheFooter></TheFooter>
  </body>
</template>

<script>
import TheNav from './utils/TheNav'
import TheHeader from './utils/TheHeader'
import TheFooter from './utils/TheFooter'

export default {
  name: 'Home',
  components: {
    TheNav,
    TheHeader,
    TheFooter
  },
  mounted () {
    this.getUser()
  },
  data () {
    return {
      text: 'OSIS!'
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser')
    }
  }
}
</script>

<style lang="css">
</style>
