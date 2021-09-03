# TypeScript编码规范

TypeScript 是微软开发的一款开源编程语言，它是 JavaScript 的超集，本质上是为 JavaScript 增加了静态类型声明。任何现有的 JavaScript 代码都是合法的 TypeScript 代码。TypeScript 最终也会被编译成 JavaScript，使其在浏览器、Node.js 等环境中使用。
## 编码风格

![Typescript编码风格](../../.vuepress/public/images/WebStandard/typescript-standard.svg)

- 【必要】重载的函数必须写在一起 [@typescript-eslint/adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md?file=adjacent-overload-signatures.md)

自然相关的项组合在一起将提高代码可读性和组织性。

```ts
// bad
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

// good
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}
// bad
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

// good
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}
// bad
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;

// good
export function bar(): void;
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;
```

- 【推荐】简单数组类型的定义使用 <Strong>T[]</Strong>，复杂类型使用 <Strong>Array&lt;T&gt;</Strong> [@typescript-eslint/array-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md?file=array-type.md)

对数组类型的定义使用相同的规范将帮助开发者更快的理解和阅读类型。

简单类型（数字、字符串、布尔等）请使用 <Strong>T[]</Strong> 或 <Strong>readonly T[]</Strong> ，其他复杂类型（联合、交叉、对象、函数等）请使用 <Strong>Array&lt;T&gt;</Strong> 或 <Strong>ReadonlyArray&lt;T&gt;</Strong>

```ts
// bad
const a: (string | number)[] = ['a', 1];
const b: { prop: string }[] = [{ prop: 'a' }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ['a', 'b'];
const e: Array<string> = ['a', 'b'];
const f: ReadonlyArray<string> = ['a', 'b'];

// good
const a: Array<string | number> = ['a', 1];
const b: Array<{ prop: string }> = [{ prop: 'a' }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ['a', 'b'];
const e: string[] = ['a', 'b'];
const f: readonly string[] = ['a', 'b'];
```


- 【推荐】使用 TypeScript 注释指令时需跟随描述说明 [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md?file=ban-ts-comment.md)

TS 提供了一些指令注释，可用于忽略 TypeScript 编译器在编译阶段的错误，如下：

```ts
// @ts-expect-error
// @ts-ignore
// @ts-nocheck
// @ts-check
```

我们允许在代码中使用指令注释，但需要跟随一定长度的描述说明。

```ts
// bad
// @ts-expect-error
console.log('my code');

// @ts-ignore
console.log('my code');

// good
// @ts-expect-error: Unreachable code here
console.log('my code');

// @ts-ignore: It's ok to ignore this compile error
console.log('my code');
```

- 【必要】禁止使用 <Strong>// tslint:&lt;rule-flag&gt;</Strong> 等类似的注释 [@typescript-eslint/ban-tslint-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md?file=ban-tslint-comment.md)

tslint 已经被废弃，对应的指令注释也不应再出现。

```ts
// bad
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
```

- 【推荐】如果类的属性是一个字面量，则推荐使用只读属性 <Strong>readonly</Strong> 而不是 <Strong>getter</Strong> [@typescript-eslint/class-literal-property-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md?file=class-literal-property-style.md)

类上所有返回「字面量」的 <Strong>getter</Strong> 方法，都推荐使用 <Strong>readonly</Strong> 修饰符来代替，字面量包含字符串、模板字符串、数字、bigint、正则和 null。

> 说明：在一些特殊场景，编写代码的最终用户是 JavaScript 开发者时，可以使用 getter 来保证字段无法被重新定义和覆盖，因为 readonly 修饰符只作用于 TypeScript 编译阶段。

```ts
// bad
class Mx {
  public static get myField1() {
    return 1;
  }
  private get ['myField2']() {
    return 'hello world';
  }
}

// good
class Mx {
  public readonly myField1 = 1;
  public readonly myField2 = [1, 2, 3]; // 非字面量
  private readonly ['myField3'] = 'hello world';
  public get myField4() {
    return `hello from ${window.location.href}`;
  }
}
```

- 【必要】类型断言必须使用 <Strong>as Type</Strong> [@typescript-eslint/consistent-type-assertions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md?file=consistent-type-assertions.md)

类型断言（type assertiions）也可称作类型转换（type casting），本质上是对 TypeScript 类型系统的人为干预：

