import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function News() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  // 最新消息資料
  const newsItems = [
    {
      id: 'annual-conference-2025',
      title: isEnglish ? 'TWHPCEdu Annual Conference 2025' : '2025 年高效能運算協會年度會議',
      date: '2025-06-15',
      excerpt: isEnglish 
        ? 'Join us for the annual conference featuring keynote speakers from academia and industry.' 
        : '參加我們的年度會議，特邀來自學界和產業界的主講嘉賓。',
      link: '/news/annual-conference-2025'
    },
    {
      id: 'acalsim-course-launch',
      title: isEnglish ? 'New ACALSim Course Series Launched' : '全新 ACALSim 課程系列推出',
      date: '2025-05-01',
      excerpt: isEnglish 
        ? 'We are excited to announce our new comprehensive course series on ACALSim platform.' 
        : '我們很高興宣布推出全新的 ACALSim 平台綜合課程系列。',
      link: '/news/acalsim-course-launch'
    },
    {
      id: 'industry-partnership',
      title: isEnglish ? 'Industry Partnership Program' : '產業合作夥伴計畫',
      date: '2025-04-10',
      excerpt: isEnglish 
        ? 'TWHPCEdu launches a new program to strengthen collaboration with industry partners.' 
        : '高效能運算協會推出新計畫，加強與產業合作夥伴的合作。',
      link: '/news/industry-partnership'
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
              {isEnglish ? 'News' : '最新消息'}
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
                {isEnglish ? 'Latest News & Announcements' : '最新消息與公告'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Stay updated with our latest activities and events' 
                  : '了解我們最新的活動和事件'}
              </p>
            </div>
            
            {/* 新聞列表 */}
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <p className="text-center text-gray-500 italic">
                      {isEnglish ? 'Content coming soon...' : '內容即將推出...'}
                    </p>
                  </div>
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
