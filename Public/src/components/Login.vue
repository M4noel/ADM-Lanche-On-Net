<!-- <template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input class="input-login" v-model="email" type="email" placeholder="E-mail" required>
      <input class="input-login" v-model="password" type="password" placeholder="Senha" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <router-link to="/cadastro">
      <button class="my-button">Cadastrar</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async login() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      try {
        
        const response = await axios.post('http://localhost:7000/auth/login', userData);

        if (response.status === 200) {
          
          localStorage.setItem('token', response.data.token);

          
          this.$router.push('/home'); 
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = 'Autenticação falhou. Verifique suas credenciais.';
          } else if (error.response.status === 404) {
            this.errorMessage = 'Usuário não encontrado';
          } else if (error.response.status === 422) {
            this.errorMessage = 'Senha inválida';
          } else {
            this.errorMessage = 'Erro no login. Tente novamente mais tarde.';
          }
        } else {
          this.errorMessage = 'Erro no login. Tente novamente mais tarde.';
        }
        console.error('Erro no login:', error);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style> -->

<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="https://cdn-icons-png.flaticon.com/512/4479/4479138.png" alt="Lance On Net Logo" class="logo-img">
      <div class="logos-name">
        <span class="logo-text">Lanche On Net </span>
        <span class="text">Admin</span>
      </div>
    </div>
    <div class="login-form-container">
      <h3 class="login-title"> Login</h3>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input class="input-login" v-model="email" type="email" placeholder="Seu e-mail" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input class="input-login" v-model="password" type="password" placeholder="Sua senha" required>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <router-link to="/cadastro" class="register-link">
        <button class="register-button">Cadastre-se</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async login() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      try {
        
        const response = await axios.post('http://localhost:7000/auth/login', userData);

        if (response.status === 200) {
          
          localStorage.setItem('token', response.data.token);

          
          this.$router.push('/home'); 
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = 'Autenticação falhou. Verifique suas credenciais.';
          } else if (error.response.status === 404) {
            this.errorMessage = 'Usuário não encontrado';
          } else if (error.response.status === 422) {
            this.errorMessage = 'Senha inválida';
          } else {
            this.errorMessage = 'Erro no login. Tente novamente mais tarde.';
          }
        } else {
          this.errorMessage = 'Erro no login. Tente novamente mais tarde.';
        }
        console.error('Erro no login:', error);
      }
    },
  },
};
</script>
<style scoped>
.logos-name{
  display: flex;
  flex-direction: column;
}
.text{
  font-size: 19px;
  color: #fff9f9;
}
.login-title{
  font-size: 40px;
  padding: 7px;
}
.login-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
  background-image: url("https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp"); 
  background-size: cover;
  background-position: center;
}

.logo-container {
  position: absolute;
  top: 20px; 
  left: 20px; 
  display: flex;
  align-items: center;
}

.logo-img {
  width: 54px; 
  height: auto; 
  margin-right: 10px; 
}

.logo-text {
  font-size: 30px; 
  font-weight: bold;
  color: #fff; 
}

.login-form-container {
  text-align: center;
  background-color: rgb(255 255 255);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 425px;
  height: 466px;
  border-radius: 20px;
}

.input-login {
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  box-sizing: border-box;
}

.login-button {
  background-color: #f58220; 
  color: #fff;
  padding: 10px 123px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 33px;
}

.register-link {
  display: block;
  margin-top: 20px;
  text-decoration: none;
}

.register-button {
  background-color: #333; 
  color: #fff;
  padding: 10px 70px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.error {
  color: red;
}
label{
  display: flex;
  font-size: 21px;
}
</style>