（1）强制对类型的断言统一使用 <Strong>as Type</Strong> 风格而非 <Strong>&lt;Type&gt;</Strong> ，后者容易与 <Strong>JSX</Strong> 产生混淆。

（2）对象字面量禁止类型断言，断言成 any 除外，对象字面量应该直接声明。

> TypeScript 3.4 中引入的 const 断言在本规则中不受约束，<Strong>let x = 'hello' as const;</Strong> 和 <Strong>let x = &lt;const&gt;'hello';</Strong> 都是允许的。

```ts
// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;
// bad
const x = { ... } as T;
const y = { ... } as object;

// good
const x: T = { ... };
const y = { ... } as any;
const z = { ... } as unknown;
```

- 【推荐】优先使用 <Strong>interface</Strong> 定义类型 [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md?file=consistent-type-definitions.md)

interface 支持 <Strong>extend</Strong>/<Strong>implement</Strong>/<Strong>union</Strong> 等等类型能力，同时也可以用于描述普通对象。

```ts
// bad
type T = { x: number };

// good
type T = string;
type Foo = string | {};
interface T {
  x: number;
}
```

- 【推荐】设置类成员的可访问性 [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md?file=explicit-member-accessibility.md)

将非公开成员的可访问性设置为「私有」，可以增强代码可理解性，同时也能避免一些非法调用，公开的成员可省略 <Strong>public</Strong> 修饰符。

```ts
// bad
class Foo {
  static foo = 'foo';
  static getFoo() {
    return Foo.foo;
  }
  constructor() {}
  bar = 'bar';
  getBar() {}
  get baz() {
    return 'baz';
  }
  set baz(value) {
    console.log(value);
  }
}

// good
class Foo {
  private static foo = 'foo';
  public static getFoo() {
    return Foo.foo;
  }
  public constructor() {}
  protected bar = 'bar';
  public getBar() {}
  public get baz() {
    return 'baz';
  }
  public set baz(value) {
    console.log(value);
  }
}
```

- 【必要】<Strong>interface</Strong>/<Strong>type</Strong> 类型中使用一致的成员分隔符 <Strong>;</Strong> [@typescript-eslint/member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md?file=member-delimiter-style.md)

```ts
// bad: comma style(JSON style)
interface Foo {
  name: string,
  greet(): void,
}

type Bar = {
  name: string,
  greet(): void,
};

// bad: line break style
interface Foo {
  name: string
  greet(): void
}

type Bar = {
  name: string
  greet(): void
};

// good
interface Foo {
  name: string;
  greet(): void;
}

type Bar = {
  name: string;
  greet(): void;
};
```

- 【推荐】类的成员应按照固定的先后顺序排列 [@typescript-eslint/member-ordering](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md?file=member-ordering.md)

（1）类的静态方法 / 属性（<Strong>static</Strong>）优先于实例的方法 / 属性（<Strong>instance</Strong>）

（2）属性（<Strong>field</Strong>）优先于构造函数（<Strong>constructor</Strong>），优先于方法（<Strong>method</Strong>）

（3）公开的成员（<Strong>public</Strong>）优先于受保护的成员（<Strong>protected</Strong>），优先于私有的成员（<Strong>private</Strong>）

```ts
// good
class Foo {
  public static foo1 = 'foo1';
  protected static foo2 = 'foo2';
  private static foo3 = 'foo3';
  public static getFoo1() {}
  protected static getFoo2() {}
  private static getFoo3() {
    return Foo.foo3;
  }
  public bar1 = 'bar1';
  protected bar2 = 'bar2';
  private bar3 = 'bar3';
  public constructor() {
    console.log(Foo.getFoo3());
    console.log(this.getBar3());
  }
  public getBar1() {}
  protected getBar2() {}
  private getBar3() {
    return this.bar3;
  }
}
```

- 【推荐】接口中的方法使用属性的方式定义 [@typescript-eslint/method-signature-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md?file=method-signature-style.md)

使用属性去定义接口中的方法，可以获得更严格的检查

```ts
// bad
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}

// good
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// 属性方法实现重载
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
```

- 【推荐】禁止使用容易混淆的非空断言 [@typescript-eslint/no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md?file=no-confusing-non-null-assertion.md)

