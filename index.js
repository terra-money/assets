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

      // Sort lists based on protocol name, or contract name.
      ["mainnet", "classic", "testnet"].forEach((network) => {
        if (typeof list[network] === "undefined") {
          return;
        }

        list[network] = Object.entries(list[network])
          .sort(([_a, a], [_b, b]) => {
            if (typeof a.protocol !== "undefined") {
              return a.protocol.localeCompare(b.protocol);
            }

            if (typeof a.name !== "undefined") {
              return a.name.localeCompare(b.name);
            }

            return 0;
          })
          .reduce((obj, key) => {
            obj[key[0]] = list[network][key[0]];
            return obj;
          }, {});
      });

      // Format the JSON with indentions before writing.
      const jsonList = JSON.stringify(list, null, 2);
      await fs.writeFile(fullPathJSON, jsonList);
    });
  }
);
