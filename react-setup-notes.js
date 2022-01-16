// -------------------------------------------------------------
// Some of the concepts around setting up a React project
// -------------------------------------------------------------


// 1) Node:
// - JavaScript running as a 'Backend' language, meaning you can use it to run
// scripts on your own computer also (not just as a language used by Web Browsers
// as it usually is).
// - Required to set up local dev environment for a React project.
// - Used by yarn/npm to install third-party libraries.
// - Used by webpack to do things like create a local dev server
// (at http://localhost:8080) and 'bundle' up your JS code to give to the browser.


// 2) npm / yarn:
// - Package manager tools used to install third-party libraries
// - When you run 'yarn install' (or just 'yarn') or 'npm install', they look for
// a package.json file, then install all the 'dependencies' (third-party libraries)
// listed in the dependencies section of the package.json file.


// 3) package.json
// - File stored in the 'root' folder of a JS project that uses third-party libraries
// - 'dependencies' section lists the libraries needed by the project
// - 'scripts' section lists the commands that you can run from the command line
// while in this project folder, e.g:
```
"scripts": {
  "start": "webpack serve --hot --open --mode development",
  "build": "webpack --config webpack.config.js --mode production"
}
```
// will run the command 'webpack serve --hot --open --mode development'
// when you run 'yarn start' (or 'npm start') from the command line


// 4) Webpack
// Handles various tasks around setting up the react project.
// Configured using a 'webpack.config.js' file.
// We'll leave Webpack for now mostly, the only concept we went through so far was
// the entry point, where you define what .js file webpack has to look for when starting
// your app, e.g:
```
entry: './src/index.js',
```
// You can see this line in the webpack.config.js file
