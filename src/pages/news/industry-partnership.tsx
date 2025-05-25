import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustryPartnership() {
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
              {isEnglish ? 'Industry Partnership Program' : '產業合作夥伴計畫'}
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
                {isEnglish ? 'April 10, 2025' : '2025年4月10日'}
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
                  {isEnglish ? 'TWHPCEdu Launches Industry Partnership Program' : '台灣高效能運算教育協會推出產業合作夥伴計畫'}
                </h2>
                
                <p>
                  {isEnglish 
                    ? 'Taiwan High Performance Computing Education Association (TWHPCEdu) is excited to announce the launch of our Industry Partnership Program, a strategic initiative designed to strengthen collaboration between academia and industry in the fields of high-performance computing and IC design.' 
                    : '台灣高效能運算教育協會（TWHPCEdu）很高興宣布推出我們的產業合作夥伴計畫，這是一項旨在加強高效能運算和 IC 設計領域學術界與產業界合作的戰略性計劃。'}
                </p>
                
                <p>
                  {isEnglish 
                    ? 'The program aims to create a sustainable ecosystem where industry needs drive academic research and education, while academic innovations find practical applications in industry settings.' 
                    : '該計畫旨在創建一個可持續發展的生態系統，在這個生態系統中，產業需求推動學術研究和教育，而學術創新在產業環境中找到實際應用。'}
                </p>
                
                <div className="my-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-dark-blue mb-4">
                    {isEnglish ? 'Program Benefits' : '計畫優勢'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'For Industry Partners' : '對產業合作夥伴'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'Access to cutting-edge research' : '獲取前沿研究成果'}</li>
                        <li>{isEnglish ? 'Talent recruitment pipeline' : '人才招募管道'}</li>
                        <li>{isEnglish ? 'Collaborative R&D opportunities' : '合作研發機會'}</li>
                        <li>{isEnglish ? 'Technology transfer facilitation' : '技術轉移促進'}</li>
                        <li>{isEnglish ? 'Brand visibility in academic community' : '在學術界的品牌曝光'}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{isEnglish ? 'For Academic Institutions' : '對學術機構'}</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>{isEnglish ? 'Industry-relevant research funding' : '產業相關研究經費'}</li>
                        <li>{isEnglish ? 'Real-world problem exposure for students' : '學生接觸真實世界問題的機會'}</li>
                        <li>{isEnglish ? 'Industry internship opportunities' : '產業實習機會'}</li>
                        <li>{isEnglish ? 'Access to industry expertise and resources' : '獲取產業專業知識和資源'}</li>
                        <li>{isEnglish ? 'Enhanced curriculum relevance' : '提升課程相關性'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Partnership Tiers' : '合作層級'}
                </h3>
                
                <p>
                  {isEnglish 
                    ? 'The Industry Partnership Program offers three tiers of engagement, allowing companies to select the level of involvement that best aligns with their strategic objectives:' 
                    : '產業合作夥伴計畫提供三個層級的參與方式，讓公司可以選擇最符合其戰略目標的參與程度：'}
                </p>
                
                <div className="space-y-6 my-6">
                  {/* 白金級 */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-dark-blue">
                        {isEnglish ? 'Platinum Partner' : '白金級合作夥伴'}
                      </h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {isEnglish ? 'Premium' : '頂級'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? 'Comprehensive partnership with maximum benefits and influence on strategic direction.' 
                        : '全面合作，享有最大的權益和對戰略方向的影響力。'}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>{isEnglish ? 'Seat on the TWHPCEdu Industry Advisory Board' : '在 TWHPCEdu 產業顧問委員會中擁有席位'}</li>
                      <li>{isEnglish ? 'Priority access to research outcomes and talent pool' : '優先獲取研究成果和人才庫'}</li>
                      <li>{isEnglish ? 'Dedicated collaborative research projects' : '專屬合作研究項目'}</li>
                      <li>{isEnglish ? 'Premium branding at all TWHPCEdu events' : '在所有 TWHPCEdu 活動中獲得頂級品牌曝光'}</li>
                    </ul>
                  </div>
                  
                  {/* 金級 */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-dark-blue">
                        {isEnglish ? 'Gold Partner' : '金級合作夥伴'}
                      </h4>
                      <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
                        {isEnglish ? 'Advanced' : '進階'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? 'Enhanced partnership with significant benefits and collaborative opportunities.' 
                        : '增強型合作，具有顯著的權益和合作機會。'}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>{isEnglish ? 'Participation in selected research initiatives' : '參與選定的研究計劃'}</li>
                      <li>{isEnglish ? 'Early access to research outcomes' : '提前獲取研究成果'}</li>
                      <li>{isEnglish ? 'Preferred internship program participation' : '優先參與實習計劃'}</li>
                      <li>{isEnglish ? 'Featured branding at major TWHPCEdu events' : '在主要 TWHPCEdu 活動中獲得特色品牌曝光'}</li>
                    </ul>
                  </div>
                  
                  {/* 銀級 */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-dark-blue">
                        {isEnglish ? 'Silver Partner' : '銀級合作夥伴'}
                      </h4>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {isEnglish ? 'Standard' : '標準'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {isEnglish 
                        ? 'Entry-level partnership with core benefits and networking opportunities.' 
                        : '入門級合作，具有核心權益和交流機會。'}
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>{isEnglish ? 'Access to TWHPCEdu research publications' : '獲取 TWHPCEdu 研究出版物'}</li>
                      <li>{isEnglish ? 'Invitation to annual industry-academia networking events' : '受邀參加年度產學交流活動'}</li>
                      <li>{isEnglish ? 'Participation in talent recruitment events' : '參與人才招募活動'}</li>
                      <li>{isEnglish ? 'Brand recognition on TWHPCEdu website and materials' : '在 TWHPCEdu 網站和資料中獲得品牌認可'}</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'Inaugural Partners' : '創始合作夥伴'}
                </h3>
                
                <p>
                  {isEnglish 
                    ? 'We are proud to announce our inaugural industry partners who have already joined the program:' 
                    : '我們很榮幸宣布已經加入計畫的創始產業合作夥伴：'}
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>TSMC</strong> - {isEnglish ? 'Platinum Partner' : '白金級合作夥伴'}</li>
                  <li><strong>MediaTek</strong> - {isEnglish ? 'Platinum Partner' : '白金級合作夥伴'}</li>
                  <li><strong>Synopsys Taiwan</strong> - {isEnglish ? 'Gold Partner' : '金級合作夥伴'}</li>
                  <li><strong>Cadence Taiwan</strong> - {isEnglish ? 'Gold Partner' : '金級合作夥伴'}</li>
                  <li><strong>NVIDIA Taiwan</strong> - {isEnglish ? 'Gold Partner' : '金級合作夥伴'}</li>
                  <li><strong>AMD Taiwan</strong> - {isEnglish ? 'Silver Partner' : '銀級合作夥伴'}</li>
                  <li><strong>Siemens EDA</strong> - {isEnglish ? 'Silver Partner' : '銀級合作夥伴'}</li>
                </ul>
                
                <p>
                  {isEnglish 
                    ? 'These partnerships will drive collaborative research projects, enhance educational programs, and create new opportunities for students and professionals in the field of high-performance computing and IC design.' 
                    : '這些合作夥伴關係將推動合作研究項目，提升教育計畫，並為高效能運算和 IC 設計領域的學生和專業人士創造新的機會。'}
                </p>
                
                <h3 className="text-xl font-bold text-dark-blue mt-8 mb-4">
                  {isEnglish ? 'How to Join' : '如何加入'}
                </h3>
                
                <p>
                  {isEnglish 
                    ? 'Companies interested in joining the Industry Partnership Program can contact our partnership team at partnership@twhpcedu.org.tw for more information about the application process, partnership fees, and specific benefits.' 
                    : '有興趣加入產業合作夥伴計畫的公司可以聯繫我們的合作團隊：partnership@twhpcedu.org.tw，了解更多關於申請流程、合作費用和具體權益的資訊。'}
                </p>
                
                <div className="mt-8 flex justify-center">
                  <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
                    {isEnglish ? 'Request Partnership Information' : '索取合作資訊'}
                  </button>
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
