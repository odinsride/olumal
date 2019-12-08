<template>
  <section class="hero is-medium is-link">
    <div class="hero-body">
      <div class="container">
        <h4 class="title is-size-4 is-size-5-mobile has-text-centered om-hero-text">
          {{ title }}
        </h4>
        <h3 class="title is-size-3 is-size-6-mobile has-text-centered om-hero-text">
          {{ subtitle }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data: () => ({
    title: "Hi, I'm Malintha.",
    subtitle: "This is a blog about food, travel, my passion for fashion, and life.",
  })
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
}

.om-hero-text {
  text-shadow: 1px 1px 10px #636363;
}
</style>