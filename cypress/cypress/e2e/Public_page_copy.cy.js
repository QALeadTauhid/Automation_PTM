/// <reference types="cypress" />

const FIGMA_TOKEN = "---"; // Replace with your Figma API token
const FIGMA_FILE_KEY = "TPN05hqEj57C2w5EDdz5Rx"; // Replace with your Figma file key
const NODE_ID = "2353-163240"; // Replace with your specific Figma node ID


const WEBSITE_URL = "https://www.paytome.co/3d-secure-credit-card-verification"; // Live website URL
const EXPECTED_IMAGES = ["expected_image_url1", "expected_image_url2"]; // Update with expected image URLs
const EXPECTED_BUTTONS = ["Submit", "Cancel", "Next"]; // Expected button labels from Figma
const UNEXPECTED_TEXTS = ["Lorem ipsum", "Dummy text"]; // Extra/unexpected text that should NOT be present

describe("Verify Figma Content vs Live Website", () => {
  let figmaText = [];

  before(() => {
    // Fetch text content from Figma API
    cy.request({
      method: "GET",
      url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${NODE_ID}`,
      headers: { "X-Figma-Token": FIGMA_TOKEN },
    }).then((response) => {
      const nodes = response.body.nodes[NODE_ID]?.document?.children || [];
      figmaText = nodes
        .map((node) => node.characters)
        .filter(Boolean); // Extract text content from Figma
    });
  });

  it("Checks website text matches Figma", () => {
    cy.visit(WEBSITE_URL);

    cy.get("body")
      .invoke("text")
      .then((websiteText) => {
        figmaText.forEach((text) => {
          expect(websiteText.replace(/\s+/g, " ").toLowerCase()).to.include(
            text.trim().replace(/\s+/g, " ").toLowerCase(),
            `Mismatch found: ${text}`
          );
        });
      });
  });

  it("Checks button names match Figma", () => {
    EXPECTED_BUTTONS.forEach((buttonName) => {
      cy.contains("a, button", buttonName, { timeout: 10000 }) // Wait for button or link
        .should("exist") // Ensure the button is in the DOM
        .and("be.visible"); // Ensure the button is visible
    });
  });

  it("Checks images match Figma design", () => {
    cy.get("img", { timeout: 10000 }) // Wait up to 10 seconds for images to load
      .should("be.visible") // Ensure images are visible
      .each(($img) => {
        const src = $img.attr("src");
        expect(EXPECTED_IMAGES.some((expectedSrc) => src.includes(expectedSrc)))
          .to.be.true; // Ensure the src matches an expected image
      });

    // Check for background images (if used instead of <img>)
    cy.get("[style*='background-image']", { timeout: 10000 }).should("exist");
  });

  it("Checks for no extra text", () => {
    UNEXPECTED_TEXTS.forEach((text) => {
      cy.get("body").should("not.include.text", text);
    });
  });
});



// /// <reference types="cypress" />

// const FIGMA_TOKEN = ""; // Replace with your Figma API token
// const FIGMA_FILE_KEY = "TPN05hqEj57C2w5EDdz5Rx"; // Replace with your Figma file key

// const WEBSITE_URL = "https://www.paytome.co/3d-secure-credit-card-verification"; // Live website URL
// const EXPECTED_IMAGES = ["expected_image_url1", "expected_image_url2"]; // Update with expected image URLs
// const EXPECTED_BUTTONS = ["Submit", "Cancel", "Next"]; // Expected button labels from Figma
// const UNEXPECTED_TEXTS = ["Lorem ipsum", "Dummy text"]; // Extra/unexpected text that should NOT be present

// const MAX_RETRIES = 3; // Retry limit in case of API failure
// let retryCount = 0;
// let figmaText = [];

// describe("Verify Figma Content vs Live Website", () => {

//   // Utility function to fetch text content from Figma API
//   const fetchFigmaData = () => {
//     cy.request({
//       method: "GET",
//       url: `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
//       headers: { "X-Figma-Token": FIGMA_TOKEN },
//       timeout: 120000, // Increased timeout to 120 seconds (120000ms)
//       failOnStatusCode: false, // Do not fail on non-2xx responses
//     }).then((response) => {
//       if (response.status === 200) {
//         // Successfully fetched data
//         const document = response.body.document;

//         // Traverse through the document and extract text content from nodes
//         figmaText = traverseFigmaDocumentForText(document);
//         cy.log("Figma data successfully fetched.");
//       } else {
//         // Retry logic for failed requests
//         cy.log(`Figma API request failed with status ${response.status}. Retrying...`);
//         if (retryCount < MAX_RETRIES) {
//           retryCount++;
//           cy.wait(10000); // Wait for 10 seconds before retrying
//           fetchFigmaData(); // Retry the request
//         } else {
//           throw new Error("Figma API request failed after 3 retries");
//         }
//       }
//     }).then(null, (error) => {
//       // Handle any request error
//       cy.log(`Error: ${error.message}`);
//       throw error;
//     });
//   };

//   // Utility function to recursively traverse Figma document and extract text
//   const traverseFigmaDocumentForText = (document) => {
//     let textNodes = [];

//     // Extract text nodes from the document
//     document.children.forEach((node) => {
//       if (node.type === 'TEXT' && node.characters) {
//         textNodes.push(node.characters);
//       }

//       // If the node has children, recursively extract text from them
//       if (node.children) {
//         textNodes = textNodes.concat(traverseFigmaDocumentForText(node));
//       }
//     });

//     return textNodes;
//   };

//   before(() => {
//     // Fetch text content from Figma API before starting tests
//     fetchFigmaData();
//   });

//   it("Checks website text matches Figma", () => {
//     cy.visit(WEBSITE_URL);

//     cy.get("body")
//       .invoke("text")
//       .then((websiteText) => {
//         // Compare the Figma text with the website text
//         figmaText.forEach((text) => {
//           expect(websiteText.replace(/\s+/g, " ").toLowerCase()).to.include(
//             text.trim().replace(/\s+/g, " ").toLowerCase(),
//             `Mismatch found: ${text}`
//           );
//         });
//       });
//   });

//   it("Checks button names match Figma", () => {
//     EXPECTED_BUTTONS.forEach((buttonName) => {
//       cy.contains("a, button", buttonName, { timeout: 10000 }) // Wait for button or link
//         .should("exist") // Ensure the button is in the DOM
//         .and("be.visible"); // Ensure the button is visible
//     });
//   });

//   it("Checks images match Figma design", () => {
//     cy.get("img", { timeout: 10000 }) // Wait up to 10 seconds for images to load
//       .should("be.visible") // Ensure images are visible
//       .each(($img) => {
//         const src = $img.attr("src");
//         expect(EXPECTED_IMAGES.some((expectedSrc) => src.includes(expectedSrc)))
//           .to.be.true; // Ensure the src matches an expected image
//       });

//     // Check for background images (if used instead of <img>)
//     cy.get("[style*='background-image']", { timeout: 10000 }).should("exist");
//   });

//   it("Checks for no extra text", () => {
//     UNEXPECTED_TEXTS.forEach((text) => {
//       cy.get("body").should("not.include.text", text);
//     });
//   });
// });
