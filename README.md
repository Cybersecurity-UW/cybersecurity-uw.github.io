# Cybersecurity UW website.

![CSEC Website Screenshot](https://github.com/Cybersecurity-UW/cybersecurity-uw.github.io/images/screenshot.png)

Copyright (c) 2022 Cybersecurity UW @ University of Wisconsin-Madison.

Currently deployed on Github Pages with the domain: https://cybersecurityuw.com.

Content is copied from the previous iteration of the site. Site is forked from the Doks theme example.

## Dependencies
This project is built on:
- **Hugo** ([https://gohugo.io](https://gohugo.io)), a static site generator written in Go. It takes markdown articles and json-like configuration files as input, and outputs static html.
The main advantage of Hugo is its speed.
- **Doks**, a theme for Hugo ([https://getdoks.org](https://getdoks.org)). This is (currently the only) theme implementation of Netlify's reccomended site setup.
- **Bootstrap** for the frontend, via Doks.
- **Node**, as a dependency for Doks. The build pipeline and package management are used directly when working on the site, and the output indirectly uses Node for progressive rendering. See the Doks readme for more details.
- Free static hosting via **Github Pages**.

## Setup
1. **Install Node.** I find [nvm](https://github.com/nvm-sh/nvm) helpful but have only used it for a week. Here are the [DigitalOcean instructions](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) if you find them helpful.
2. **Clone this repo.** (specifically this branch for now, later maybe not)
```bash
$ git clone -b csec_website https://github.com/Cybersecurity-UW/cybersecurity-uw.github.io
```
3. Following installation, **run `npm install`** to download needed modules. This should also install Hugo, if it does not you can follow [these directions](https://gohugo.io/getting-started/installing/).

:tada: You're done! `npm start` will start the local development environment, usually at http://localhost:1313.

## Adding blog posts
All blog posts are located in the **/contents/blog/** folder.
A sub-folder in that folder contains a single post.

To create one, run the following command while at the root of the repo:
```bash
$ hugo new -k blog blog/NAME_OF_POST/index.md
```
(Replace **NAME_OF_POST** with the name of the new post without any spaces.)

Notice that a new folder has been created inside the blog folder.

Next, add the desired title, description, and the author name to **index.md** in the newly created post folder. Then, compose the post using markdown syntax.

If you wish to add an image, you may do so by putting an image file in the same directory. Reference **hello-world** post as an example.

Finally, after you have finished composing the post, change the draft status from **true** to **false**.

## Committing changes
Before you push commits, please do the following:

First, check that the site looks as you want it to in your browser.

```bash
$ npm start  # local development server, see output
```

Second, to keep styling consistent, verify that your edits match the style guide inherited from the theme project.
```bash
$ npm run lint  # check for style issues, please fix and re-check until none are identified
```

Finally, double-check that the site builds without error. The generated static website contents will be stored in the **/docs** folder.

```bash
$ npm run clean  # delete reminants of previous build
$ npm run build  # build the site from the current code
```
