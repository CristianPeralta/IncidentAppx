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
        <a @click="changeModal" class="button is-link">Nuevo</a>
        <!-- START CONTENT -->
        <DataTable v-if="datatable == 'users'" :columnsD="['name', 'email', 'dependence', 'role', 'edit']" :dataD="allUsers" :optionsD="{
          headings: {
            'name': 'Name',
            'email': 'Email',
            'dependence': 'Dependence',
            'role': 'Role'
          },
          sortable: ['name', 'email', 'role'],
          filterable: ['name', 'email', 'role']
        }">
           <a slot="edit" slot-scope="props" class="fa fa-edit" :href="showItem(props.row.id)">Editarr</a>
        </DataTable>

        <DataTable v-if="datatable == 'solicitudes'" :columnsD="['name', 'email', 'role']" :dataD="allSolicitudes" :optionsD="{
          headings: {
            'name': 'Name',
            'email': 'Email',
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
        <Modal :active="modalActive" :title="datatable">
          <Form></Form>
        </Modal>
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
import Form from './Forms/DependenceForm'

export default {
  name: 'Home',
  components: {
    TheNav,
    TheMenu,
    SubNav,
    DataTable,
    TheFooter,
    Modal,
    Form
  },
  mounted () {
    this.getUser()
  },
  created () {
    this.getUsers()
  },
  data () {
    return {
      text: 'OSIS!',
      modalActive: false
    }
  },
  computed: {
    allUsers () {
      return this.$store.state.users
    },
    allDependences () {
      return this.$store.state.dependences
    },
    allSolicitudes () {
      return this.$store.state.solicitudes
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
    },
    showItem (id) {
      console.log(id)
    },
    changeModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style lang="css">
@import '../assets/css/admin.css';
</style>
