import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  // 專案資料
  const projects = [
    {
      id: 'blackbear',
      title: { en: 'BlackBear Open Source Project', zh: 'BlackBear 開源計畫' },
      description: { 
        en: 'An open-source project for high-performance computing simulation and modeling', 
        zh: '高效能運算模擬與建模的開源專案' 
      },
      href: '/projects/blackbear'
    },
    {
      id: 'acalsim',
      title: { en: 'ACALSim Simulation Platform', zh: 'ACALSim 模擬平台' },
      description: { 
        en: 'A simulation platform for academic and industry research in IC design', 
        zh: '用於學術和產業研究的 IC 設計模擬平台' 
      },
      href: '/projects/acalsim'
    }
  ];

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
              {isEnglish ? 'Projects & Research' : '專案與研究'}
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
            {/* Call for Proposal 區塊 */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                  {isEnglish ? 'Call for Proposal' : '公開募集合作研究機制'}
                </h2>
                <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">
                  {isEnglish 
                    ? 'We adopt the Call for Proposal model to encourage innovative research projects' 
                    : '我們採用 Call for Proposal 模式，鼓勵創新研究計畫'}
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 左側：Call for Proposal 特點 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {isEnglish ? 'Our Approach' : '我們的方式'}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        isEnglish ? 'Regular research topic solicitation' : '定期發布研究主題徵求',
                        isEnglish ? 'Provide research resources and support' : '提供研究資源與支援',
                        isEnglish ? 'Promote interdisciplinary collaboration' : '促進跨領域合作',
                        isEnglish ? 'Establish industry-academia research networks' : '建立產學研究網絡',
                        isEnglish ? 'Resource and research project matching' : '資源與研究計畫媒合'
                      ].map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <span className="text-secondary mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 右側：資源媒合機制 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {isEnglish ? 'Complete Resource Matching Mechanism' : '我們提供完整的資源媒合機制'}
                    </h3>
                    <ul className="space-y-3">
                      {[
                        isEnglish ? 'Research funding support' : '研究經費支持',
                        isEnglish ? 'Technical guidance and consultation' : '技術指導與諮詢',
                        isEnglish ? 'Industry collaboration opportunities' : '產業合作機會',
                        isEnglish ? 'Research publication platform' : '研究成果發表平台'
                      ].map((item, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <span className="text-secondary mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* 參與方式 */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                    {isEnglish ? 'How to Participate' : '參與方式'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        title: isEnglish ? 'Join Open Source Development' : '加入開源專案開發',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        )
                      },
                      {
                        title: isEnglish ? 'Submit Research Proposals' : '提交研究計畫提案',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )
                      },
                      {
                        title: isEnglish ? 'Attend Technical Seminars' : '參與技術研討會',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )
                      },
                      {
                        title: isEnglish ? 'Apply for Industry-Academia Projects' : '申請產學合作計畫',
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <div className="text-primary mb-2 flex justify-center">
                          {item.icon}
                        </div>
                        <p className="font-medium text-gray-800">{item.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* CTA 按鈕 */}
                <div className="mt-8 text-center">
                  <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                    {isEnglish ? 'Contact Us for More Information' : '聯絡我們獲取更多資訊'}
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {isEnglish ? 'Our Research Initiatives' : '我們的研究計畫'}
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Explore our open research projects and platforms' 
                  : '探索我們的開放研究專案和平台'}
              </p>
            </div>
            
            {/* 專案列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {isEnglish ? project.title.en : project.title.zh}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isEnglish ? project.description.en : project.description.zh}
                  </p>
                  <Link href={project.href} className="text-primary font-medium hover:underline">
                    {isEnglish ? 'Learn more' : '了解更多'} →
                  </Link>
                </motion.div>
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
