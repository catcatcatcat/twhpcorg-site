import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

// 首頁組件
export default function Home() {
  // Using isEnglish directly for translations
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  // FAQ 資料
  const faqs = [
    {
      question: isEnglish ? 'Who can join TWHPCEdu?' : '誰可以加入高效能運算協會？',
      answer: isEnglish 
        ? 'Academics, industry professionals, students, and anyone interested in high-performance computing and IC design education can join TWHPCEdu.' 
        : '學界、產業界專業人士、學生，以及任何對高效能運算和 IC 設計教育有興趣的人士都可以加入高效能運算協會。'
    },
    {
      question: isEnglish ? 'How can I participate in TWHPCEdu projects?' : '如何參與高效能運算協會的專案？',
      answer: isEnglish 
        ? 'You can participate by becoming a member, attending our training programs, or contributing to our open-source projects like BlackBear.' 
        : '您可以透過成為會員、參加我們的培訓課程，或是參與我們的開源專案如 BlackBear 來參與協會活動。'
    },
    {
      question: isEnglish ? 'How can I contact TWHPCEdu?' : '如何聯絡高效能運算協會？',
      answer: isEnglish 
        ? 'You can reach us via email at contact@twhpc.org or through our social media channels.' 
        : '您可以透過 contact@twhpc.org 或我們的社群媒體管道與我們聯繫。'
    }
  ];

  // 專案資料
  const projects = [
    {
      id: 'blackbear',
      name: 'BlackBear',
      description: isEnglish 
        ? 'An open-source project for high-performance computing simulation and modeling.' 
        : '高效能運算模擬與建模的開源專案。',
      image: '/assets/images/placeholder-project.jpg',
      link: '/projects/blackbear'
    },
    {
      id: 'acalsim',
      name: 'ACALSim',
      description: isEnglish 
        ? 'A simulation platform for academic and industry research in IC design.' 
        : '用於學術和產業研究的 IC 設計模擬平台。',
      image: '/assets/images/placeholder-project.jpg',
      link: '/projects/acalsim'
    }
  ];

  // 最新消息資料
  const news = [
    {
      id: 1,
      title: isEnglish ? 'TWHPCEdu Annual Conference 2025' : '2025 年高效能運算協會年度會議',
      date: '2025-06-15',
      excerpt: isEnglish 
        ? 'Join us for the annual conference featuring keynote speakers from academia and industry.' 
        : '參加我們的年度會議，特邀來自學界和產業界的主講嘉賓。',
      link: '/news/annual-conference-2025'
    },
    {
      id: 2,
      title: isEnglish ? 'New ACALSim Course Series Launched' : '全新 ACALSim 課程系列推出',
      date: '2025-05-01',
      excerpt: isEnglish 
        ? 'We are excited to announce our new comprehensive course series on ACALSim platform.' 
        : '我們很高興宣布推出全新的 ACALSim 平台綜合課程系列。',
      link: '/news/acalsim-course-launch'
    },
    {
      id: 3,
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
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/50 z-10"></div>
        <div className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('/assets/images/hero-computing.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-dark-blue/30 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-dark-blue/30 to-transparent z-10"></div>
        
        {/* Content Container */}
        <div className="container-custom relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative Element - Line */}
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {isEnglish 
                  ? 'Taiwan High Performance Computing Education Association' 
                  : '台灣高效能運算教育協會'}
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-white/90">
                {isEnglish 
                  ? 'Bridging academia and industry through HPC and IC design education' 
                  : '透過高效能運算與 IC 設計教育連結學界與產業'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link href="/join-us" className="btn-primary px-8 py-3 text-lg">
                  {isEnglish ? 'Join Us' : '加入會員'}
                </Link>
                <Link href="/about#mission" className="btn-outline border-white text-white hover:bg-white/20 hover:border-white px-8 py-3 text-lg">
                  {isEnglish ? 'Learn More' : '了解更多'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center w-full">
          <motion.div 
            className="cursor-pointer text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const missionSection = document.getElementById('mission-section');
              if (missionSection) missionSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="flex flex-col items-center text-white/80">
              <span className="text-sm mb-2">{isEnglish ? 'Scroll Down' : '向下滾動'}</span>
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 協會簡介 */}
      <section id="mission-section" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 text-dark-blue">
              {isEnglish ? 'Our Mission' : '我們的使命'}
            </h2>
            <p className="text-xl leading-relaxed">
              {isEnglish 
                ? 'TWHPCEdu is dedicated to cultivating talents with theoretical and practical capabilities in HPC and IC design, connecting academic and industry needs.' 
                : 'TWHPCEdu 致力於培育具備理論與實務能力的 HPC 與 IC 設計人才，連結學界與產業需求。'}
            </p>
          </div>
        </div>
      </section>

      {/* 開放研究 / 重點專案 Highlight */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-dark-blue">
              {isEnglish ? 'Featured Projects' : '重點專案'}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {isEnglish 
                ? 'Explore our open research initiatives and key projects' 
                : '探索我們的開放研究計畫和重點專案'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-full bg-gray-200">
                  {/* 專案圖片 - 暫時使用佔位圖 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-tertiary">{project.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link href={project.link} className="text-primary font-medium hover:underline">
                    {isEnglish ? 'Learn more' : '了解更多'} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新消息 / 活動 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-dark-blue">
              {isEnglish ? 'Latest News' : '最新消息'}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {isEnglish 
                ? 'Stay updated with our latest activities and announcements' 
                : '了解我們最新的活動和公告'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href={item.link} className="text-primary font-medium hover:underline">
                    {isEnglish ? 'Read more' : '閱讀更多'} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/news" className="btn-outline">
              {isEnglish ? 'View All News' : '查看所有消息'}
            </Link>
          </div>
        </div>
      </section>

      {/* 合作夥伴 Logo 牆 */}
      <section className="py-16 bg-secondary/10">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-dark-blue">
              {isEnglish ? 'Our Partners' : '合作夥伴'}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {isEnglish 
                ? 'Collaborating with leading academic and industry organizations' 
                : '與領先的學術和產業組織合作'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 合作夥伴 Logo - 暫時使用佔位區塊 */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg h-24 flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={item * 50}
              >
                <div className="text-lg font-bold text-gray-300">Partner {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（常見問答） */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-dark-blue">
              {isEnglish ? 'Frequently Asked Questions' : '常見問答'}
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              {isEnglish 
                ? 'Find answers to common questions about TWHPCEdu' 
                : '尋找關於高效能運算協會的常見問題解答'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 強調卡片區 */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {isEnglish ? 'Education & Training' : '教育培訓'}
              </h3>
              <p className="text-gray-600 mb-6">
                {isEnglish 
                  ? 'Explore our comprehensive courses and training programs designed for students and professionals.' 
                  : '探索我們為學生和專業人士設計的全面課程和培訓計畫。'}
              </p>
              <Link href="/education" className="btn-primary">
                {isEnglish ? 'View Courses' : '查看課程'}
              </Link>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-tertiary">
                {isEnglish ? 'Support Our Mission' : '支持我們的使命'}
              </h3>
              <p className="text-gray-600 mb-6">
                {isEnglish 
                  ? 'Help us advance HPC and IC design education by becoming a member or making a donation.' 
                  : '透過成為會員或捐款來幫助我們推進高效能運算和 IC 設計教育。'}
              </p>
              <Link href="/donate" className="btn-secondary">
                {isEnglish ? 'Donate Now' : '立即捐款'}
              </Link>
            </motion.div>
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
