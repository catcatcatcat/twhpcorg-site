import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Education() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Card animation stagger
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Solutions data from the slides
  const solutions = [
    {
      id: 'students',
      title: t('educationPage.studentSolution'),
      description: t('educationPage.studentSolutionDesc'),
      icon: '/assets/images/icons/student.svg',
      color: ''
    },
    {
      id: 'professionals',
      title: t('educationPage.professionalSolution'),
      description: t('educationPage.professionalSolutionDesc'),
      icon: '/assets/images/icons/professional.svg',
      color: ''
    },
    {
      id: 'academics',
      title: t('educationPage.academicSolution'),
      description: t('educationPage.academicSolutionDesc'),
      icon: '/assets/images/icons/professor.svg',
      color: ''
    },
    {
      id: 'industry',
      title: t('educationPage.industrySolution'),
      description: t('educationPage.industrySolutionDesc'),
      icon: '/assets/images/icons/industry.svg',
      color: ''
    }
  ];

  return (
    <Layout>
      {/* 頁面標題區 */}
      <section className="relative py-20 bg-gradient-to-r from-dark-blue to-primary/90">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <motion.div
              className="text-sm text-white/80 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="hover:text-white">
                {isEnglish ? 'Home' : '首頁'}
              </Link>
              <span className="mx-2">/</span>
              <Link href="#" className="hover:text-white">
                {t('educationPage.breadcrumbBase')}
              </Link>
              <span className="mx-2">/</span>
              <span>{t('educationPage.breadcrumbCurrent')}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('educationPage.title')}
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

      {/* 主要內容區 - 教育訓練介紹 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {t('educationPage.sectionTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('educationPage.sectionSubtitle')}
              </p>
            </div>
            
            {/* 使命與願景 - 從投影片整合內容 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* 使命 1: 培育大型系統整合人才 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-dark-blue mb-3">
                  {t('educationPage.missionTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('educationPage.missionDescription')}
                </p>
              </motion.div>
              
              {/* 使命 2: 弭平學用落差 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-dark-blue mb-3">
                  {t('educationPage.bridgeGapTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('educationPage.bridgeGapDescription')}
                </p>
              </motion.div>
              
              {/* 使命 3: 提供實作與理論結合的課程 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-tertiary"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-dark-blue mb-3">
                  {t('educationPage.practicalTrainingTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('educationPage.practicalTrainingDescription')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 課程特色區塊 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {t('educationPage.courseFeatures')}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">
                {t('educationPage.pblTitle')}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {t('educationPage.pblDescription')}
              </p>
            </div>
            
            {/* 特色列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* 特色 1 */}
              <motion.div 
                className="flex items-start p-5 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-blue mb-2">{t('educationPage.feature1')}</h4>
                  <p className="text-gray-600">
                    {isEnglish 
                      ? 'Our courses focus on practical skills and real-world problem-solving approaches that are directly applicable in industry settings.'
                      : '我們的課程注重實用技能和真實世界的問題解決方法，可直接應用於產業環境。'}
                  </p>
                </div>
              </motion.div>
              
              {/* 特色 2 */}
              <motion.div 
                className="flex items-start p-5 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-blue mb-2">{t('educationPage.feature2')}</h4>
                  <p className="text-gray-600">
                    {isEnglish 
                      ? 'Industry experts actively participate in course design and provide mentorship throughout the learning process.'
                      : '業界專家積極參與課程設計，並在整個學習過程中提供指導。'}
                  </p>
                </div>
              </motion.div>
              
              {/* 特色 3 */}
              <motion.div 
                className="flex items-start p-5 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-blue mb-2">{t('educationPage.feature3')}</h4>
                  <p className="text-gray-600">
                    {isEnglish 
                      ? 'Students work on actual projects that simulate or directly address industry challenges.'
                      : '學生參與模擬或直接解決產業挑戰的實際專案。'}
                  </p>
                </div>
              </motion.div>
              
              {/* 特色 4 */}
              <motion.div 
                className="flex items-start p-5 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-blue mb-2">{t('educationPage.feature4')}</h4>
                  <p className="text-gray-600">
                    {isEnglish 
                      ? 'Our programs encourage collaboration across different disciplines, reflecting the multidisciplinary nature of modern HPC and IC design.'
                      : '我們的課程鼓勵跨不同學科的合作，反映現代高效能運算和 IC 設計的多學科性質。'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決方案區塊 - 從投影片整合內容 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {t('educationPage.solutionsTitle')}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Tailored educational approaches for different stakeholders in the HPC and IC design ecosystem'
                  : '為高效能運算和 IC 設計生態系統中的不同利益相關者量身定制的教育方法'}
              </p>
            </div>
            
            {/* 解決方案卡片 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className={
  `p-6 rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition`
}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-dark-blue mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 行動呼籲區塊 */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-dark-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isEnglish 
                ? 'Ready to enhance your HPC and IC design skills?' 
                : '準備好提升您的高效能運算和 IC 設計技能了嗎？'}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {isEnglish 
                ? 'Join our educational programs and become part of the next generation of HPC and IC design professionals.' 
                : '加入我們的教育計畫，成為下一代高效能運算和 IC 設計專業人才的一份子。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join-us" className="btn-secondary px-8 py-3 text-lg">
                {isEnglish ? 'Join Our Programs' : '加入我們的課程'}
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/20 px-8 py-3 text-lg">
                {isEnglish ? 'Contact Us' : '聯絡我們'}
              </Link>
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
