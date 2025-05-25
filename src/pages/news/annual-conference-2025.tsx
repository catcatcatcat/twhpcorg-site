import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnnualConference2025() {
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
              {isEnglish ? 'TWHPCEdu Annual Conference 2025' : '2025 年高效能運算協會年度會議'}
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
                {isEnglish ? 'June 15, 2025' : '2025年6月15日'}
              </span>
            </div>
            
            {/* 新聞內容 */}
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-dark-blue mb-4">
                    {isEnglish ? 'Event Details' : '活動詳情'}
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <strong>{isEnglish ? 'Date' : '日期'}:</strong> {isEnglish ? 'June 15-16, 2025' : '2025年6月15-16日'}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <strong>{isEnglish ? 'Location' : '地點'}:</strong> {isEnglish ? 'National Taiwan University, Taipei, Taiwan' : '國立臺灣大學，台北，台灣'}
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </span>
                      <div>
                        <strong>{isEnglish ? 'Registration' : '報名'}:</strong> {isEnglish ? 'Open until June 1, 2025' : '開放至2025年6月1日'}
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-dark-blue mb-4">
                  {isEnglish ? 'Annual Conference Announcement' : '年度會議公告'}
                </h2>
                
                <p>
                  {isEnglish 
                    ? 'We are pleased to announce the Taiwan High Performance Computing Education Association (TWHPCEdu) Annual Conference 2025, which will take place on June 15-16, 2025, at National Taiwan University in Taipei.' 
                    : '我們很高興宣布2025年台灣高效能運算教育協會（TWHPCEdu）年度會議將於2025年6月15-16日在台北國立臺灣大學舉行。'}
                </p>
                
                <p>
                  {isEnglish 
                    ? 'This year\'s conference theme is "Advancing HPC Education: From Academia to Industry," focusing on bridging the gap between theoretical education and practical applications in high-performance computing and IC design.' 
                    : '今年會議的主題是「推進高效能運算教育：從學術到產業」，專注於縮小高效能運算和IC設計領域中理論教育與實際應用之間的差距。'}
                </p>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Keynote Speakers' : '主講嘉賓'}
                </h3>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    <strong>{isEnglish ? 'Dr. Ming-Hwa Wang' : '王明華博士'}</strong> - {isEnglish ? 'Director of Advanced Computing, TSMC' : 'TSMC 先進運算總監'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Prof. Chia-Lin Yang' : '楊佳林教授'}</strong> - {isEnglish ? 'Department of Computer Science, National Taiwan University' : '國立臺灣大學資訊工程學系'}
                  </li>
                  <li>
                    <strong>{isEnglish ? 'Dr. Lisa Su' : '蘇姿丰博士'}</strong> - {isEnglish ? 'CEO, AMD (Virtual Keynote)' : 'AMD執行長（線上演講）'}
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Conference Highlights' : '會議亮點'}
                </h3>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    {isEnglish 
                      ? 'Presentation of the latest research and educational initiatives in HPC and IC design' 
                      : '展示高效能運算和IC設計領域的最新研究和教育計劃'}
                  </li>
                  <li>
                    {isEnglish 
                      ? 'Hands-on workshops on ACALSim platform and BlackBear open source project' 
                      : 'ACALSim平台和BlackBear開源專案的實作工作坊'}
                  </li>
                  <li>
                    {isEnglish 
                      ? 'Industry-academia collaboration forum with representatives from leading technology companies' 
                      : '與領先科技公司代表的產學合作論壇'}
                  </li>
                  <li>
                    {isEnglish 
                      ? 'Student poster competition with prizes sponsored by industry partners' 
                      : '由產業合作夥伴贊助的學生海報競賽'}
                  </li>
                  <li>
                    {isEnglish 
                      ? 'Networking opportunities with experts from academia and industry' 
                      : '與學術界和產業專家的交流機會'}
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Registration Information' : '報名資訊'}
                </h3>
                
                <p>
                  {isEnglish 
                    ? 'Registration for the conference is now open. Early bird registration is available until May 1, 2025. Special rates are available for students and TWHPCEdu members.' 
                    : '會議報名現已開放。早鳥報名優惠期限至2025年5月1日。學生和TWHPCEdu會員可享特別優惠。'}
                </p>
                
                <div className="mt-8 flex justify-center">
                  <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
                    {isEnglish ? 'Register Now' : '立即報名'}
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mt-12 mb-4">
                  {isEnglish ? 'Contact Information' : '聯絡資訊'}
                </h3>
                
                <p>
                  {isEnglish 
                    ? 'For more information about the conference, please contact the conference secretariat at conference2025@twhpcedu.org.tw or call +886-2-3366-3366.' 
                    : '如需更多關於會議的資訊，請聯繫會議秘書處：conference2025@twhpcedu.org.tw 或致電 +886-2-3366-3366。'}
                </p>
                
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
