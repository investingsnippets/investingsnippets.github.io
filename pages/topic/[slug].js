/* eslint-disable react/prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import Link from "next/link";
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
      <p className="text-sm mb-4">
        <Link href="/" key='home'>
          <a className='' key='home'>Home</a>
        </Link>
        {' > '}
        <Link href={`/topic/${topic.id}`} key={topic.id}>
          <a className='' key={topic.id}>{topic.name}</a>
        </Link>
      </p>
      <div className="mb-4 flex text-center content-center flex-wrap place-items-center">
        <Image
          className="mx-auto"
          src={require(`../../content/assets/${topic.image}`)}
          previewSrc={require(`../../content/assets/${topic.image}?lqip`)}
          alt="Automation"
        />
      </div>

      <p className="mb-3">
        {topic.description}
      </p>

      <div className="border border-white mb-4" />

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
