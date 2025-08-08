// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'MVP1 Docs',
  tagline: 'Analytics Pipeline for MVP1',
  url: 'https://venk2030.github.io',  // actual values
  baseUrl: '/fullstack_codes/',        // actual values
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'venk2030',       // GitHub org/user — updated
  projectName: 'fullstack_codes',     // GitHub repo name — updated

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // docs at root
          mermaid: true,      // Enable native Mermaid support
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MVP1 Docs',
      logo: {
        alt: 'MVP1 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/venk2030/fullstack_codes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Architecture', to: '/architecture/c4-model' }],
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/venk2030' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MVP1`,
    },
  },
};

module.exports = config;
