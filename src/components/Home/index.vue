<template>
  <q-page padding>
    <h1>Home</h1>
    <div class="q-pa-md row items-center q-gutter-md">
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  </q-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Item from '@/components/Item/index.vue';

const Home = defineComponent({
  components: {Item},
});

export default Home;
</script>
