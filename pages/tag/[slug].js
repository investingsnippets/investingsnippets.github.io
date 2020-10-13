/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import Link from "next/link";
import PostCardPagination from "components/PostCardPagination"
import { getPostsByTag } from "utils/posts";
import { getSortedTags, getTagsSlugs, getTagBySlug } from "utils/tags";
import { getSortedTopics, getAllTopics } from "utils/topics";


export default function Topic({tag, posts, tags, sortedTopics, allTopics}) {
  return (
    <Layout tags={tags} sortedTopics={sortedTopics} allTopics={allTopics}>
      <SEO
        title={tag.name}
        description={tag.description}
      />
      <p className="text-sm mb-2">
        <Link href="/" key='home'>
          <a className='' key='home'>Home</a>
        </Link>
        {' > '}
        <Link href="/tag/[tag]" as={`/tag/${tag.id}`} key={tag.id}>
          <a className='' key={tag.id}>{tag.name}</a>
        </Link>
      </p>
      <Image
        className="mb-3"
        src={require(`../../content/assets/${tag.image}`)}
        previewSrc={require(`../../content/assets/${tag.image}?lqip`)}
        alt="Automation"
      />

      <p className="mb-10">
        {tag.description}
      </p>  

      <PostCardPagination total={posts.length}>
        {posts}
      </PostCardPagination>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getTagsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const tag = getTagBySlug(slug);
  const posts = getPostsByTag(slug);
  
  const tags = getSortedTags();
  const sortedTopics = getSortedTopics();
  const allTopics = getAllTopics();

  return { 
    props: {
      tag,
      posts,
      tags,
      sortedTopics,
      allTopics
    },
  };
}
