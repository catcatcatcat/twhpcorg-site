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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-dark-blue">
                {isEnglish ? 'Our Research Initiatives' : '我們的研究計畫'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Explore our open research projects and platforms' 
                  : '探索我們的開放研究專案和平台'}
              </p>
            </div>
            
            {/* 內容將在這裡填充 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 mb-12">
              <p className="text-center text-gray-500 italic">
                {isEnglish ? 'Content coming soon...' : '內容即將推出...'}
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
