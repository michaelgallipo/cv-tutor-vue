import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/tutors",
			name: "tutors",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Tutors.vue")
		},
		{
			path: "/create",
			name: "create",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Create.vue")
		},
		{
			path: "/edit",
			name: "edit",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Edit.vue")
		},
		{
			path: "/login",
			name: "login",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Login.vue")
		},
		{
			path: "/logout",
			name: "logout",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Logout.vue")
		}
	]
});
