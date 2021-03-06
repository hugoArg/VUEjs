import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import splash from "./views/splash.vue";
import logup from "./views/logup.vue";
import edit from "./views/edit.vue";
import home from "./views/home.vue";
import plans from "./views/plans.vue";
import categories from "./views/categories.vue";
import detailCategorie from "./views/detailCategorie.vue";
import newDoc from "./views/newDoc.vue";
import newPass from "./views/newPass.vue";


 

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "splash",
      components: {
        header: AppHeader,
        default: splash,
        footer: AppFooter
      }
    },
    {
      path: "/newPass",
      name: "newPass",
      components: {
        header: AppHeader,
        default: newPass,
        footer: AppFooter
      }
    },
    {
      path: "/logup",
      name: "logup",
      components: {
       // header: AppHeader,
        default: logup,
        footer: AppFooter
      }
    },
    {
      path: "/edit/:id",
      name: "edit",
      components: {
        header: AppHeader,
        default: edit,
        footer: AppFooter
      }
    },
    {
      path: "/detailCategorie/edit/:id",
      name: "edit",
      components: {
        header: AppHeader,
        default: edit,
        footer: AppFooter
      }
    },
    {
      path: "/home",
      name: "home",
      components: {
       // header: AppHeader,
        default: home,
        //footer: AppFooter
      }
    },
    {
      path: "/plans",
      name: "plans",
      components: {
       // header: AppHeader,
        default: plans,
        footer: AppFooter
      }
    },
    {
      path: "/categories",
      name: "categories",
      components: {
        header: AppHeader,
        default: categories,
        footer: AppFooter
      }
    },
      {
      path: "/detailCategorie/:id",
      name: "detailCategorie",
      components: {
        header: AppHeader,
        default: detailCategorie,
        //footer: AppFooter
      }
    },
    {
      path: "/detailCategorie/newDoc/:id",
      name: "newDoc",
      components: {
        header: AppHeader,
        default: newDoc,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
