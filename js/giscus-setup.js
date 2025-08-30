function determineGiscusTheme() {
  // Check localStorage for saved theme preference
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark' ? "dark" : "light";
  }

  // Check if site has dark theme by default (based on document classes/styles)
  const isDarkMode = document.documentElement.classList.contains('dark') || 
                     document.body.classList.contains('dark') ||
                     getComputedStyle(document.body).backgroundColor === 'rgb(33, 37, 41)'; // Bootstrap dark
  
  if (isDarkMode) return "dark";

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

// Function to update giscus theme when site theme changes
function updateGiscusTheme(isDark) {
  const giscusFrame = document.querySelector("iframe.giscus-frame");
  if (giscusFrame) {
    const theme = isDark ? "dark" : "light";
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