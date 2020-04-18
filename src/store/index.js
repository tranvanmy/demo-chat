import Vue from 'vue';
import Vuex from 'vuex';
import * as Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';
import config from '../library/config';
import storeAuth from '../components/auth/store';
import storeLeftbar from '../components/leftbar/store';
import storeDetailChat from '../components/detail-chat/store';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        storeAuth,
        storeLeftbar,
        storeDetailChat
    },
    plugins: [createPersistedState({
        key: 'owner',
        paths: [
            'storeAuth.staff',
        ],
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, {
            expires: config.cookie.lifespan,
            secure: config.cookie.secure,
        }),
    })],
});