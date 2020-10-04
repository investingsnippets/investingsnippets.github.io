import { exception } from "console";
import fs from "fs";
import { getSortedPosts } from './posts'

export function getTagBySlug(slug) {
  const tags = JSON.parse(fs.readFileSync(`${process.cwd()}/content/tags/tags.json`));
  const topic = tags.find( a => a.id === slug)

  if (typeof topic === 'undefined'){
    throw exception(`Tag ${slug} is not defined in the tags.json`)
  }

  return topic
}

export function getSortedTags() {
  const posts = getSortedPosts();

  const tagsCounted = posts.map((post) => {
    return post.frontmatter.tags.map(({id}) => id)
  }).reduce((pre, cur) => {
    const tmp = pre;
    Object.values(cur).forEach((e) => {
      tmp[e] = (tmp[e] || 0) + 1 ;
    })
    return tmp;
  }, {})
  
  const tagsSorted = Object
    .keys(tagsCounted)
    .sort( (a, b) => -(tagsCounted[a] - tagsCounted[b]) )
    .map(key => ({...getTagBySlug(key), slug:key, count: tagsCounted[key]}));

  return tagsSorted;
}

export function getTagsSlugs() {
  const tags = JSON.parse(fs.readFileSync(`${process.cwd()}/content/tags/tags.json`));

  const paths = tags.map(({ id }) => ({
    params: {
      slug: id,
    },
  }));

  return paths;
}
  