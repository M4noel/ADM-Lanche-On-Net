   <!-- <template>
    <div class="container">
      <h2>Atualizar Bebidas</h2>
      <input class="search" v-model="search" placeholder="Pesquisa pelo Nome">
      <button @click="searchBebidas">Pesquisar</button>
      <ul v-if="showBebidas">
        <li v-for="bebida in bebidas" :key="bebida._id">
          <div v-if="bebida.display">
            <img :src="getFullImageUrl(bebida.img)" alt="Imagem da Bebida" width="100">
            <input v-model="bebida.name">
            <input v-model="bebida.price" type="number" step="0.01">
            <textarea v-model="bebida.description"></textarea>
            <input type="file" name="file" @change="handleFileChange(bebida)">
            <button @click="updateBebida(bebida)">Atualizar a Bebida</button>
            <button @click="deleteBebida(bebida._id)">Excluir Bebida</button>
          </div>
        </li>
      </ul>
      <router-link to="/add-bebidas">
        <button class="my-button">Atualizar Bebidas</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bebidas: [],
        search: "",
        showBebidas: false,
      };
    },
    methods: {
      getFullImageUrl(src) {
        return `http://localhost:4000/${src}`;
      },
      fetchBebidas() {
        fetch("http://localhost:4000/bebidas")
          .then((response) => response.json())
          .then((data) => {
            this.bebidas = data.map(bebida => ({
              ...bebida,
              display: true
            }));
          })
          .catch((error) => console.error(error));
      },
      searchBebidas() {
        if (this.search) {
          this.bebidas.forEach(bebida => {
            bebida.display = bebida.name.toLowerCase().includes(this.search.toLowerCase());
          });
          this.showBebidas = true;
        } else {
          this.bebidas.forEach(bebida => {
            bebida.display = true;
          });
          this.showBebidas = false;
        }
      },
      updateBebida(bebida) {
        fetch(`http://localhost:4000/bebidas/${bebida._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bebida),
        })
          .then((response) => response.json())
          .then((data) => {
            const index = this.bebidas.findIndex(item => item._id === bebida._id);
            if (index !== -1) {
              this.bebidas[index] = data;
            }
          })
          .catch((error) => console.error(error));
      },
      deleteBebida(bebidaId) {
        fetch(`http://localhost:4000/bebidas/${bebidaId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            this.bebidas = this.bebidas.filter(item => item._id !== bebidaId);
          })
          .catch((error) => console.error(error));
      },
      handleFileChange(bebida) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        const bebidaId = bebida._id;
  
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
  
          fetch(`http://localhost:4000/bebidas/${bebidaId}`, {
            method: "PUT",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              const index = this.bebidas.findIndex(item => item._id === bebidaId);
              if (index !== -1) {
                this.bebidas[index] = data;
              }
            })
            .catch((error) => console.error(error));
        }
      },
    },
    created() {
      this.fetchBebidas();
    },
  };
  </script>
   <style>
   
   </style> 

   -->

   <template>
    <div class="container">
      <h2>Atualizar Bebidas</h2>
      <div class="search-container">
        <input class="search" v-model="search" placeholder="Pesquisa pelo Nome">
        <button @click="searchBebidas">Pesquisar</button>
      </div>
      <ul v-if="showBebidas">
        <li v-for="bebida in bebidas" :key="bebida._id">
          <div v-if="bebida.display" class="bebida-item">
            <img :src="getFullImageUrl(bebida.img)" alt="Imagem da Bebida" width="100">
            <div class="info-container">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input v-model="bebida.name">
              </div>
              <div class="form-group">
                <label for="price">Preço:</label>
                <input type="number" v-model="bebida.price" step="0.01">
              </div>
              <div class="form-group">
                <label for="description">Descrição:</label>
                <textarea v-model="bebida.description"></textarea>
              </div>
              <div class="form-group">
                <label for="image">Imagem:</label>
                <input type="file" name="file" @change="handleFileChange(bebida)">
              </div>
              <div class="button-group">
                <button @click="updateBebida(bebida)">Atualizar Bebida</button>
                <button @click="deleteBebida(bebida._id)" class="excluir">Excluir Bebida</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <router-link to="/add-bebidas">
        <!-- <button class="my-button">Adicionar Bebida</button> -->
      </router-link>
      <div v-if="showSuccessMessage" class="success-message">
        Bebida atualizada com sucesso!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bebidas: [],
        search: "",
        showBebidas: false,
        showSuccessMessage: false,
      };
    },
    methods: {
      getFullImageUrl(src) {
        return `http://localhost:4000/${src}`;
      },
      fetchBebidas() {
        fetch("http://localhost:4000/bebidas")
          .then((response) => response.json())
          .then((data) => {
            this.bebidas = data.map(bebida => ({
              ...bebida,
              display: true
            }));
          })
          .catch((error) => console.error(error));
      },
      searchBebidas() {
        if (this.search) {
          this.bebidas.forEach(bebida => {
            bebida.display = bebida.name.toLowerCase().includes(this.search.toLowerCase());
          });
          this.showBebidas = true;
        } else {
          this.bebidas.forEach(bebida => {
            bebida.display = true;
          });
          this.showBebidas = false;
        }
      },
      updateBebida(bebida) {
        fetch(`http://localhost:4000/bebidas/${bebida._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bebida),
        })
          .then((response) => response.json())
          .then((data) => {
            const index = this.bebidas.findIndex(item => item._id === bebida._id);
            if (index !== -1) {
              this.bebidas[index] = data;
            }
            this.showSuccessMessage = true;
          })
          .catch((error) => console.error(error));
      },
      deleteBebida(bebidaId) {
        fetch(`http://localhost:4000/bebidas/${bebidaId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            this.bebidas = this.bebidas.filter(item => item._id !== bebidaId);
          })
          .catch((error) => console.error(error));
      },
      handleFileChange(bebida) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        const bebidaId = bebida._id;
  
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
  
          fetch(`http://localhost:4000/bebidas/${bebidaId}`, {
            method: "PUT",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              const index = this.bebidas.findIndex(item => item._id === bebidaId);
              if (index !== -1) {
                this.bebidas[index] = data;
              }
            })
            .catch((error) => console.error(error));
        }
      },
    },
    created() {
      this.fetchBebidas();
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
    margin-top: 110px;
  }
  
  h2 {
    color: #333;
  }
  
  .search-container {
    margin-bottom: 20px;
  }
  
  .search {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px;
    background-color: #f58220;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .my-button {
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .excluir {
    padding: 8px;
    background-color: #f52020;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  .bebida-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-direction: column;
  }
  
  img {
    margin-right: 20px;
    padding-bottom: 15px;
    width: 40%;
  }
  
  .info-container {
    width: 100%;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  
  .button-group button {
    margin-right: 10px;
  }
  
  .label {
    display: flex;
  }
  
  .success-message {
    margin-top: 10px;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
  }
  label{
    display: flex;
  }
  </style>
  