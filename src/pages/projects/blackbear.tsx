import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlackBear() {
  const { t } = useTranslation('common');
  const router = useRouter();

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
              <Link href="/projects" className="hover:text-white">
                {t('blackbearPage.breadcrumbBase')}
              </Link>
              <span className="mx-2">/</span>
              <span>{t('blackbearPage.breadcrumbCurrent')}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('blackbearPage.title')}
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
                {t('blackbearPage.sectionTitle')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('blackbearPage.sectionSubtitle')}
              </p>
            </div>
            
            {/* 內容將在這裡填充 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
  <h3 className="text-2xl font-semibold text-dark-blue mb-4">
    {t('blackbearPage.contentTitle')}
  </h3>
  <p className="mb-4 text-gray-700">
    {t('blackbearPage.description')}
  </p>
  <h4 className="text-xl font-semibold text-dark-blue mb-2">
    {t('blackbearPage.featuresTitle')}
  </h4>
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>{t('blackbearPage.feature1')}</li>
    <li>{t('blackbearPage.feature2')}</li>
    <li>{t('blackbearPage.feature3')}</li>
    <li>{t('blackbearPage.feature4')}</li>
  </ul>
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
