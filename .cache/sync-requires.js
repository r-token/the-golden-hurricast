const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-index-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/allTagsIndex.jsx"))),
  "component---src-templates-single-tag-index-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/singleTagIndex.jsx"))),
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/blogPost.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/about.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/index.jsx"))),
  "component---src-pages-podcast-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/podcast.jsx"))),
  "component---src-pages-support-jsx": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/support.jsx")))
}

