<template lang="html">
  <div class="box has-text-centered">
      <figure class="avatar">
        <img height="128" width="128" :src='preview'>
        <div class="file is-centered">
          <label class="file-label">
            <input class="file-input" type="file" name="photo" @change="processFile($event)">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
          </label>
        </div>
      </figure>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" name="name" v-model="form.name" placeholder="Name" autofocus="">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" name="acronym" v-model="form.acronym" placeholder="Acronym">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" name="annex" v-model="form.annex" placeholder="Annex">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" name="latitude" v-model="form.latitude" placeholder="Latitude">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" name="longitude" v-model="form.longitude" placeholder="Longitude">
        </div>
      </div>

      <button @click="sendForm()" class="button is-block is-info is-large is-fullwidth">Add</button>
  </div>
</template>

<script>
export default {
  props: ['type', 'data', 'index'],
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
  created () {
    this.getDependences()
  },
  watch: {
    type (data) {
      if (data === 'edit') {
        this.$store.dispatch('dependence/editDependence', this.data, this.index).then(() => {
          if (this.dependence) {
            this.form = this.dependence
          }
        })
      } else {
        this.form = {
          name: '',
          acronym: '',
          annex: '',
          latitude: '',
          longitude: '',
          photo: ''
        }
      }
    }
  },
  computed: {
    dependence () {
      return this.$store.getters['dependence/dependenceDraft']
    }
  },
  methods: {
    sendForm () {
      this.$store.dispatch('dependence/newDependence', this.form)
    },
    getDependences () {
      this.$store.dispatch('dependence/getDependences')
    },
    processFile (e) {
      this.form.photo = e.target.files[0]
      this.preview = URL.createObjectURL(e.target.files[0])
    }
  }
}
</script>

<style lang="css">
</style>
