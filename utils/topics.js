
import { getSortedPosts } from './posts'

export function getSortedTopics() {
  const posts = getSortedPosts();

  const topicsCounted = posts.map((post) => {
    const {topics} = post.frontmatter;
    if (topics) {
      return topics.split(/(\s+)/).filter( e => e.trim().length > 0)
    }
    return []
  }).reduce((pre, cur) => {
    Object.values(cur).forEach((e) => {
      pre[e] = (pre[e] || 0) + 1 ;
    })
    return pre;
  }, {})
  
  const topicsSorted = Object
    .keys(topicsCounted)
    .sort( (a, b) => -(topicsCounted[a] - topicsCounted[b]) )
    .map(key => ({name:key, count: topicsCounted[key]}));

  return topicsSorted;
}

export function getTopicsSlugs() {
  const sortedtopics = getSortedTopics();

  const paths = sortedtopics.map(({ name }) => ({
    params: {
      slug: name,
    },
  }));

  return paths;
}
  