<template>
  <div>
    <h1>Cart</h1>
    <CartItem/>
    <CartItem/>
    <CartItem/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CartItem from '@/components/Cart/CartItem/index.vue';

const Cart = defineComponent({
  components: {CartItem}
});

export default Cart;
</script>
