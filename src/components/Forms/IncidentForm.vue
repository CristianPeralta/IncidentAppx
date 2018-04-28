<template lang="html">
  <div class="box has-text-centered">
      <figure class="avatar">
       <img height="128" width="128" src='https://image.flaticon.com/icons/svg/179/179948.svg'>
     </figure>
      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" v-model="form.name" placeholder="Your Name" autofocus="">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" v-model="form.lastname" placeholder="Your Lastname">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" v-model="form.dni" placeholder="Your DNI">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="text" v-model="form.cellphone" placeholder="Your cellphone">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="email" v-model="form.email" placeholder="Your Email">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <select v-model="form.dependence" class="input select" placeholder="dependence">
            <option v-for="(dependence, index) in allDependences" :value="dependence._id" :key="index">{{dependence.acronym}}</option>
          </select>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="password" v-model="form.password" placeholder="Your Password">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input is-large" type="password" v-model="passwordDraft" placeholder="Confirm Password">
        </div>
      </div>
      <footer class="modal-card-foot">
        <button v-if="type == 'create'" @click="sendForm()" class="button is-block is-info is-large is-fullwidth">Sign Me Up</button>
        <button v-if="type == 'edit'" @click="sendForm()" class="button is-block is-info is-large is-fullwidth">Save</button>
        <button @click="changeModal" class="button is-block is-large is-fullwidth">Cancel</button>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  props: ['type', 'data', 'index'],
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        dni: '',
        email: '',
        cellphone: '',
        dependence: '',
        password: ''
      },
      passwordDraft: ''
    }
  },
  created () {
    this.getDependences()
  },
  computed: {
    allDependences () {
      return this.$store.getters['dependence/dependences']
    }
  },
  methods: {
    create () {
      this.$store.dispatch('incident/create', this.form)
    },
    getDependences () {
      this.$store.dispatch('dependence/getDependences')
    },
    getUsers () {
      this.$store.dispatch('USER/getUsers')
    }
    changeModal () {
      this.$store.dispatch('changeModal')
    }
  }
}
</script>

<style>
</style>
