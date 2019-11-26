<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-size-2 has-text-primary">Blog</h1>

        <div class="columns">
          <div class="column is-10">
            <PostList/>
          </div>
          <div class="column is-2">
            <RecentPostList/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PostList from '@/components/posts/PostList/PostList'
import RecentPostList from '@/components/posts/RecentPostList/RecentPostList'

export default {
  components: {
    PostList,
    RecentPostList
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: -10px;
}
</style>
