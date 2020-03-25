import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "https://cv-tutor-web.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:3000";
// process.env.NODE_ENV === "development"
// 	? "https://cv-tutor-web.herokuapp.com"
// 	: "/";

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
