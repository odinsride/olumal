<template>
  <section class="section" id="foods">
    <div class="container">
      <div class="columns is-multiline">
        <div
          v-for="post in $static.posts.edges"
          :key="post.node.id"
          class="column is-12"
        >
          <PostPanel :post="post.node"/>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Posts {
  posts: allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        author
        tags {
          id
          title
        }
        path
        date
        excerpt
      }
    }
  }
}
</static-query>

<script>
import PostPanel from '@/components/posts/PostPanel'

export default {
  components: {
    PostPanel
  },
}
</script>

<style scoped lang="scss">
</style>