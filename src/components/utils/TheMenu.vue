<template lang="html">
  <div class="column is-3">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a class="is-active">Dashboard</a></li>
      </ul>
      <template v-if="isAdmin">
        <p class="menu-label">
          Administración
        </p>
        <ul class="menu-list">
          <li><a>Incidencias</a></li>
          <li><a @click="showUsers">Usuarios</a></li>
          <router-link @click="showUsers" :to="{ path: '/section/usuarios' }">Usuarios Routes</router-link>
          <li><a @click="showSolicitudes">Solicitudes</a></li>
          <router-link @click="showSolicitudes" :to="{ path: '/section/solicitudes' }">Solicitudes Routes</router-link>
          <li><a @click="showDependences">Dependencias</a></li>
          <router-link @click="showDependences" :to="{ path: '/section/dependencias' }">Dependencias Routes</router-link>
        </ul>
      </template>
      <template v-if="isTechnician">
        <p class="menu-label">
          Incidencias
        </p>
        <ul class="menu-list">
          <li><a>Mis Incidencias</a></li>
          <li><a>Sin asignat</a></li>
        </ul>
      </template>
      <p class="menu-label">
        Información
      </p>
      <ul class="menu-list">
        <li><a>FAQ</a></li>
        <li v-if="isAdmin"><a>Reportes</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',
  computed: {
    getRole () {
      return this.$store.getters['user/role']
    },
    isAdmin () {
      return this.$store.getters['user/isAdmin']
    },
    isTechnician () {
      return this.$store.getters['user/isTechnician']
    }
  },
  methods: {
    showUsers () {
      this.$store.dispatch('setSection', 'users')
      this.$store.dispatch('user/getUsers').then(() => {
        this.$store.dispatch('addDatatable', 'users')
      })
    },
    showDependences () {
      this.$store.dispatch('setSection', 'dependences')
      this.$store.dispatch('dependence/getDependences').then(() => {
        this.$store.dispatch('addDatatable', 'dependences')
      })
    },
    showSolicitudes () {
      this.$store.dispatch('setSection', 'solicitudes')
      this.$store.dispatch('user/getSolicitudes').then(() => {
        this.$store.dispatch('addDatatable', 'solicitudes')
      })
    }
  }
}
</script>

<style lang="css">
</style>
