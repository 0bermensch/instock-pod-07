const fs = require("fs");

function writeJSONFile(filename, content) {
  fs.writeFileSync(file, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  writeJSONFile
};
