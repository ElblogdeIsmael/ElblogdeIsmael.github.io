/**
 * Star prompt & community hub notification.
 *
 * Prompts visitors to star the GitHub repository, follow the author, share
 * with classmates, or report erratas.
 *
 * Appears subtly after a brief reading delay or when scrolling down.
 * Remembers dismissals in localStorage so it never annoys recurring visitors.
 *
 * @author Ismael Sallami Moreno
 */
(function () {
  "use strict";

  var STORAGE_KEY = "star-prompt-choice";
  var REPO_OWNER = "ElblogdeIsmael";
  var REPO_NAME = "ElblogdeIsmael.github.io";

  var promptEl = document.getElementById("star-prompt");
  if (!promptEl) return;

  var params = new URLSearchParams(window.location.search);
  var forceTest = params.has("test-star");

  // Check localStorage if not in test mode
  if (!forceTest) {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var data = JSON.parse(saved);
        // If already interacted positively (starred, followed, shared), silence for 180 days.
        // If dismissed with "Ahora no" or "×", silence for 2 days.
        var cooldown = data.starred ? 180 * 86400000 : 2 * 86400000;
        if (Date.now() - data.time < cooldown) {
          return;
        }
      }
    } catch (error) {
      // Storage unavailable (e.g. private mode); proceed smoothly.
    }
  }

  /**
   * Hides the prompt with a smooth slide-out animation and saves the choice.
   * @param {boolean} starred Whether the user performed a positive engagement.
   */
  function hide(starred) {
    promptEl.classList.remove("is-visible");
    promptEl.classList.add("is-hiding");
    promptEl.setAttribute("aria-hidden", "true");

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ time: Date.now(), starred: Boolean(starred) })
      );
    } catch (error) {}

    setTimeout(function () {
      promptEl.hidden = true;
    }, 250);
  }

  /**
   * Shows the prompt with an entrance transition.
   */
  function show() {
    promptEl.hidden = false;
    promptEl.removeAttribute("aria-hidden");
    // Trigger reflow to ensure the entrance animation runs
    void promptEl.offsetWidth;
    promptEl.classList.add("is-visible");
  }

  var closeBtn = document.getElementById("star-prompt-close");
  var dismissBtn = document.getElementById("star-prompt-dismiss");
  var linkBtn = document.getElementById("star-prompt-link");
  var followBtn = document.getElementById("star-prompt-follow");
  var copyBtn = document.getElementById("star-prompt-copy");
  var copyText = document.getElementById("star-prompt-copy-text");
  var countEl = document.getElementById("star-prompt-count");

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      hide(false);
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
      hide(false);
    });
  }

  if (linkBtn) {
    linkBtn.addEventListener("click", function () {
      hide(true);
    });
  }

  if (followBtn) {
    followBtn.addEventListener("click", function () {
      hide(true);
    });
  }

  // Handle clipboard copy of the site URL
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var urlToCopy = "https://elblogdeismael.github.io/";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(urlToCopy).then(function () {
          if (copyText) {
            var orig = copyText.textContent;
            copyText.textContent = "¡Copiado! ✓";
            copyBtn.classList.add("is-copied");
            setTimeout(function () {
              copyText.textContent = orig;
              copyBtn.classList.remove("is-copied");
            }, 2000);
          }
        }).catch(function () {});
      }
    });
  }

  // Fetch stargazers count quietly from GitHub's public API
  if (countEl && window.fetch) {
    fetch("https://api.github.com/repos/" + REPO_OWNER + "/" + REPO_NAME)
      .then(function (response) {
        if (!response.ok) return null;
        return response.json();
      })
      .then(function (info) {
        if (info && typeof info.stargazers_count === "number") {
          countEl.textContent = info.stargazers_count;
          countEl.hidden = false;
        }
      })
      .catch(function () {});
  }

  if (forceTest) {
    show();
    return;
  }

  var triggered = false;
  function trigger() {
    if (triggered) return;
    triggered = true;
    window.removeEventListener("scroll", onScroll);
    clearTimeout(timer);
    show();
  }

  function onScroll() {
    if (window.scrollY > 250) {
      trigger();
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  var timer = setTimeout(trigger, 4000);
})();
