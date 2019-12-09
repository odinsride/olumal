<template>
    <div class="content">
        <h1 class="title is-3 has-text-link">{{ post.title }}</h1>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-6">
                        <span class="has-text-weight-bold">Published:</span> {{ datePretty }}
                    </p>
                </div>
                <div class="level-item">
                    <p class="subtitle is-6">
                        <span class="has-text-weight-bold">Author:</span> {{ post.author }}
                    </p>
                </div>
                <div class="level-item">
                    <p class="subtitle is-6" v-for="tag in post.tags" :key=" tag.id" >
                        <span class="has-text-weight-bold">Category:</span> {{ tag.title }}
                    </p>
                </div>
            </div>
        </nav>
    </div>
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
      return getFormattedDate(this.post.date)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 0.3em;
}
</style>