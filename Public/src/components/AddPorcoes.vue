<!-- <template>
  <div class="container">
    <h2>Adicionar Porção</h2>
    <form @submit.prevent="updatePorcao">
      <div class="quantidade">
        <label for="quantity">ID:</label>
        <input type="text" id="quantity" v-model="porcaoData.quantity" required>
      </div>
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="porcaoData.name" required>
      </div>
      <div>
        <label for="description">Descrição:</label>
        <input type="text" id="description" v-model="porcaoData.description">
      </div>
      <div>
        <label for="price">Preço:</label>
        <input type="number" id="price" v-model="porcaoData.price" required>
      </div>
      <div>
        <label for="image">Imagem: </label>
        <input type="file" id="image" @change="handleFileUpload">
      </div>
      <button type="submit">Adicionar Porção</button>

      
      <p v-if="showErrorMessage" class="error-message"> Preencha todos os campos antes de enviar.</p>

      <p v-if="showSuccessMessage" class="success-message">Porção Adicionada com sucesso!</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      porcaoData: {
        quantity: 1,
        name: '',
        description: '',
        price: null,
        image: null,
        id: null
      },
      showErrorMessage: true,
      showSuccessMessage: false,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.porcaoData.image = event.target.files[0];
    },
    updatePorcao() {
      
      if (!this.validateForm()) {
        this.showErrorMessage = true;
        return;
      }

      this.showErrorMessage = false;
      this.showSuccessMessage = false;

      const formData = new FormData();
      formData.append('quantity', this.porcaoData.quantity);
      formData.append('name', this.porcaoData.name);
      formData.append('description', this.porcaoData.description);
      formData.append('price', this.porcaoData.price);
      formData.append('file', this.porcaoData.image);

      axios.post(`http://localhost:4000/porcao`, formData)
        .then(response => {
          console.log('Porção atualizada com sucesso:', response.data);
          this.showSuccessMessage = true;
        })
        .catch(error => {
          console.error('Erro ao atualizar a porção:', error);
          this.showErrorMessage = true;
        });
    },
    validateForm() {
      
      return (
        this.porcaoData.quantity !== '' &&
        this.porcaoData.name !== '' &&
        this.porcaoData.price !== null
        
      );
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
    <h2>Adicionar Porção</h2>
    <form @submit.prevent="addPorcao" class="form">
      <div class="form-group">
        <input type="number" id="quantity" v-model="porcaoData.quantity" required>
      </div>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="porcaoData.name" required>
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <input type="text" id="description" v-model="porcaoData.description">
      </div>
      <div class="form-group">
        <label for="price">Preço</label>
        <input type="number" id="price" v-model="porcaoData.price" required>
      </div>
      <div class="form-group">
        <label for="image">Imagem</label>
        <input type="file" id="image" @change="handleFileUpload" required>
      </div>
      <p v-if="showErrorMessage" class="error-message">Preencha todos os campos antes de enviar.</p>
      <p v-if="showSuccessMessage" class="success-message">Porção adicionada com sucesso!</p>
      <button type="submit" class="submit-button">Adicionar Porção</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      porcaoData: {
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
      this.porcaoData.image = event.target.files[0];
    },
    addPorcao() {
      this.showErrorMessage = false;
      this.showSuccessMessage = false;

      const formData = new FormData();
      formData.append('quantity', this.porcaoData.quantity);
      formData.append('name', this.porcaoData.name);
      formData.append('description', this.porcaoData.description);
      formData.append('price', this.porcaoData.price);
      formData.append('file', this.porcaoData.image);

      axios.post('http://localhost:4000/porcao', formData)
        .then(response => {
          console.log('Porção adicionada com sucesso:', response.data);

          this.showSuccessMessage = true;

          // Resetar os valores do formulário
          this.porcaoData = {
            quantity: 1,
            name: '',
            description: '',
            price: null,
            image: null,
          };
        })
        .catch(error => {
          console.error('Erro ao adicionar a porção:', error);
          this.showErrorMessage = true;
        });
    },
  },
};
</script>

<style scoped>
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
#quantity{
  display: none;
}
</style>
