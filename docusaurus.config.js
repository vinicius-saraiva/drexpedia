require('dotenv').config();

module.exports = {
  title: 'drex.guide',
  tagline: 'Your comprehensive guide to Brazil\'s CBDC',
  url: 'https://drex.guide',
  baseUrl: '/',
  organizationName: 'vinicius-saraiva',
  projectName: 'drex-guide',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  // Add favicon configuration
  favicon: 'img/favicon.png',
  
  // Theme configuration
  themeConfig: {
    navbar: {
      title: 'drex.guide',
      logo: {
        alt: 'DREX Guide Logo',
        src: 'img/logo_drexguide.png',
        srcDark: 'img/logo_drexguide.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start here',
        },
        {
          href: 'https://github.com/vinicius-saraiva/drex-guide',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://wa.me/5524992679147?text=Hello,%20I%20have%20feedback%20on%20drex.guide.',
          position: 'right',
          className: 'navbar-whatsapp-link',
          'aria-label': 'WhatsApp',
          html: '<i class="fab fa-whatsapp"></i>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Technical Architecture',
              to: '/docs/technical-architecture/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vinicius-saraiva/drex-guide',
            },
          ],
        },
      ],
      logo: {
        alt: 'DREX Guide Logo',
        src: 'img/logo_drexguide.png',
        href: '/',
        width: 32,
      },
      copyright: `<div class="footer__logo-text">drex.guide</div><div>Copyright © ${new Date().getFullYear()} The DREX Guide. Built with Docusaurus.</div>`,
    },
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  customFields: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    posthogPublicKey: 'phc_CzCsR8kLTf58Wbn9QMIGvHzlXMfZJJHocnHoPwwTrac',
    posthogHost: 'https://eu.i.posthog.com',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  stylesheets: [
    {
      href: '/css/intro.css',
      type: 'text/css',
    },
  ],
}
