<template>
  <Layout>
    <TheHero/>
    <FoodList/>
    <About/>
  </Layout>
</template>

<script>
import TheHero from '@/components/pages/Index/TheHero'
import About from '@/components/pages/Index/TheAbout'
import FoodList from '@/components/posts/PostList/PostList'
export default {
  components: {
    TheHero,
    About,
    FoodList
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
