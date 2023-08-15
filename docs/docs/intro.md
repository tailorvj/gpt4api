---
sidebar_position: 1
---
# Get your OpenAI GPT node.js API started easily

Get started **in less than 5 minutes**.

## Getting Started

Clone the repo and follow the README.md instructions.

This documentation will evolve with time. At the moment it is a work in progress.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Project organization

The project is organized as follows:

* `api/`: contains the source code of the API
* `docs/`: contains the source for this website

### Developing your API

Clone the repo and edit the files in the /api/ folder. 

At the moment of writing there is a simple example API endpoint implementation that is integrated with OpenAI GPT API. 

This project intends to provide a more general purpose solution in future commits. 

### Writing documentation

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
