import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"
import { getPostsByTopic } from "utils/posts";
import { getSortedTopics, getTopicsSlugs, getTopicBySlug } from "utils/topics";


export default function Topic({topic, posts, topics}) {
  return (
    <Layout topics={topics}>
      <SEO
        title={topic.name}
        description={topic.description}
      />
      <h1 className="mb-5 text-3xl lg:text-4xl  font-semibold">{topic.name}</h1>
      <Image
        className="mb-3"
        src={require(`../../content/assets/${topic.image}`)}
        previewSrc={require(`../../content/assets/${topic.image}?lqip`)}
        alt="Automation"
      />

      <p className="mb-10">
        {topic.description}
      </p>  

      <PostCardPagination total={posts.length}>
        {posts}
      </PostCardPagination>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getTopicsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const topic = getTopicBySlug(slug);
  const posts = getPostsByTopic(slug);
  const topics = getSortedTopics();

  return { 
    props: {
      topic,
      posts,
      topics
    },
  };
}
