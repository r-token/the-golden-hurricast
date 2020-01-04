// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-all-tags-index-js": () => import("../src/templates/allTagsIndex.js" /* webpackChunkName: "component---src-templates-all-tags-index-js" */),
  "component---src-templates-single-tag-index-js": () => import("../src/templates/singleTagIndex.js" /* webpackChunkName: "component---src-templates-single-tag-index-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-blog-post-js": () => import("../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

