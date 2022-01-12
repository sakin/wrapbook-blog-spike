import Link from "next/link";

export default function ArticlePreview({title, excerpt, slug}) {
  return (
    <li>
      <h4>
        <Link href={`/articles/${slug}`}>{title}</Link>
      </h4>
      <p>{excerpt}</p>
    </li>
  );
}