import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 協會簡介 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isEnglish ? 'About TWHPCEdu' : '關於高效能運算協會'}
            </h3>
            <p className="text-white/90 mb-4">
              {isEnglish
                ? 'TWHPCEdu is dedicated to cultivating talents with theoretical and practical capabilities in HPC and IC design, connecting academic and industry needs.'
                : 'TWHPCEdu 致力於培育具備理論與實務能力的 HPC 與 IC 設計人才，連結學界與產業需求。'}
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isEnglish ? 'Quick Links' : '快速連結'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors duration-200">
                  {isEnglish ? 'Home' : '首頁'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-200">
                  {isEnglish ? 'About Us' : '關於我們'}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/90 hover:text-white transition-colors duration-200">
                  {isEnglish ? 'Projects & Research' : '專案與研究'}
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-white/90 hover:text-white transition-colors duration-200">
                  {isEnglish ? 'Education & Training' : '教育培訓'}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/90 hover:text-white transition-colors duration-200">
                  {isEnglish ? 'News' : '最新消息'}
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡方式 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isEnglish ? 'Contact Us' : '聯絡我們'}
            </h3>
            <p className="text-white/90 mb-2">
              Email: <a href="mailto:contact@twhpc.org" className="hover:text-white transition-colors duration-200">contact@twhpc.org</a>
            </p>
            <div className="mt-4">
              <h4 className="font-bold mb-2">
                {isEnglish ? 'Follow Us' : '關注我們'}
              </h4>
              <div className="flex space-x-4">
                {/* 社群媒體圖標 - 使用 Lucide Icons */}
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-200" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors duration-200" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 捐款/會員連結 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {isEnglish ? 'Support Us' : '支持我們'}
            </h3>
            <div className="space-y-4">
              <Link href="/join-us" className="btn-primary block text-center">
                {isEnglish ? 'Join Us' : '加入會員'}
              </Link>
              <Link href="/donate" className="btn bg-white text-tertiary hover:bg-white/90 block text-center">
                {isEnglish ? 'Donate' : '贊助我們'}
              </Link>
            </div>
          </div>
        </div>

        {/* 隱私權政策/使用者條款 */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/80 text-sm">
                &copy; {currentYear} {isEnglish ? 'Taiwan High Performance Computing Education Association' : '台灣高效能運算教育協會'}
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-white/80 hover:text-white transition-colors duration-200">
                {isEnglish ? 'Privacy Policy' : '隱私權政策'}
              </Link>
              <Link href="/terms-of-use" className="text-white/80 hover:text-white transition-colors duration-200">
                {isEnglish ? 'Terms of Use' : '使用者條款'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 開源圖標授權聲明 */}
      <div className="bg-tertiary/80 py-3 text-center text-xs text-white/60">
        <div className="container-custom">
          <p>
            {isEnglish
              ? 'Icons by Lucide Icons (ISC License) - '
              : '圖標來源：Lucide Icons (ISC License) - '}
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/80"
            >
              lucide.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
