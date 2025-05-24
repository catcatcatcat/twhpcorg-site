import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function About() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // 關於我們的段落
  const sections = [
    {
      id: 'mission',
      title: { en: 'Mission', zh: '使命' },
      subtitle: { en: 'Our Vision and Goals', zh: '我們的願景與目標' },
      description: {
        en: `Taiwan High Performance Computing Education Association (TWHPCEdu) is a non-profit platform dedicated to promoting innovation in technology education and talent cultivation. By bringing together expertise from academia, industry, and the open-source community, we strive to build a learning ecosystem that bridges the gap between theory and practice, emphasizing hands-on experience and innovative thinking.\n\nOur vision: To enable more people to learn, practice, and participate in key future technology fields, becoming the driving force for Taiwan's technological advancement.\n\nWe believe education is the foundation of technological innovation, and hands-on practice is the bridge between learning and industry.\n\nIn this rapidly evolving era, our goal is not just to offer a course, but to foster the ability and culture of continuous learning, practice, and growth.`,
        zh: `台灣高效能運算教育協會（TWHPCEdu, Taiwan High Performance Computing Education Association） 是一個致力於推動科技教育創新與人才培育的非營利平台。匯集來自學界、產業與開源社群的專業力量，致力於打造一個打破學用落差、強調實作與創新思維的學習生態系。\n\n我們的願景：讓更多人能夠在未來關鍵技術領域中，有機會學習、實作、參與，進而成為推動台灣科技進步的核心力量。\n\n我們相信教育是科技創新的根本，實作是連結學習與產業的橋樑。\n\n在這個快速演化的時代，我們希望打造的不僅是一門課，而是一種能夠持續學習、持續實踐、持續成長的能力與文化。`
      }
    },
    {
      id: 'board',
      title: { en: 'Board Members', zh: '理監事成員' },
      subtitle: { en: 'Our Leadership Team', zh: '我們的領導團隊' },
      description: { 
        en: 'Meet the board members who guide our association', 
        zh: '認識指導我們協會的理監事成員' 
      }
    },
    {
      id: 'history',
      title: { en: 'History', zh: '歷史' },
      subtitle: { en: 'Our Journey', zh: '我們的歷程' },
      description: { 
        en: 'The story of Taiwan High Performance Computing Education Association', 
        zh: '台灣高效能運算教育協會的故事' 
      }
    },
    {
      id: 'annual-report',
      title: { en: 'Annual Report', zh: '年度報告' },
      subtitle: { en: 'Our Annual Reports', zh: '我們的年度報告' },
      description: { 
        en: 'View our achievements and milestones', 
        zh: '查看我們的成就和里程碑' 
      }
    },
    {
      id: 'partners',
      title: { en: 'Partners', zh: '合作夥伴' },
      subtitle: { en: 'Academic and Industry Partners', zh: '學術和產業合作夥伴' },
      description: { 
        en: 'Collaborating with leading organizations to advance HPC education', 
        zh: '與領先組織合作推進高效能運算教育' 
      }
    }
  ];

  // 處理錨點滾動和高亮顯示當前段落
  useEffect(() => {
    // 從URL獲取錨點
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // 添加一些偏移以考慮固定的導航欄
          const navbarHeight = 80; // 根據您的導航欄高度調整
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
          setActiveSection(hash);
        }
      }
    };

    // 初始加載時處理錨點
    handleHashChange();

    // 監聽URL錨點變化
    window.addEventListener('hashchange', handleHashChange);

    // 監聽滾動事件，更新當前活動段落
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 添加一些偏移

      // 找出當前滾動位置對應的段落
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清理事件監聽器
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <Layout>
      {/* 頁面標題區 */}
      <section className="relative py-20 bg-gradient-to-r from-dark-blue to-primary/90">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isEnglish ? 'About Us' : '關於我們'}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-secondary mx-auto"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* 主要內容區 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 左側導航目錄 */}
            <div className="md:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-lg border border-gray-100 shadow-sm p-4">
                <h3 className="text-lg font-medium mb-4 text-dark-blue border-b pb-2">
                  {isEnglish ? 'Navigation' : '導覽'}
                </h3>
                <div className="flex flex-col space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${activeSection === section.id ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(section.id);
                        if (element) {
                          const navbarHeight = 100; // 導航欄高度
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                          window.scrollTo({
                            top: elementPosition - navbarHeight,
                            behavior: 'smooth'
                          });
                          // 更新URL但不重新加載頁面
                          window.history.pushState(null, '', `#${section.id}`);
                          setActiveSection(section.id);
                        }
                      }}
                    >
                      {isEnglish ? section.title.en : section.title.zh}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 右側主要內容 */}
            <div className="flex-1 max-w-3xl">
              {/* 簡介 */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                  {isEnglish ? 'Taiwan High Performance Computing Education Association' : '台灣高效能運算教育協會'}
                </h2>
                <p className="text-lg text-gray-600">
                  {isEnglish 
                    ? 'Dedicated to advancing HPC and IC design education in Taiwan' 
                    : '致力於推進台灣高效能運算和 IC 設計教育'}
                </p>
              </div>
              
              {/* 各個段落內容 */}
              {sections.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-32 mb-20 ${index !== 0 ? 'pt-8 border-t border-gray-100' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-dark-blue">
                      {isEnglish ? section.title.en : section.title.zh}
                    </h2>
                    <h3 className="text-xl font-medium mb-4 text-primary">
                      {isEnglish ? section.subtitle.en : section.subtitle.zh}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {isEnglish ? section.description.en : section.description.zh}
                    </p>
                    
                    {/* 只在 board 區塊顯示理監事名單表格，其他區塊顯示原本內容 */}
                    {section.id === 'board' ? (
                      <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                        {/* 理事會 */}
                        <h3 className="text-2xl font-semibold mb-4 text-primary">{isEnglish ? 'Board of Directors' : '理事會'}</h3>
                        <div className="overflow-x-auto mb-8">
                          <table className="min-w-full border text-left">
                            <thead>
                              <tr className="bg-primary text-white">
                                <th className="px-4 py-2">{isEnglish ? 'Title' : '職稱'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Name' : '姓名'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Position' : '職稱'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Organization' : '單位'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td>理事</td><td>楊光磊</td><td>產學創新學院執行長</td><td>臺灣科技大學</td></tr>
                              <tr><td>理事</td><td>陳添福</td><td>教授</td><td>國立陽明交通大學</td></tr>
                              <tr><td>理事</td><td>鄭良加(工研院)</td><td>組長</td><td>工研院</td></tr>
                              <tr><td>理事</td><td>盧銘俊(工研院)</td><td>副所長</td><td>工研院</td></tr>
                              <tr><td>理事</td><td>郭致宏</td><td>副教授</td><td>國立成功大學</td></tr>
                              <tr><td>理事</td><td>許志仲</td><td>副教授</td><td>國立成功大學</td></tr>
                              <tr><td>理事</td><td>張亞寧</td><td>助理教授</td><td>國立成功大學</td></tr>
                              <tr><td>理事</td><td>陳坤志</td><td>副教授</td><td>國立陽明交通大學</td></tr>
                              <tr><td>理事</td><td>周政毅</td><td>資深工程師</td><td>個人開源貢獻者</td></tr>
                            </tbody>
                          </table>
                        </div>
                        {/* 監事會 */}
                        <h3 className="text-2xl font-semibold mb-4 text-primary">{isEnglish ? 'Board of Supervisors' : '監事會'}</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border text-left">
                            <thead>
                              <tr className="bg-primary text-white">
                                <th className="px-4 py-2">{isEnglish ? 'Title' : '職稱'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Name' : '姓名'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Position' : '職稱'}</th>
                                <th className="px-4 py-2">{isEnglish ? 'Organization' : '單位'}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr><td>常務監事</td><td>林偉棻</td><td>兼任教授</td><td>國立清華大學</td></tr>
                              <tr><td>監事</td><td>謝明得</td><td>教授</td><td>國立成功大學</td></tr>
                              <tr><td>監事</td><td>張益興</td><td>兼任教授</td><td>臺灣大學重點科技研究學院</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                        <p className="text-center text-gray-500 italic">
                          {isEnglish ? 'Content coming soon...' : '內容即將推出...'}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// 獲取靜態屬性 - 用於國際化
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common'])),
    },
  };
};

