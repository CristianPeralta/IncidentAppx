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
@import '../assets/css/backend/bootstrap.min3f0d.css';
@import '../assets/css/backend/bootstrap-extend.min3f0d.css';
@import '../assets/css/backend/site.min3f0d.css';
@import '../assets/css/backend/skintools.min3f0d.css';
@import '../assets/css/backend/v1.min3f0d.css';
@import 'https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css';
</style>
