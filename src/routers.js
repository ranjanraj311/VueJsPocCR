import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Customer from "./views/Customer.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/customer", name: "Customer", component: Customer },
    //{ path: "/product", name:"Product" },
  ],
});

export default router;
