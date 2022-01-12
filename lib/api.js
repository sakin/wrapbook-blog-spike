import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDirectory = join(process.cwd(), '_articles')

function getArticlesSlugs() {
  return fs.readdirSync(articlesDirectory)
}

export function getArticleBySlug(slug) {
  const articleFilePath = join(articlesDirectory, slug, "article.md");
  const fileContents = fs.readFileSync(articleFilePath);
  // console.log('fileContents', fileContents)

  const { data, content } = matter(fileContents)
  // console.log('matter', data)

  const article = data;
  article.content = content;
  article.slug = slug;

  return article;
}

export function getAllArticles() {
  // console.log('getAllArticles', fs.readdirSync(articlesDirectory));
  const slugs = getArticlesSlugs(); // ['rails_guides', 'sonnets']

  const articles = slugs.map((slug) => {
    return getArticleBySlug(slug)
  })
  // TODO: sort the articles
  return articles
}

export default function defaultFunction() {
  return "Hello Fun Function"
}
