import matter from "gray-matter";
import fs from "fs";


// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getSortedPosts() {
  const authors = JSON.parse(fs.readFileSync(`${process.cwd()}/content/authors/authors.json`));

  const posts = fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map( filename => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        author: authors.find( a => a.id === data.author),
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

export function getPostsSlugs() {
  const paths = fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map( filename => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPostBySlug(slug) {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}


export function getPostsByCategory(topic) {
  const posts = getSortedPosts();
  const categoryPostsFrontMtr = posts
  .filter(({frontmatter}) =>
    frontmatter.topics.split(/(\s+)/).filter( e => (e.trim().length > 0 && e.trim() === topic.trim()) ).length > 0
  )
  .map(({frontmatter, slug}) => {
    return {frontmatter, slug}
  });
  return categoryPostsFrontMtr
}
