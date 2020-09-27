import Layout from "components/Layout";
import SEO from "components/Seo";
import ReactMarkdown from "react-markdown/with-html";
import Image from "components/Image";
import { getTermsSlugs, getTermsBySlug } from "utils/terms";
import { getSortedTopics } from "utils/topics";


const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);


export default function Terms({termData, topics}) {
  const { term, frontmatter } = termData;
  return (
    <Layout topics={topics}>
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
  const topics = getSortedTopics();

  return { 
    props: {
      termData,
      topics
    },
  };
}
