import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// 新聞文章目錄路徑
const newsDirectory = join(process.cwd(), 'content/news');

// 獲取所有新聞文章的檔案名稱（不含副檔名）
export function getNewsPostSlugs() {
  return fs.readdirSync(newsDirectory).filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''));
}

// 根據檔案名稱獲取新聞文章的內容
export function getNewsPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(newsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | Date;
  };

  const items: Items = {};

  // 只返回請求的欄位
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'date' && data[field]) {
      items[field] = new Date(data[field]);
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

// 獲取所有新聞文章，可以按日期排序
export function getAllNewsPosts(fields: string[] = [], locale: string = 'en') {
  const slugs = getNewsPostSlugs();
  const posts = slugs
    .map((slug) => getNewsPostBySlug(slug, fields))
    // 按日期排序，最新的在前
    .sort((post1, post2) => {
      const date1 = post1.date as Date;
      const date2 = post2.date as Date;
      return date1 > date2 ? -1 : 1;
    })
    // 根據語言過濾標題和摘要
    .map(post => {
      const result: any = { ...post };
      if (locale === 'zh' && post.title_zh) {
        result.title = post.title_zh;
      }
      if (locale === 'zh' && post.excerpt_zh) {
        result.excerpt = post.excerpt_zh;
      }
      return result;
    });
  return posts;
}
