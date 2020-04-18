// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

require('./assets/plugins/slick/slick.css');
require('./assets/plugins/slick/slick-theme.css');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icons.css');
require('./assets/css/style.css');

require('./assets/js/detect.js');
require('./assets/js/jquery.slimscroll.js');
require('./assets/js/vertical-menu.js');
require('./assets/plugins/slick/slick.min.js');

// Main js chat
require('./assets/js/core.js');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})