<template>
  <div class="navbar-start">
    <template v-for="(menuItem, index) in menuItems">
      <g-link :to="menuItem.target" class="navbar-item has-text-link" :key="index">
        {{ menuItem.name }}
      </g-link>
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
        target: '/'
      },
      {
        name: 'Blog',
        target: '/blog'
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