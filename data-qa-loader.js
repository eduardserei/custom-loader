module.exports = (source) => {
  var dataAttr = 'data-qa="([^"]*)"';
  if (source.match(dataAttr)) {
    source = source.replace(new RegExp(dataAttr, "g"), "");
  }
  source.replace(/console\.log\(.*\);?\n/g, "");
  return source;
};
