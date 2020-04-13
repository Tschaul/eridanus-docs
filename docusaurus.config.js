module.exports = {
  title: 'Iridanus',
  tagline: 'A slow real time space strategy game',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tschaul', // Usually your GitHub org/user name.
  projectName: 'iridanus', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'Iridanus',
      logo: {
        alt: 'Iridanus Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/overview/intro', label: 'Docs', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tscahul/iridanus-server',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/overview/intro',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/tschaul/iridanus-server',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Iridanus, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tschaul/iridanus-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
