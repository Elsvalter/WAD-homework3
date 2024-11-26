<template>
  <div>
    <nav>
      <router-link to="/" class="nav-link">Main</router-link> |
      <router-link to="/login" class="nav-link">Login</router-link>
    </nav>
    <router-view />
    <footer>
      <div class="container">
        <p>Copyrighted content - footer</p>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
#app {
  font-family: 'Poppins', sans-serif;
  margin-top: 60px;
  background-color: #f5f5f5;
}

nav {
  background-color: #005f73; 
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  text-align: center;
}

.nav-link {
  color: white;
  margin: 0 15px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700;
  text-decoration: underline;
}

footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}


button, .nav-link {
  transition: transform 0.3s ease, color 0.3s ease;
}



</style>
