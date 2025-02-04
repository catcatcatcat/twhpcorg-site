/**
 * Language handling and internationalization module
 * 
 * URL Format:
 * - Uses URL parameter: ?lang=xx (e.g., ?lang=zh, ?lang=en)
 * - Fallback to localStorage if no URL parameter
 * - Only 'zh' and 'en' are valid language codes
 */

// Internationalization configuration
const i18n = {
    zh: {
        nav: {
            home: '首頁',
            about: '關於我們',
            projects: '專案與研究',
            education: '教育與培訓',
            join: '加入我們',
            news: '最新消息'
        },
        features: {
            talent: '理監事名單',
            talentDesc: '由產學研各界專家學者組成理監事會，共同推動台灣 HPC 與 IC 設計的發展',
            research: '開放研究',
            researchDesc: '推動BlackBear和ACALSim等開源專案',
            education: '教育培訓',
            educationDesc: '提供專業課程與實作工作坊',
            collaboration: '產學合作',
            collaborationDesc: '促進產業與學術交流與創新'
        },
        footer: {
            quickLinks: '快速連結',
            contact: '聯絡我們'
        },
        errors: {
            notFound: '找不到頁面',
            pageNotFound: '抱歉，您請求的頁面不存在。'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            projects: 'Projects & Research',
            education: 'Education & Training',
            join: 'Join Us',
            news: 'News'
        },
        features: {
            talent: 'Board of Directors',
            talentDesc: 'Our board consists of experts from industry, academia, and research institutes, working together to advance Taiwan\'s HPC and IC design development',
            research: 'Open Research',
            researchDesc: 'Promoting open-source projects like BlackBear and ACALSim',
            education: 'Education',
            educationDesc: 'Providing professional courses and hands-on workshops',
            collaboration: 'Collaboration',
            collaborationDesc: 'Fostering industry-academia innovation and exchange'
        },
        footer: {
            quickLinks: 'Quick Links',
            contact: 'Contact Us'
        },
        errors: {
            notFound: 'Page Not Found',
            pageNotFound: 'Sorry, the page you requested does not exist.'
        }
    }
};

// Get current language from URL or localStorage
function getCurrentLanguage() {
    // First try to get from URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'zh' || urlLang === 'en') {
        localStorage.setItem('language', urlLang); // Remember the choice
        return urlLang;
    }
    
    // Then try localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'zh' || savedLang === 'en') {
        return savedLang;
    }
    
    // Default to Chinese
    return 'zh';
}

// Initialize language settings
function initializeLanguage() {
    const lang = getCurrentLanguage();
    setLanguage(lang);
}

// Switch language function
function switchLanguage(lang) {
    if (lang !== 'zh' && lang !== 'en') {
        lang = 'zh';
    }
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
    
    // Store in localStorage and update UI
    localStorage.setItem('language', lang);
    setLanguage(lang);
}

// Set language in UI
function setLanguage(lang) {
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((lang === 'zh' && btn.textContent === '中文') ||
            (lang === 'en' && btn.textContent === 'EN')) {
            btn.classList.add('active');
        }
    });
    
    // Set HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n').split('.');
        let text = i18n[lang];
        key.forEach(k => text = text[k]);
        element.textContent = text;
    });
    
    updateContent(lang);
}

// Update content based on language
function updateContent(lang) {
    router();
}
