function determineGiscusTheme() {
  // Use the same theme key as dark-mode.js for consistency
  const THEME_KEY = 'blog-theme';
  let savedTheme = localStorage.getItem(THEME_KEY);
  
  if (savedTheme) {
    return savedTheme === 'dark' ? "dark" : "light";
  }

  // Check if site has data-theme attribute (set by dark-mode.js)
  const dataTheme = document.documentElement.getAttribute('data-theme');
  if (dataTheme === 'dark') return "dark";

  // Fallback to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

(function setupGiscus() {
  let giscusTheme = determineGiscusTheme();

  let giscusAttributes = {
    src: "https://giscus.app/client.js",
    "data-repo": "allen5218/myblog",
    "data-repo-id": "R_kgDOPaqk9Q",
    "data-category": "Comments",
    "data-category-id": "DIC_kwDOPaqk9c4Cuwao",
    "data-mapping": "pathname",
    "data-strict": "0",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": giscusTheme,
    "data-lang": "zh-TW",
    crossorigin: "anonymous",
    async: true,
  };

  let giscusScript = document.createElement("script");
  Object.entries(giscusAttributes).forEach(([key, value]) =>
    giscusScript.setAttribute(key, value)
  );
  document.getElementById("giscus_thread").appendChild(giscusScript);
})();

// Note: Giscus theme switching is now handled by dark-mode.js
// through the updateGiscusTheme() function integrated with the site's
// theme toggle system.