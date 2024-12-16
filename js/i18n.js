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
            talent: '人才培育',
            talentDesc: '建立完整的培訓系統，培養HPC和IC設計專業人才',
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
            talent: 'Talent Development',
            talentDesc: 'Building comprehensive training systems for HPC and IC design professionals',
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
    const urlLang = window.location.pathname.split('/')[1];
    if (urlLang === 'en' || urlLang === 'zh') {
        return urlLang;
    }
    return localStorage.getItem('language') || 'zh';
}

// Initialize language settings
function initializeLanguage() {
    const lang = getCurrentLanguage();
    setLanguage(lang);
}

// Switch language function
function switchLanguage(lang) {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update URL to reflect language change
    const currentPath = window.location.pathname.split('/').slice(2).join('/');
    const newPath = `/${lang}/${currentPath}`;
    history.pushState({}, '', newPath);
    
    // Update content
    updateContent(lang);
}

// Set language in UI
function setLanguage(lang) {
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n').split('.');
        let text = i18n[lang];
        key.forEach(k => text = text[k]);
        element.textContent = text;
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang)) {
            btn.classList.add('active');
        }
    });
}

// Update content based on language
function updateContent(lang) {
    router();
}
