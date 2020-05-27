const navConfig = {
  'Corda Open Source': {
    url: 'https://docs.corda.net/docs/corda-os/index.html',
    description:
      'Documentation for the free version of Corda'
  },
  'Corda Enterprise': {
    url: 'https://docs.corda.net/docs/corda-enterprise/index.html',
    description:
      'Documentation for the Enterprise version of Corda'
  },
  'CENM': {
    url: 'https://docs.corda.net/docs/cenm/index.html',
    description:
      "Documentation for the Corda Enterprise Network Manager"
  },
  'Corda Training ': {
    url: 'https://training.corda.net/',
    description:
      "Tutorials and training for everything Corda"
  }
};

const footerNavConfig = {
  Blog: {
    href: 'https://www.r3.com/blog/',
    target: '_blank',
    rel: 'noreferrer'
  },
  Contribute: {
    href: 'https://www.corda.net/contribute-code/'
  },
  'Stack Overflow': {
    href: 'https://stackoverflow.com/questions/tagged/corda',
    target: '_blank',
    rel: 'noreferrer'
  },
  Slack: {
    href: 'https://corda.slack.com',
    target: '_blank',
    rel: 'noreferrer'
  }
};

module.exports = {
  siteName: 'Corda Docs',
  menuTitle: 'Corda',
  menuTitle: 'Corda Platform',
  segmentApiKey: '04aUMAuRf0K8bnhzV9fmYIqzw6rF7gb0',
  algoliaApiKey: '210011072752e4c714ba580c0a4c944f',
  algoliaIndexName: 'corda_training',
  baseUrl: 'https://www.corda.net',
  siteUrl: 'https://training.corda.net',
  twitterHandle: 'cordablockchain',
  slackUrl: 'https://corda.slack.com/',
  youtubeUrl: 'https://www.youtube.com/channel/UCoOuUZatvIC1U65OisCrIKg',
  logoLink: 'https://docs.corda.net/',
  baseDir: 'docs',
  contentDir: 'content',
  navConfig,
  footerNavConfig
};
