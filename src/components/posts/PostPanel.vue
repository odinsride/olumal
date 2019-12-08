<template>
    <article>
        <PostMeta :post="post" />
        <div class="content">
            <p>{{ post.excerpt }}</p>
            <p class="has-text-right">
              <g-link :to="post.path">
                <b-button type="is-white is-rounded has-text-link"
                          icon-right="long-arrow-alt-right">
                          Continue Reading
                </b-button>
              </g-link>
            </p>
        </div>
    </article>
</template>

<script>
import PostMeta from '@/components/posts/PostMeta'

export default {
  data () {
    return {
      
    }
  },
  
  components: {
    PostMeta
  },

  props: {
    post: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
article {
    margin-bottom: 2.5em;
}
</style>