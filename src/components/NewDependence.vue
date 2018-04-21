<template lang="html">
  <div class="">
    <section class="container">
      <div class="columns" style="margin-left : 3rem; margin-top : 0px;">>
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey" style="margin-top : 40px;" >New Dependence</h3>
              <DependenceForm></DependenceForm>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DependenceForm from './Forms/DependenceForm'

export default {
  name: 'NewDependence',
  data () {
    return {
      form: {
        name: '',
        acronym: '',
        annex: '',
        latitude: '',
        longitude: '',
        photo: ''
      },
      allDependences: [],
      preview: 'https://st3.depositphotos.com/5266903/12981/v/950/depositphotos_129812138-stock-illustration-management-office-flat-vector-icon.jpg'
    }
  },
  components: {
    DependenceForm
  },
  created () {
    this.getDependences()
  }
}
</script>

<style lang="css">
</style>
