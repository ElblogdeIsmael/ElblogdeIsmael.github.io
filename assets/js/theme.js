/**
 * Theme switch.
 *
 * The theme is already applied when this runs: the page head carries a tiny
 * inline snippet that sets `data-theme` before first paint, which is what
 * stops the white flash. This file only wires up the button.
 *
 * @author Ismael Sallami Moreno
 */
(function () {
  "use strict";

  var STORAGE_KEY = "course-theme";
  var root = document.documentElement;

  /**
   * Applies a theme and remembers the choice.
   * @param {"dark"|"light"} theme
   */
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Private browsing blocks storage. The theme still applies for this page.
    }
  }

  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  button.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "light" ? "dark" : "light");
  });

  // Follow the system while the reader has not chosen a theme.
  var media = window.matchMedia("(prefers-color-scheme: light)");
  media.addEventListener("change", function (event) {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch (error) {
      return;
    }
    root.setAttribute("data-theme", event.matches ? "light" : "dark");
  });
})();
