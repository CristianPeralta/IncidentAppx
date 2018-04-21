<template lang="html">
  <section class="hero is-fullheight container">
    <div class=""></div>
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Sign Up</h3>
            <UserForm></UserForm>
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
import UserForm from './Forms/UserForm'
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
  components: {
    UserForm
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
        this.$store.dispatch('signup', this.form)
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
