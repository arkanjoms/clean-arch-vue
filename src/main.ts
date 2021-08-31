import {createApp} from 'vue'
import {Quasar} from 'quasar'
import quasarUserOptions from '@/infra/config/quasar/quasar-user-options'
import router from '@/infra/config/router'
import {key, store} from '@/infra/config/store'
import App from '@/components/Main/index.vue'

createApp(App)
    .use(store, key)
    .use(router)
    .use(Quasar, quasarUserOptions)
    .mount('#app');
