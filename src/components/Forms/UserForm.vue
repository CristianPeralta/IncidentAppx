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

      <button @click="sendForm()" class="button is-block is-info is-large is-fullwidth">Sign Me Up</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
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
      return this.$store.state['dependence/dependences']
    }
  },
  methods: {
    sendForm () {
      if (this.form.password === this.passwordDraft) {
        this.$store.dispatch('signup', this.form)
      } else {
        alert('Password doesnt match')
      }
    },
    getDependences () {
      this.$store.dispatch('dependence/getDependences')
    }
  }
}
</script>

<style>
</style>
