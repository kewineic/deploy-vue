<template>
<div class="container">
  <h1>Novo Usuário</h1>
  <form @submit.prevent="sendForm" class="">
    <div class="form-group">
      <label for="name">Nome</label>
      <input type="text" class="form-control" v-model="user.name">
    </div>
    <div class="form-group">
      <label for="email">E-mail</label>
      <input type="email" class="form-control" v-model="user.email">
    </div>
    <div class="form-group">
      <label for="password">Senha</label>
      <input type="password" class="form-control" v-model="user.password">
    </div>
    <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
    <button class="btn btn-primary">Cadastrar</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },

      errorMessage: ''
    }
  },

  methods: {
    sendForm() {
      this.$store.dispatch('registerUser', {
        nome: this.user.name,
        email: this.user.email,
        senha: this.user.password
      })
        .then(() =>{ 
          this.$router.push({ name: 'login' });
          this.errorMessage = '';
        })
        .catch(err => {
          if (err.request.status) {
            this.errorMessage = "Email já existente, tente outro!";
          }
        });
    }
  }
}
</script>