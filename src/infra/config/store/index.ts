import {InjectionKey} from 'vue';
import {createStore, Store, useStore as vuexUseStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// @ts-ignore
import Cookies from 'js-cookie'

import User from '@/domain/User';
import Cart from '@/domain/Cart';
import CartItem from '@/domain/CartItem';

export interface State {
    user: User | null,
    cart: Cart,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        user: null,
        cart: new Cart(),
    },
    mutations: {
        addCartItem(state: State, payload: CartItem) {
            state.cart.addItem(payload);
        },
        removeCartItem(state, payload: CartItem) {
            state.cart.removeItem(payload)
        }
    },
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.get(key),
            setState: (key, state) => Cookies.set(key, state, {expires: 3, secure: true})
        })
    ],
});

export const useStore = () => vuexUseStore(key);
