<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Port</a>
   <center><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button></center> 
    <div class="collapse navbar-collapse nav2" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/">
          <li class="nav-item">
            <button class="btn btn-outline-light" style="border: none; border-radius:20px;"><i class="fas fa-home"></i> <span class="mx-2">Home</span> </button>
          </li>
        </router-link>
        
        <router-link to="/about">
          <li class="nav-item">
            <button class="btn btn-outline-light" style="border: none; border-radius:20px;"><i class="fas fa-user"></i> <span class="mx-2">About</span></button>
          </li>
        </router-link>

        <router-link to="/projects">
          <li class="nav-item">
           <button class="btn btn-outline-light" style="border: none; border-radius:20px;"><i class="fas fa-folder"></i> <span class="mx-2">projects</span></button>
          </li>
       </router-link>
        
        <router-link to="/contact">
          <li class="nav-item">
            <button class="btn btn-outline-light" style="border: none; border-radius:20px;"><i class="fas fa-phone"></i> <span class="mx-2">Contact</span></button>
          </li>
        </router-link>

        
       <router-link to="/portfolio">
          <li class="nav-item">
           <button class="btn btn-outline-light" style="border: none; border-radius:20px;"><i class="fas fa-folder"></i> <span class="mx-2">Other</span></button>
          </li>
       </router-link> 
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
router-link {
  text-decoration: none;
}

.nav2 {
    margin-left: 400px;
}
</style>