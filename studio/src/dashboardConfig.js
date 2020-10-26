export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9723b2b7ad44012c224c42',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yyjubhbz',
                  apiId: '15a9e6bd-d269-4ebd-a57c-f92438033aab'
                },
                {
                  buildHookId: '5f9723b2735605012d38f4a6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q4kftd7a',
                  apiId: 'cded626e-4ac2-459d-9e10-48b63cf3e8d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rayuzaki83/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q4kftd7a.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
