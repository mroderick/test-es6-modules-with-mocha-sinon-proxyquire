# Test ES6 with Mocha, Sinon, Proxyquire

This repository is a running example of how to configure a project for testing [Babel][babel] transpiled ES6 JavaScript that uses ES6 module syntax, using [Mocha][mocha], [Sinon][sinon] and [Proxyquire][proxyquire] without adding any dependency to whatever module bundler/loader is used for delivering the code to browsers.

## Try it out

I've tested this in node 6.x and 7.x. If you're using ES6 modules, then you probably also have a fairly modern node on your system(s).

```shell
$ npm install
$ npm test
```

```shell
# use nyc to create a coverage report
$ npm run coverage

------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
All files   |       50 |      100 |       50 |       50 |                |
 hello      |      100 |      100 |      100 |      100 |                |
  hello.js  |      100 |      100 |      100 |      100 |                |
 proxyquire |        0 |      100 |        0 |        0 |                |
  hi.js     |        0 |      100 |        0 |        0 |              2 |
------------|----------|----------|----------|----------|----------------|
```

## License

MIT: http://mrgnrdrck.mit-license.org

[babel]: https://babeljs.io
[mocha]: https://mochajs.org
[proxyquire]: https://github.com/thlorenz/proxyquire
[sinon]: http://sinonjs.org
