import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import AuthorView from '@/views/AuthorView';
import ContactView from '@/views/ContactView';
import UsersView from '@/views/UsersView';

const routes = [
    {
        name: 'home',
        path: '/', 
        component: HomeView,
        beforeEnter(to, from, next) {
            console.log('Home view');
            next();
        },
    },{
        name: 'author',
        path: '/author', 
        component: AuthorView,
        beforeEnter(to, from, next) {
            console.log('Author view');
            next();
        },
    },{
        name: 'contact',
        path: '/contact', 
        component: ContactView,
        beforeEnter(to, from, next) {
            console.log('Contact view');
            next();
        },
    },{
        name: 'users',
        path: '/users', 
        component: UsersView,
        beforeEnter(to, from, next) {
            console.log('Users view');
            next();
        },
    },
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    console.log('Flying to: '+ to.name);
    next();
  })

export default router;