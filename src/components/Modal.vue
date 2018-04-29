<template lang="html">
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p @click="changeModal" class="modal-card-title"><strong>{{title.toUpperCase()}}</strong></p>
        <button @click="changeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'Title',
      Type: String
    }
  },
  methods: {
    changeModal () {
      this.$store.dispatch('changeModal')
    }
  },
  computed: {
    active () {
      return this.$store.state.modalActive
    }
  }
}
</script>

<style lang="css">
</style>
