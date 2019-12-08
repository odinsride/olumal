<template>
  <Layout>
        <section class="section" id="post">
            <div class="container">
                <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <PostMeta :post="$page.post" />
                        <p v-html="$page.post.content" />
                    </div>
                </div>
            </div>
        </section>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    title
    path
    date
    excerpt
    content
    category {
        name
    }
    author
  }
}
</page-query>

<script>
import PostMeta from '@/components/posts/PostMeta'
export default {

    components: {
        PostMeta
    }
}
</script>

<style>

</style>