<template>
  <div>
    <nav class="navbar navbar-expand-lg px-5 px-0 navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Restrurent</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-0 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu"> Menu</router-link>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Restaurent
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/list"> Restaurent List</router-link></li>
            <li><router-link class="dropdown-item" to="/add">Add Restaurent</router-link></li>
            <li><router-link class="dropdown-item" to="/update">Update Restaurent</router-link></li>
          
          </ul>
        </li>

            <li class="nav-item">
              <a href="/" class="nav-link" aria-disabled="true">About Us</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a href="#" class="nav-link  " aria-disabled="true">Hi, {{name}}</a>
            <a v-on:click="logout" href="#" class="nav-link  " aria-disabled="true">Logout</a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TopHeader',
  data(){
    return{
       name:""

    }
  },

   methods: {
    logout() {
      localStorage.removeItem("userInfo")
      this.$router.push({ name: "SignIn" });

    }
  },
 mounted(){
  const user = localStorage.getItem("userInfo")
  this.name = JSON.parse(user).name

 }

}
</script>