import fs from "fs";
import RSS from "rss";
import { getSortedPosts } from "../utils/posts";
import { getSiteMetaData } from "utils/helpers";

function dateSortDesc(a, b) {
  const date1 = new Date(a.data.frontmatter.date);
  const date2 = new Date(b.data.frontmatter.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

function generate() {
  const previewItems = getSortedPosts();
  const { title, siteUrl } = getSiteMetaData();
  const feed = new RSS({
    title: title,
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`,
  });

  previewItems.map(({ frontmatter, slug }) => {
    feed.item({
      title: frontmatter.title,
      guid: slug,
      url: `${siteUrl}/post/${slug}`,
      date: frontmatter.date,
      description: frontmatter.description,
      author: frontmatter.author.name,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync('./.next/static/feed.xml', rss);
}

generate();