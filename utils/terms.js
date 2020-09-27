import matter from "gray-matter";
import fs from "fs";


// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getTermsSlugs() {
  const paths = fs
    .readdirSync(`${process.cwd()}/content/terms`)
    .map( filename => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getTermsBySlug(slug) {
  const terms = fs
    .readdirSync(`${process.cwd()}/content/terms`)
    .map( filename => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/terms/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slugFromFile = filename.replace(".md", "");

      return {
        slug: slugFromFile,
        frontmatter,
        excerpt,
        content,
      };
    });
  
  const termIndex = terms.findIndex(({ slug: termSlug }) => termSlug === slug);
  const { frontmatter, content, excerpt } = terms[termIndex];

  return { frontmatter, term: { content, excerpt } };
}