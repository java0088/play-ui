import type { UserConfig } from 'vitepress'

export const config: UserConfig = {
  title: 'Play UI',
  description: 'a Vue 3 based component library for designers and developers',
  head: [
    [
      'link',
      {
        href: 'www.baidu.com'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/vite.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-PRESENT Anthony Fu and VueUse contributors',
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },
    nav: [
      { text: "指南", link: "/guide/design" },
      { text: "组件", link: "/component/button" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/java0088" }
    ],
    sidebar: {
      '/guide/': {

      },
      '/component/': [
        {
          text: 'Basic',
          items: [
            {
              text: 'Button',
              link: '/component/button'
            }
          ]
        }
      ]
    }
    // sidebar: [
    //   {
    //     text: 'Basic',
    //     items: [
    //       {
    //         text: 'Button',
    //         link: '/articles/button'
    //       }
    //     ]
    //   }
    // ]
  }
}

export default config