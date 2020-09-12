<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/login">
        Login
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/cadastro" class="nav-link">
        Registre-se
      </router-link>
    </li>
  </ul>
</template>

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