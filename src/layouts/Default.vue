<template>
  <div id="app">
    <header class="header">
      <TheNavBar/>
    </header>
    <main class="site-content"><slot/></main>
    <TheFooter/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import TheNavBar from "@/components/layout/TheNavBar";
  import TheFooter from "@/components/layout/TheFooter";
  export default {
    components: {
      TheNavBar,
      TheFooter
    },
  }
</script>

<style lang="scss">

</style>