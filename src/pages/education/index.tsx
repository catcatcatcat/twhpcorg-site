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

  // 教育培訓的子頁面
  const subpages = [
    {
      id: 'features',
      title: { en: 'Course Features', zh: '課程特色' },
      description: { 
        en: 'Discover what makes our courses unique', 
        zh: '了解我們課程的獨特之處' 
      },
      href: '/education/features'
    },
    {
      id: 'acalsim-course',
      title: { en: 'ACALSim Courses', zh: 'ACALSim 課程' },
      description: { 
        en: 'Specialized courses on the ACALSim platform', 
        zh: 'ACALSim 平台專業課程' 
      },
      href: '/education/acalsim-course'
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
              {isEnglish ? 'Education & Training' : '教育培訓'}
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
                {isEnglish ? 'Our Educational Programs' : '我們的教育計畫'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Comprehensive courses and training for students and professionals' 
                  : '為學生和專業人士提供全面的課程和培訓'}
              </p>
            </div>
            
            {/* 內容將在這裡填充 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 mb-12">
              <p className="text-center text-gray-500 italic">
                {isEnglish ? 'Content coming soon...' : '內容即將推出...'}
              </p>
            </div>

            {/* 子頁面導航 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subpages.map((page, index) => (
                <motion.div
                  key={page.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {isEnglish ? page.title.en : page.title.zh}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isEnglish ? page.description.en : page.description.zh}
                  </p>
                  <Link href={page.href} className="text-primary font-medium hover:underline">
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
