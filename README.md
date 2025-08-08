# MVP1 Documentation

This repo contains Docusaurus-ready documentation for the MVP1 analytics pipeline.

fullstack_codes/
├── docs/
│   ├── index.md
│   ├── architecture/
│   │   └── c4-model.md
│   ├── api/
│   │   └── track-endpoint.md
│   ├── adr/
│   │   └── 0001-why-ga4.md
│   └── flows/
│       └── event-forwarding.md
├── src/
│   └── pages/
│       └── index.js               # Custom React homepage
├── sidebars.js                   # Docusaurus sidebar config
├── docusaurus.config.js          # Docusaurus main config
├── package.json                  # NPM/Yarn scripts & dependencies
└── README.md                     # Repo overview & instructions

🪄 Structurizr DSL Rendering in Docusaurus
Docusaurus doesn’t natively render Structurizr DSL, but you can:

Option 1: Export your Structurizr DSL diagrams as images from Structurizr Lite or Structurizr cloud, then embed images in markdown.

Option 2: Use the Structurizr Web Component in React pages.

Example embedding Structurizr Web Component in a React doc page:

<!-- 
import React from 'react';

export default function StructurizrDiagram() {
  return (
    <structurizr-viewer
      workspace-id="yourWorkspaceId"
      api-key="yourApiKey"
      api-secret="yourApiSecret"
      style={{ width: '100%', height: '600px' }}
    />
  );
} -->

You’d need to add the <script> for the web component in your index.html or via React lazy loading.

