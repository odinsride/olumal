<template>
  <Layout>
        <div class="container">
            <div class="columns">
                <div class="column">
                      <h1 class="title is-size-2 has-text-primary">Blog</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-10">
                    <PostList/>
                </div>
                <div class="column is-2">
                    <RecentPostList/>
                </div>
            </div>
        </div>
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

<style>

</style>
