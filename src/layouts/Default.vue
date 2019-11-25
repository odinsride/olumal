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
  import TheNavBar from "@/components/layout/TheNavBar/TheNavBar";
  import TheFooter from "@/components/layout/TheFooter/TheFooter";
  export default {
    components: {
      TheNavBar,
      TheFooter
    },
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,500i,700,700i&display=swap');
// Import Bulma's core
@import "../../node_modules/bulma/sass/utilities/_all";
// Misc Variables
$tablet: 750px;
// Set your colors
$primary: #00796b;
$primary-invert: findColorInvert($primary);
$twitter: #80bcb5;
$twitter-invert: findColorInvert($twitter);
// Links
$link: #26a69a;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert),
    "link": ($link, $link-invert)
);
// Import Bulma and Buefy styles
@import "../../node_modules/bulma";
@import "../../node_modules/buefy/src/scss/buefy";
body {
  font-family: 'Muli', sans-serif !important;
  font-weight: 400;
}
// Below code is for sticky footer
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.site-content {
  flex: 1;
}
// end sticky footer code
</style>