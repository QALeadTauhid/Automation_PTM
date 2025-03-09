/// <reference types="cypress" />

const FIGMA_TOKEN = "YOUR_FIGMA_ACCESS_TOKEN"; // Replace with your Figma token
const FIGMA_FILE_KEY = "TPN05hqEj57C2w5EDdz5Rx"; // Replace with your Figma file key
const NODE_ID = "0-1"; // Replace with the specific node ID (e.g., page/frame)

describe('Verify Figma Content vs Live Website', () => {
  let figmaText = [];

  before(() => {
    cy.request({
      method: 'GET',
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${NODE_ID}`,
      headers: { 'X-Figma-Token': FIGMA_TOKEN }
    }).then((response) => {
      const nodes = response.body.nodes[NODE_ID]?.document?.children || [];
      figmaText = nodes.map(node => node.characters).filter(Boolean); // Extract text from Figma
    });
  });

  it('Checks website text matches Figma', () => {
    cy.visit('https://www.paytome.co/3d-secure-credit-card-verification'); // Live website URL

    cy.get('body').invoke('text').then((websiteText) => {
      figmaText.forEach(text => {
        // Normalize spaces and compare case-insensitive
        expect(websiteText.replace(/\s+/g, ' ').toLowerCase()).to.include(
          text.trim().replace(/\s+/g, ' ').toLowerCase(),
          `Mismatch found: ${text}`
        );
      });
    });
  });
});
