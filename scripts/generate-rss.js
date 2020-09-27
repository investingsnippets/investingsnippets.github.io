import fs from "fs";
import RSS from "rss";
import { getSiteMetaData } from "../utils/helpers";
import { getSortedPosts } from "../utils/posts";

function generate() {
  const previewItems = getSortedPosts();
  const { title, siteUrl } = getSiteMetaData();
  const feed = new RSS({
    title,
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