/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Disqus from "disqus-react"

import Layout from "components/Layout";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
import { getSortedTags } from "utils/tags";
import { getSortedTopics, getAllTopics } from "utils/topics";
import { MarkdownImage, getSiteMetaData } from "utils/helpers";
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

export default function Post({postData, tags, sortedTopics, allTopics, slug}) {
  const { siteUrl, disqus } = getSiteMetaData();
  const { post, frontmatter, nextPost, previousPost } = postData;
  const disqusShortname = disqus.hostname
  const disqusConfig = {
    url: siteUrl,
    identifier: slug,
    title: frontmatter.title
  }
  return (
    <Layout tags={tags} sortedTopics={sortedTopics} allTopics={allTopics}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header className="mb-8">
          <p className="text-sm mb-2">
            <Link href="/" key='home'>
              <a className='' key='home'>Home</a>
            </Link>
            {' > '}
            <Link href="/topic/[topic]" as={`/topic/${frontmatter.topic.id}`} key={frontmatter.topic.id}>
              <a className='' key={frontmatter.topic.id}>{frontmatter.topic.name}</a>
            </Link>
            {' > '}
          </p>
          <h1 className="mb-2 text-3xl lg:text-4xl leading-none font-display font-semibold">
            {frontmatter.title}
          </h1>
          <p className="text-sm mb-2">
            {frontmatter.date}
            {' '}
            by 
            {' '}
            {frontmatter.author.name}
          </p>
          <div className="flex justify-end mt-2 mr-5">
            {frontmatter.tags.map(({id, icon, name}) => (
              <Link href="/tag/[tag]" as={`/tag/${id}`} key={id}>
                <a className="text-gray-600" key={id}>
                  <img
                    className="filter-orange-700 h-4 w-4 m-1 inline-block"
                    alt={`${name}`}
                    src={`${siteUrl}/static/${icon}`}
                    data-srcset={`${siteUrl}/static/${icon}`}
                  />
                  {name}
                </a>
              </Link>
            ))}
          </div>  
          {frontmatter.colab && (
            <div className="flex justify-end mt-2 mr-5">
              <a href={`${frontmatter.colab}`}>
                <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
              </a>
            </div>
          )}
        </header>
        <ReactMarkdown
          className="mb-4 prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          source={post.content}
          plugins={[RemarkMathPlugin]}
          renderers={{ 
            code: CodeBlock,
            image: MarkdownImage,
            // math: ({ value }) => `math: ${value}`,
            // inlineMath: ({ value }) => `inlineMath: ${value}`
            math: ({ value }) => <BlockMath math={value} />,
            inlineMath: ({ value }) => <InlineMath math={value} />,
            link: ({ children, href }) => {
              return <Link href={href}><a>{children}</a></Link>
            }
          }}
        />
        <hr className="mt-4" />
        <footer />
      </article>
      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href="/post/[slug]" as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← 
              {' '}
              {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href="/post/[slug]" as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">
              {nextPost.frontmatter.title}
              {' '}
              →
            </a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  const tags = getSortedTags();
  const sortedTopics = getSortedTopics();
  const allTopics = getAllTopics();

  return { 
    props: {
      postData,
      tags,
      sortedTopics,
      allTopics,
      slug
    },
  };
}
