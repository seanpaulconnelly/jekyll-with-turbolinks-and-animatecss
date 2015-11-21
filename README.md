A Jekyll 3.0.0 starting point with Turbolinks and Animate.css. 

Why? Because performance is about perception. Jekyll is already fast, but adding the perceived speed of turbolinks and animate.css is a remarkable improvement.

**[View demo](http://seanpaulconnelly.github.io/jekyll-with-turbolinks-and-animatecss)**

---

#### Use on new projects

- Fork or download
- `bundle exec jekyll serve --baseurl ''` 
- cool, you're done


#### Use on existing projects

- `cd your-site`
- Include everything from [this commit](https://github.com/seanpaulconnelly/jekyll-with-turbolinks-and-animatecss/commit/6bf004f141ee13a5a51b69a46d7b2a0984374099)
- `bundle exec jekyll serve --baseurl ''`

---

> You may need to tweak [head.html](https://github.com/seanpaulconnelly/jekyll-with-turbolinks-and-animatecss/blob/master/_includes/head.html#L12) if your javascript 404s. Jekyll's site tells you [how to do this](http://jekyllrb.com/docs/github-pages/#project-page-url-structure) and why it's happening.