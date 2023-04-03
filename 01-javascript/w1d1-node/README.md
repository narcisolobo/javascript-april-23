# Node.js
---
## A Little History

[A little history](https://auth0.com/blog/a-brief-history-of-javascript/) before we talk about Node.js. Before JavaScript, the World Wide Web consisted of static web pages. Sites lacked functionality, they couldn't display dynamic content. There was no way to manipulate the DOM once it was loaded in your browser.

To remedy this, Netscape hired Brendan Eich to develop a new scripting language for Netscape Navigator, the most popular web browser at the time. Brendan Eich developed what was first called Mocha, then renamed LiveScript in just ten days. The name was later changed to JavaScript before its official release.

JavaScript soon exploded in popularity. It was everywhere, on every site and every [GeoCities](./assets/geocities.jpeg) page, yet it could still only run in your browser—until 2009, when Node.js was created by Ryan Dahl.

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on Google Chrome's JavaScript V8 Engine. It allows us to run JavaScript code outside a web browser. With Node.js, we can now use JavaScript to run code server-side.

We don't have a dedicated chapter for Node.js in this stack. Instead, we focus on learning Express, our web framework that runs on top of Node. Most everything we do with Express, we can do with Node's built-in modules. Express just makes it much, much easier.

## Installation

Visit [nodejs.org](https://nodejs.org/en/) and install version 16. Once installed, open a terminal and type `node -v`. You should see your version displayed.

## Running JavaScript Files

You can execute any JS files via the command line by typing the `node` command in your terminal, followed by the path to the JS file you want to run. If you're in the same directory as the file, this can look something like `node script.js`.

## The Node REPL

You can also play around and test small chunks of JS in the REPL, which stands for Read, Evaluate, Print, Loop. To enter the REPL, simply type `node` in your terminal and hit return. Your prompt should change to an angle bracket. Try running some of your Basic 13 algorithms in it! To exit the REPL, type `.exit`.