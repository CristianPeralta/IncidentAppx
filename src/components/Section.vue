<template lang='html'>
  <div class="">
    <a @click="create" v-if="datatable" class="button is-link">New</a>
    <v-client-table :columns='columnsD' :data='dataD' :options='optionsD'>
      <template slot="actions" slot-scope="props">
        <a class="fa fa-edit" @click="edit(props.row._id, props.index)"></a>
        <a class="fa fa-remove" @click="remove(props.row._id, props.index)"></a>
      </template>
    </v-client-table>
    <Modal v-if="action !== ''" :title="datatable">
      <!-- <Form></Form> -->
      <template >
        <UserForm v-if="datatable == 'users' || datatable == 'solicitudes'" :type="action" :data="id" :index="index"></UserForm>
      </template>
      <template >
        <DependenceForm v-if="datatable == 'dependences'" :type="action" :data="id" :index="index" ></DependenceForm>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
import DependenceForm from './Forms/DependenceForm'
import UserForm from './Forms/UserForm'

export default {
  name: 'Section',
  props: ['columnsD', 'dataD', 'optionsD'],
  data () {
    return {
      id: '',
      index: 0,
      action: 'create'
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
    },
    config () {
      return this.$store.getters['sectionConfig']
    }
  },
  methods: {
    create () {
      this.action = 'create'
      this.changeModal()
    },
    edit (id, index) {
      this.$store.commit('user/ADD_INDEX', index - 1)
      this.action = 'edit'
      this.id = id
      this.changeModal()
    },
    remove (id, index) {
      this.$store.commit('user/ADD_INDEX', index - 1)
      this.action = 'remove'
      this.id = id
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
