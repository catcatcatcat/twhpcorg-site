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
      {/* 頁面標題區 - 增加與導覽列的距離 */}
      <section className="relative pt-28 pb-20 bg-gradient-to-r from-dark-blue to-primary/90">
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
                <a
  href="#about-us"
  className="block text-lg font-medium mb-4 text-dark-blue border-b pb-2 cursor-pointer hover:text-primary focus:text-primary outline-none"
  onClick={e => {
    e.preventDefault();
    const aboutTop = document.getElementById('about-us');
    if (aboutTop) {
      window.scrollTo({ top: aboutTop.offsetTop - 100, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }}
  tabIndex={0}
>
  {isEnglish ? 'About Us' : '關於我們'}
</a>
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
                              <tr><td>理事</td><td>楊光磊</td><td>產學創新學院執行長</td><td>國立臺灣科技大學</td></tr>
                              <tr><td>理事</td><td>陳添福</td><td>教授</td><td>國立陽明交通大學</td></tr>
                              <tr><td>理事</td><td>鄭良加</td><td>組長</td><td>工研院</td></tr>
                              <tr><td>理事</td><td>盧銘俊</td><td>副所長</td><td>工研院</td></tr>
                              <tr><td>理事</td><td>郭致宏</td><td>副教授</td><td>國立成功大學</td></tr>
                              <tr><td>理事</td><td>許志仲</td><td>副教授</td><td>國立陽明交通大學</td></tr>
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
                              <tr><td>常務監事</td><td>林偉棻</td><td>兼任教授</td><td>國立清華大學、國立陽明交通大學、國立成功大學</td></tr>
                              <tr><td>監事</td><td>謝明得</td><td>教授</td><td>國立成功大學</td></tr>
                              <tr><td>監事</td><td>張益興</td><td>兼任教授</td><td>臺灣大學重點科技研究學院</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : section.id === 'history' ? (
                      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                        <div className="space-y-8">
                          {/* 時間軸 */}
                          <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
                            {/* 2023年 - 成立 */}
                            <div className="relative">
                              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-primary"></div>
                              </div>
                              <div className="mb-2">
                                <span className="text-xl font-bold text-primary">2023</span>
                              </div>
                              <h4 className="text-lg font-semibold mb-2">
                                {isEnglish ? 'Association Founding' : '協會成立'}
                              </h4>
                              <p className="text-gray-700">
                                {isEnglish 
                                  ? 'Taiwan High Performance Computing Education Association was officially established, bringing together experts from academia and industry to promote HPC education.' 
                                  : '台灣高效能運算教育協會正式成立，匯集學界與產業專家，共同推動高效能運算教育。'}
                              </p>
                            </div>
                            
                            {/* 2024年 - 首次年會 */}
                            <div className="relative">
                              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-primary"></div>
                              </div>
                              <div className="mb-2">
                                <span className="text-xl font-bold text-primary">2024</span>
                              </div>
                              <h4 className="text-lg font-semibold mb-2">
                                {isEnglish ? 'First Annual Conference' : '首屆年度會議'}
                              </h4>
                              <p className="text-gray-700">
                                {isEnglish 
                                  ? 'Held the first annual conference with over 200 participants from universities and industry partners. Launched the ACALSim platform and BlackBear open source project.' 
                                  : '舉辦首屆年度會議，有超過200位來自大學和產業合作夥伴的參與者。正式發布 ACALSim 平台和 BlackBear 開源專案。'}
                              </p>
                            </div>
                            
                            {/* 2025年 - 教育計畫擴展 */}
                            <div className="relative">
                              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-primary"></div>
                              </div>
                              <div className="mb-2">
                                <span className="text-xl font-bold text-primary">2025</span>
                              </div>
                              <h4 className="text-lg font-semibold mb-2">
                                {isEnglish ? 'Education Program Expansion' : '教育計畫擴展'}
                              </h4>
                              <p className="text-gray-700">
                                {isEnglish 
                                  ? 'Expanded our education programs to 15 universities across Taiwan. Established industry partnership program with 8 leading technology companies.' 
                                  : '將教育計畫擴展至全台15所大學。與8家領先科技公司建立產業合作夥伴計畫。'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : section.id === 'annual-report' ? (
                      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* 2024年報告 */}
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-xl font-bold text-dark-blue">
                                {isEnglish ? '2024 Annual Report' : '2024 年度報告'}
                              </h4>
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                {isEnglish ? 'Latest' : '最新'}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {isEnglish 
                                ? 'Our inaugural annual report highlights the establishment of key programs and partnerships.' 
                                : '我們的首份年度報告重點介紹了關鍵計畫和合作夥伴關係的建立。'}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">PDF, 5.2 MB</span>
                              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                                {isEnglish ? 'Download' : '下載'}
                              </button>
                            </div>
                          </div>
                          
                          {/* 2023年報告 */}
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-xl font-bold text-dark-blue">
                                {isEnglish ? '2023 Annual Report' : '2023 年度報告'}
                              </h4>
                              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                                {isEnglish ? 'Archive' : '存檔'}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {isEnglish 
                                ? 'Foundation report covering our initial goals, vision, and organizational structure.' 
                                : '基礎報告，涵蓋我們的初始目標、願景和組織結構。'}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">PDF, 3.8 MB</span>
                              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                                {isEnglish ? 'Download' : '下載'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : section.id === 'partners' ? (
                      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                        {/* 學術合作夥伴 */}
                        <div className="mb-10">
                          <h3 className="text-2xl font-semibold mb-6 text-primary">
                            {isEnglish ? 'Academic Partners' : '學術合作夥伴'}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                              { name: isEnglish ? 'National Taiwan University' : '國立臺灣大學', logo: '/images/partners/ntu-logo.png' },
                              { name: isEnglish ? 'National Yang Ming Chiao Tung University' : '國立陽明交通大學', logo: '/images/partners/nycu-logo.png' },
                              { name: isEnglish ? 'National Cheng Kung University' : '國立成功大學', logo: '/images/partners/ncku-logo.png' },
                              { name: isEnglish ? 'National Tsing Hua University' : '國立清華大學', logo: '/images/partners/nthu-logo.png' },
                              { name: isEnglish ? 'National Taiwan University of Science and Technology' : '國立臺灣科技大學', logo: '/images/partners/ntust-logo.png' },
                              { name: isEnglish ? 'National Taiwan Normal University' : '國立臺灣師範大學', logo: '/images/partners/ntnu-logo.png' }
                            ].map((partner, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                                  <span className="text-2xl font-bold text-primary">{partner.name.charAt(0)}</span>
                                </div>
                                <p className="font-medium text-gray-800">{partner.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* 產業合作夥伴 */}
                        <div>
                          <h3 className="text-2xl font-semibold mb-6 text-primary">
                            {isEnglish ? 'Industry Partners' : '產業合作夥伴'}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                              { name: 'TSMC', logo: '/images/partners/tsmc-logo.png' },
                              { name: 'MediaTek', logo: '/images/partners/mediatek-logo.png' },
                              { name: 'ITRI', logo: '/images/partners/itri-logo.png' },
                              { name: 'Synopsys Taiwan', logo: '/images/partners/synopsys-logo.png' },
                              { name: 'Cadence Taiwan', logo: '/images/partners/cadence-logo.png' },
                              { name: 'Siemens EDA', logo: '/images/partners/siemens-logo.png' },
                              { name: 'AMD Taiwan', logo: '/images/partners/amd-logo.png' },
                              { name: 'NVIDIA Taiwan', logo: '/images/partners/nvidia-logo.png' }
                            ].map((partner, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                                  <span className="text-xl font-bold text-primary">{partner.name.charAt(0)}</span>
                                </div>
                                <p className="font-medium text-gray-800">{partner.name}</p>
                              </div>
                            ))}
                          </div>
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

