<template>
  <a class='delete' @click='erase'></a>
</template>

<script>
export default {
  props: ['data', 'index'],
  methods: {
    erase () {
      let id = this.data.id
      console.log(id)
    }
  }
}
</script>
