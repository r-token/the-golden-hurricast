const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/allTagsIndex.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/singleTagIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/templates/blogPost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/home/Dev/Web/Production/thegoldenhurricast/src/pages/index.js")))
}

