<template>
  <!-- <div>
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
  </div> -->
  <header class="header fixed-top">
        <nav class="navbar navbar-expand-md">
            <div>
                <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon_menu"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <div class="logo">1<span>UX</span><span>UI</span></div>
                    <h4 class="logo-text text-uppercase"><span>OneUIUX</span><small>Website design</small></h4>
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <a class="navbar-brand mb-4 p-3" href="#">
                    <div class="logo">1<span>UX</span><span>UI</span></div>
                    <h4 class="logo-text"><span>OneUIUX</span><small>Website design</small></h4>
                </a>
                <ul class="navbar-nav mr-auto ml-md-3">
                    <li class="nav-item  active">
                        <a class="nav-link" href="index.html"><span class="icon_house_alt icon mr-2"></span> Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="menu.html"><span class="icon_book_alt icon mr-2"></span>Order Menu</a>
                    </li>
                    <li class="nav-item dropdown multilevel">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="icon_globe icon mr-2"></span>Explore</a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="about.html">About</a>
                            <a class="dropdown-item" href="howitworks.html">How it works?</a>
                            <a class="dropdown-item" href="membership.html">Membership</a>
                            
                            <a class="dropdown-item" href="helpcenter.html">Help Center</a>
                            <a class="dropdown-item" href="partnership.html">Partnership</a>
                            <a class="dropdown-item" href="contactus.html">Contact us</a>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html"><span class="icon_document_alt icon mr-2"></span> Blog</a>
                    </li>
                </ul>
            </div>
            <div>

                <a href="" class="btn btn-link text-default text-uppercase"><span class="icon icon_cart_alt"></span><span class="badge badge-danger ml-2 cartcount">2</span></a>
                <a href="login.html" class="btn btn-default text-uppercase"><span class="icon icon_profile d-block d-lg-none"></span><span class="d-none d-lg-block">Sign in</span></a>
            </div>
        </nav>
    </header>
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