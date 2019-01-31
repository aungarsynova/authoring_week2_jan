//import components
//exactly like php include

import LoginComponent from './/modules/LoginComponent.js'; 
import UsersComponent from './/modules/UsersComponent.js'; 

const routes = [
    { path: '/', redirect: {name:"login"} },
    { path: '/login', name: 'login', component: LoginComponent},
    { path: '/users', name: 'users', component: UsersComponent}
]

const router = new VueRouter({
    routes
});

//then your vue instance
const vm = new Vue({

    data: {
        testmessage: "sup",

        authenticated: false,

        mockAccount: {
            username: "Ace",
            password: "123"
        }
    },

    methods: {
        calledOnParent() {
            console.log("This method lives in the main VM and was called froma  component");
        },

        setAuthenticated(status) {
            this.authenticated = status;
        },
        
        logout() {
            this.authenticated = false; 
        }
    },

    created: function() {
    console.log("this is the main vue intance");
    },

    router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
    console.log('router guard fired!');
    
    if(vm.authenticated == false) {
        next("/login");
    }else{
        next();
    }
});
