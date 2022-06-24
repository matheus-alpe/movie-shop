<template>
  <div class="container">

    <div class="content">
      <router-view/>
    </div>

    <fixed-aside>
        <h2>Meu Carrinho</h2>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>

        <button class="button buy">Finalizar compra</button>
    </fixed-aside>
  </div>
</template>

<script>
import FixedAside from '@/views/FixedAsideView.vue'

export default {
  name: 'ContainerView',
  components: {
    FixedAside
  }
}
</script>