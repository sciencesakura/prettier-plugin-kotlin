const {
  doc: {
    builders: { concat }
  }
} = require("prettier");

module.exports = (path, opts, print) => {
  const node = path.getValue();
  const type = node.type ? concat([": ", path.call(print, "type")]) : "";
  return concat([node.name, type]);
};
