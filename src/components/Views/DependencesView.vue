<template lang="html">
  <Section :columnsD="['name', 'acronym', 'annex', 'actions']" :dataD="allDependences" :optionsD="{
    headings: {
      'name': 'Name',
      'acronym': 'Acronym',
      'annex': 'Annex'
    },
    sortable: ['name', 'acronym', 'annex'],
    filterable: ['name', 'acronym', 'annex']
  }"></Section>
</template>

<script>
import Section from '../Section'

export default {
  name: 'DependencesView'
  components: {
    Section
  }
}
</script>

<style lang="css">
</style>
