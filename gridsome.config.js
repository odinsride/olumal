module.exports = {
  siteName: 'olumal',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ]
    }
  },

  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `./src/admin/index.js`
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    }
  ]
}