import { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getNewsPostBySlug, getAllNewsPosts } from '@/lib/api';
import MarkdownRenderer from '@/components/markdown-renderer';
import Image from 'next/image';

type NewsPostProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    content: string;
    coverImage?: string;
  };
};

export default function NewsPost({ post }: NewsPostProps) {
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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
              {post.title}
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
            {/* 新聞發布日期 */}
            <div className="text-center mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {formatDate(post.date)}
              </span>
            </div>

            {/* 封面圖片 */}
            {post.coverImage && (
              <div className="mb-10">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105 duration-300"
                  />
                </div>
              </div>
            )}
            
            {/* 新聞內容 */}
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MarkdownRenderer content={post.content} />
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <Link href="/news" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    {isEnglish ? 'Back to News' : '返回新聞列表'}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = getNewsPostBySlug(params?.slug as string, [
    'slug',
    'title',
    'title_zh',
    'date',
    'content',
    'coverImage',
  ]);

  // 根據語言選擇標題
  if (locale === 'zh' && post.title_zh) {
    post.title = post.title_zh as string;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || 'zh', ['common'])),
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getAllNewsPosts(['slug']);
  
  // 為每個語言創建路徑
  const paths = posts.flatMap((post) => {
    return locales ? locales.map((locale) => {
      return {
        params: {
          slug: post.slug as string,
        },
        locale,
      };
    }) : [];
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
