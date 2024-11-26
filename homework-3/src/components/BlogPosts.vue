<template>
    <div>
        <h3>Welcome to the blog!</h3>
        <div class="post" v-for="post in postsList" :key="post.id">
            <div class = "post_head">
                <img :src="require('@/assets/user.png')" width="25" height="25" alt="Profile pic">
                {{new Date(post.date).toDateString()}}
            </div>
            <img v-if="post.image" class="post_picture" :src="post.image" alt="Post Image">
            <p>{{post.body}}</p>
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

<style>
.post {
    background-color: rgba(243, 237, 232, 0.847);
    border-radius: 7px;
    margin-bottom: 20px;
    padding: 8px;
    width: 430px;
    border: 1px solid #000; /* 2px thick border with black color */
}

.post_picture {
    width: 100%;
    max-width: 450px;
    height: auto;
}
.post_head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
}
</style>