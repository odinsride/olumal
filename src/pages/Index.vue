<template>
  <Layout>
    <TheHero/>
    <About/>
    <PostCardList/>
  </Layout>
</template>

<script>
import TheHero from '@/components/pages/Index/TheHero'
import About from '@/components/pages/Index/TheAbout'
import PostCardList from '@/components/pages/Index/ThePostCardList/ThePostCardList'
export default {
  components: {
    TheHero,
    About,
    PostCardList
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
