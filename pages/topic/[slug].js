import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"
import { getSortedTags } from "utils/tags";
import { getPostsByTopic } from "utils/posts";
import { getSortedTopics, getTopicSlugs, getTopicBySlug, getAllTopics } from "utils/topics";


export default function Topic({topic, posts, tags, sortedTopics, allTopics}) {
  return (
    <Layout tags={tags} sortedTopics={sortedTopics} allTopics={allTopics}>
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
  const paths = getTopicSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const topic = getTopicBySlug(slug);
  const posts = getPostsByTopic(slug);
  
  const tags = getSortedTags();
  const sortedTopics = getSortedTopics();
  const allTopics = getAllTopics();

  return { 
    props: {
      topic,
      posts,
      tags,
      sortedTopics,
      allTopics
    },
  };
}