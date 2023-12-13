<!-- <template>
  <nav v-if="isUserLoggedIn">
    <div class="navbar">
      <ul class="nav-links">
        <li><router-link to="/home">Adm LancheOnNet</router-link></li>
        <li><router-link to="/add-hamburguer">Adicionar hamburger</router-link></li>
        <li><router-link to="/add-porcoes">Adicionar Porções</router-link></li>
        <li><router-link to="/add-bebidas">Adicionar Bebidas</router-link></li>
        <li><router-link to="/atualiza-hamburguer">Atualizar Hambúrguer</router-link></li>
        <li><router-link to="/atualiza-bebidas">Atualizar bebidas</router-link></li>
        <li><router-link to="/atualiza-porcoes">Atualizar porções</router-link></li>
        <li><router-link to="/gerenciar">Gerenciar Pedidos</router-link></li>
        <li><router-link to="/Prontos">Pedidos Prontos</router-link></li>

        <li class="logout" @click="logout">Logout</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const isUserLoggedIn = ref(false);

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  isUserLoggedIn.value = !!localStorage.getItem("token");
});


const redirectToLogin = () => {
  router.push("/"); 
};


const logout = () => {
  
  localStorage.removeItem("token");
  isUserLoggedIn.value = false;
  redirectToLogin();
};


watch(
  () => route.path,
  () => {
    
    isUserLoggedIn.value = !!localStorage.getItem("token");
  }
);


const login = () => {
  
  const token = "8f9cf2b3-5747-4b60-a771-145d6d1eef00"; 
  localStorage.setItem("token", token);
  isUserLoggedIn.value = true; 

  router.push("/home"); 
};
</script>


<style>
nav {
  display: flex;
  justify-content: center;
  background-color: var(--sec-gray);
  top: 0; 
  width: 100vw; 
  border-bottom: 0.5rem solid var(--main-gray);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
} 

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links li {
  padding: 0.5rem;
}

a {
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

a:hover, li:hover {
  color: var(--main-yellow);
  cursor: pointer;
}

.logout:hover{
  color: var(--main-red);
}
</style> -->

<template>
  <nav v-if="isUserLoggedIn">
    <div class="navbar">
      <div class="brand" @click="goToHome">
        <img src="https://cdn-icons-png.flaticon.com/512/4479/4479138.png" alt="Lance On Net Logo" class="logo-img">
        <span class="brand-text">Admin</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/add-hamburguer">Adicionar Hambúrguer</router-link></li>
        <li><router-link to="/add-porcoes">Adicionar Porções</router-link></li>
        <li><router-link to="/add-bebidas">Adicionar Bebidas</router-link></li>
        <li><router-link to="/atualiza-hamburguer">Atualizar Hambúrguer</router-link></li>
        <li><router-link to="/atualiza-bebidas">Atualizar Bebidas</router-link></li>
        <li><router-link to="/atualiza-porcoes">Atualizar Porções</router-link></li>
        <li><router-link to="/gerenciar">Gerenciar Pedidos</router-link></li>
        <li class="logout" @click="logout"><i class="fas fa-door-open"></i></li>
      </ul>
    </div>
  </nav>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isUserLoggedIn = ref(false);

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  isUserLoggedIn.value = !!localStorage.getItem("token");
});

const redirectToLogin = () => {
  router.push("/");
};

const logout = () => {
  localStorage.removeItem("token");
  isUserLoggedIn.value = false;
  redirectToLogin();
};

const goToHome = () => {
  router.push("/home");
};

watch(
  () => route.path,
  () => {
    isUserLoggedIn.value = !!localStorage.getItem("token");
  }
);

const login = () => {
  const token = "8f9cf2b3-5747-4b60-a771-145d6d1eef00";
  localStorage.setItem("token", token);
  isUserLoggedIn.value = true;
  router.push("/home");
};
</script>

<style>
/* Estilos gerais do aplicativo podem ser adicionados aqui */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f39544;
  border-bottom: 0.5rem solid #333; /* Dark gray color */
}

.brand {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.brand-text {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links li {
  padding: 0.5rem;
  margin-left: 23px;
}

a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
}

a:hover, li:hover {
  color: #333; /* Dark gray color */
  cursor: pointer;
}

.logout {
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
}

.logout:hover {
  color: #ff5c5c; /* Light red color */
}

/* Adicione este estilo para usar o ícone de porta */
.logout i {
  font-size: 20px;
  margin-right: 5px;
}
</style>
