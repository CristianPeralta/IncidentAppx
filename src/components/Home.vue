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
        <DataTable v-if="datatable == 'users'" :columnsD="['name', 'email', 'dependence', 'role']" :dataD="allUsers" :optionsD="{
          headings: {
            'name': 'Name',
            'email': 'Email',
            'dependence': 'Dependence',
            'role': 'Role'
          },
          sortable: ['name', 'email', 'role'],
          filterable: ['name', 'email', 'role']
        }"></DataTable>

        <DataTable v-if="datatable == 'dependences'" :columnsD="['name', 'acronym', 'annex']" :dataD="allDependences" :optionsD="{
          headings: {
            'name': 'Name',
            'acronym': 'Acronym',
            'annex': 'Annex'
          },
          sortable: ['name', 'acronym', 'annex'],
          filterable: ['name', 'acronym', 'annex']
        }"></DataTable>
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
  created () {
    this.getUsers()
  },
  data () {
    return {
      text: 'OSIS!'
    }
  },
  computed: {
    allUsers () {
      return this.$store.state.users
    },
    allDependences () {
      return this.$store.state.dependences
    },
    datatable () {
      return this.$store.state.datatable
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser')
    },
    getUsers () {
      this.$store.dispatch('getUsers')
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/admin.css';
</style>
