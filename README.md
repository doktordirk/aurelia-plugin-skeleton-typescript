# aurelia-plugin-skeleton-typescript

Certainly happened to you that you want to write an Aurelia plug-in. If yes this for you :)

This plugin system created based on:
1. [Typescript](https://www.typescriptlang.org/) as a typed superset of JavaScript that compiles to plain JavaScript.
2. [FuseBox](https://github.com/fuse-box/fuse-box) as a bundler/module loader.
3. [Jest](https://facebook.github.io/jest/) as delightful JavaScript testing.
4. [Puppeteer](Puppeteer) as headless Chrome for E2E testing.
5. [ESLint](https://eslint.org/) as a pluggable linting utility for JavaScript.
6. [TSLint](https://palantir.github.io/tslint/) as an extensible linter for the TypeScript language.

### How to build and run sample
* ```npm run watch```
* ```npm run build``` 

### How to rename to your own plugin
* ```npm run setup```
  * anwser the questions about name and version
  * then run one of the above-mentioned scripts :smile:
  
### How to use eslint for finding problems
* ``` npm run eslint ```

### How to fix eslint error in a moment
* ``` npm run eslintFix ```

### How to test our functionalities

* ```npm run unitTest```
  * for unit testing with Jest.
* ```npm run unitTestWatch```
  * for unit testing with Jest in watch mode.
* ```npm run unitTestCoverage```
  * for unit testing with Jest with test coverage info.
  
### How to test as user perspective (E2E)

* ```npm run e2eTest```
  * You should be sure your app is up and running on `http://localhost:4444` then use the command.