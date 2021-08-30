<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Item</div>
      <div class="text-subtitle2">Categoria</div>
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <div class="col-3">
        <q-input :model-value="amount" size="xs" type="number"/>
      </div>
      <q-space/>
      <q-btn rounded align="right" color="secondary" size="sm">add to cart</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

const Item = defineComponent({
  setup() {
    const amount = ref<number>(1);
    return {
      amount,
    }
  }
});

export default Item;
</script>
