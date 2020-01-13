const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/templates/allTagsIndex.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/templates/singleTagIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/templates/blogPost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/pages/index.js"))),
  "component---src-pages-podcast-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/pages/podcast.js"))),
  "component---src-pages-support-js": hot(preferDefault(require("/Users/rtoken/Dev/Web/production/thegoldenhurricast/src/pages/support.js")))
}

