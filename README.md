# Rasa Web Team Technical Test

This is a starter project for the Rasa Web Team technical evaluation.

## The Task

This test task is to rebuild a single "Customer Case Study" page, complete with top and bottom navigation (just the visible parts--you don't need to rebuild drop-down menus!), based on the design linked below and using as a starting point _this repo_, which is a React project using [Next.js](https://nextjs.org/).

Items you will use include:

- SVG and image assets included under `/assets`
- data sources, in JSON form, under `/data/`
  - NOTE: the file `customer-case-studies.json` includes 18 case studies, you only need to pick one for this page :)
- a design mockup hosted on [Figma](https://www.figma.com/file/nKnqhZfLi1YdOqMMwKKCXN/Rasa-Marketing-Tech-Test)

## Rules and Guidelines

You should not spend more than ~4 hours on this task. This may not be enough time to complete all aspects of it, but the choices and compromises you make here will form part of what we discuss afterwards.

Some guidelines:

- please apply styling using either CSS or Sass, not a CSS-in-JS library. You may use CSS-module `.module.(s)css` syntax if you like.
- please use the data provided (you may also add more) and pass it in to your page through the framework's [data fetching methods, e.g. `getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)
- please add correct metatags to the page, for SEO and social sharing (see opengraph image in `/assets`).
- please add meta files to the deployment, such as:
    - `robots.txt`
    - `sitemap.xml`
- please measure the performance of your resulting page on Google Lighthouse

## The Follow-Up

Your finished task should consist of a [deployed page](https://nextjs.org/docs/deployment) on either [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), and the code shared with us through a new repository here on Github.

What we will be interested to discuss:

- your choices and steps; what you would have done if you had more time
- what kind of analytics instrumentation you would do on this page, to track its effectiveness--and how this would be implemented
- what additions/improvements you might suggest to this page, with the goals of engagement and conversion in mind?

Please also take some time to consider how future updates and changes to this page would be managed, in real-world scenario.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
