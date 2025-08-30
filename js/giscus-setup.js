---
permalink: /js/giscus-setup.js
---

function determineGiscusTheme() {
  {% if site.default_theme %}
    // Check localStorage for saved theme preference
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark' ? "{{ site.giscus.dark_theme }}" : "{{ site.giscus.light_theme }}";
    }

    // Use site default theme
    let siteTheme = "{{ site.default_theme }}";
    if (siteTheme === "dark") return "{{ site.giscus.dark_theme }}";
    if (siteTheme === "light") return "{{ site.giscus.light_theme }}";

    // Fallback to system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "{{ site.giscus.dark_theme }}" : "{{ site.giscus.light_theme }}";
  {% else %}
    return "{{ site.giscus.light_theme }}";
  {% endif %}
}

(function setupGiscus() {
  let giscusTheme = determineGiscusTheme();

  let giscusAttributes = {
    src: "https://giscus.app/client.js",
    "data-repo": "{{ site.giscus.repo }}",
    "data-repo-id": "{{ site.giscus.repo_id }}",
    "data-category": "{{ site.giscus.category }}",
    "data-category-id": "{{ site.giscus.category_id }}",
    "data-mapping": "{{ site.giscus.mapping }}",
    "data-strict": "{{ site.giscus.strict }}",
    "data-reactions-enabled": "{{ site.giscus.reactions_enabled }}",
    "data-emit-metadata": "{{ site.giscus.emit_metadata }}",
    "data-input-position": "{{ site.giscus.input_position }}",
    "data-theme": giscusTheme,
    "data-lang": "{{ site.giscus.lang }}",
    crossorigin: "anonymous",
    async: true,
  };

  let giscusScript = document.createElement("script");
  Object.entries(giscusAttributes).forEach(([key, value]) =>
    giscusScript.setAttribute(key, value)
  );
  document.getElementById("giscus_thread").appendChild(giscusScript);
})();

// Function to update giscus theme when site theme changes
function updateGiscusTheme(isDark) {
  const giscusFrame = document.querySelector("iframe.giscus-frame");
  if (giscusFrame) {
    const theme = isDark ? "{{ site.giscus.dark_theme }}" : "{{ site.giscus.light_theme }}";
    giscusFrame.contentWindow.postMessage({
      giscus: {
        setConfig: {
          theme: theme
        }
      }
    }, "https://giscus.app");
  }
}

// Make the function globally available for theme switching
if (typeof window !== 'undefined') {
  window.updateGiscusTheme = updateGiscusTheme;
}