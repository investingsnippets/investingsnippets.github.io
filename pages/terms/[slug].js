/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import Layout from "components/Layout";
import SEO from "components/Seo";
import ReactMarkdown from "react-markdown/with-html";
import { getTermsSlugs, getTermsBySlug } from "utils/terms";
import { getSortedTags } from "utils/tags";
import { getSortedTopics, getAllTopics } from "utils/topics";
import { MarkdownImage } from "utils/helpers";

export default function Terms({termData, tags, sortedTopics, allTopics}) {
  const { term, frontmatter } = termData;
  return (
    <Layout tags={tags} sortedTopics={sortedTopics} allTopics={allTopics}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || term.excerpt}
      />
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-5xl leading-none font-display font-semibold">
            {frontmatter.title}
          </h1>
          <p className="text-sm mb-2">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          className="mb-4 prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          source={term.content}
          renderers={{ image: MarkdownImage }}
        />
        <hr className="mt-4" />
        <footer />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getTermsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const termData = getTermsBySlug(slug);
  const tags = getSortedTags();
  const sortedTopics = getSortedTopics();
  const allTopics = getAllTopics();

  return { 
    props: {
      termData,
      tags,
      sortedTopics,
      allTopics
    },
  };
}
