<template lang="html">
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          OSIS
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="admin.html">
            Home
          </a>
          <a class="navbar-item" href="admin.html">
            Orders
          </a>
          <a class="navbar-item" href="admin.html">
            Payments
          </a>
          <a class="navbar-item" href="admin.html">
            Exceptions
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown" :class="{'is-active': isActive}">
            <a class="navbar-link" @click="changeStatus">
              {{user.name}}
            </a>
            <div class="navbar-dropdown is-right">
              <a @click="profileStatus" class="navbar-item">
                Perfil
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                <a @click="logout">Salir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal :active="profileActive" title="User Profile">
      <Profile></Profile>
    </Modal>
  </nav>
</template>

<script>
import Modal from '../Modal'
import Profile from '../Profile'

export default {
  name: 'TheNav',
  data () {
    return {
      isActive: false,
      profileActive: false
    }
  },
  computed: {
    user () {
      return JSON.parse(this.$store.getters['user/user'])
    }
  },
  components: {
    Modal,
    Profile
  },
  methods: {
    changeStatus () {
      this.isActive = !this.isActive
    },
    profileStatus () {
      this.profileActive = !this.profileActive
    },
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="css">
</style>
