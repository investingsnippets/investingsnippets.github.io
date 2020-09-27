
import { getSortedPosts } from 'utils/posts'


export function getTopicsSlugs() {
  const sortedtopics = getSortedTopics();

  const paths = sortedtopics.map(({ name }) => ({
    params: {
      slug: name,
    },
  }));

  return paths;
}

export function getSortedTopics() {
  const posts = getSortedPosts();

  var topicsList = []
  for (const postIndex in posts) {
    const post = posts[postIndex];
    const topics = post.frontmatter.topics;
    
    if (topics) {
      const topicsArray = topics.split(/(\s+)/).filter( e => e.trim().length > 0)
      topicsList = topicsList.concat(topicsArray);
    }
  }

  const topicsCounted = topicsList.reduce( (acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1 ;
    return acc;
  } , {})
  
  const topicsSorted = Object.keys(topicsCounted).sort(function(a, b) {return -(topicsCounted[a] - topicsCounted[b])}).map(key => ({name:key, count: topicsCounted[key]}));

  return topicsSorted;
}
  