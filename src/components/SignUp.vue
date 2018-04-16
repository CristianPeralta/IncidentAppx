<template lang="html">
  <section class="hero is-fullheight container">
    <div class=""></div>
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Sign Up</h3>
          <div class="box">
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
          <p class="has-text-grey">
            <router-link to="/" exact>
              <a>Sign In</a> &nbsp;·&nbsp;
            </router-link>
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
  </section>
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
      return this.$store.state.dependences
    }
  },
  methods: {
    sendForm () {
      if (this.form.password === this.passwordDraft) {
        this.$dispatch('signup', this.form)
      } else {
        alert('Password doesnt match')
      }
    },
    getDependences () {
      this.$store.dispatch('getDependences')
    }
  }
}
</script>

<style>
</style>
