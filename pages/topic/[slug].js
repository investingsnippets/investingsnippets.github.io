import Layout from "components/Layout";
import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"
import { getPostsByCategory } from "utils/posts";
import { getSortedTopics, getTopicsSlugs } from "utils/topics";


export default function topic({categoryName, posts, topics}) {
  return (
    <Layout topics={topics}>
      {/* <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      /> */}
      <h1 className="mb-2">{categoryName}</h1>
      
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
  const posts = getPostsByCategory(slug);
  const topics = getSortedTopics();

  return { 
    props: {
      categoryName: slug,
      posts,
      topics
    },
  };
}
