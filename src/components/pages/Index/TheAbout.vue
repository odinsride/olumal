<template>
  <section class="section" id="about">
    <div class="container">
      <h1 class="title is-size-4 has-text-primary">About baked.</h1>
      <div class="columns">
        <div class="column is-10 is-offset-1">
      <p v-for="about in aboutText" :key="about" class="about-body">
        {{ about }}
      </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheAbout',
  data: () => ({
    aboutText: [
      "Hi 🙂",
      "I'm a recent transplant to the Shenandoah Valley. Naturally, I fell in love... \
       with the natural beauty, the bountiful soil, and the wonderful food. I've been inspired \
       to be creative, and I'm taking the first steps in pursuing my interest in culinary arts. \
       I hope you will be a part of my journey.",
       "Our goal is to tread lightly on this earth and to support other local businesses by sourcing \
        our ingredients locally.",
       "Our compostable packaging is a small attempt at a plastic-free future."
    ],
  })
}
</script>

<style>
.title {
  font-weight: 500;
}
.about-body {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}
</style>