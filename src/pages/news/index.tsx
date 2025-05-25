import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllNewsPosts } from '@/lib/api';
import Image from 'next/image';

type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
};

type NewsProps = {
  allPosts: NewsPost[];
};

export default function News({ allPosts }: NewsProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return isEnglish 
      ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Layout>
      {/* 頁面標題區 - 增加與導覽列的距離 */}
      <section className="relative pt-28 pb-20 bg-gradient-to-r from-dark-blue to-primary/90">
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
              {allPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {post.coverImage && (
                      <div className="md:w-1/3 flex-shrink-0">
                        <Link href={`/news/${post.slug}`} className="block">
                          <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <Image 
                              src={post.coverImage} 
                              alt={post.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                        </Link>
                      </div>
                    )}
                    <div className={post.coverImage ? "md:w-2/3" : "w-full"}>
                      <div className="text-sm text-gray-500 mb-2">{formatDate(post.date)}</div>
                      <Link href={`/news/${post.slug}`} className="block group">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        href={`/news/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="mr-2">{isEnglish ? 'Read More' : '閱讀更多'}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
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

// 獲取靜態屬性 - 用於國際化和新聞文章
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPosts = getAllNewsPosts(
    ['slug', 'title', 'title_zh', 'date', 'excerpt', 'excerpt_zh', 'coverImage'],
    locale as string
  );

  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common'])),
      allPosts,
    },
  };
};
