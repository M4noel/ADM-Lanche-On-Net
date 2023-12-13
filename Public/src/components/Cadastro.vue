<!-- <template>
  <div class="container">
    <h1>Cadastro</h1>
    <form @submit.prevent="handleRegister">
      <input class="input-login" v-model="name" type="text" placeholder="Nome" required>
      <input class="input-login" v-model="email" type="email" placeholder="E-mail" required>
      <input class="input-login" v-model="password" type="password" placeholder="Senha" required>
      <input class="input-login" v-model="confirmPassword" type="password" placeholder="Confirmar Senha" required>
      <button type="submit">Registrar</button>
    </form>
    
    <router-link to="/">
        <button>Voltar para o Login</button>
      </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: null,
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'As senhas não conferem!';
        return;
      }

      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword, 
      };

      try {
      
        const response = await axios.post('http://localhost:7000/auth/register', userData);

        if (response.status === 201) {
          
          this.$router.push('/');
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
         
          this.errorMessage = error.response.data.msg;
        } else {
         
          this.errorMessage = 'Erro no registro. Tente novamente mais tarde.';
          console.error('Erro no registro:', error);
        }
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
  <div class="register-container">
    <div class="logo-container">
      <img src="https://cdn-icons-png.flaticon.com/512/4479/4479138.png" alt="Lance On Net Logo" class="logo-img">
      <div class="logos-name">
        <span class="logo-text">Lanche On Net </span>
        <span class="text">Admin</span>
      </div>
    </div>
    <div class="register-form-container">
      <h3 class="login-title">Cadastro</h3>
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input class="input-register" v-model="name" type="text" placeholder="Seu nome" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input class="input-register" v-model="email" type="email" placeholder="Seu e-mail" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input class="input-register" v-model="password" type="password" placeholder="Sua senha" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Senha:</label>
          <input class="input-register" v-model="confirmPassword" type="password" placeholder="Confirme sua senha" required>
        </div>
        <button type="submit" class="register-button">Registrar</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <router-link to="/" class="login-link">
        <button class="login-button">Voltar para o Login</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: null,
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'As senhas não conferem!';
        return;
      }

      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      try {
        const response = await axios.post('http://localhost:7000/auth/register', userData);

        if (response.status === 201) {
          this.$router.push('/');
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errorMessage = error.response.data.msg;
        } else {
          this.errorMessage = 'Erro no registro. Tente novamente mais tarde.';
          console.error('Erro no registro:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.login-title{
  font-size: 40px;
  padding: 7px;
}
.register-container {
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
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.logo-text {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}

.register-form-container {
  text-align: center;
  background-color: rgb(255 255 255);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 425px;
  height: auto;
  border-radius: 20px;
  
}

.input-register {
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  box-sizing: border-box;
}

.register-button {
  background-color: #333;
  color: #fff;
  padding: 10px 70px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.login-link {
  display: block;
  margin-top: 20px;
  text-decoration: none;
}

.login-button {
  background-color: #f58220;
  color: #fff;
  padding: 10px 123px;
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
.logos-name{
  display: flex;
  flex-direction: column;
}
.text{
  font-size: 19px;
  color: #fff9f9;
}
</style>
