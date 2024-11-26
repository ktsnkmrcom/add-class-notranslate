const elements = document.getElementsByTagName("pre");
for (const element of elements) {
  element.classList.contains("notranslate") || element.classList.add("notranslate");
};
