<template lang="html">
  <body>

  <!-- START NAV -->
  <TheNav @showprofile="showprofile"></TheNav>
  <Modal :title="datatable">
    <!-- <Form></Form> -->
    <template >
      <Profile></Profile>
    </template>
  </Modal>
  <!-- END NAV -->
  <div class="container">
    <div class="columns">
      <TheMenu></TheMenu>
      <div class="column is-9">
        <!-- <SubNav></SubNav> -->
        <!-- <a @click="changeModal" v-if="datatable" class="button is-link">New</a> -->
        <!-- START CONTENT -->
        <DataTable v-if="datatable == 'users'" :columnsD="['name', 'email', 'dependence', 'role', 'actions']" :dataD="allUsers" :optionsD="{
          headings: {
            'name': 'Name',
            'email': 'Email',
            'dependence': 'Dependence',
            'role': 'Role'
          },
          sortable: ['name', 'email', 'role'],
          filterable: ['name', 'email', 'role']
        }">
        </DataTable>

        <DataTable v-if="datatable == 'solicitudes'" :columnsD="['name', 'email', 'role', 'actions']" :dataD="allSolicitudes" :optionsD="{
          headings: {
            'name': 'Name',
            'email': 'Email',
            'role': 'Role'
          },
          sortable: ['name', 'email', 'role'],
          filterable: ['name', 'email', 'role']
        }"></DataTable>

        <DataTable v-if="datatable == 'dependences'" :columnsD="['name', 'acronym', 'annex', 'actions']" :dataD="allDependences" :optionsD="{
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
import Modal from './Modal'
import DependenceForm from './Forms/DependenceForm'
import UserForm from './Forms/UserForm'
import Profile from './Profile'

export default {
  name: 'Home',
  components: {
    TheNav,
    TheMenu,
    SubNav,
    DataTable,
    TheFooter,
    Modal,
    Profile,
    DependenceForm,
    UserForm
  },
  mounted () {
    this.getUser()
  },
  data () {
    return {
      text: 'OSIS!',
      profileActive: false
    }
  },
  computed: {
    allUsers () {
      return this.$store.getters['user/users']
    },
    allDependences () {
      return this.$store.getters['dependence/dependences']
    },
    allSolicitudes () {
      return this.$store.getters['user/solicitudes']
    },
    datatable () {
      return this.$store.state.datatable
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('user/getUser')
    },
    getUsers () {
      this.$store.dispatch('user/getUsers')
    },
    showItem (id) {
      console.log(id)
    },
    changeModal () {
      this.$store.dispatch('changeModal')
    },
    showprofile () {
      this.profileActive = !this.profileActive
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/admin.css';
</style>
