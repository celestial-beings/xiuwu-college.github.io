# Node编码规范

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

## 编码风格

- 【推荐】使用 Node.js 内置的全局变量。eslint: [node/prefer-global](https://github.com/mysticatea/eslint-plugin-node/tree/v11.1.0/docs/rules/prefer-global)

```js
// bad
const { Buffer } = require('buffer');
const b = Buffer.alloc(16);
// good
const b = Buffer.alloc(16);

// bad
const { URL } = require('url');
const u = new URL(s);
// good
const u = new URL(s);

// bad
const { URLSearchParams } = require('url');
const u = new URLSearchParams(s);
// good
const u = new URLSearchParams(s);

// bad
const { TextEncoder } = require('util');
const u = new TextEncoder(s);
// good
const u = new TextEncoder(s);

// bad
const { TextDecoder } = require('util');
const u = new TextDecoder(s);
// good
const u = new TextDecoder(s);

// bad
const process = require('process');
process.exit(0);
// good
process.exit(0);

// bad
const console = require('console');
console.log('hello');
// good
console.log('hello');
```

- 【推荐】使用模块内支持的 <Strong>promises</Strong> API。eslint: [node/prefer-promises](https://github.com/mysticatea/eslint-plugin-node/tree/master/docs/rules/prefer-promises)

Node.js 从 v11.14.0 开始支持 <Strong>require('dns').promises</Strong> 和 <Strong>require('fs').promises</Strong> API。

```js
// bad
const dns = require('dns');
const fs = require('fs');

function lookup(hostname) {
  dns.lookup(hostname, (error, address, family) => {
    // ...
  });
}

function readData(filePath) {
  fs.readFile(filePath, 'utf8', (error, content) => {
    // ...
  });
}

// good
const { promises: dns } = require('dns');
const { promises: fs } = require('fs');

async function lookup(hostname) {
  const { address, family } = await dns.lookup(hostname);
  // ...
}

async function readData(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  // ...
}
```

- 【推荐】如无特殊需求，模块引用声明放在文件顶端，注意引用顺序。eslint: [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)

如无特殊需求（如动态 require），模块引用声明需要放在文件顶端。引用顺序如无特殊需求，按以下顺序来引入依赖：node 内置模块、npm 包、本地文件或其他，几类文件代码块之间各空一行，每类文件代码块中的引用顺序按照字典排序，如有解构引用情况，字典序以解构的第一个为准，解构内部按照字典排序。

```js
//  bad
const Car = require('./models/car');
const moment = require('moment');
const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const { Foo, Bar } = require('tool');
const note = require('note');

// good
const fs = require('fs');
const http = require('http');

const { Bar, Foo } = require('tool');
const moment = require('moment');
const mongoose = require('mongoose');
const note = require('note');

const Car = require('./models/car');

//  bad
import Car from './models/car';
import moment from 'moment';
import mongoose from 'mongoose';
import fs from 'fs';
import http from 'http';
import { Foo, Bar } from 'tool';
import note from 'note';

// good
import fs from 'fs';
import http from 'http';

import { Bar, Foo } from 'tool';
import moment from 'moment';
import mongoose from 'mongoose';
import note from 'note';

import Car from './models/car';
```

- 【推荐】抛出异常时，使用原生 <Strong>Error</Strong> 对象。eslint: [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

```js
// bad
throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw `${err}`

// good
throw new Error();

throw new Error('error');

const err = new Error('error');
throw err;

try {
  throw new Error('error');
} catch (err) {
  throw err;
}
```

- 【推荐】线上环境尽量不要使用 <Strong>fs/child_process</Strong> 模块的 <Strong>sync</Strong> 方法，如 <Strong>fs.readFileSync()</Strong>、<Strong>cp.execSync()</Strong> 等。

这样会阻塞 Node.js 应用的进程，导致不能继续处理新的请求，或当前正在处理的请求超时。推荐使用 <Strong>require('fs').promises</Strong> 方式或使用 [mz](https://www.npmjs.com/package/mz)。

```js
// bad
const fs = require('fs');

function test() {
  fs.readFileSync('./somefile', 'utf-8');
}

// good
const { promises: fs } = require('fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}

// good
const fs = require('mz/fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}
```

## 最佳实践

- 【推荐】应用不应该有状态。
使用外部数据存储。保证即使结束某个应用实例也不会影响数据和服务。

- 【推荐】尽量不要用 Node.js 应用去托管前端静态文件。

应该把前端静态文件放到 CDN，当静态文件的访问量很大的时候，可能会阻塞其他服务的执行。

- 【推荐】把 CPU 密集型任务委托给反向代理。

Node.js 应用不合适做 CPU 密集型任务（例如 gzip，SSL），请尽量把这类任务代理给 nginx 或其他服务。

- 【推荐】使用 <Strong>async/await</Strong>，尽量避免使用回调函数。

<Strong>async/await</Strong> 可以让你的代码看起来更简洁，可以规避掉回调地狱的问题，并且使异常处理也变得清晰简单。

- 【推荐】使用 <Strong>util.promisify</Strong> 处理回调函数，使其返回 <Strong>Promise</Strong>。

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

- 【推荐】使用 Node.js 原生 <Strong>Promise</Strong>，而不是三方库如 <Strong>bluebird</Strong>。

- 【推荐】在类方法中返回 <Strong>this</Strong> 方便链式调用。

```js
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

## 参考资料

[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)

[eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

[airbnb javascript style](https://github.com/airbnb/javascript)
