export const loginMixin = { 
  methods: {
    login() {
      this.$store.dispatch('login', {email: this.user.email, senha: this.user.password})
        .then(() => {
          this.$router.push({ name: 'gerentes' });
           this.errorMessage = '';
        })
        .catch(err => {
          if (err.request.status == 401) {
            this.errorMessage = "Login ou senha inválido(s)!!!";
          }
        });
    }
  }
}

export const logoutMixin = {
  methods: {
    logout() {
      this.$store.commit('SET_LOGOUT_USER');
      this.$router.push({ name: 'login' });
    }
  }
}

export const listManagersMixin = {
  mounted() {
    this.$store.dispatch('getManagers')
      .then(() => null)
  }
}