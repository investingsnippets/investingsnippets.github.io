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
  const topics = JSON.parse(fs.readFileSync(`${process.cwd()}/content/topics/topics.json`));
  const tags = JSON.parse(fs.readFileSync(`${process.cwd()}/content/tags/tags.json`));

  const posts = fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map( filename => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      // splits tags by comma or whitespace and sorts alphabetically
      const dataTags = data.tags ? 
        data.tags.split(/[ ,]+/)
                 .filter( e => e.trim().length > 0)
                 .sort((a, b) => a.localeCompare(b))
                 .map((tgId) => {
                    return tags.find(a => a.id === tgId)
                 }) 
      : []

      const dataTopic =  topics.find(a => a.id === data.topic.trim())
      const frontmatter = {
        ...data,
        tags: dataTags,
        topic: dataTopic,
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


export function getPostsByTag(tagSlug) {
  const posts = getSortedPosts();
  const categoryPostsFrontMtr = posts
  .filter(({frontmatter}) => frontmatter.tags.find(({id}) => id === tagSlug))
  .map(({frontmatter, slug}) => {
    return {frontmatter, slug}
  });
  return categoryPostsFrontMtr
}

export function getPostsByTopic(topicSlug) {
  const posts = getSortedPosts();
  const categoryPostsFrontMtr = posts
  .filter(({frontmatter}) => frontmatter.topic.id === topicSlug )
  .map(({frontmatter, slug}) => {
    return {frontmatter, slug}
  });
  return categoryPostsFrontMtr
}
