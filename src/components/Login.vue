<template lang="html">
  <section class="hero is-fullheight container">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img height="128" width="128" src='https://www.viniloscasa.com/img/message.png'>
            </figure>
              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model="form.email" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" v-model="form.password" type="password" placeholder="Your Password">
                </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" @click="login()">Login</button>
          </div>
          <p class="has-text-grey">
            <router-link to="/signup" exact>
              <a>Sign Up</a> &nbsp;·&nbsp;
            </router-link>
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Login',
  created () {
    this.getUser()
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser')
    },
    login () {
      this.$store.dispatch('login', this.form).then(() => {
        this.$router.push({name: 'Home'})
      })
    }
  }
}
</script>

<style>
</style>
