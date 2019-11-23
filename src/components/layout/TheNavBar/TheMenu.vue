<template>
  <div class="navbar-start">
    <template v-for="(menuItem, index) in menuItems">
      <a class="navbar-item" :key="index">
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
        name: 'Projects',
        target: '#projects'
      },
      {
        name: 'Skills',
        target: '#skills',
      },
      {
        name: 'Photography',
        target: '#photography'
      },
    ]
  })
}
</script>

<style scoped>
a.navbar-item {
  text-transform: uppercase;
  font-size: 0.9em;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
}
</style>