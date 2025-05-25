import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AcalsimCourseLaunch() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

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
              {isEnglish ? 'New ACALSim Course Series Launched' : '全新 ACALSim 課程系列推出'}
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
          <div className="max-w-4xl mx-auto">
            {/* 新聞發布日期 */}
            <div className="text-center mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {isEnglish ? 'May 1, 2025' : '2025年5月1日'}
              </span>
            </div>
            
            {/* 新聞內容 */}
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-dark-blue mb-4">
                  {isEnglish ? 'Comprehensive ACALSim Course Series Now Available' : '全面性 ACALSim 課程系列現已推出'}
                </h2>
                
                <p>
                  {isEnglish 
                    ? 'Taiwan High Performance Computing Education Association (TWHPCEdu) is proud to announce the launch of our comprehensive course series on the ACALSim platform. This initiative represents a significant step forward in our mission to bridge the gap between academic learning and industry application in IC design and high-performance computing.' 
                    : '台灣高效能運算教育協會（TWHPCEdu）很榮幸宣布推出我們全面性的 ACALSim 平台課程系列。這一計劃代表了我們在實現縮小 IC 設計和高效能運算領域中學術學習與產業應用之間差距的使命上邁出的重要一步。'}
                </p>
                
                <div className="my-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">
                    {isEnglish ? 'Course Series Overview' : '課程系列概述'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'Beginner Level' : '初級課程'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'Introduction to ACALSim' : 'ACALSim 入門'}</li>
                        <li>{isEnglish ? 'Basic IC Design Concepts' : '基本 IC 設計概念'}</li>
                        <li>{isEnglish ? 'Simulation Fundamentals' : '模擬基礎'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'Intermediate Level' : '中級課程'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'Advanced Simulation Techniques' : '進階模擬技術'}</li>
                        <li>{isEnglish ? 'Performance Optimization' : '效能優化'}</li>
                        <li>{isEnglish ? 'Real-world Case Studies' : '實際案例研究'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'Advanced Level' : '高級課程'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'Custom Module Development' : '自定義模組開發'}</li>
                        <li>{isEnglish ? 'Integration with Industry Tools' : '與產業工具整合'}</li>
                        <li>{isEnglish ? 'Research Applications' : '研究應用'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'Specialized Tracks' : '專業化課程'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'AI in IC Design' : 'IC 設計中的 AI 應用'}</li>
                        <li>{isEnglish ? 'High-Performance Computing' : '高效能運算'}</li>
                        <li>{isEnglish ? 'Industry Certification Preparation' : '產業認證準備'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p>
                  {isEnglish 
                    ? 'The ACALSim course series has been developed in collaboration with leading experts from both academia and industry, ensuring that the content is not only theoretically sound but also practically relevant. Each course combines lectures, hands-on labs, and project-based learning to provide a comprehensive educational experience.' 
                    : 'ACALSim 課程系列是與學術界和產業界的頂尖專家合作開發的，確保內容不僅理論紮實，而且具有實際相關性。每門課程結合講座、實作實驗和專案式學習，提供全面的教育體驗。'}
                </p>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Key Features of the Course Series' : '課程系列的主要特點'}
                </h3>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong>{isEnglish ? 'Flexible Learning Formats' : '靈活的學習形式'}</strong>: {isEnglish 
                      ? 'Courses are available in both online and in-person formats, allowing students to choose the learning method that best suits their needs.' 
                      : '課程提供線上和實體兩種形式，讓學生可以選擇最適合自己需求的學習方式。'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Industry-Relevant Projects' : '產業相關專案'}</strong>: {isEnglish 
                      ? 'All courses include projects based on real-world scenarios and challenges faced by the IC design industry.' 
                      : '所有課程都包含基於 IC 設計產業面臨的真實場景和挑戰的專案。'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Expert Instructors' : '專家講師'}</strong>: {isEnglish 
                      ? 'Courses are taught by a combination of academic professors and industry professionals with extensive experience.' 
                      : '課程由具有豐富經驗的學術教授和產業專業人士共同授課。'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Continuous Updates' : '持續更新'}</strong>: {isEnglish 
                      ? 'Course content is regularly updated to reflect the latest developments in IC design and simulation technologies.' 
                      : '課程內容定期更新，以反映 IC 設計和模擬技術的最新發展。'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Certification Path' : '認證路徑'}</strong>: {isEnglish 
                      ? 'Students can earn industry-recognized certifications upon completion of specific course tracks.' 
                      : '學生完成特定課程軌道後可獲得產業認可的認證。'}
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Upcoming Course Schedule' : '即將開課時間表'}
                </h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border text-left">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-4 py-2">{isEnglish ? 'Course' : '課程'}</th>
                        <th className="px-4 py-2">{isEnglish ? 'Start Date' : '開始日期'}</th>
                        <th className="px-4 py-2">{isEnglish ? 'Format' : '形式'}</th>
                        <th className="px-4 py-2">{isEnglish ? 'Registration' : '報名'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">{isEnglish ? 'Introduction to ACALSim' : 'ACALSim 入門'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'June 1, 2025' : '2025年6月1日'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'Online' : '線上'}</td>
                        <td className="border px-4 py-2">
                          <span className="text-primary font-medium">{isEnglish ? 'Open' : '開放報名'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">{isEnglish ? 'Advanced Simulation Techniques' : '進階模擬技術'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'June 15, 2025' : '2025年6月15日'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'In-person' : '實體'}</td>
                        <td className="border px-4 py-2">
                          <span className="text-primary font-medium">{isEnglish ? 'Open' : '開放報名'}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">{isEnglish ? 'AI in IC Design' : 'IC 設計中的 AI 應用'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'July 1, 2025' : '2025年7月1日'}</td>
                        <td className="border px-4 py-2">{isEnglish ? 'Hybrid' : '混合'}</td>
                        <td className="border px-4 py-2">
                          <span className="text-gray-500 font-medium">{isEnglish ? 'Coming Soon' : '即將開放'}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p>
                  {isEnglish 
                    ? 'For more information about the ACALSim course series, including detailed course descriptions, prerequisites, and registration information, please visit our education portal or contact our education team at education@twhpcedu.org.tw.' 
                    : '如需更多關於 ACALSim 課程系列的資訊，包括詳細課程描述、先修要求和報名資訊，請訪問我們的教育入口網站或聯繫我們的教育團隊：education@twhpcedu.org.tw。'}
                </p>
                
                <div className="mt-8 flex justify-center">
                  <Link href="/education" className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
                    {isEnglish ? 'Explore Education Programs' : '探索教育計畫'}
                  </Link>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <Link href="/news" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    {isEnglish ? 'Back to News' : '返回新聞列表'}
                  </Link>
                </div>
              </motion.div>
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
