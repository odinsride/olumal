<template>
  <Layout>
    <TheHero />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-9">
            <PostList :filter="filter" />
          </div>
          <div class="column">
            <TheCategoryList :filter="filter" v-on:filterPosts="updatePostFilter($event)" />
            <TheAuthor />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import TheHero from '@/components/TheHero'
import TheAuthor from '@/components/TheAuthor'
import TheCategoryList from '@/components/TheCategoryList'
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    TheHero,
    TheAuthor,
    TheCategoryList,
    PostList
  },

  data () {
    return {
      filter: 'All'
    }
  },

  methods: {
    updatePostFilter(filter) {
      this.filter = filter
    }
  },

  metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content: 'Malintha is a foodie and chef who likes to write about food, restaurants \
                  cooking, wine, bourbon, fashion, travel, jewellery, and life.'
      }
    ]
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