在相等比较运算符（<Strong>==</Strong> 或 <Strong>===</Strong>）前使用非空断言（<Strong>!</Strong>）很容易和不等运算符（<Strong>!=</Strong> 或 <Strong>!==</Strong>）混淆，不建议使用。

```ts
interface Foo {
  bar?: string;
  num?: number;
}

// bad
const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == 'hello';
const isEqualsNum = 1 + foo.num! == 2;

// good
const foo: Foo = getFoo();
const isEqualsBar = foo.bar == 'hello';
const isEqualsNum = (1 + foo.num!) == 2;
```

- 【推荐】避免定义空的接口类型 [@typescript-eslint/no-empty-interface](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md?file=no-empty-interface.md)

空的接口类型等效于空对象，若它只继承另一个接口类型，那么该类型与被继承的类型等效。在代码中应减少定义无意义的接口类型。

```ts
// bad
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
interface Bar extends Foo {}

// an interface with an empty list of supertypes
interface Baz {}

// good
// an interface with any number of members
interface Foo {
  name: string;
}

// same as above
interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of a union type.
interface Baz extends Foo, Bar {}
```

- 【推荐】初始化为 <Strong>number/string/boolean</Strong> 的变量或参数应避免显式的类型声明 [@typescript-eslint/no-inferrable-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md?file=no-inferrable-types.md)

对于容易类型推倒出的变量、参数，再次的显式声明类型会带来代码冗余。

```ts
// bad
const foo: number = 1;
const bar: string = '';
class Foo {
  prop: number = 5;
}
function fn(a: number = 5, b: boolean = true) {}

// good
const foo = 1;
const bar = '';
class Foo {
  prop = 5;
}
function fn(a = 5, b = true) {}
```

- 【必要】禁止无意义的 <Strong>void</Strong> 类型 [@typescript-eslint/no-invalid-void-type](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md?file=no-invalid-void-type.md)

禁止在返回类型或泛型类型参数之外使用 <Strong>void</Strong> 类型，而且在返回类型中不应再与其他类型做联合或交叉。

<Strong>void</Strong> 类型代表「无」或函数「不返回任何值」，隐式未定义类型代表函数返回「未定义的值 <Strong>undefined</Strong>」，所以 <Strong>void</Strong> 类型无法与除了 <Strong>never</Strong> 外的其他类型做联合、交叉。

```ts
// bad
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));
function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}
logAndReturn<void>(undefined);
interface Interface {
  lambda: () => void;
  prop: void;
}
class MyClass {
  private readonly propName: void;
}

// good
type NoOp = () => void;
function noop(): void {}
let trulyUndefined = void 0;
async function promiseMeSomething(): Promise<void> {}
type stillVoid = void | never;
```

- 【必要】禁止使用 <Strong>namespace</Strong> 来定义命名空间 [@typescript-eslint/no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md?file=no-namespace.md)

自定义 TypeScript 模块（<Strong>module</Strong>）和命名空间（<Strong>namespace</Strong>）已经不再推荐使用，首选 <Strong>ES2015</Strong> 的模块语法来导入导出。此规则仍然允许定义外部的模块或命名空间。

```ts
// bad
module foo {}
namespace foo {}
  
// good
declare module 'foo' {}
declare module foo {}
declare namespace foo {}
declare global {
  namespace foo {}
}
declare module foo {
  namespace foo {}
}
```

- 【必要】禁止在 <Strong>optional chaining</Strong> 之后使用 <Strong>non-null</Strong> 断言 [@typescript-eslint/no-non-null-asserted-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md?file=no-non-null-asserted-optional-chain.md)

<Strong>optional chaining</Strong> 被设计为返回 <Strong>undefined</Strong>，在之后使用非空断言是错误的，会引入严重的类型安全问题。

```ts
// bad
foo?.bar!;
foo?.bar!.baz;
foo?.bar()!;
foo?.bar!();
foo?.bar!().baz;

// good
foo?.bar;
(foo?.bar).baz;
foo?.bar();
foo?.bar();
foo?.bar().baz;

// 如果您使用的是 TS3.9 或更高版本，则以下代码也是正确的
foo?.bar!.baz;
foo?.bar!();
foo?.bar!().baz;
```

- 【推荐】使用 ES2015 import 语法引入模块 [@typescript-eslint/no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md?file=no-require-imports.md)

