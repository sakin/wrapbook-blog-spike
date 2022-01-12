import {remark} from "remark";
import html from "remark-html";
import prism from "remark-prism";

// export default function
// export function

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(prism, { transformInlineCode: true })
    .use(html, { sanitize: false })
    .process(markdown);
  console.log('markdownToHtml result', result)
  return result.toString();
}
