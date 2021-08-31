<template>
  <q-dialog :model-value="show" @before-hide="cleanLoginForm">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input v-model="username">
          <template v-slot:before>
            <q-icon name="fas fa-user"/>
          </template>
        </q-input>
        <q-input v-model="password" type="password">
          <template v-slot:before>
            <q-icon name="fas fa-key"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Login" color="primary" @click="login"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

const LoginDialog = defineComponent({
  props: ['show'],
  emits: ['hide'],
  setup(props: any, context: any) {
    const username = ref('');
    const password = ref('');
    const isOpen = ref(false);

    const login = () => {
      console.log(`${username?.value}:${password?.value}`);
      cleanLoginForm();
    };

    const cleanLoginForm = () => {
      isOpen.value = false;
      context.emit('hide', isOpen.value)
      username.value = '';
      password.value = '';
    };

    return {
      username,
      password,
      isOpen,
      login,
      cleanLoginForm,
    }
  }
});

export default LoginDialog;
</script>
