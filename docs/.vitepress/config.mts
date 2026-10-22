import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  mermaid: {
    securityLevel: 'strict',
    theme: 'default',
    flowchart: { useMaxWidth: false, htmlLabels: false, wrappingWidth: 160 }
  },
  title: 'Awareness Briefing',
  description: 'An open project notebook for news discovery, topic history, and daily briefings.',
  base: '/awareness-briefing/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/project-overview' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Issues', link: 'https://github.com/kaw393939/awareness-briefing/issues' }
    ],
    sidebar: [
      { text: 'Product', items: [
        { text: 'Purpose and scope', link: '/project-overview' },
        { text: 'Editions and discovery', link: '/editions' },
        { text: 'Architecture', link: '/architecture' },
        { text: 'Canonical data model', link: '/data-model' },
        { text: 'Desktop correspondent', link: '/desktop-correspondent' }
      ] },
      { text: 'Build in the open', items: [
        { text: 'Roadmap and issues', link: '/roadmap' },
        { text: 'Working process', link: '/process' },
        { text: 'Decisions', link: '/decisions/' },
        { text: 'Development', link: '/development' },
        { text: 'Project map', link: '/project-map' },
        { text: 'Handoff', link: '/handoff' }
      ] }
    ],
    search: { provider: 'local' },
    editLink: { pattern: 'https://github.com/kaw393939/awareness-briefing/edit/main/docs/:path' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/awareness-briefing' }],
    footer: { message: 'Project documentation · proposed capabilities are identified explicitly.' }
  }
})
