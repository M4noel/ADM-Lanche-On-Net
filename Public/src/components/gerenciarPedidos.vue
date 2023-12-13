 <template>
  <div class="orders-container">
    <div class="orders-header">
      <h1>Gerenciamento de Pedidos</h1>
    </div>
    <div class="orders-grid">
      <div class="order-card" v-for="(pedido, index) in listaPedidos" :key="index">
        <div class="order-header">
          <h5>Número do Pedido: {{ pedido.numeroPedido }}</h5>
        </div>
        <div class="order-body">
          <div v-for="(item, itemIndex) in pedido.carrinho" :key="itemIndex" class="item">
            <p class="product-name">{{ item.nome }}</p>
            <p class="quantity">{{ item.quantity }}</p>
          </div>
        </div>
        <div class="order-footer">
          <div class="opcao-entrega" :class="{'para-viagem': pedido.opcaoEntrega === 'LEVAR_PARA_CASA', 'comer-no-local': pedido.opcaoEntrega === 'COMER_NO_LOCAL'}">
            <p class="xml">Opção de Entrega:</p> {{ formatarOpcaoEntrega(pedido.opcaoEntrega) }}
          </div>
          <select v-model="pedido.status">
            <option value="PAGO">Pago</option>
            <option value="Em preparação">Em preparação</option>
            <option value="Pronto para retirada">Pronto para retirada</option>
            <option value="Entregue">Entregue</option>
          </select>
          <button @click="() => excluirPedido(pedido.numeroPedido)" class="excluir">Excluir Pedido</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const listaPedidos = ref([]);

const carregarPedidos = async () => {
  try {
    const response = await fetch('http://localhost:4000/pedidos');
    const dados = await response.json();
    listaPedidos.value = dados;
  } catch (error) {
    console.error('Erro ao carregar os pedidos:', error.message);
  }
};

const excluirPedido = async (numeroPedido) => {
  try {
    const response = await fetch(`http://localhost:4000/pedidos/${numeroPedido}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await carregarPedidos();
    } else {
      console.error('Erro ao excluir o pedido:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir o pedido:', error.message);
  }
};

const formatarOpcaoEntrega = (opcaoEntrega) => {
  if (opcaoEntrega === 'LEVAR_PARA_CASA') {
    return 'Para Viagem';
  } else if (opcaoEntrega === 'COMER_NO_LOCAL') {
    return 'Comer no Local';
  }
 
  return opcaoEntrega;
};

onMounted(carregarPedidos);
</script>


<style scoped>

.xml{
  color: black;
  margin-right: 10px;
}
.opcao-entrega {
  margin-top: 10px;
  font-weight: bold;
}

.para-viagem {
  color: var(--main-brown);
  display: flex;
  margin: 5px;
}

.comer-no-local {
  color: #f58220;
  display: flex;
  margin: 5px;
}

.orders-header {
  position: absolute;
  top: 77px;
  left: 0;
  right: 0;
  color: black;
  padding: 10px;
}
.orders-container {
  text-align: center;
  padding: 20px;
  background-color: var(--main-gray);
  margin-top: 10rem;
  background: linear-gradient(45deg, #e5b891, #fedea5);
}

.orders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.order-card {
  border: 1px solid #ccc;
  text-align: left;
  background-color: #fffdfd;
}

.order-header {
  grid-row: span 1;
  grid-column: span 3;
  background-color: #f39544;
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
}

.order-body {
  grid-row: span 2;
  grid-column: span 2;
  padding: 10px;
}

.order-footer {
  grid-row: span 1;
  grid-column: span 3;
  background-color: #fffdfd;
  padding: 10px;
  position: sticky;
  bottom: 0;
}

select {
  width: 100%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.8rem;
  font-weight: bold;
}

.item {
  display: flex;
  align-items: center;
  padding: 10px;  
}

.product-name {
  flex: 1;
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: var(--sec-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}

.product-name:hover {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}

.quantity {
  flex: 1;
  margin-left: 20px; 
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: var(--sec-white);
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}
.excluir{
  background: #f58220;
  margin-top: 5px;
}
</style> 

