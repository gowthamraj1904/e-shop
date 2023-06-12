const Module = require("module");
const path = require("path");
const fs = require("fs");
const originalResolveFilename = Module._resolveFilename;
const distPath = __dirname;
const manifest = [{ "module": "@libs/interfaces", "exactMatch": "libs/interfaces/src/index.js", "pattern": "libs/interfaces/src/index.ts" }, { "module": "@libs/react/header", "exactMatch": "libs/react/header/src/index.js", "pattern": "libs/react/header/src/index.ts" }, { "module": "@server/controllers", "exactMatch": "apps/server/src/controllers/index.js", "pattern": "apps/server/src/controllers/index.ts" }, { "module": "@server/models", "exactMatch": "apps/server/src/models/index.js", "pattern": "apps/server/src/models/index.ts" }, { "module": "@server/routes", "exactMatch": "apps/server/src/routes/index.js", "pattern": "apps/server/src/routes/index.ts" }];
Module._resolveFilename = function(request, parent) {
  let found;
  for (const entry of manifest) {
    if (request === entry.module && entry.exactMatch) {
      const entry2 = manifest.find((x) => request === x.module || request.startsWith(x.module + "/"));
      const candidate = path.join(distPath, entry2.exactMatch);
      if (isFile(candidate)) {
        found = candidate;
        break;
      }
    } else {
      const re = new RegExp(entry.module.replace(/\*$/, "(?<rest>.*)"));
      const match = request.match(re);
      if (match?.groups) {
        const candidate = path.join(distPath, entry.pattern.replace("*", ""), match.groups.rest + ".js");
        if (isFile(candidate)) {
          found = candidate;
        }
      }
    }
  }
  if (found) {
    const modifiedArguments = [found, ...[].slice.call(arguments, 1)];
    return originalResolveFilename.apply(this, modifiedArguments);
  } else {
    return originalResolveFilename.apply(this, arguments);
  }
};
function isFile(s) {
  try {
    return fs.statSync(s).isFile();
  } catch (_e) {
    return false;
  }
}
require("./apps/test-server-express/src/main.js");
