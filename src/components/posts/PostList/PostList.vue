<template>
  <section class="section" id="foods">
    <div class="container">
      <h1 class="title is-size-4 has-text-primary">Our Foods</h1>
      <div class="columns is-multiline">
        <div
          v-for="food in $static.foods.edges"
          :key="food.node.id"
          class="column is-4"
        >
          Test
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query Post {
  posts: allPost(sortBy: "order", order: ASC) {
    edges {
      node {
        id,
        title,
        slug,
        image,
        ingredients
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