<p align="center">
  <a href="https://www.thegoldenhurricast.com">
    <img alt="The Golden Hurricast Logo" src="/static/logo-300px.png" height="200" width="200" />
  </a>
</p>
<h1 align="center">
  The Golden Hurricast
</h1>

Source code for https://thegoldenhurricast.com

_Development by Ryan Token, blog and podcast contributions from Pat Fox, Matt Rechtien, and Ryan Token_

## Publishing Blog Posts
* Ensure you have [Homebrew](https://brew.sh/), [Node](https://nodejs.org/en/download/), and the [GitHub CLI](https://github.com/cli/cli) installed
* Clone the GitHub repo down locally. From the terminal, run: `gh repo clone r-token/the-golden-hurricast`
* From the terminal, switch to the hurricast folder you just cloned down. Run `cd path/to/the-golden-hurricast`
* From the terminal, run `npm i`
* From the terminal, create a new GitHub branch named 'blog' and switch to that branch: `git branch blog && git checkout blog`
* Create a new folder within `src/pages` - name it according to the pattern of the existing posts
* Create a new file named `index.md` within that new folder
* Add metadata to the top of the `index.md` file

Example:

```
---
path: "/odd-case-frank-haith"
date: "03/12/2021"
sortDate: "2021/03/12"
title: "The Odd Case of Frank Haith"
authors: "Ryan Token"
excerpt: "Rick Dickson has a decision to make."
tags: ['basketball', 'coaching']
---
```

* Blog post content should go inside the `index.md` file
* Images for the post should be added within the `static/blog_images` folder
* Images within the post can be loaded as follows: `![image alt text](/blog_images/folder-name/your-image-name.jpeg)`
* Once you're ready to publish, run `git add .`, `git commit -m "added a new blog post or whatever you want to say here"`, and then `git push origin blog`
* In a minute or so, the preview of the blog post should be viewable at `blog--thegoldenhurricast.netlify.app`
* Once you're happy with it, create a new Pull Request by going to the hurricast repo on GitHub, clicking Pull Requests in the top menu, and clicking the New Pull Request button
* `base` should be main, `compare` should be blog
* Add some description text if you want, and then click Create Pull Request and let me know. Once it's approved, you can merge it into the `main` branch, and that will automatically update the production website at `https://thegoldenhurricast.com` (it will take a minute or two)

## 🚀 Build Details

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ade9082-ccc8-41ed-b7ff-9964c6be1706/deploy-status)](https://app.netlify.com/sites/thegoldenhurricast/deploys)

- **Hosted on Netlify**
- Built with [Gatsby](https://www.gatsbyjs.com/) [5](https://www.gatsbyjs.com/gatsby-5/)
- **Commits to Main will trigger a 'Gatsby Build' command on Netlify, and Netlify will serve up the results**
- goldenhurricast.com redirects to thegoldenhurricast.com
