import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Board() {
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
              <Link href="/about" className="hover:text-white">
                {isEnglish ? 'About Us' : '關於我們'}
              </Link>
              <span className="mx-2">/</span>
              <span>{isEnglish ? 'Board' : '理監事成員'}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isEnglish ? 'Board Members' : '理監事成員'}
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
                {isEnglish ? 'Our Leadership Team' : '我們的領導團隊'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Meet the board members who guide our association' 
                  : '認識指導我們協會的理監事成員'}
              </p>
            </div>
            
            {/* 理監事名單表格 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              {/* 理事會 */}
              <h3 className="text-2xl font-semibold mb-4 text-primary">{isEnglish ? 'Board of Directors' : '理事會'}</h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-2">{isEnglish ? 'Title' : '職稱'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Name' : '姓名'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Position' : '職稱'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Organization' : '單位'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>理事</td><td>楊光磊</td><td>產學創新學院執行長</td><td>臺灣科技大學</td></tr>
                    <tr><td>理事</td><td>陳添福</td><td>教授</td><td>國立陽明交通大學</td></tr>
                    <tr><td>理事</td><td>鄭良加(工研院)</td><td>組長</td><td>工研院</td></tr>
                    <tr><td>理事</td><td>盧銘俊(工研院)</td><td>副所長</td><td>工研院</td></tr>
                    <tr><td>理事</td><td>郭致宏</td><td>副教授</td><td>國立成功大學</td></tr>
                    <tr><td>理事</td><td>許志仲</td><td>副教授</td><td>國立成功大學</td></tr>
                    <tr><td>理事</td><td>張亞寧</td><td>助理教授</td><td>國立成功大學</td></tr>
                    <tr><td>理事</td><td>陳坤志</td><td>副教授</td><td>國立陽明交通大學</td></tr>
                    <tr><td>理事</td><td>周政毅</td><td>資深工程師</td><td>個人開源貢獻者</td></tr>
                  </tbody>
                </table>
              </div>
              {/* 監事會 */}
              <h3 className="text-2xl font-semibold mb-4 text-primary">{isEnglish ? 'Board of Supervisors' : '監事會'}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-2">{isEnglish ? 'Title' : '職稱'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Name' : '姓名'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Position' : '職稱'}</th>
                      <th className="px-4 py-2">{isEnglish ? 'Organization' : '單位'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>常務監事</td><td>林偉棻</td><td>兼任教授</td><td>國立清華大學</td></tr>
                    <tr><td>監事</td><td>謝明得</td><td>教授</td><td>國立成功大學</td></tr>
                    <tr><td>監事</td><td>張益興</td><td>兼任教授</td><td>臺灣大學重點科技研究學院</td></tr>
                  </tbody>
                </table>
              </div>
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
