// functions/index.js
const functions = require('firebase-functions');
const { handler } = require('./dist/server/entry.mjs');

exports.ssr = functions.https.onRequest((request, response) => {
  // Only use this function for paths that require SSR.
  handler(request, response);
});
