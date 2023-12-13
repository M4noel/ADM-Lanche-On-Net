<!-- <template>
  <div class="container">
    <h2>Adicionar Bebida</h2>
    <form @submit.prevent="addBebida">
      <div class="quantidade">
        <label for="quantity">Quantidade:</label>
        <input type="text" id="quantity" v-model="bebidaData.quantity" required>
      </div>
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="bebidaData.name" required>
      </div>
      <div>
        <label for="description">Descrição:</label>
        <input type="text" id="description" v-model="bebidaData.description" required>
      </div>
      <div>
        <label for="price">Preço:</label>
        <input type="number" id="price" v-model="bebidaData.price" required>
      </div>
      <div>
        <label for="image">Imagem: </label>
        <input type="file" id="image" @change="handleFileUpload" required>
      </div>
      <button type="submit">Adicionar Bebida</button>
      
      <p v-if="showErrorMessage" class="error-message">Preencha todos os campos antes de enviar.</p>
      
      <p v-if="showSuccessMessage" class="success-message">Bebida adicionada com sucesso!</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bebidaData: {
        quantity: 1,
        name: '',
        description: '',
        price: null,
        image: null,
      },
      showErrorMessage: true, 
      showSuccessMessage: false, 
    };
  },
  methods: {
    handleFileUpload(event) {
      this.bebidaData.image = event.target.files[0];
    },
    addBebida() {
     
      this.showErrorMessage = false;

      const formData = new FormData();
      formData.append('quantity', this.bebidaData.quantity);
      formData.append('name', this.bebidaData.name);
      formData.append('description', this.bebidaData.description);
      formData.append('price', this.bebidaData.price);
      formData.append('file', this.bebidaData.image);

      axios.post('http://localhost:4000/bebidas', formData)
        .then(response => {
          console.log('Bebida adicionada com sucesso:', response.data);
      
          this.bebidaData = {
            quantity: 1,
            name: '',
            description: '',
            price: null,
            image: null,
          };
    
          this.showSuccessMessage = true;
        })
        .catch(error => {
          console.error('Erro ao adicionar a bebida:', error);
        });
    },
  },
};
</script>

<style>
.quantidade {
  display: none;
}
.error-message,
.success-message {
  margin-top: 10px;
}
.error-message {
  color: red;
}
.success-message {
  color: green;
}
</style> -->

<template>
  <div class="container">
    <h2>Adicionar Bebida</h2>
    <form @submit.prevent="addBebida" class="form">
      <div class="form-group">
        <input type="number" id="quantity" v-model="bebidaData.quantity" required>
      </div>
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="bebidaData.name" required>
      </div>
      <div class="form-group">
        <label for="description">Descrição:</label>
        <input type="text" id="description" v-model="bebidaData.description" required>
      </div>
      <div class="form-group">
        <label for="price">Preço:</label>
        <input type="number" id="price" v-model="bebidaData.price" required>
      </div>
      <div class="form-group">
        <label for="image">Imagem: </label>
        <input type="file" id="image" @change="handleFileUpload" required>
      </div>
      <p v-if="showErrorMessage" class="error-message">Preencha todos os campos antes de enviar.</p>
      <p v-if="showSuccessMessage" class="success-message">Bebida adicionada com sucesso!</p>
      <button type="submit" class="submit-button">Adicionar Bebida</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      bebidaData: {
        quantity: 1,
        name: '',
        description: '',
        price: null,
        image: null,
      },
      showErrorMessage: true,
      showSuccessMessage: false,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.bebidaData.image = event.target.files[0];
    },
    addBebida() {
      this.showErrorMessage = false;

      const formData = new FormData();
      formData.append('quantity', this.bebidaData.quantity);
      formData.append('name', this.bebidaData.name);
      formData.append('description', this.bebidaData.description);
      formData.append('price', this.bebidaData.price);
      formData.append('file', this.bebidaData.image);

      axios.post('http://localhost:4000/bebidas', formData)
        .then(response => {
          console.log('Bebida adicionada com sucesso:', response.data);

          this.bebidaData = {
            quantity: 1,
            name: '',
            description: '',
            price: null,
            image: null,
          };

          this.showSuccessMessage = true;
        })
        .catch(error => {
          console.error('Erro ao adicionar a bebida:', error);
        });
    },
  },
};
</script>

<style scoped>
#quantity{
  display: none;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

.form {
  display: grid;
  gap: 9px;
}

.form-group {
  display: grid;
  gap: 8px;
}

label {
  font-weight: bold;
  color: #555;
  display: flex;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #f58220;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.error-message,
.success-message {
  margin-top: 10px;
  font-size: 14px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}
</style>
