<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        Home
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              Login
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/register">
              Sign up
            </router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item" style="cursor: pointer;" @click="logout">
            Logout
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Nav',

  computed: {
    ...mapState(['user'])
  },

  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('setUser', null);
      if (this.$route.path !== '/') this.$router.push('/');
    }
  },
};
</script>

<style></style>
