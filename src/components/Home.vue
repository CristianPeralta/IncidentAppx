<template lang="html">
  <h1 class="is-large">{{text}}</h1>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    this.getUser()
  },
  data () {
    return {
      text: 'OSIS!'
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser')
    }
  }
}
</script>

<style lang="css">
</style>
