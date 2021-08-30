<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="fas fa-shopping-cart"/>
          </q-avatar>
          Clean Arch Shopping
        </q-toolbar-title>

        <q-btn dense flat round icon="fas fa-user" @click="openLoginDialog"/>

        <q-btn dense flat round icon="fas fa-shopping-cart" @click="toggleRightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <Cart/>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <LoginDialog :show="loginDialogOpen" @hide="hideLoginDialog"/>
  </q-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import LoginDialog from "@/infra/presentation/LoginDialog/index.vue";
import Cart from "@/infra/presentation/Cart/index.vue";

const Main = defineComponent({
  components: {Cart, LoginDialog},
  setup() {
    const rightDrawerOpen = ref<boolean>(false)
    const loginDialogOpen = ref<boolean>(false);
    const username = ref<string>('');
    const password = ref<string>('');

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    };

    const openLoginDialog = () => {
      loginDialogOpen.value = true;
    };
    const hideLoginDialog = () => {
      console.log('hide')
      loginDialogOpen.value = false;
    };

    return {
      rightDrawerOpen,
      loginDialogOpen,
      username,
      password,
      toggleRightDrawer,
      openLoginDialog,
      hideLoginDialog,
    }
  }
});

export default Main;
</script>
