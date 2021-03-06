// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const {
  SearchIndexClient,
  AzureKeyCredential
} = require("@azure/search-documents");
require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running Delete Index Sample....`);
  if (!endpoint || !apiKey) {
    console.log("Make sure to set valid values for endpoint and apiKey with proper authorization.");
    return;
  }
  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Get Index example-index-2`);
  const index = await client.getIndex("example-index-2");
  console.log(`Deleting Index example-index-2`);
  await client.deleteIndex(index);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
