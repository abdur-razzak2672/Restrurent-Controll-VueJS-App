<template>
  <!-- <h2>{{ msg }}</h2> -->
 <div class="authBoady">
	<div class="container1" id="container">
	<div class="form-container sign-in-container">
		<div class="form-item">
			<h3>Create Account</h3>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" v-model="name" placeholder="Name" />
			<input type="email" v-model="email" placeholder="Email" />
			<input type="password" v-model="password" placeholder="Password" />
			<button v-on:click="submit">Sign Up</button>
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
				<router-link to="sign-in"><button class="ghost">Sign In</button></router-link>
 
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
  name: 'SignUp',
  props: {
    msg: String
  },
  data(){
	return{
		name:"",
		email:"",
		password:""
	}

  },

  methods:{
	async submit(){
		console.log("submitted",this.name)
		const data={
			name: this.name,
			email:this.email,
			password:this.password
		}
		let result = await axios.post("http://localhost:3000/users",data)
		console.log(result)
		if(result?.status==201){
			localStorage.setItem("userInfo",JSON.stringify(result?.data))
			this.$router.push({name:"HomePage"})
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
 