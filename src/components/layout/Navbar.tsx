import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

// 導航項目類型定義
interface NavItem {
  key: string;
  label: {
    zh: string;
    en: string;
  };
  href: string;
  dropdown?: {
    key: string;
    label: {
      zh: string;
      en: string;
    };
    href: string;
  }[];
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const isEnglish = router.locale === 'en';

  // 監聽滾動事件，用於改變導航欄樣式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 導航項目配置
  const navItems: NavItem[] = [
    {
      key: 'home',
      label: { zh: '首頁', en: 'Home' },
      href: '/',
      dropdown: [
        {
          key: 'join',
          label: { zh: '加入會員', en: 'Join Us' },
          href: '/join-us',
        },
        {
          key: 'donate',
          label: { zh: '贊助我們', en: 'Donate' },
          href: '/donate',
        },
      ],
    },
    {
      key: 'about',
      label: { zh: '關於我們', en: 'About Us' },
      href: '/about',
      dropdown: [
        {
          key: 'mission',
          label: { zh: '使命', en: 'Mission' },
          href: '/about/mission',
        },
        {
          key: 'board',
          label: { zh: '理監事成員', en: 'Board' },
          href: '/about/board',
        },
        {
          key: 'history',
          label: { zh: '歷史', en: 'History' },
          href: '/about/history',
        },
        {
          key: 'annual-report',
          label: { zh: '年度報告', en: 'Annual Report' },
          href: '/about/annual-report',
        },
        {
          key: 'partners',
          label: { zh: '合作夥伴', en: 'Partners' },
          href: '/about/partners',
        },
      ],
    },
    {
      key: 'projects',
      label: { zh: '專案與研究', en: 'Projects & Research' },
      href: '/projects',
      dropdown: [
        {
          key: 'blackbear',
          label: { zh: 'BlackBear 開源計畫', en: 'BlackBear Project' },
          href: '/projects/blackbear',
        },
        {
          key: 'acalsim',
          label: { zh: 'ACALSim 模擬平台', en: 'ACALSim Platform' },
          href: '/projects/acalsim',
        },
      ],
    },
    {
      key: 'education',
      label: { zh: '教育培訓', en: 'Education & Training' },
      href: '/education',
      dropdown: [
        {
          key: 'features',
          label: { zh: '課程特色', en: 'Course Features' },
          href: '/education/features',
        },
        {
          key: 'acalsim-course',
          label: { zh: 'ACALSim 課程', en: 'ACALSim Courses' },
          href: '/education/acalsim-course',
        },
      ],
    },
    {
      key: 'news',
      label: { zh: '最新消息', en: 'News' },
      href: '/news',
    },
  ];

  // 切換語言
  const toggleLanguage = () => {
    const newLocale = isEnglish ? 'zh' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  // 切換下拉選單
  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  // 關閉所有下拉選單
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-dark-blue/30 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-6" onClick={closeAllDropdowns}>
              <div className="relative h-12 w-48">
                {/* 這裡放置 Logo，暫時使用文字替代 */}
                <div className="font-serif font-bold text-xl text-white">TWHPC</div>
              </div>
            </Link>

            {/* 桌面版導航 - Now part of the left group */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.key} className="relative group">
                  <button
                    className={`relative px-3 py-2 transition-colors duration-200 ${
                      scrolled ? 'text-dark-gray hover:text-primary' : 'text-white hover:text-primary/90'
                    } ${
                      router.pathname === item.href ? (scrolled ? 'text-primary' : 'text-primary/90') : ''
                    }`}
                    onClick={() => toggleDropdown(item.key)}
                    onMouseEnter={() => setActiveDropdown(item.key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {isEnglish ? item.label.en : item.label.zh}
                    {item.dropdown && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 inline-block transition-transform duration-200 ease-in-out"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        style={{ 
                          transform: activeDropdown === item.key ? 'rotate(180deg)' : 'rotate(0)' 
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* 下拉選單 */}
                  {item.dropdown && (
                    <div
                      className={`absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 origin-top-left ${
                        activeDropdown === item.key ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.key)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.key}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-secondary/20 transition-colors duration-150"
                            onClick={closeAllDropdowns}
                          >
                            {isEnglish ? dropdownItem.label.en : dropdownItem.label.zh}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right-aligned items: Join Us button and Language Toggle */}
          <div className="hidden lg:flex items-center">
            {/* 加入會員 CTA 按鈕 */}
            <Link
              href="/join-us"
              className={`btn ${scrolled ? 'btn-primary' : 'bg-primary text-white hover:bg-primary/90 shadow-button'}`}
              onClick={closeAllDropdowns}
            >
              {isEnglish ? 'Join Us' : '加入會員'}
            </Link>

            {/* 語言切換 */}
            <button
              className={`ml-4 flex items-center text-sm font-medium transition-colors duration-200 ${scrolled ? 'text-dark-gray hover:text-primary' : 'text-white hover:text-primary/90'}`}
              onClick={toggleLanguage}
            >
              {isEnglish ? '中文' : 'EN'}
            </button>
          </div>

          {/* 手機版選單按鈕 */}
          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* 手機版選單 */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="font-serif font-bold text-xl" onClick={() => setIsOpen(false)}>
              TWHPC
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu - Main navigation items */}
          <div className="space-y-4 mb-8">
            <h3 className="text-sm uppercase text-gray-500 font-medium mb-2">{isEnglish ? 'Navigation' : '導航選單'}</h3>
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-gray-100 pb-4">
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() => toggleDropdown(item.key)}
                >
                  <Link
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {isEnglish ? item.label.en : item.label.zh}
                  </Link>
                  {item.dropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === item.key ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {item.dropdown && (
                  <div
                    className={`mt-2 ml-4 space-y-2 transition-all duration-200 ${
                      activeDropdown === item.key ? 'block' : 'hidden'
                    }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.key}
                        href={dropdownItem.href}
                        className="block py-2 text-gray-600 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {isEnglish ? dropdownItem.label.en : dropdownItem.label.zh}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Actions Section - Join Us and Language Toggle */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm uppercase text-gray-500 font-medium mb-4">{isEnglish ? 'Actions' : '操作'}</h3>
            <div className="space-y-4">
              <Link
                href="/join-us"
                className="btn-primary w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                {isEnglish ? 'Join Us' : '加入會員'}
              </Link>

              <button
                className="flex items-center justify-center w-full text-base font-medium hover:text-primary transition-colors duration-200 py-2 border border-gray-200 rounded-md"
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
              >
                {isEnglish ? '切換至中文' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
