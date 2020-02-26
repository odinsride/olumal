module.exports = {
  siteName: 'olumal',
  siteUrl: 'https://www.olumal.com',

  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
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
        path: 'content/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'olumal - Blog',
          description: 'A blog about food, travel, fashion, and life'
        },
        rss: {
          enabled: true,
          output: '/rss.xml'
        },
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.excerpt,
          author: [
            {
              name: node.author
            }
          ]
        })
      }
    },
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      autolinkHeadings: false,
      plugins: [
        '@gridsome/remark-prismjs',
      ]
    }
  }  
}
