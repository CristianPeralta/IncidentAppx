<template lang='html'>
  <div class="">
    <v-client-table :columns='columnsD' :data='dataD' :options='optionsD'>
      <template slot="actions" slot-scope="props">
        <a class="fa fa-edit" @click="edit(props.row._id)"></a>
        <a class="fa fa-remove" @click="remove(props.row._id)"></a>
      </template>
    </v-client-table>
    <Modal :active="modalActive" :title="datatable">
      <!-- <Form></Form> -->
      <UserForm v-if="datatable == 'users'"></UserForm>
      <DependenceForm v-if="datatable == 'dependences'"></DependenceForm>
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
      modalActive: false
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
    edit (id) {
      this.modalActive = !this.modalActive
    },
    remove (id) {
      this.modalActive = !this.modalActive
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
