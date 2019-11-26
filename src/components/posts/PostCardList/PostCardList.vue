<template>
  <section class="section" id="posts">
    <div class="container">
      <h1 class="title is-size-4 has-text-primary">Recent Posts</h1>
      <div class="columns is-multiline">
        <div
          v-for="post in $static.posts.edges"
          :key="post.node.id"
          class="column is-4"
        >
          <PostCard :post="post"/>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Post {
  posts: allPost(limit: 3, sortBy: "date", order: DESC) {
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
import PostCard from './components/PostCard'

export default {
  components: {
    PostCard
  },
}
</script>

<style scoped lang="scss">
.title {
  font-weight: 500;
}
.columns {
  flex-wrap: wrap;
  align-items: stretch;
}
.column {
  display: flex;
}
</style>