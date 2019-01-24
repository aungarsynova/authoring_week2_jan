(()=> {
   //create a components first
    const HomePageComponent = {
        template: "<h2>This is the homepage</h2>"
    }

    const UsersPageComponent = {
        props: ['id'], 
        template: "#userList",

        // encapsulate or isolate all components data
        data: function() {
            return {
                users: []
            }
        },

        created: function() {
            console.log('user component created');
            // take the query parameter from the route and pass it to the fetchUserData method
            this.fetchUserData(this.id);
        },

        methods: {
            fetchUserData(user) {
                let url =`./includes/index.php?users=${this.id}`

                fetch(url) 
                    .then(res=>res.json())
                    .then(data=>this.users=data)
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }
    }

    const ContactPageComponent = {
        template: "<h2>This is the contact page</h2>"   
    }

    const ErrorPageComponent = {
        template: "<h2>Opps! Sorry, page does not exist</h2>"   
    }

    //routes are the path you're taking through the application
    //www.google.ca is a route; it's the route to the home page
    //www.simpsin/contact is the rout to the contact page and etc.
    //each route gets mapped to a component that you define 
    //and that components gets rendered in the <router-view> element
    const routes = [
        { path: '/', name: 'home', component: HomePageComponent},
        { path: '/contact', name: 'contact', component: ContactPageComponent},
        { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true},
        { path: '/*', name: 'error', component: ErrorPageComponent}

    ]

    const router = new VueRouter({
        routes
    });

   //then your vue instance
   const vm = new Vue({
       el: "#app",

       data: {
           testmessage: "sup"
       },

       methods: {
            calledOnParent() {
                console.log("This method lives in the main VM and was called froma  component");
            }
       },

       created: function() {
        console.log("this is the main vue intance");
       },

       components: {
           'homepagecomponent' : HomePageComponent,
           'userscomponent': UsersPageComponent,
           'contactcomponent': ContactPageComponent
       },

       router: router
   });
})();