import Layout from "components/Layout";
import { getSortedPosts } from "utils/posts";
import { getSortedTopics } from "utils/topics";

import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"

export default function Home({ posts, topics }) {
  return (
    <Layout topics={topics}>
      <SEO />
      <PostCardPagination total={posts.length}>
        {posts}
      </PostCardPagination>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  posts.map(({ frontmatter: { title, description } }) => {
    if (description.length > 191) {
      console.log(`Description length no more than 191 chars for post: ${title}`);
    }
  })

  const topics = getSortedTopics();

  return {
    props: {
      posts,
      topics
    },
  };
}
