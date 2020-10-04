import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
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
      <h1 className="mb-5 text-3xl lg:text-4xl  font-semibold">{tag.name}</h1>
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
