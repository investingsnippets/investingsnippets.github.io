import { exception } from "console";
import fs from "fs";
import { getSortedPosts } from './posts'

export function getTopicBySlug(slug) {
  const topics = JSON.parse(fs.readFileSync(`${process.cwd()}/content/topics/topics.json`));
  const topic = topics.find( a => a.id === slug)

  if (typeof topic === 'undefined'){
    throw exception(`Topic ${slug} is not defined in the topics.json`)
  }

  return topic
}

export function getSortedTopics() {
  const posts = getSortedPosts();

  const topicsCounted = posts.map((post) => {
    return post.frontmatter.topics.map(({id}) => id)
  }).reduce((pre, cur) => {
    const tmp = pre;
    Object.values(cur).forEach((e) => {
      tmp[e] = (tmp[e] || 0) + 1 ;
    })
    return tmp;
  }, {})
  
  const topicsSorted = Object
    .keys(topicsCounted)
    .sort( (a, b) => -(topicsCounted[a] - topicsCounted[b]) )
    .map(key => ({slug:key, name: getTopicBySlug(key).name, count: topicsCounted[key]}));

  return topicsSorted;
}

export function getTopicsSlugs() {
  const topics = JSON.parse(fs.readFileSync(`${process.cwd()}/content/topics/topics.json`));

  const paths = topics.map(({ id }) => ({
    params: {
      slug: id,
    },
  }));

  return paths;
}
  