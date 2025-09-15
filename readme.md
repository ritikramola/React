# _Episode 01 - Inception_

## Ques): What is `Emmet`?
**Ans:** `Emmet` is a web development toolkit that enables developers to write HTML and CSS code more `quickly and efficiently`. <br/>
It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules. <br/>
It was originally a `plugin` for various text editors, such as Sublime Text, Visual Studio Code, and Atom, but it has become a widely adopted set of tools integrated into many modern code editors. 
### _Example_
Input:
```sh
  ul>li*3>a
```
Output:
```html
  <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
  </ul>
```
This expands into an `unordered list(ul)` with `three list items(li), each containing an anchor(a)` element.


## Ques): Difference between a `Library and Framework`?
**Ans:** Both the `framework and library` is `precoded` support programs to `develop` complex software `applications`.

A `framework` is a `set of pre-written code` that provides a structure for developing software applications. A `library`, on the other hand, is a `collection of pre-written code` that can be used to perform specific tasks.

A `library` is a `collection of packages` that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.

The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.
### Additional Resources :)  [Click Me](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)


## Ques): What is `CDN`? Why do we use it?
**Ans:** `CDN` stands for `Content Delivery Network`. <br/>
It is a `system of distributed servers` that work together to `deliver web content`, such as images, stylesheets, JavaScript files, and videos, to users based on their `geographical location`.<br/>
The primary purpose of using a CDN is to `enhance the performance, reliability, and efficiency` of delivering web content to end-users.
### Here are some key reasons why CDNs are used:
- Faster Content Delivery
- Improved Website Security
- Scalability
- Global Reach
- Reduction in Bandwidth Costs
### _React & ReactDOM CDN:_
```js
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```


## Ques): Why is `React known as React`?
**Ans:** React is known as `React` because it It `reacts quickly` to changes `without reloading the whole page`. <br/>
The name is derived from the idea of `components reacting to state changes`.<br/>
React is called React because it was designed to be a d`eclarative, efficient, and flexible` JavaScript library for building user interfaces.<br/>
React is a `free and open-source` front-end `JavaScript library` for building `user interfaces(UI)` based on components. It is maintained by `Meta`.


## Ques): What is `crossorigin in script tag`?
**Ans:** The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.<br/>
If you serve React from a CDN, we recommend to keep the crossorigin attribute set:
```js
  <script crossorigin src="..."></script>
```
The `crossorigin` attribute in a `<script>` tag is used to control how the browser handles requests for cross-origin scripts. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. <br/>
crossorigin refers to making requests to a different domain than the one that served the HTML page. This attribute is commonly used when including external scripts from a different domain, especially when loading scripts from a Content Delivery Network (CDN).
### _Syntax_
```js
  <script crossorigin="anonymous|use-credentials">
```
### The `crossorigin` attribute can have the following values:
- **anonymous:** This is the default value. When set to "anonymous," the browser makes the request without including any credentials (such as cookies or HTTP authentication) with the request. This is suitable for cases where the script doesn't require authentication.
#### Example:
```js
  <script src="https://example.com/script.js" crossorigin="anonymous"></script>
```
- **use-credentials:** When set to "use-credentials," the browser includes credentials with the request, such as cookies or HTTP authentication. This is used when the script requires authentication to be fetched.
#### Example:
```js
  <script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```
### Additional Resources :)  [Click Me](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)


## Ques): What is difference between `React and ReactDOM`?
**Ans:** `React` and `ReactDOM` are both `JavaScript libraries` used for building `user interfaces`. <br/>
`React` is the `core library` for `building user interfaces` in a declarative and component-based manner, while `ReactDOM` is a `specific/separate package` that provides `DOM(Document Object Model)-specific methods` for managing React components. <br/> 
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.


## Ques): What is difference between `react.development.js` and `react.production.js` files via `CDN`?
**Ans:** `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.
- **react.development.js** - More developer friendly, readable, will take more size.
```js
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
- **react.production.js** - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.
```js
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```
### Additional Resources :)  [Click Me](https://stackoverflow.com/questions/75791204/the-difference-between-react-development-js-and-react-production-js-files-via-cd#:~:text=In%20production%20mode%2C%20compression%20and,when%20compared%20to%20development%20mode)

