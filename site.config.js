export default {
  siteMetadata: {
    title: "InvestingSnippets",
    description: "Grasp the art of investing by understanding the maths, automation, artificial intelligence and psychology behind! This blog doesn't provide financial advices or consulting on investing. It is just a try to simplify, by braking it down, investing and make it more accessible primarily to software enthusiasts and further to anyone else passionate about the topic.",
    disclaimer: "The content, opinions and conclusions on this website are NOT to be construed as financial advice. I always recommend contacting a licensed independent financial advisor. InvestingSnippets assumes no responsibility for any losses, costs or other consequences that may arise from actions or measures taken based on the content of the website. Investing in financial instruments, securities and mutual funds always involves a risk. The instruments can both increase and decrease in value, also as a result of changes in the exchange rate. It is not certain that you will get back the invested capital. Historical returns are no guarantee of future returns.",
    siteUrl: process.env.NODE_ENV === 'production'? "https://www.investingsnippets.com" : "http://localhost:3000",
    language: "en-US",
    social: {
      twitter: "investingsnipts",
      github: "investingsnippets",
      linkedin: "investingsnippets",
      // facebook: {
      //   page: false,
      //   id: ""
      // }
    },
    disqus: {
      hostname: "investingsnippets",
    },
    tinyletter: {
      id: 'investingsnippets'
    },
    sidebar: {
      tagsLimit: 4
    },
    paginationLimit: 4,
    GA_TRACKING_ID: 'UA-180222243-1'
  }, 
};
