(()=> {
   //create a components first
    const UserComponent = {
        props: ['name', 'role'],

        template: "#userstemplate",

        created: function() {
            console.log("let me diiiiiiiiiiiiiiie");
        },

        methods: {
            logFromChild() {
                console.log("logged from the component");
            },

            passEvent() {
                this.$emit('shoutup');
            }
        }
    };

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
           'activeusers' : UserComponent,
       }
   })
})();