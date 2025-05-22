import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ACALSimCourse() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

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
              <Link href="/education" className="hover:text-white">
                {isEnglish ? 'Education & Training' : '教育培訓'}
              </Link>
              <span className="mx-2">/</span>
              <span>{isEnglish ? 'ACALSim Courses' : 'ACALSim 課程'}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isEnglish ? 'ACALSim Courses' : 'ACALSim 課程'}
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {isEnglish ? 'Specialized Courses on ACALSim Platform' : 'ACALSim 平台專業課程'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Learn IC design through our comprehensive ACALSim curriculum' 
                  : '透過我們全面的 ACALSim 課程學習 IC 設計'}
              </p>
            </div>
            
            {/* 內容將在這裡填充 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <p className="text-center text-gray-500 italic">
                {isEnglish ? 'Content coming soon...' : '內容即將推出...'}
              </p>
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
