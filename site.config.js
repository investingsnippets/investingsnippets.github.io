export default {
  siteMetadata: {
    title: "InvestingSnippets",
    description: "Driven by my passion to always dive deep in new knowledge, I started this blog as an attempt to give my own simplified view on how I apply my software engineering skills and background in Mathematics to Investing! NO financial advice or consulting is provided! I use python and try to automate as much as possible.",
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
