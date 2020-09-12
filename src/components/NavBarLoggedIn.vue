<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">
        Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/gerentes" class="nav-link">
        Gerentes
      </router-link>
    </li>
    <a href="#" 
      class="nav-link" 
      @click.prevent="logout"
    >
      Logout
    </a>
  </ul>
</template>

<script>
import { logoutMixin } from '../mixins';

export default {
  mixins: [ logoutMixin ]
}
</script>

<style scoped>
  .navbar {
    background: #27ae60;
  }
  .navbar-bytebank a {
    color: #fff;
  }
  .navbar-bytebank a:hover {
    color: #000;
  }
</style>