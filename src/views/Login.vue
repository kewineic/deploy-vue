<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">  
      
      <div class="form-group">  
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="user.email">  
      </div>

      <div class="form-group">  
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="user.password">  
      </div>

      <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>

      <button type="submit" class="btn btn-primary brn-block">Entrar</button>

      <router-link :to="{ name: 'register' }">Cadastre-se!</router-link>

    </form>
  </div>
</template>

<script>
import { loginMixin } from '../mixins';

export default {
 data() {
   return {
     user: {
       email: '',
       password: ''
     },
     errorMessage: ''
   }
 },
 
 mixins: [ loginMixin ]
 
}
</script>