## Ques: What are `async and differ` attributes in `<script>` tag?
Ans: The `async` and `defer` attributes are used with the `<script>` element in HTML to control how external `scripts are loaded and executed`. <br/>

**async attribute** - The `async` attribute is a `boolean attribute`. When you include the `async` attribute in a `<script>` tag, it indicates that the script should be `executed asynchronously`. This means that the script will be downloaded in the background while the HTML document continues to be parsed.<br/>
The script will be executed as soon as it's downloaded, regardless of whether the HTML parsing is complete.<br/>
This is beneficial for non-blocking scripts, especially in scenarios where the script doesn't depend on the DOM structure or other scripts.
### _Syntax_
```js
  <script src="example.js" async></script>
```

**defer attribute** - The `defer` attribute is a `boolean attribute`. When you include the `defer` attribute in a `<script>` tag, it indicates that the script should be `executed in order`, after the HTML document has been fully parsed. <br/>
The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.<br/>
This is useful when the script depends on the DOM structure or other scripts and needs to be executed in a specific order.
### _Syntax_
```js
  <script src="example.js" defer></script>
```

Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:
```js
  <script type="module" src="main.js"></script> and place the tag inside <head>
```
```js
  <script defer nomodule> can be used as a legacy fallback.
```

As the name suggests, it allows you to import `modules`, which makes it easier to organize your code.
Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.<br/>
Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.<br/>
Prevent top level variables from implicitly polluting the global namespace.<br/>
Allow you to use top-level await in supported engines.<br/>
Load and parse your code `asynchronously`, which improves load performance.


# _Episode 02 - Igniting our App_


## Ques): What is `NPM`?
**Ans:** It is a tool used for package management and the default package manager for Node projects. <br/>
`NPM is installed when NodeJS` is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 
- `npm` alternative is `yarn`

### How to initialize `npm`?
```sh
  npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Ques): What is `Parcel/Webpack`? Why do we need it?
**Ans:** `Parcel/Webpack` is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.<br/>
It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.<br/>
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

### Installation Commands:
- Install:
```sh
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```sh
      npx parcel <entry_point> 
    ```
    - For production build :
    ```sh
      npx parcel build <entry_point> 
    ```

## Ques): What is `.parcel-cache`?
**Ans:** `.parcel-cache` is used by parcel(bundler) to reduce the building time.<br/>
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Ques): What is `npx`?
**Ans:** `npx` is a tool that is used to execute the packages. <br/>
It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. <br/>
It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## Ques): What is difference between `dependencies` vs `devDependencies`?
**Ans:** `Dependencies` should contain library and framework in which your app is built on, needs to function effectively such as Vue, React, Angular, Express, JQuery and etc. <br/>
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.<br/>
`These packages` are `necessary only while you are developing your project`, not necessary on production.<br/>
To save a dependency as a devDependency on installation we need to do, 
```sh
  npm install --save-dev
```
instead of just,
```sh
  npm install --save
```


## Ques): What is `Tree Shaking`?
**Ans:** `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Ques): What is `Hot Module Replacement`?
**Ans:** `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## Ques): List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
**Ans:** `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
* `Image optimization`
* `Caching while development`


## Ques): What is `.gitignore`? What should we `add and not add` into it?
**Ans:** The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.<br/>
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.<br/>
`package.json` and `package-lock.json` should `not add` into your `.gitignore` file.<br/>

The entries in this file can also follow a matching pattern.
```
  * is used as a wildcard match
  / is used to ignore pathnames relative to the .gitignore file
  # is used to add comments to a .gitignore file
```

This is an example of what the .gitignore file could look like:
```
  # Ignore Mac system files
  .DS_store

  # Ignore node_modules folder
  node_modules

  # Ignore all text files
  *.txt

  # Ignore files related to API keys
  .env

  # Ignore SASS config files
  .sass-cache
```


## Ques): What is the difference between `package.json` and `package-lock.json`?
**Ans:** `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```json
  "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## Ques): Why should I not modify `package-lock.json`?
**Ans:** `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Ques): What is `node_modules` ? Is it a good idea to push that on git?
**Ans:** `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).<br/>
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Ques): What is the `dist` folder?
**Ans:** The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Ques): What is `browserslist`?
**Ans:** `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

