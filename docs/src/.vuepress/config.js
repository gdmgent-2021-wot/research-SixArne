const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Computer vision',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'History',
        link: '/history/'
      },
      {
        text: 'Introduction',
        link: '/introduction/'
      },
      {
        text: 'Get Started',
        link: '/get-started/'
      }
    ],
    sidebar: {
      '/introduction/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
              // if you leave an empty string here it will auto generate the sidebar subtitles.
              '',
              'recognition',
              'movement-analysis',
              'scene-reconstruction',
              'image-restoration'
          ]
        }
      ],
      '/history/': [
        {
          title: 'History',
          collapsable: false,
          children: [
              ''
          ]
        }
      ],
      '/get-started/': [
        {
          title: 'Get started',
          collapsable: false,
          children: [
            '',
            'javascript',
            'python',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
