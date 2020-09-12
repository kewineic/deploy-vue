<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in listManagersMixin" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '../components/Gerente';
import { mapGetters } from 'vuex';
import { listManagersMixin } from '../mixins';

export default {
  components: {
    Gerente
  },

  computed: {
    ...mapGetters(['listManagers'])
  },

  mixins: [ listManagersMixin ]
  
}
</script>

<style>

</style>