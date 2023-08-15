---
slug: docusaurus-docs
title: Docusaurus Docs
authors: tailorvj
tags: [github, gh-pages, pages, devops, tools, documentations, docs, docusaurus]
---

I added a docs folder to the root of the project and added a docusaurus project inside it.

I moved the node.js API code to the api folder.

<!--truncate-->

## Docusaurus Docs - An open-source static site builder for documentation

*Tue 15 Aug*

I added a docs folder to the root of the project and added a docusaurus project inside it.

I moved the node.js API code to the api folder.

### Publishing docs to GitHub Pages

The project is organized as follows:

* `api/src/`: contains the source code of the API
* `docs/`: contains the source for this website

The gh-pages branch contains the built website (this website).

The project includes the gh-pages npm package, which is used to deploy the website to GitHub Pages.

In order to work on the documentation, you edit the docs files and run the website locally.
Once the changes are ready, you build the website and push it to the gh-pages branch to deploy it.

There is a package.json file in the root of the project, which contains scripts to run the website locally and to build it.

It also contains a custom script to deploy the website to GitHub Pages.

```bash
$ npm run deploygh
```

## Start your docs site locally

Run the development server:

```bash
$ cd docs
$ npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/ (or another port, if 3000 is already in use).

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.