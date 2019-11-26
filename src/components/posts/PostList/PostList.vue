<template>
  <section class="section" id="foods">
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="post in $static.posts.edges"
          :key="post.node.id"
          class="column is-12"
        >
          <PostPanel :post="post"/>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Post {
  posts: allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id,
        title,
        excerpt,
        author,
        date
      }
    }
  }
}
</static-query>

<script>
import PostPanel from './components/PostPanel'

export default {
  components: {
    PostPanel
  },
}
</script>

<style scoped lang="scss">
</style>