import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Mission() {
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
              <span>{isEnglish ? 'Mission' : '使命'}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isEnglish ? 'Our Mission' : '我們的使命'}
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
                {isEnglish ? 'Our Vision and Goals' : '我們的願景與目標'}
              </h2>
              <p className="text-lg text-gray-600">
                {isEnglish 
                  ? 'Cultivating talents with theoretical and practical capabilities in HPC and IC design' 
                  : '培育具備理論與實務能力的 HPC 與 IC 設計人才'}
              </p>
            </div>
            
            {/* 內容區：協會使命與理念 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 space-y-8">
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-primary">{isEnglish ? 'Vision' : '願景'}</h3>
                <p className="mb-4">
                  {isEnglish
                    ? 'To enable more people to learn, practice, and participate in key future technology fields, becoming the driving force for Taiwan’s technological advancement.'
                    : '讓更多人能夠在未來關鍵技術領域中，有機會學習、實作、參與，進而成為推動台灣科技進步的核心力量。'}
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-2 text-primary">{isEnglish ? 'Educational Philosophy: A Learning Ecosystem Emphasizing Both Theory and Practice' : '教育理念：理論與實作並重的學習生態'}</h3>
                <p>
                  {isEnglish
                    ? 'We believe that future technology talents should not just be students who excel at exams, but problem solvers with hands-on experience, interdisciplinary vision, and innovative capability. Therefore, we design our curriculum around Project-Based Learning (PBL) as the core.'
                    : '我們深信，未來的科技人才不應只是會考試的學生，而是具備實作經驗、跨域視野與創新能力的問題解決者。為此，我們設計了以 Project-Based Learning（PBL，專題導向學習） 為核心的課程模式。'}
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-2 text-primary">{isEnglish ? 'What is Project-Based Learning?' : '什麼是 Project-Based Learning？'}</h3>
                <p>
                  {isEnglish
                    ? 'PBL is not traditional rote teaching, but encourages students to start from real-world problems, learning and solving through hands-on practice and iterative verification. This approach cultivates systematic thinking, teamwork, and self-driven abilities—traits most valued by modern industries.'
                    : 'PBL 並非傳統填鴨式教學，而是鼓勵學生從真實問題出發，透過動手做與反覆驗證，學會如何學習與解決問題。這種學習方式培養的是系統性思考、團隊合作與自我驅動的能力，這正是現代產業最重視的人才特質。'}
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-2 text-primary">{isEnglish ? 'Focus on Practical Skills, Expand Future Domains' : '聚焦實務技術，擴展未來領域'}</h3>
                <p>
                  {isEnglish
                    ? 'Although we start with High Performance Computing (HPC), offering courses on AI chip design, system simulation, and RISC-V toolchains, our ultimate goal is not limited to HPC. We aim to build an education platform that can quickly respond to technological changes and meet industry needs. In the future, we will continue to launch new courses and resources in areas such as AI, embedded systems, and system integration design, enabling more learners to grow with technological progress.'
                    : '雖然我們以高效能運算（High Performance Computing, HPC）為起點，發展了包括AI 晶片設計、系統模擬、RISC-V 開發工具鏈等主題課程，但協會的最終目標並不侷限於 HPC，而是希望打造一個能夠快速回應技術變動、貼近產業需求的教育平台。未來，我們也將針對人工智慧、嵌入式系統、系統整合設計等新興領域，持續推出新的課程與學習資源，讓更多學員能隨著科技進展持續成長。'}
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-2 text-primary">{isEnglish ? 'Our Mission' : '我們的任務'}</h3>
                <ul className="list-disc list-inside space-y-2 text-left">
                  {isEnglish ? (
                    <>
                      <li>Bridge the gap between academia and industry: shorten the distance between academic theory and industrial practice.</li>
                      <li>Promote interdisciplinary, hands-on learning: build a learning environment that integrates theory, practice, and open-source projects.</li>
                      <li>Facilitate academia-industry collaboration: enable academia and industry to jointly participate in talent cultivation.</li>
                      <li>Establish lifelong learning mechanisms: provide flexible courses for both students and professionals.</li>
                      <li>Develop an open research culture: encourage open-source, collaborative approaches to drive innovation through knowledge sharing.</li>
                    </>
                  ) : (
                    <>
                      <li>彌補學用落差：縮短學術理論與產業實務之間的距離</li>
                      <li>推動跨域實作學習：建立結合理論、實作與開源專案的學習場域</li>
                      <li>促進產學協作：讓學界與產業界能共同參與人才培育</li>
                      <li>建立終身學習機制：提供在學學生與在職人士皆能參與的彈性課程架構</li>
                      <li>發展開放式研究文化：鼓勵開源、開放的合作方式，以技術共享促進創新</li>
                    </>
                  )}
                </ul>
              </section>
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
