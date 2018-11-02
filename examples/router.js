import Vue from 'vue';
import Router from 'vue-router';

import routeConf from './config/routes.json';

Vue.use(Router);


let routes = [];

Object.keys(routeConf).forEach(header => {
    routeConf[header].forEach(item => {
        if(item.children) {
            routes.push(...item.children);
        }
        else {
            routes.push(item);
        }
    });
});

let addComponent = (router) => {
    router.forEach((route) => {
        route.component = r => require.ensure([], () =>
            r(require(`./docs${route.path}.md`)));
    });
};
addComponent(routes);

export default new Router({
    routes: routes
});

// past routes
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home'
//         }
//         // {
//         // 	path: '/about',
//         // 	name: 'about',
//         // 	// route level code-splitting
//         // 	// this generates a separate chunk (about.[hash].js) for this route
//         // 	// which is lazy-loaded when the route is visited.
//         // 	component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//         // }
//     ]
// });