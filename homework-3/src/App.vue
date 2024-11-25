<template>
<div>
  <nav>
  <router-link to="/">Main</router-link> |
  <router-link to="/login">Login</router-link>
 </nav>
 <router-view />
 <footer>
  <div class="container">
      <p>Copyrighted content</p>
  </div>
 </footer>
</div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
