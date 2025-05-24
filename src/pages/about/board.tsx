import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Board member data structure with both languages
type BoardMember = {
  title: { zh: string; en: string };
  name: { zh: string; en: string };
  position: { zh: string; en: string };
  organization: { zh: string; en: string };
};

// Board of Directors data
const directors: BoardMember[] = [
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '楊光磊', en: 'Kuang-Lei Yang' },
    position: { zh: '產學創新學院執行長', en: 'CEO of Industry-Academia Innovation' },
    organization: { zh: '臺灣科技大學', en: 'National Taiwan University of Science and Technology' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '陳添福', en: 'Tien-Fu Chen' },
    position: { zh: '教授', en: 'Professor' },
    organization: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '鄭良加', en: 'Liang-Chia Cheng' },
    position: { zh: '組長', en: 'Division Director' },
    organization: { zh: '工研院', en: 'ITRI' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '盧銘俊', en: 'Ming-Chun Lu' },
    position: { zh: '副所長', en: 'Deputy Director' },
    organization: { zh: '工研院', en: 'ITRI' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '郭致宏', en: 'Chih-Hung Kuo' },
    position: { zh: '副教授', en: 'Associate Professor' },
    organization: { zh: '國立成功大學', en: 'National Cheng Kung University' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '許志仲', en: 'Chih-Chung Hsu' },
    position: { zh: '副教授', en: 'Associate Professor' },
    organization: { zh: '國立成功大學', en: 'National Cheng Kung University' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '張亞寧', en: 'Ya-Ning Chang' },
    position: { zh: '助理教授', en: 'Assistant Professor' },
    organization: { zh: '國立成功大學', en: 'National Cheng Kung University' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '陳坤志', en: 'Kun-Chih Chen' },
    position: { zh: '副教授', en: 'Associate Professor' },
    organization: { zh: '國立陽明交通大學', en: 'National Yang Ming Chiao Tung University' }
  },
  {
    title: { zh: '理事', en: 'Director' },
    name: { zh: '周政毅', en: 'Cheng-Yi Chou' },
    position: { zh: '資深工程師', en: 'Senior Engineer' },
    organization: { zh: '個人開源貢獻者', en: 'Independent Contributor' }
  }
];

// Board of Supervisors data
const supervisors: BoardMember[] = [
  {
    title: { zh: '常務監事', en: 'Managing Supervisor' },
    name: { zh: '林偉棻', en: 'Wei-Fen Lin' },
    position: { zh: '兼任教授', en: 'Adjunct Professor' },
    organization: { zh: '國立清華大學', en: 'National Tsing Hua University' }
  },
  {
    title: { zh: '監事', en: 'Supervisor' },
    name: { zh: '謝明得', en: 'Ming-Te Hsieh' },
    position: { zh: '教授', en: 'Professor' },
    organization: { zh: '國立成功大學', en: 'National Cheng Kung University' }
  },
  {
    title: { zh: '監事', en: 'Supervisor' },
    name: { zh: '張益興', en: 'Yi-Hsing Chang' },
    position: { zh: '兼任教授', en: 'Adjunct Professor' },
    organization: { zh: '臺灣大學重點科技研究學院', en: 'Graduate School of Advanced Technology' }
  }
];

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
                    {directors.map((director, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2 border">{isEnglish ? director.title.en : director.title.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? director.name.en : director.name.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? director.position.en : director.position.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? director.organization.en : director.organization.zh}</td>
                      </tr>
                    ))}
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
                    {supervisors.map((supervisor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2 border">{isEnglish ? supervisor.title.en : supervisor.title.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? supervisor.name.en : supervisor.name.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? supervisor.position.en : supervisor.position.zh}</td>
                        <td className="px-4 py-2 border">{isEnglish ? supervisor.organization.en : supervisor.organization.zh}</td>
                      </tr>
                    ))}
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
