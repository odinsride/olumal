<template>
  <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main-navigation">
    <div class="navbar-brand">
      <g-link to="/" class="navbar-item logo">
        <img src="@/assets/images/logo.png" alt="olumal Logo" />
      </g-link>
      <a
        :class="{ 'is-active': menuActive }"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        @click="menuActive = !menuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{ 'is-active': menuActive }" class="navbar-menu">

      <TheMenu/>

      <div class="navbar-end">
        <div class="navbar-item">
          <b-tooltip label="Follow us on Instagram!"
                     position="is-left"
                     animated>
            <a href="https://www.instagram.com/olumalintha/" target="_blank">
              <b-icon
                  pack="fab"
                  icon="instagram"
                  size="is-large">
              </b-icon>
            </a>
          </b-tooltip>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <g-link to="/contact">
              <b-button
                rounded
                icon-left="paper-plane"
                size="is-small"
                class="is-link"
              >
                CONTACT
              </b-button>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TheMenu from "@/components/layout/TheMenu";

export default {
    name: 'TheNavBar',
    components: {
        TheMenu
    },
    data () {
        return {
        menuActive: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-item.logo {
  padding-top: 0;
  padding-bottom: 0;
  img {
    max-height: 3.0rem;
  }
}
</style>