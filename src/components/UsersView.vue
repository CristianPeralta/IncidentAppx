<template lang="html">
  <Section v-if="datatable == 'users'" :columnsD="['name', 'email', 'dependence', 'role', 'actions']" :dataD="allUsers" :optionsD="{
    headings: {
      'name': 'Name',
      'email': 'Email',
      'dependence': 'Dependence',
      'role': 'Role'
    },
    sortable: ['name', 'email', 'role'],
    filterable: ['name', 'email', 'role']
  }">
</template>

<script>
import Section from './Section'
export default {
  name: 'UsersView'
  components: {
    Section
  }
}
</script>

<style lang="css">
</style>
