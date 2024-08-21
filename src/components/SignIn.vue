<template>
    <!-- <h2>{{ msg }}</h2> -->

    <div class="authBoady">
        <div class="container1" id="container">
        <div class="form-container sign-in-container">
            <div class="form-item" action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input v-model="email" type="email" placeholder="Email" />
                <input v-model="password" type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button v-on:click="submit">Sign In</button>
            </div>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <a href="sign-up"><button class="ghost">Sign Up</button></a>

                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- s -->

</template>

<script>
import axios from 'axios';
export default {
    name: 'SignIn',

    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async submit() {
            try {
                const response = await axios.get(`http://localhost:3000/users`, {
                    params: {
                        email: this.email,
                        password: this.password
                    }
                });

                const user = response.data.find(user => user.email === this.email && user.password === this.password);

                if (user) {
                    console.log("Login successful", user);
                    localStorage.setItem("userInfo", JSON.stringify(user));
                    this.$router.push({ name: "HomePage" });
                } else {
                    console.log("Invalid credentials");
                    alert("Invalid email or password");
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
            }
        }
    },
    mounted(){
	const user= localStorage.getItem("userInfo")
	if(user){
		this.$router.push({name:"HomePage"})
	}
  }


}
</script>