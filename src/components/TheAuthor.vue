<template>
  <section class="section">
    <div class="content has-text-centered">
      <figure class="image is-128x128" style="margin: auto">
        <g-image alt="Author image: olumal" class="is-rounded author__image" src="~/assets/images/olu-placeholder.png" width="180" height="180" blur="5" />
      </figure>

      <h1 class="title is-4 has-text-link">
        Malintha
      </h1>

      <p class="subtitle is-6 has-text-grey-dark has-text-weight-medium">
        <strong>Foodie and chef</strong><br/>
        Staunton, VA
      </p>

      <p class="subtitle is-7 has-text-grey-dark">
        Wine, bourbon, and food explorer<br/>
        Fashion is life, love is jewellery<br/>
        Travelling to soul search<br/>
      </p>

      <p class="buttons is-centered">
        <b-tooltip type="is-black" 
                  label="Follow me on Instagram"
                  position="is-bottom">
          <a href="https://www.instagram.com/olumalintha" 
             target="_blank" 
             aria-label="Link to olumalintha on Instagram (New Window)"
             rel="noopener"
          >
            <b-icon
              pack="fab"
              icon="instagram"
              size="is-large"
              type="is-dark"
            ></b-icon>
          </a>
        </b-tooltip>
      </p>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.author__image {
  box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.4);
}

.buttons {
  margin-top: -0.3em;
}
</style>
