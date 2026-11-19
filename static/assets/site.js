// Catalan labels for the catalog widget (the generator writes them in English)
// and "open external links in a new tab".
(function () {
  "use strict";
  var catalog = document.querySelector("[data-catalog]");
  if (catalog) {
    var search = catalog.querySelector("[data-search]");
    if (search) { search.placeholder = "Cerca una entitat, activitat o lloc..."; search.setAttribute("aria-label", "Cerca"); }
    catalog.querySelectorAll("[data-all]").forEach(function (b) { b.textContent = "Totes"; });
    catalog.querySelectorAll("[data-more]").forEach(function (b) { b.textContent = b.textContent.replace("more", "més"); });
    var empty = catalog.querySelector("[data-empty]");
    if (empty) empty.textContent = "Cap entitat coincideix amb la cerca.";
    var count = catalog.querySelector("[data-count]");
    var tr = function () {
      var t = count.textContent, m;
      if ((m = t.match(/^(\d+) of (\d+) items$/))) t = m[1] + " de " + m[2] + " entitats";
      else if ((m = t.match(/^(\d+) items$/))) t = m[1] + " entitats";
      if (t !== count.textContent) count.textContent = t;
    };
    if (count) { tr(); new MutationObserver(tr).observe(count, { childList: true, characterData: true, subtree: true }); }
  }
  document.querySelectorAll("a[href^='http']").forEach(function (a) {
    if (a.host !== location.host) { a.target = "_blank"; a.rel = "noopener"; }
  });
})();
