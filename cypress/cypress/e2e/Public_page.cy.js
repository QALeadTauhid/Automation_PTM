/// <reference types="cypress" />

const FIGMA_TOKEN = ""; // Replace with your Figma token
const FIGMA_FILE_KEY = "TPN05hqEj57C2w5EDdz5Rx"; // Extracted from Figma URL
// const FIGMA_FILE_KEY = "TPN05hqEj57C2w5EDdz5Rx";

// const NODE_ID = "0-1"; // Node containing text elements
const NODE_ID = "2219-49";


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
    // cy.visit('https://www.paytome.co/send-invoices-via-text'); // Live website URL
    cy.visit('https://www.paytome.co/ach-payments-cost-and-fees');

    cy.get('body').invoke('text').then((websiteText) => {
      figmaText.forEach(text => {
        expect(websiteText).to.include(text.trim(), `Mismatch found: ${text}`);
      });
    });
  });
});
