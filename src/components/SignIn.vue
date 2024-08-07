<template>
    <!-- <h2>{{ msg }}</h2> -->
 
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
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <router-link to="/"><button>Sign In</button> </router-link>
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
                  <a   href="sign-up"><button class="ghost">Sign Up</button></a>

              </div>
          </div>
      </div>
  </div>
  <!-- s -->
   
   </template>
  
  <script>
  export default {
    name: 'SignIn',
    
  }
  </script>
  
   
   
  