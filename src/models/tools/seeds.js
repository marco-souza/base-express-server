import Tools from 'models/tools'


// Seed db
export default async () => {
  // Check if table is empty
  if ((await Tools.list()).count()) return

  // Create some tools
  const listTools = [
    { title: 'NodeJS',
      description: 'Javascript v8 Engine server-side.',
      link: "NodeJS",
      tags: [
        'nodejs',
        'backend',
        'javascript',
      ]
    },
    { title: 'React',
      description: 'Javascript view framework.',
      link: "NodeJS",
      tags: [
        'nodejs',
        'react',
        'frontend',
        'javascript',
      ]
    },
    { title: 'Express',
      description: 'Javascript server lib.',
      link: "NodeJS",
      tags: [
        'nodejs',
        'server',
        'api',
        'javascript',
      ]
    },
    { title: 'Rollup',
      description: 'Simple bundler tool.',
      link: "NodeJS",
      tags: [
        'nodejs',
        'frontend',
        'javascript',
      ]
    },
  ]
  listTools.map(tool => Tools.create(tool))
}