```ts
// bad
const fs = require('fs');

// good
import * as fs from 'fs';
```

- 【推荐】不建议将 <Strong>this</Strong> 赋值给其他变量 [@typescript-eslint/no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md?file=no-this-alias.md)

通过变量赋值为 <Strong>this</Strong> 的方式来管理函数作用域不是我们推荐的最佳实践，应使用箭头函数保留函数作用域。此规则中允许对 <Strong>this</Strong> 的解构赋值。

```ts
// bad
function foo() {
  const self = this;
  setTimeout(function () {
    self.doWork();
  });
}

// good
function foo() {
  setTimeout(() => {
    this.doWork();
  });
}
```

- 【推荐】当变量的值与类型声明相等时，优先使用 <Strong>as const</Strong> [@typescript-eslint/prefer-as-const](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md?file=prefer-as-const.md)

```ts
// bad
let bar: 2 = 2;
let foo = <'bar'>'bar';
let foo = { bar: 'baz' as 'baz' };

// good
let foo = 'bar';
let foo = 'bar' as const;
let foo: 'bar' = 'bar' as const;
let bar = 'bar' as string;
let foo = <string>'bar';
let foo = { bar: 'baz' };
```

- 【必要】禁止使用 <Strong>module</Strong> 来定义命名空间 [@typescript-eslint/prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md?file=prefer-namespace-keyword.md)

module 已经成为 JS 语言的关键字，应避免 TypeScript 模块与 ES2015 模块混淆。<Strong>declare module</Strong> 不做限制。

```ts
// bad
module Foo {}

// good
declare module Foo {}
declare namespace Foo {}
```

- 【必要】字符串字面量使用单引号包裹 [@typescript-eslint/quotes](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md?file=quotes.md)

```ts
// bad
const foo = "bar";

// good
const foo = 'bar';
```

- 【推荐】 加号 <Strong>+</Strong> 连接的两侧同为数字或同为字符串 [@typescript-eslint/restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md?file=restrict-plus-operands.md)

数字与字符串的连接往往会导致一些预期外的问题。

```ts
// bad
var foo = '5.5' + 5;
var foo = 1n + 1;

// good
var foo = parseInt('5.5', 10) + 10;
var foo = 1n + 1n;
```

- 【必要】禁止使用三斜杠语法 <Strong>///</Strong> 导入文件 [@typescript-eslint/triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md?file=triple-slash-reference.md)

三斜杠语法已经被废弃，声明文件（d.ts）以外禁止使用。

```ts
// bad
/// <reference path="./my-module" />

// good
import myModule from './my-module';
```

- 【必要】类型声明时应正确添加空格间距 [@typescript-eslint/triple-slash-reference](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md?file=triple-slash-reference.md)

TypeScript 类型声明周围添加合适的间距可以有效的提升代码可读性，我们约定：

（1）冒号前无空格，冒号后保留一个空格

（2）箭头前后都保留一个空格

```ts
// bad
let foo:string = 'bar';
let foo :string = 'bar';
let foo : string = 'bar';

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
  name:string;
}

class Foo {
  name :string;
}

class Foo {
  name : string;
}

type Foo = ()=> {};

// good
let foo: string = 'bar';

function foo(): string {}

class Foo {
  name: string;
}

type Foo = () => {};
```

- 【必要】<Strong>interface</Strong> 和 <Strong>type</Strong> 定义时必须声明成员的类型 [@typescript-eslint/typedef](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md?file=typedef.md)

```ts
// bad
type Members = {
  member;
  otherMember;
};

// good
type Members = {
  member: boolean;
  otherMember: string;
};
```

- 【推荐】定义函数时，优先使用参数的联合类型而不是函数的类型重载 [@typescript-eslint/unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md?file=unified-signatures.md)

```ts
// bad
function f(x: number): void;
function f(x: string): void;
f(): void;
f(...x: number[]): void;

// good
function f(x: number | string): void;
function f(x?: ...number[]): void;
```

## 配套工具

[eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)：本规约配套的 [ESLint](https://eslint.org/) 规则包，可使用 <Strong>eslint-config-ali/typescript</Strong> 或 <Strong>eslint-config-ali/typescript/xx</Strong> 引入本文介绍的规则

