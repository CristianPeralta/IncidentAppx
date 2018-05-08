<template lang="html">
  <Section :columnsD="['name', 'email', 'role', 'actions']" :dataD="allSolicitudes" :optionsD="{
    headings: {
      'name': 'Name',
      'email': 'Email',
      'role': 'Role'
    },
    sortable: ['name', 'email', 'role'],
    filterable: ['name', 'email', 'role']
  }"></Section>
</template>

<script>
import Section from '../Section'
export default {
  name: 'SolicitudesView'
  components: {
    Section
  }
}
</script>

<style lang="css">
</style>
