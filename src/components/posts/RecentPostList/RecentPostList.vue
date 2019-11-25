<template>
  <section class="section" id="foods">
    <div class="container">
      <h2 class="title is-size-5 has-text-primary">Recent Posts</h2>
      <ul>
        <li
          v-for="post in $static.posts.edges"
          :key="post.node.id"
        >
          {{post.node.title}}
        </li>
      </ul>
    </div>
  </section>
</template>

<static-query>
query Post {
  posts: allPost(limit: 6, sortBy: "date", order: DESC) {
    edges {
      node {
        id,
        title
      }
    }
  }
}
</static-query>

<script>
export default {
  components: {
  },
}
</script>

<style scoped lang="scss">
</style>