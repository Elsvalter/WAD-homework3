<template>
    <div>
        <h3>Welcome to the blog!</h3>
        <div class="post" v-for="post in postsList" :key="post.id">
            <div class = "post_head"> {{new Date(post.date).toDateString()}}</div>
            <p>{{post.body}}</p>
            <img class = "post_picture" :src="post.image" alt="Post Image">>
            <p>{{post.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogPosts",
    computed: {
        postsList() {
            return this.$store.getters.postsList
        }
    }
}    
</script>