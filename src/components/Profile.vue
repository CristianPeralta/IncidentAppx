<template lang="html">
  <div class="box has-text-centered">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Name</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input disabled class="input" type="text" :value="user.name">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input disabled class="input is-success" type="email" placeholder="Email" :value="user.email">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                +51
              </a>
            </p>
            <p class="control is-expanded">
              <input disabled class="input" type="tel" :value="user.cellphone">
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Dependence</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            {{user.dependence.name}}
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Role</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            {{user.role}}
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">DNI</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input disabled class="input" type="text" :value="user.dni">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user () {
      return JSON.parse(this.$store.getters['user/user'])
    }
  }
}
</script>

<style lang="css">
</style>
