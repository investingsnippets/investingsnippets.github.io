import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
import { getSortedTopics } from "utils/topics";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({postData, topics}) {
  const { post, frontmatter, nextPost, previousPost } = postData;
  return (
    <Layout topics={topics}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-5xl leading-none font-display font-semibold">
            {frontmatter.title}
          </h1>
          <p className="text-sm mb-2">{frontmatter.date}</p>
          {frontmatter.topics.split(/(\s+)/).filter( e => e.trim().length > 0).map((cat) => (
            <Link href={"/topic/[topic]"} as={`/topic/${cat}`} key={cat}>
              <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 my-2" key={cat}>{cat}</a>
            </Link>
          ))}
        </header>
        <ReactMarkdown
          className="mb-4 prose-sm prose sm:prose lg:prose-lg"
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
        <hr className="mt-4" />
        <footer>
          
        </footer>
      </article>
      <nav className="flex flex-wrap justify-between mb-10">
        {previousPost ? (
          <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
            <a className="text-lg font-bold">
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
            <a className="text-lg font-bold">{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
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

  const topics = getSortedTopics();

  return { 
    props: {
      postData,
      topics
    },
  };
}
