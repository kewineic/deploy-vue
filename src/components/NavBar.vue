<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <NavBarLoggedIn v-if="userIsLogged" />
        <NavBarLogout v-else />
      </div>
    </nav>
</template>

<script>
import NavBarLoggedIn from './NavBarLoggedIn';
import NavBarLogout from './NavBarLogout';
import { mapGetters } from 'vuex';

export default {
  components: {
    NavBarLoggedIn,
    NavBarLogout
  },
  
  computed: {
    ...mapGetters(['userIsLogged'])
  }
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