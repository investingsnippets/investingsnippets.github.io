import Layout from "components/Layout";
import { getSortedPosts } from "utils/posts";
import { getSortedTags } from "utils/tags";
import { getSortedTopics, getAllTopics } from "utils/topics";
import SEO from "components/Seo";
import PropTypes from "prop-types";
import PostCardPagination from "components/PostCardPagination"

export default function Home({ posts, tags, sortedTopics, allTopics }) {
  return (
    <Layout tags={tags} sortedTopics={sortedTopics} allTopics={allTopics}>
      <SEO />
      <PostCardPagination total={posts.length}>
        {posts}
      </PostCardPagination>
    </Layout>
  );
}

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortedTopics: PropTypes.arrayOf(PropTypes.object).isRequired,
  allTopics: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  posts.forEach(({ frontmatter: { title, description } }) => {
    if (description.length > 191) {
      console.log(`Description length no more than 191 chars for post: ${title}`);
    }
  })

  const tags = getSortedTags();
  const sortedTopics = getSortedTopics();
  const allTopics = getAllTopics();

  return {
    props: {
      posts,
      tags,
      sortedTopics,
      allTopics
    },
  };
}
