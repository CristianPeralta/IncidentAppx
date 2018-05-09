<template lang="html">
  <Section :columnsD="['name', 'email', 'dependence', 'role', 'actions']" :dataD="allUsers" :optionsD="{
    headings: {
      'name': 'Name',
      'email': 'Email',
      'dependence': 'Dependence',
      'role': 'Role'
    },
    sortable: ['name', 'email', 'role'],
    filterable: ['name', 'email', 'role']
  }"></Section>
</template>

<script>
import Section from '../Section'
export default {
  name: 'UsersView',
  components: {
    Section
  },
  computed: {
    section () {
      return this.$store.getters['section']
    }
  }
}
</script>

<style lang="css">
</style>
