export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f2a1c4e860ac2db8d45633a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9g7mxpae',
                  apiId: '9e18c382-6121-458a-b1cc-f8547eafd8e9'
                },
                {
                  buildHookId: '5f2a1c4e74e420f0068cdb11',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9eqirg2h',
                  apiId: '918c10b1-b014-47fc-9f5f-e9698081da43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JackovAlltrades/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9eqirg2h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
