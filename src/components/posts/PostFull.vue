<template>
    <article>
        <h1 class="title is-3 has-text-link">{{ post.node.title }}</h1>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-6">
                        <span class="has-text-weight-bold">Published:</span> {{ datePretty }}
                    </p>
                </div>
                <div class="level-item">
                    <p class="subtitle is-6">
                        <span class="has-text-weight-bold">Author:</span> {{ post.node.author }}
                    </p>
                </div>
            </div>
        </nav>
        <div class="content">
            <p>{{ post.node.excerpt }}</p>
            <p class="has-text-right">
              <b-button type="is-white is-rounded has-text-link"
                icon-right="long-arrow-alt-right">
                Continue Reading
              </b-button>
            </p>
        </div>
    </article>
</template>

<script>
import { getFormattedDate } from '~/helpers/formatDate.js'
export default {
  data () {
    return {
      
    }
  },
  components: {
  },

  props: {
    post: {
      required: true,
      type: Object
    }
  },
  computed: {
    datePretty () {
      return getFormattedDate(this.post.node.date)
    }
  }
}
</script>

<style lang="scss" scoped>
article {
    margin-bottom: 2.5em;
}
.title {
    margin-bottom: 0.3em;
}
</style>