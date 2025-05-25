import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ACALSim() {
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
              <Link href="/projects" className="hover:text-white">
                {isEnglish ? 'Projects & Research' : '專案與研究'}
              </Link>
              <span className="mx-2">/</span>
              <span>{isEnglish ? 'ACALSim Platform' : 'ACALSim 模擬平台'}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isEnglish ? 'ACALSim Simulation Platform' : 'ACALSim 模擬平台'}
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
                {isEnglish ? 'IC Design Simulation Platform' : 'IC 設計模擬平台'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'A simulation platform for academic and industry research in IC design' 
                  : '用於學術和產業研究的 IC 設計模擬平台'}
              </p>
            </div>
            
            {/* 內容將在這裡填充 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">
  {isEnglish ? 'ACALSim Simulation Platform' : 'ACALSim 模擬平台'}
</h3>
<p className="mb-4 text-gray-700">
  {isEnglish
    ? 'ACALSim (Advanced Computing Architecture Lab Simulator) is a professional simulation platform for research in high-performance computing and integrated circuit (IC) design.'
    : 'ACALSim（Advanced Computing Architecture Lab Simulator）是一個專業的模擬平台，用於高效能運算和積體電路設計研究。'}
</p>
<h4 className="text-xl font-semibold text-dark-blue mb-2">
  {isEnglish ? 'Key Features:' : '功能與特色：'}
</h4>
<ul className="list-disc pl-6 space-y-2 text-gray-700">
  <li>{isEnglish ? 'High-performance computing system simulation' : '高效能運算系統模擬'}</li>
  <li>{isEnglish ? 'IC design verification' : '積體電路設計驗證'}</li>
  <li>{isEnglish ? 'Performance analysis and optimization tools' : '效能分析與最佳化工具'}</li>
  <li>{isEnglish ? 'Educational training support' : '教育訓練支援'}</li>
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
