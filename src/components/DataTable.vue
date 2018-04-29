<template lang='html'>
  <div class="">
    <a @click="create" v-if="datatable" class="button is-link">New</a>
    <v-client-table :columns='columnsD' :data='dataD' :options='optionsD'>
      <template slot="actions" slot-scope="props">
        <a class="fa fa-edit" @click="edit(props.row._id, props.index)"></a>
        <a class="fa fa-remove" @click="remove(props.row._id, props.index)"></a>
      </template>
    </v-client-table>
    <Modal :title="datatable">
      <!-- <Form></Form> -->
      <UserForm :type="action" :data="id" :index="index" v-if="datatable == 'users' || datatable == 'solicitudes'"></UserForm>
      <DependenceForm :type="action" :data="id" :index="index" v-if="datatable == 'dependences'"></DependenceForm>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
import DependenceForm from './Forms/DependenceForm'
import UserForm from './Forms/UserForm'

export default {
  name: 'DataTable',
  props: ['columnsD', 'dataD', 'optionsD'],
  data () {
    return {
      id: '',
      index: 0,
      action: ''
    }
  },
  components: {
    Modal,
    UserForm,
    DependenceForm
  },
  computed: {
    datatable () {
      return this.$store.state.datatable
    }
  },
  methods: {
    create () {
      this.action = 'create'
      this.changeModal()
    },
    edit (id, index) {
      this.id = id
      this.index = index
      this.action = 'edit'
      this.changeModal()
    },
    remove (id, index) {
      this.id = id
      this.index = index
      this.action = 'remove'
      this.changeModal()
    },
    changeModal () {
      this.$store.dispatch('changeModal')
    }
  }
}
</script>

<style lang="css" scoped>
 @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>
