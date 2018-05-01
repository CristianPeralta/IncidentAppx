<template lang="html">
  <div class="box has-text-centered">
    <div class="">
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

      <div class="field" v-if="form.status !== null">
        <div class="control">
          <select v-model="form.status" class="input select" placeholder="status">
            <option :value="false">Unable</option>
            <option :value="true">Enable</option>
          </select>
        </div>
      </div>

      <div class="field" v-if="type == 'create'">
        <div class="control">
          <input class="input is-large" type="password" v-model="form.password" placeholder="Your Password">
        </div>
      </div>

      <div class="field" v-if="type == 'create'">
        <div class="control">
          <input class="input is-large" type="password" v-model="passwordDraft" placeholder="Confirm Password">
        </div>
      </div>
    </div>

      <footer class="modal-card-foot">
        <button v-if="type == 'create'" @click="create()" class="button is-block is-info is-large is-fullwidth">Sign Me Up</button>
        <button v-if="type == 'edit'" @click="update()" class="button is-block is-info is-large is-fullwidth">Save</button>
        <button @click="changeModal" class="button is-block is-large is-fullwidth">Cancel</button>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
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
  watch: {
    type (data) {
      this.getData(data)
    },
    data (data) {
      this.getData(this.type)
    }
  },
  created () {
    this.getDependences()
  },
  computed: {
    allDependences () {
      return this.$store.getters['dependence/dependences']
    },
    user () {
      return this.$store.getters['user/userDraft']
    }
  },
  methods: {
    create () {
      if (this.form.password === this.passwordDraft) {
        this.$store.dispatch('user/signup', this.form)
      } else {
        alert('Password doesnt match')
      }
    },
    update () {
      this.$store.dispatch('user/update', this.form).then(() => {
        this.$store.dispatch('changeModal')
      })
    },
    getDependences () {
      this.$store.dispatch('dependence/getDependences')
    },
    changeModal () {
      this.$store.dispatch('changeModal')
    },
    getData (type) {
      if (type === 'edit') {
        this.$store.dispatch('user/edit', this.data).then(() => {
          if (this.user) {
            this.form = this.user
            this.form.dependence = this.user.dependence._id
          }
        })
      } else {
        this.form = {
          name: '',
          lastname: '',
          dni: '',
          email: '',
          cellphone: '',
          dependence: '',
          password: ''
        }
      }
    }
  }
}
</script>

<style>
</style>
