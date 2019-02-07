export default {
    template: `
    <div id="login">
        <h1>Log in</h1>
        <input type="text" name="username" v-model="input.username" placeholder="username"/>
        <input type="password" name="password" v-model="input.password" placeholder="password"/>
        <button v-on:click="login()">Login</button> 
    </div>
    `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            console.log('trying to log in');

            if(this.input.username != "" && this.input.password != "") {
                //fetch the data from the server and match passwords
                let url = `./includes/index.php?username=${this.input.username}&&password=${this.input.password}`;

                fetch(url)
                .then(res=> res.json())
                .then(data=>{
                    if (data[0] == "false") {
                        console.log("Login attempt failed");
                    }else{
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "users" });
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            } else{ 
                console.log('username and passord can not be blank');
            }
        }
    }
}