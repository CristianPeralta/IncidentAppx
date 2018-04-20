<template lang="html">
  <div class="modal" :class="{'is-active': active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button @click="changeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button @click="changeModal" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
      Type: Boolean
    }
  },
  methods: {
    changeModal () {
      this.$parent.modalActive = !this.$parent.modalActive
    }
  }
}
</script>

<style lang="css">
</style>
