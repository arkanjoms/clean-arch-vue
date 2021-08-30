<template>
  <div>
    <h1>Cart</h1>
    <CartItem/>
    <CartItem/>
    <CartItem/>
  </div>
</template>

<script lang="ts">
import CartItem from "@/infra/presentation/Cart/CartItem/index.vue";
import {defineComponent} from "vue";

const Cart = defineComponent({
  components: {CartItem}
});

export default Cart;
</script>
