<!-- <template>
  <div class="container">
    <h2>Atualizar Hamburguer</h2>
    <input class="search" v-model="search" placeholder="Pesquisa pelo Nome">
    <button @click="searchHamburgers">Pesquisar</button>
    <ul v-if="showHamburgers">
      <li v-for="hamburger in hamburgers" :key="hamburger._id">
        <div v-if="hamburger.display">
          <img :src="getFullImageUrl(hamburger.img)" alt="Hamburger Image" width="100">
          <input v-model="hamburger.name">
          <input v-model="hamburger.price" type="number" step="0.01">
          <textarea v-model="hamburger.description"></textarea>
          <input type="file" name="file" @change="handleFileChange(hamburger)">
          <button @click="updateHamburger(hamburger)">Update Hamburger</button>
          <button @click="deleteHamburger(hamburger._id)">Delete Hamburger</button>
        </div>
      </li>
    </ul>
    <router-link to="/add-hamburguer">
      <button class="my-button">Atualizar Hamburger</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburgers: [],
      search: "",
      showHamburgers: false,
    };
  },
  methods: {
    getFullImageUrl(src) {
      return `http://localhost:4000/${src}`;
    },
    searchHamburgers() {
      if (this.search) {
        this.hamburgers.forEach(hamburger => {
          hamburger.display = hamburger.name.toLowerCase().includes(this.search.toLowerCase());
        });
        this.showHamburgers = true;
      } else {
        this.hamburgers.forEach(hamburger => {
          hamburger.display = true;
        });
        this.showHamburgers = false;
      }
    },
    handleFileChange(hamburger) {
      const fileInput = event.target;
      const file = fileInput.files[0];
      const hamburgerId = hamburger._id;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        fetch(`http://localhost:4000/combos/${hamburgerId}`, {
          method: "PUT",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            const index = this.hamburgers.findIndex(item => item._id === hamburgerId);
            if (index !== -1) {
              this.hamburgers[index] = data;
            }
          })
          .catch((error) => console.error(error));
      }
    },
    updateHamburger(hamburger) {
      fetch(`http://localhost:4000/combos/${hamburger._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hamburger),
      })
        .then((response) => response.json())
        .then((data) => {
          const index = this.hamburgers.findIndex(item => item._id === hamburger._id);
          if (index !== -1) {
            this.hamburgers[index] = data;
          }
        })
        .catch((error) => console.error(error));
    },
    deleteHamburger(hamburgerId) {
      fetch(`http://localhost:4000/combos/${hamburgerId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          this.hamburgers = this.hamburgers.filter(item => item._id !== hamburgerId);
        })
        .catch((error) => console.error(error));
    },
    fetchHamburgers() {
      fetch("http://localhost:4000/combos")
        .then((response) => response.json())
        .then((data) => {
          this.hamburgers = data.map(hamburger => ({
            ...hamburger,
            display: true
          }));
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.fetchHamburgers();
  },
};
</script>

<style>
</style>
 -->

 <template>
  <div class="container">
    <h2>Atualizar Hambúrguer</h2>
    <div class="search-container">
      <input class="search" v-model="search" placeholder="Pesquisa pelo Nome">
      <button @click="searchHamburgers">Pesquisar</button>
    </div>
    <ul v-if="showHamburgers">
      <li v-for="hamburger in hamburgers" :key="hamburger._id">
        <div v-if="hamburger.display" class="hamburger-item">
          <img :src="getFullImageUrl(hamburger.img)" alt="Hamburguer Image" width="100">
          <div class="info-container">
            <div class="form-group">
              <label for="name">Nome:</label>
              <input v-model="hamburger.name">
            </div>
            <div class="form-group">
              <label for="price">Preço:</label>
              <input type="number" v-model="hamburger.price" step="0.01">
            </div>
            <div class="form-group">
              <label for="description">Descrição:</label>
              <textarea v-model="hamburger.description"></textarea>
            </div>
            <div class="form-group">
              <label for="image">Imagem:</label>
              <input type="file" name="file" @change="handleFileChange(hamburger)">
            </div>
            <div class="button-group">
              <button @click="updateHamburger(hamburger)">Atualizar Hambúrguer</button>
              <button @click="deleteHamburger(hamburger._id)" class="excluir">Excluir Hambúrguer</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="showSuccessMessage" class="success-message">
      Hambúrguer atualizado com sucesso!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburgers: [],
      search: "",
      showHamburgers: false,
      showSuccessMessage: false,
    };
  },
  methods: {
    getFullImageUrl(src) {
      return `http://localhost:4000/${src}`;
    },
    searchHamburgers() {
      if (this.search) {
        this.hamburgers.forEach(hamburger => {
          hamburger.display = hamburger.name.toLowerCase().includes(this.search.toLowerCase());
        });
        this.showHamburgers = true;
      } else {
        this.hamburgers.forEach(hamburger => {
          hamburger.display = true;
        });
        this.showHamburgers = false;
      }
    },
    handleFileChange(hamburger) {
      const fileInput = event.target;
      const file = fileInput.files[0];
      const hamburgerId = hamburger._id;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        fetch(`http://localhost:4000/combos/${hamburgerId}`, {
          method: "PUT",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            const index = this.hamburgers.findIndex(item => item._id === hamburgerId);
            if (index !== -1) {
              this.hamburgers[index] = data;
            }
            this.showSuccessMessage = true; // Exibe a mensagem de sucesso
          })
          .catch((error) => console.error(error));
      }
    },
    updateHamburger(hamburger) {
      fetch(`http://localhost:4000/combos/${hamburger._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hamburger),
      })
        .then((response) => response.json())
        .then((data) => {
          const index = this.hamburgers.findIndex(item => item._id === hamburger._id);
          if (index !== -1) {
            this.hamburgers[index] = data;
          }
          this.showSuccessMessage = true; // Exibe a mensagem de sucesso
        })
        .catch((error) => console.error(error));
    },
    deleteHamburger(hamburgerId) {
      fetch(`http://localhost:4000/combos/${hamburgerId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          this.hamburgers = this.hamburgers.filter(item => item._id !== hamburgerId);
        })
        .catch((error) => console.error(error));
    },
    fetchHamburgers() {
      fetch("http://localhost:4000/combos")
        .then((response) => response.json())
        .then((data) => {
          this.hamburgers = data.map(hamburger => ({
            ...hamburger,
            display: true
          }));
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.fetchHamburgers();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, #e5b891, #fedea5);
  font-family: 'Arial', sans-serif; 
}

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

.excluir{
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

.hamburger-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}

img {
  margin-right: 20px;
  padding-bottom: 15px;
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
label{
  display: flex;
}

.success-message {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
}
</style>
