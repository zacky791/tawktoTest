import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

new Vue({
	el: '#app',
	router,
	render: h => h(App),
});