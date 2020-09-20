import Layout from "components/Layout";
import SEO from "components/Seo";
import PostCardPagination from "components/PostCardPagination"
import { getPostsByCategory, getSortedCategories, getCategoriesSlugs } from "utils/posts";


export default function Category({categoryName, posts, categories}) {
  return (
    <Layout categories={categories}>
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
  const paths = getCategoriesSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = getPostsByCategory(slug);
  const categories = getSortedCategories();

  return { 
    props: {
      categoryName: slug,
      posts,
      categories
    },
  };
}
