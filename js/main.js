/**
 * Main routing and content loading module
 * 
 * Content Loading:
 * - Content is loaded from markdown files in content/{lang}/ directory
 * - URLs are normalized to ensure proper resource loading
 * - All static resources (CSS, JS) use absolute paths from root
 * 
 * Routing:
 * - Hash-based routing (#home, #about, etc.)
 * - Language prefix in URL determines content language
 * - Falls back to localStorage or 'zh' if no valid language specified
 */

// Initialize Showdown converter
const converter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true
});

// Router function to handle navigation
async function router() {
    const hash = window.location.hash || '#home';
    const lang = getCurrentLanguage(); // This now handles URL correction
    const page = hash.slice(1) || 'home';
    
    try {
        // First try the direct page name
        let response = await fetch(`content/${lang}/${page}.md`);
        
        // If not found, try with 'about' for 'about-us'
        if (!response.ok && page === 'about-us') {
            response = await fetch(`content/${lang}/about.md`);
        }
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const markdown = await response.text();
        const html = converter.makeHtml(markdown);
        document.getElementById('markdown-content').innerHTML = html;
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('markdown-content').innerHTML = `
            <h1>${i18n[lang].errors.notFound}</h1>
            <p>${i18n[lang].errors.pageNotFound}</p>
        `;
    }
}

// Handle navigation events
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
    // Initialize language from URL or localStorage
    initializeLanguage();
    router();
});
