<template>
    <div class="om-card">
        <div class="om-card-front has-background-link">
            <div class="om-card-img">
                <g-image v-if="post.node.image" :src="post.node.image" />
                <g-image v-else src="https://via.placeholder.com/500x285.png" />
            </div>
            <div class="om-card-content has-text-white">
                <div class="om-card-title has-text-centered">
                    {{ post.node.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
}
</script>

<style lang="scss">
.om-card {
  //background-color: transparent;
  //width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 250px;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  
  .om-card-front {
    z-index: 10;
    box-shadow: 0px 2px 18px -8px rgba(0,0,0,0.4);
    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
    }
  }
  .om-card-img {
    img {
      box-shadow: 0px 2px 16px -8px rgba(0,0,0,0.4);
    }
  }
  .om-card-content {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 15px;
    padding-top: 10px;
    .om-card-title {
      font-weight: 600;
      font-size: 1.2em;
      text-shadow: 1px 1px 10px #636363;
      // margin-bottom: 5px;
    }
  }
}

.om-card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #dbdbdb;
  padding: 15px;
}

.om-link-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  box-shadow: 0px 4px 18px -8px rgba(0,0,0,0.4);
}
</style>