/**
 * Staggered entrance for elements marked `.reveal`.
 *
 * CSS holds the animation; this only decides when it starts. Elements above
 * the fold use `.reveal-now` in the markup and never reach this file.
 *
 * The `no-js` class on <html> keeps everything visible when scripting is off,
 * so the content is never hidden by a script that failed to load.
 *
 * @author Ismael Sallami Moreno
 */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var targets = document.querySelectorAll(".reveal");
  if (targets.length === 0) return;

  // Without IntersectionObserver, show everything at once.
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // play once
      });
    },
    { rootMargin: "0px 0px -80px 0px" },
  );

  targets.forEach(function (element) {
    observer.observe(element);
  });
})();
