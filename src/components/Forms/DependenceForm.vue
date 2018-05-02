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

      <footer class="modal-card-foot">
        <button v-if="type == 'create'" @click="create()" class="button is-block is-info is-large is-fullwidth">Add</button>
        <button v-if="type == 'edit'" @click="update()" class="button is-block is-info is-large is-fullwidth">Save</button>
        <button @click="changeModal" class="button is-block is-large is-fullwidth">Cancel</button>
      </footer>
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
      this.getData(data)
    },
    data (data) {
      this.getData(this.type)
    }
  },
  computed: {
    dependence () {
      return this.$store.getters['dependence/dependenceDraft']
    }
  },
  methods: {
    create () {
      this.$store.dispatch('dependence/newDependence', this.form)
    },
    update () {
      this.$store.dispatch('dependence/update', this.form).then(() => {
        this.changeModal()
      })
    },
    getDependences () {
      this.$store.dispatch('dependence/getDependences')
    },
    processFile (e) {
      this.form.photo = e.target.files[0]
      this.preview = URL.createObjectURL(e.target.files[0])
    },
    changeModal () {
      this.$store.dispatch('changeModal')
    },
    getData (type) {
      if (type === 'edit') {
        this.$store.dispatch('dependence/editDependence', this.data, this.index).then(() => {
          if (this.dependence) {
            this.form = this.dependence
            this.preview = this.dependence.photo
          }
        })
      } else {
        this.preview = 'https://st3.depositphotos.com/5266903/12981/v/950/depositphotos_129812138-stock-illustration-management-office-flat-vector-icon.jpg'
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
  }
}
</script>

<style lang="css">
</style>
