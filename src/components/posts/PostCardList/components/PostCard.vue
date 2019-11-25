<template>
    <div class="card om-card">
        <div class="card-image">
            <figure class="image">
                <g-image v-if="post.node.image" :src="post.node.image" />
                <g-image v-else src="@/assets/olu-placeholder.png" />
            </figure>
            <div class="card-content om-card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5">{{ post.node.title }}</p>
                    <p class="subtitle is-7">
                      <span class="has-text-weight-bold">Published</span>: {{ datePretty }} <br />
                    </p>
                  </div>
                </div>
            </div>
        </div>
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
      return getFormattedDate(this.post.node.date)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition: all .2s ease-in-out;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, .2),
              0px 2px 2px 0px rgba(0, 0, 0, .14),
              0px 3px 1px -2px rgba(0, 0, 0, .12);
  border-radius: 5px;

  &:hover:not(#transaction-card) {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, .2),
                0px 8px 10px 1px rgba(0, 0, 0, .14),
                0px 3px 14px 2px rgba(0, 0, 0, .12);
    transform: scale(1.05, 1.05);
    z-index: 1000;
  }
}

.om-card {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 250px;
  
  .om-card-content {
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
.title {
  font-weight: 500;
}
.subtitle.is-7 {
  font-size: 0.85rem !important;
}
</style>