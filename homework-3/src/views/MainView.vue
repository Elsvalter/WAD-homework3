<template>
    <div class="main">
      <h1>This is the main page</h1>
      <blog-posts></blog-posts>
    </div>
  </template>

<script>
import BlogPosts from '../components/BlogPosts.vue'
export default {
  components: { BlogPosts },
        name: 'MainView'
    }
</script>