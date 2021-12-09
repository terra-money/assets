const glob = require("glob");
const fs = require("fs").promises;

// Find all JavaScript config files and convert them to JSON.
glob(
  "**/*.js",
  {
    ignore: ["index.js", "node_modules/**"],
  },
  (_, files) => {
    files.forEach(async (file) => {
      const fullPath = `./${file}`;
      // Append `on` to the end of `js` to create `json`.
      const fullPathJSON = `./${file}on`;
      const list = require(fullPath);

      // Format the JSON with indentions.
      const jsonList = JSON.stringify(list, null, 2);
      await fs.writeFile(fullPathJSON, jsonList);
    });
  }
);
