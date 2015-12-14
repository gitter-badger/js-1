function subCipher(text) {
  return text.replace(/([A-Za-z])/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0) + 1).toUpperCase();
  });
};
