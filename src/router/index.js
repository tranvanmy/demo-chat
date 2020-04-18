import Vue from 'vue';
import Router from 'vue-router';
import Chat from '@/components/Chat';
import Login from '@/components/auth/views/Login';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Chat',
        component: Chat
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})