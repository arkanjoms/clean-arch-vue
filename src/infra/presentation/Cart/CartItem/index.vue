<template>
  <q-card>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h6">Item</div>
        <div class="text-subtitle2">Categoria</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model.number="amount" type="number"/>
      </q-card-section>
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <q-btn round color="negative" size="sm" icon="fas fa-trash-alt"/>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

const CartItem = defineComponent({
  setup() {
    const amount = ref(1);

    return {
      amount,
    }
  }
});

export default CartItem;
</script>
