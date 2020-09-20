import Layout from "components/Layout";
import { getSortedPosts } from "utils/posts";
import { getSortedCategories } from "utils/posts";

import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"

export default function Home({ posts, categories }) {
  return (
    <Layout categories={categories}>
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

  const categories = getSortedCategories();

  return {
    props: {
      posts,
      categories
    },
  };
}
