<template>
  <div class="navbar-start">
    <template v-for="(menuItem, index) in menuItems">
      <a class="navbar-item has-text-link" :key="index">
        {{ menuItem.name }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',
  data: () => ({
    menuItems: [
      {
        name: 'Home',
        target: '#top'
      },
      {
        name: 'Blog',
        target: '#blog'
      },
      {
        name: 'My Recipes',
        target: '#recipes'
      },
      {
        name: 'My Travels',
        target: '#travel',
      },
      {
        name: 'Fashion is Style',
        target: '#fashion',
      }
    ]
  })
}
</script>

<style scoped>
a.navbar-item {
  /* text-transform: uppercase; */
  font-size: 1.1em;
  font-family: 'Muli', sans-serif !important;
  font-weight: 700;
}
</style>