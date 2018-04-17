<template lang="html">
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          Bulma Admin
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
          <div class="navbar-item has-dropdown is-active">
            <a class="navbar-link">
              {{userName}}
            </a>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                Overview
              </a>
              <a class="navbar-item">
                Elements
              </a>
              <a class="navbar-item">
                Components
              </a>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Version 0.7.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
  computed: {
    userName () {
      return this.$state.user.name
    }
  }
}
</script>

<style lang="css">
</style>
