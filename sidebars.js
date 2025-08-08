/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Architecture',
      items: ['architecture/c4-model'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/track-endpoint'],
    },
    {
      type: 'category',
      label: 'Flows',
      items: ['flows/event-forwarding'],
    },
    {
      type: 'category',
      label: 'ADR (Decisions)',
      items: ['adr/0001-why-ga4'],
    },
  ],
};

module.exports = sidebars;

// 🔁 Make sure your markdown filenames (e.g., track-endpoint.md) match the items here (without extension).