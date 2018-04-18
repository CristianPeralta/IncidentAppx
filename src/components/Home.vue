<template lang="html">
  <body>

  <!-- START NAV -->
  <TheNav></TheNav>
  <!-- END NAV -->
  <div class="container">
    <div class="columns">
      <TheMenu></TheMenu>
      <div class="column is-9">
        <SubNav></SubNav>
        <!-- START CONTENT -->
        <DataTable></DataTable>
        <!-- END CONTENT -->
      </div>
    </div>
  </div>
</body>
</template>

<script>
import TheNav from './utils/TheNav'
import TheMenu from './utils/TheMenu'
import TheFooter from './utils/TheFooter'
import SubNav from './utils/SubNav'
import DataTable from './DataTable'

export default {
  name: 'Home',
  components: {
    TheNav,
    TheMenu,
    SubNav,
    DataTable,
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
@import '../assets/css/admin.css';
</style>
