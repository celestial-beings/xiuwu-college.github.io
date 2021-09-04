# React编码规范

## 编码风格

### 缩进

【强制】JSX 语法使用 2 个空格缩进。eslint: [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md?file=jsx-indent.md) [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md?file=jsx-indent-props.md) [react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md?file=jsx-closing-tag-location.md)

对于 JSX 语法，遵循与 JS 规约和 HTML 规约一致的 2 个空格缩进，不要使用 4 空格或 tab 缩进：

```jsx
// bad
<Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
>
    <Quux />
</Foo>

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```

### 空格

- 【强制】自闭合标签的斜线前有且仅有一个空格。eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces) [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md?file=jsx-tag-spacing.md)

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- 【强制】JSX 行内属性之间仅有一个空格。eslint: [react/jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md?file=jsx-props-no-multi-spaces.md)

同一行中标签和属性之间、属性之间只有一个空格。

```js
// bad
<App  spacy />
<App too  spacy />

// good
<App cozy />
<App very cozy />
```

- 【强制】JSX 属性的大括号内部两侧无空格。eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md?file=jsx-curly-spacing.md)

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

- 【强制】不要在 JSX 属性的等号两边加空格。eslint: jsx-equals-spacing

```jsx
// bad
<Hello name = {firstname} />;

// good
<Hello name={firstname} />;
```

### 引号

- 【强制】JSX 属性使用双引号，不要使用单引号。eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)

为什么？HTML 属性通常使用双引号而不是单引号，因此 JSX 属性沿用了这种约定。 其他 JS 使用单引号。

```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 小括号

- 【强制】多行的 JSX 标签需用小括号包裹。eslint: [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md?file=jsx-wrap-multilines.md)

```jsx
// bad
render() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good - 单行的 jsx 无需加圆括号
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

### 标签

- 【强制】无子元素的标签需写成自闭合标签。eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md?file=self-closing-comp.md)

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- 【强制】标签属性的换行。eslint: [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md?file=jsx-max-props-per-line.md) [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md?file=jsx-first-prop-new-line.md)

对 JSX 标签属性的换行，遵循以下规则：

（1）标签名和它的属性可以写在一行，前提是不超过单行最大 100 字符数的限制

（2）如果标签有多个属性，且存在换行，则每个属性都需要换行独占一行

```jsx
// bad - 属性应全部换行，或全部跟组件名写在一行
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// good - 组件名和属性可以写在一行，前提是不超过单行最大字符限制
<Foo bar="bar" />

// bad
<Hello foo={{
    }}
    bar />

// good
<Hello foo={{
}} />

<Hello
    foo={{
    }}
    bar
/>
```

- 【强制】标签的属性有多行时，结束标签需另起一行。eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md?file=jsx-closing-bracket-location.md)

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

- 【强制】禁止在有子节点的组件或 DOM 元素中使用 <Strong>dangerouslySetInnerHTML</Strong> 属性。eslint: [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md?file=no-danger-with-children.md)

```jsx
// bad
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>

// good
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />

<div>
  Children
</div>

<Hello>
  Children
</Hello>
```

- 【强制】HTML 自闭标签不能有子节点。eslint: [react/void-dom-elements-no-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md?file=void-dom-elements-no-children.md)

HTML 自闭标签，比如 <Strong>img</Strong>，<Strong>br</Strong>，<Strong>hr</Strong>，被统称为空 DOM 元素，不能给他们定义子节点。

```jsx
// bad
<br>Children</br>
<br dangerouslySetInnerHTML={{ __html: 'HTML' }} />

// good
<div>Children</div>
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
```

- 【推荐】不要使用危险属性。eslint: [react/no-danger](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md?file=no-danger.md)

React中的危险属性是指那些已知会引起应用程序漏洞的属性。这些属性命名为 <Strong>dangerouslyXyz</Strong> 已经清楚地表明它们是危险的，应该尽量避免使用。[详细文档](https://reactjs.org/docs/dom-elements.html)

```jsx
// bad
<div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;

// good
<div>Hello World</div>;
```

- 【强制】JSX 语句的文本节点中不要使用注释字符串（例如，以<Strong>//</Strong>或<Strong>/ *</Strong>开头）。eslint: [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md?file=jsx-no-comment-textnodes.md)

```jsx
// bad
class Hello extends React.Component {
  render() {
    return (
      <div>// empty div</div>
    );
  }
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        /* empty div */
      </div>
    );
  }
};

// good
class Hello extends React.Component {
  render() {
    return <div>{/* empty div */}</div>;
  }
};

class Hello extends React.Component {
  render() {
    return <div /* empty div */></div>;
  }
};

class Hello extends React.Component {
  render() {
    return <div className={'foo' /* temp class */}></div></div>;
  }
};
```

- 【强制】标签中禁止出现无意义字符，比如 <Strong>&gt;</Strong> <Strong>"</Strong> <Strong>}</Strong> <Strong>'</Strong>。eslint: [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md?file=no-unescaped-entities.md)

<Strong>&gt;</Strong> 可用 <Strong>\&gt;</Strong> 替代

<Strong>"</Strong> 可用 <Strong>\&quot;</Strong>，<Strong>\&ldquo;</Strong>， <Strong>\&#34;</Strong> 或者 <Strong>\&rdquo;</Strong> 替代

<Strong>'</Strong> 可用 <Strong>\&apos;</Strong>，<Strong>\&lsquo;</Strong>，<Strong>\&#39;</Strong> 或者 <Stron>\&rsquo;</Stron> 替代

<Strong>}</Strong> 可用 <Strong>\&#125;</Strong> 替代

或者写在表达式里，比如 <Strong>&lt;div&gt;{'&gt;'}&lt;/div&gt;</Strong>

```jsx
// bad
<MyComponent
  a="b">  {/* oops! */}
  c="d"
  Intended body text
</MyComponent>

// good
<div> &gt; </div>
<div> {'>'} </div>
```

## 语言特性

### 基本

- 【参考】文件中包含 React，必须使用 React 相关变量。eslint: [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md?file=jsx-uses-react.md)

```jsx
// bad
var React = require('react');

// nothing to do with React
var React = require('react');

var Hello = <div>Hello {this.props.name}</div>;

// good
var React = require('react');

var Hello = <div>Hello {this.props.name}</div>;
/** @jsx Foo */
var Foo = require('foo');

var Hello = <div>Hello {this.props.name}</div>;
```

- 【强制】不要使用未声明的组件。eslint: [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md?file=jsx-no-undef.md) [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md?file=jsx-uses-vars.md)

不允许没有引用组件就直接使用，也可能是组件名拼写错误。

```jsx
// bad
<Hello name="John" />;

// good
import Hello from './Hello';

<Hello name="John" />;
```

- 【强制】每个文件只包含一个 React 组件。eslint: [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md?file=no-multi-comp.md)

但是可以包含多个[函数组件](https://reactjs.org/docs/components-and-props.html?#function-and-class-components)。

- 【强制】不要在函数组件中使用 <Strong>this</Strong>。eslint: [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md?file=no-this-in-sfc.md)

```jsx
// bad
function Foo(props, context) {
  return (
    <div>
      {this.context.foo ? this.props.bar : ''}
    </div>
  );
}

// good
function Foo(props, context) {
  return (
    <div>
      {context.foo ?props.bar : ''}
    </div>
  );
}
```

- 【强制】使用 ES6 class 创建组件 ，而不是 [createReactClass](https://reactjs.org/docs/react-without-es6.html) 。eslint: [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md?file=prefer-es6-class.md)

```jsx
// bad
const Listing = createReactClass({
 // ...
 render() {
   return <div>{this.state.hello}</div>;
 }
});

// good
class Listing extends React.Component {
 // ...
 render() {
   return <div>{this.state.hello}</div>;
 }
}
```

- 【参考】如果组件没有内部状态或 <Strong>refs</Strong> ，应使用函数组件，而不是类组件。eslint: [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md?file=prefer-stateless-function.md)

```jsx
// bad
class Listing extends React.Component {  
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

- 【强制】不要使用 <Strong>React.createElement</Strong>，除非你不是用 JSX 文件初始化应用程序。

### 方法

- 【推荐】不要在 JSX 属性中使用 <Strong>.bind()</Strong>。eslint: [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md?file=jsx-no-bind.md)

这不利于组件性能，每次 render 都会创建一个新的函数。

有 2 种替代方案：

（1）在 <Strong>constructor</Strong> 中绑定事件处理函数

（2）使用 react 的 [property initializers](https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding) 特性或 [ES7 autobind decorator](https://www.npmjs.com/package/core-decorators#autobind)

```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good - 在 constructor 中绑定事件处理函数
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}

// good - 使用 react 的 property initializers 特性
class extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickDiv = () => {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

- 【强制】render 方法必须要有返回值。eslint: [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md?file=require-render-return.md)

```jsx
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```

- 【强制】禁止使用 <Strong>ReactDOM.render</Strong> 的返回值。eslint: [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md?file=no-render-return-value.md)

render()返回 ReactComponent 实例的引用。然而，应该避免使用这个返回值，因为在某些情况下，React 的未来版本中 render 方法可能会异步执行。如果需要引用 ReactComponent 实例，根元素需要增加 ref 回调。

```jsx
// bad
const inst = ReactDOM.render(<App />, document.body);
doSomethingWithInst(inst);

// good
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
```

- 【强制】在扩展 React.PureComponent 时禁止使用 <Strong>shouldComponentUpdate</Strong>。eslint: [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md?file=no-redundant-should-component-update.md)

定义 React.PureComponent 扩展组件时使用 <Strong>shouldComponentUpdate</Strong> 虽然有效，但是扩展 PureComponent 变得毫无意义。

```jsx
// bad
class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
}

function Bar() {
  return class Baz extends React.PureComponent {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Groovy!</div>
    }
  }
}

// good
class Foo extends React.Component {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
}

function Bar() {
  return class Baz extends React.Component {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Groovy!</div>
    }
  }
}

class Qux extends React.PureComponent {
  render() {
    return <div>Tubular!</div>
  }
}
```

- 【强制】禁止使用已经废弃的方法。eslint: [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md?file=no-deprecated.md)

随着React版本升级，有些方法逐渐被弃用。

```jsx
// bad
React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

const propTypes = {
  foo: PropTypes.bar,
};

//Any factories under React.DOM
React.DOM.div();

import React, { PropTypes } from 'react';

class Foo extends React.Component {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
  // ...
}

class Foo extends React.PureComponent {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
  // ...
}

var Foo = createReactClass({
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUpdate: function() {},
  // ...
})

// good
ReactDOM.render(<MyComponent />, root);

// When [1, {"react": "0.13.0"}]
ReactDOM.findDOMNode(this.refs.foo);

import { PropTypes } from 'prop-types';

class Foo {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
}
```

- 【强制】不要使用 <Strong>findDOMNode</Strong>。eslint: [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md?file=no-find-dom-node.md)

[严格模式下已经弃用 findDOMNode](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)。

```jsx
// bad
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />
  }
}

// good
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node} />
  }
}
```

- 【强制】不要使用 <Strong>componentWillMount</Strong>、<Strong>componentWillReceiveProps</Strong>、<Strong>componentWillUpdate</Strong>。

不要再使用 <Strong>componentWillMount</Strong> 、<Strong>componentWillReceiveProps</Strong>、<Strong>componentWillUpdate</Strong>。使用这些生命周期方法通常会导致错误和不一致，因此React 计划在17版本删掉这些方法。

（1）<Strong>componentWillMount()</Strong> 可以用 <Strong>constructor()</Strong> 或 <Strong>componentDidMount()</Strong> 替代；

（2）<Strong>componentWillReceiveProps()</Strong> 可以用 <Strong>componentDidUpdate()</Strong> 或其他方式替换；

（3）<Strong>componentWillUpdate()</Strong> 可以用 <Strong>componentDidUpdate()</Strong> 替换或者把逻辑写在 <Strong>getSnapshotBeforeUpdate()</Strong> 中。

使用[rename-unsafe-lifecycles codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)自动为不推荐使用的生命周期钩子添加“UNSAFE_”前缀。转化为

（1）<Strong>UNSAFE_componentWillMount()</Strong>

（2）<Strong>UNSAFE_componentWillReceiveProps()</Strong>

（3）<Strong>UNSAFE_componentWillUpdate()</Strong>

- 【推荐】不要在 <Strong>componentDidMount</Strong>、<Strong>componentDidUpdate</Strong> 使用 <Strong>setState</Strong>。eslint: [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md?file=no-did-update-set-state.md) [react/no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md?file=no-did-mount-set-state.md)

在组件加载完毕后或者在组件更新后更新状态将触发第二次 render() 调用，并可能导致属性/布局抖动。

```jsx
// bad
class Hello extends React.Component {
  componentDidMount() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  componentDidUpdate() {
   this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
};

// good
class Hello extends React.Component {
  componentDidMount() {
    this.onMount(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  }

  componentDidUpdate() {
    this.props.onUpdate();
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};

class Hello extends React.Component {
  componentDidUpdate() {
    this.onUpdate(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};
```

- 【强制】不要在 <Strong>componentWillUpdate</Strong> 内改变 <Strong>state</Strong> 值。eslint: [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md?file=no-will-update-set-state.md)

首先，不要再使用 <Strong>componentWillUpdate</Strong>，[React 未来在17版本计划删掉 componentWillUpdate](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)。通常可以用 <Strong>componentDidUpdate()</Strong> 替代。使用[rename-unsafe-lifecycles codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)自动更新组件。

不要在 <Strong>componentWillUpdate</Strong> 调用 <Strong>this.setState()</Strong>。若你需要更新状态响应属性的变更，使用 [getDerivedStateFromProps()](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops) 代替。在 <Strong>componentWillUpdate</Strong> 中改变 <Strong>state</Strong> 的值可能会引起组件的不确定状态。

```jsx
// bad
class Hello extends React.Component {
  componentWillUpdate() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
};

// good
class Hello extends React.Component {
  componentWillUpdate() {
    this.props.prepareHandler();
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};

class Hello extends React.Component {
  componentWillUpdate() {
    this.prepareHandler(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};
```

### Props

- 【强制】采用小驼峰风格命名 <Strong>prop</Strong> 。eslint: [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md?file=no-unknown-property.md)

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

- 【强制】声明的 <Strong>prop</Strong> 必须被使用。eslint: [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md?file=no-unused-prop-types.md)

声明而未使用的 <Strong>prop</Strong> 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。

```jsx
// bad
var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string
  },
  render: function() {
    return <div>Hello Bob</div>;
  }
});

var Hello = createReactClass({
  propTypes: {
    firstname: PropTypes.string.isRequired,
    middlename: PropTypes.string.isRequired, // middlename is never used below
    lastname: PropTypes.string.isRequired
  },
  render: function() {
    return <div>Hello {this.props.firstname} {this.props.lastname}</div>;
  }
});

// good
var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

- 【参考】 <Strong>props</Strong>，<Strong>state</Strong> 优先使用解构赋值。eslint: [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md?file=destructuring-assignment.md)


```jsx
// bad
const MyComponent = (props) => {
  return (<div id={props.id} />)
};

// good
const MyComponent = ({id}) => {
  return (<div id={id} />)
};

const MyComponent = (props, context) => {
  const { id } = props;
  return (<div id={id} />)
};
```

- 【强制】<Strong>prop</Strong> 值为 <Strong>true</Strong> 时，可以省略它的值。eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md?file=jsx-boolean-value.md)

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>
```

- 【推荐】<Strong>prop</Strong> 需要 <Strong>propTypes</Strong> 验证。eslint: [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md?file=prop-types.md)

<Strong>PropTypes</Strong> 验证接收到的数据从而提高组件的可重用性。如果其他开发传入了不正确数据类型，可以及时警告。

```jsx
// bad
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// good
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

- 【推荐】不要使用模糊的类型检查器。eslint: [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md?file=forbid-prop-types.md)

不要使用模糊的类型验证，比如 <Strong>any</Strong>, <Strong>array</Strong>, <Strong>object</Strong>。它们可以用其他明确的类型代替。<Strong>any</Strong>可以替换为任意类型，<Strong>array</Strong> 和 <Strong>object</Strong> 可以分别替换为 <Strong>arrayOf</Strong> 和 <Strong>shape</Strong>。

```jsx
// bad
class MyComponent extends React.Component {
  ...
}

MyComponent.propTypes = {
  // 任意类型的数据
  optionalAny: PropTypes.any,
  // 一个未指定元素类型的数组
  optionalArray: PropTypes.array,
  // 一个未指定属性类型的对象
  optionalObject: PropTypes.object
};

// good
class MyComponent extends React.Component {
  ...
}

MyComponent.propTypes = {
  // 指明待验证数据的特性类型，确保接收的数据是有效的
  optionalAny: PropTypes.string,
  requiredAny: PropTypes.any.isRequired,
  // 一个指定了元素类型的数组
  optionalArray: PropTypes.arrayOf(PropTypes.number),
  // 一个指定了属性类型的对象
  optionalObject: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
};
```

- 【参考】属性需要指定 <Strong>defaultProps</Strong>，除了 <Strong>isRequired</Strong> 的属性。eslint: [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md?file=require-default-props.md)

```jsx
// bad
function MyStatelessComponent({ foo, bar }) {
  return <div>{foo}{bar}</div>;
}
MyStatelessComponent.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
};

// good
function MyStatelessComponent({ foo, bar }) {
  return <div>{foo}{bar}</div>;
}
MyStatelessComponent.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
};
MyStatelessComponent.defaultProps = {
  bar: '',
};
```

- 【强制】如果属性有 <Strong>isRequired</Strong> 类型检查，不要在 <Strong>defaultProps</Strong> 内对其赋值。eslint: [react/default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md?file=default-props-match-prop-types.md)

<Strong>propTypes</Strong> 类型检查发生在 <Strong>defaultProps</Strong> 解析之后，如果在 <Strong>defaultProps</Strong> 赋值，<Strong>isRequired</Strong> 类型检查没有实际意义。

```jsx
// bad
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};

MyStatelessComponent.defaultProps = {
  foo: "foo"
};

// good
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};

MyStatelessComponent.defaultProps = {
    bar: 'some default'
};
```

- 【推荐】不要用数组的索引值作为 <Strong>map</Strong> 生成元素的 <Strong>key</Strong>。eslint: [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md?file=no-array-index-key.md)

为什么？React 使用 key 来标识哪些项已更改，已添加或已删除， [key 应该始终稳定](https://reactjs.org/docs/lists-and-keys.html#keys)。使用不稳定的 ID 是一种反模式，因为它不能唯一标识元素。如果数组重新排序或将元素添加到数组的开头，可能会更改索引导致不必要的渲染，对性能产生负面影响。

如果数组的顺序可能发生变化，我们不建议使用索引值作为 key。

```jsx
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

- 【强制】禁止将 <Strong>children</Strong> 作为属性名。eslint: [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md?file=no-children-prop.md)

使用 JSX 时，<Strong>children</Strong> 应嵌套在开始和结束标签之间。不使用JSX时，应将 <Strong>children</Strong> 作为附加参数传递给 <Strong>React.createElement</Strong>。

```jsx
// bad
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })

// good
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

- 【强制】不要声明重复的属性名。eslint: [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md?file=jsx-no-duplicate-props.md)

```jsx
// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
```

- 【强制】<Strong>style</Strong> 的属性值必须是一个对象。eslint: [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md?file=style-prop-object.md)

```jsx
// bad
<div style="color: 'red'" />
<div style={true} />
<Hello style={true} />

const styles = true;
<div style={styles} />

React.createElement("div", { style: "color: 'red'" });
React.createElement("div", { style: true });
React.createElement("Hello", { style: true });

const styles = true;
React.createElement("div", { style: styles });

// good
<div style={{ color: "red" }} />
<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />

React.createElement("div", { style: { color: 'red' }});
React.createElement("Hello", { style: { color: 'red' }});

const styles = { height: '100px' };
React.createElement("div", { style: styles });
```

- 【推荐】不要单独使用 <Strong>target='_blank'</Strong>。eslint: [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md?file=jsx-no-target-blank.md)

<Strong>target='_blank'</Strong> 常用于在新标签页打开。使用这个属性可能造成严重的安全问题。建议和 <Strong>rel='noreferrer noopener'</Strong> 一起使用。[详见](https://mathiasbynens.github.io/rel-noopener/)

```jsx
// bad
const Hello = <a target='_blank' href="http://example.com/"></a>
const Hello = <a target='_blank' href={ dynamicLink }></a>

// good
const Hello = <p target='_blank'></p>
const Hello = <a target='_blank' rel='noopener noreferrer' href="http://example.com"></a>
const Hello = <a target='_blank' href="relative/path/in/the/host"></a>
const Hello = <a target='_blank' href="/absolute/path/in/the/host"></a>
const Hello = <a></a>
```

### State

- 【强制】不要在 <Strong>setState</Strong> 中使用 <Strong>this.state</Strong>。eslint: [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md?file=no-access-state-in-setstate.md)

在 <Strong>setState</Strong> 中使用 <Strong>this.state</Strong> 可能导致错误，当两个 <Strong>state</Strong> 在同一个批处理中时，引用的是旧状态而不是新状态。 为避免这种情况，请在回调中使用 <Strong>preState</Strong> 作为第一个参数。

```jsx
// bad
function increment() {
  this.setState({value: this.state.value + 1});
}

// good
function increment() {
  this.setState(prevState => ({value: prevState.value + 1}));
}
```

bad case 中假设 value 为1，有两个 setState 操作在同一个批处理中执行，实际执行的是：

```jsx
setState({value: 1 + 1})
setState({value: 1 + 1})
```

good case 中 react 会以正确的更新后的状态调用参数。实际执行的是：

```jsx
setState({value: 1 + 1})
setState({value: 2 + 1})
```

- 【强制】声明的 <Strong>state</Strong> 必须被使用。eslint: [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md?file=no-unused-state.md)

声明而未使用的 <Strong>state</Strong> 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。

```jsx
// bad
class MyComponent extends React.Component {
  state = { foo: 0 };

  render() {
    return <SomeComponent />;
  }
}

var UnusedGetInitialStateTest = createReactClass({
  getInitialState: function() {
    return { foo: 0 };
  },
  render: function() {
    return <SomeComponent />;
  }
})

// good
class MyComponent extends React.Component {
  state = { foo: 0 };

  render() {
    return <SomeComponent foo={this.state.foo} />;
  }
}

var UnusedGetInitialStateTest = createReactClass({
  getInitialState: function() {
    return { foo: 0 };
  },
  render: function() {
    return <SomeComponent foo={this.state.foo} />;
  }
})
```

### Refs

- 【强制】使用 <Strong>ref</Strong> 回调函数或 <Strong>React.createRef()</Strong>，不要使用字符串。eslint: [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md?file=no-string-refs.md)

```jsx
// bad - 使用字符串
class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.inputRef.focus();
  }

  render() {
    return <input type="text" ref="inputRef" />;
  }
}

// good - 使用回调函数
class MyComponent extends React.Component {
  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    return <input type="text" ref={(ele) => { this.inputRef = ele; }} />;
  }
}

// good - 使用 React.createRef()，React V16 后版本支持
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
```

### 顺序

- 【参考】组件方法的排序规则。eslint: [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md?file=sort-comp.md)

React 组件内有声明周期方法、事件处理方法、render 方法等几类方法，指定这些方法按固定的顺序排序可以增强代码的一致性，方便查找和阅读。

我们推荐的方法排序如下：

可选的 <Strong>static</Strong> 方法
（1）<Strong>constructor</Strong>

（2）<Strong>getChildContext</Strong>

（3）<Strong>componentWillMount</Strong>

（4）<Strong>componentDidMount</Strong>

（5）<Strong>componentWillReceiveProps</Strong>

（6）<Strong>shouldComponentUpdate</Strong>

（7）<Strong>componentWillUpdate</Strong>

（8）<Strong>componentDidUpdate</Strong>

（9）<Strong>componentWillUnmount</Strong>

（10）clickHandlers 或 eventHandlers 比如 <Strong>onClickSubmit()</Strong> 或 <Strong>onChangeDescription()</Strong>

（11）<Strong>render</Strong> 的 getter 方法 比如 <Strong>getSelectReason()</Strong> 或 <Strong>getFooterContent()</Strong>

（12）可选的 render 方法 比如 <Strong>renderNavigation()</Strong> 或 <Strong>renderProfilePicture()</Strong>

（13）<Strong>render</Strong>

### Mixins

- 【强制】不要使用 <Strong>mixins</Strong>。

<Strong>Mixins</Strong> 引入了隐式依赖，可能导致命名冲突，并导致滚雪球式的复杂度。大多数使用 <Strong>mixin</Strong> 的场景都可以通过组件、高阶组件或工具模块以更好的方式完成。

## 命名

- 【强制】文件扩展名： 使用 <Strong>.jsx</Strong> 或 <Strong>.js</Strong> 作为 React 组件的文件扩展名。eslint: [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md?file=jsx-filename-extension.md)

- 【参考】文件名：使用大驼峰风格。例如：<Strong>ReservationCard.jsx</Strong>。

- 【推荐】组件名：组件命名、组件所在文件的命名、引用该组件时的引用名应保持一致。

例如，<Strong>ReservationCard</Strong> 组件所在文件命名为 <Strong>ReservationCard.jsx</Strong>，引用该组件时的引用名为 <Strong>ReservationCard</Strong>。

一个例外是，对于目录的根组件，需使用 <Strong>index.jsx</Strong> 作为文件名，引用该组件时直接用目录名作为引用名：

```jsx
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- 【强制】引用名：使用大驼峰风格命名引用的组件，使用小驼峰风格命名引用组件的实例。eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md?file=jsx-pascal-case.md)

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- 【推荐】高阶组件命名：将高阶组件名和传入组件名组合作为 <Strong>displayName</Strong>。

例如，高阶组件 <Strong>withFoo()</Strong> ，当传入组件 <Strong>Bar</Strong> 时，应该产生一个组件，应使用 <Strong>withFoo(Bar)</Strong> 作为生成组件的 <Strong>displayName</Strong>。

组件的 <Strong>displayName</Strong> 可被开发者工具和报错信息使用，这种组合的命名方式能清晰地表达高阶组件和被包裹组件的关系。

```jsx
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```

## Hooks

- 【强制】只在最顶层调用 <Strong>Hooks</Strong>，不要在循环、条件和嵌套函数中调用 <Strong>Hooks</Strong>。eslint: [rules of Hooks - only call Hooks at the top level](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)

```jsx
// bad - call Hooks inside conditions
function ComponentWithConditionalHook() {
  if (cond) {
    useConditionalHook();
  }
}

// bad - call Hooks inside loops
function ComponentWithHookInsideLoop() {
  while (cond) {
    useHookInsideLoop();
  }
}

// bad - call Hooks inside callback
function ComponentWithHookInsideCallback() {
  useEffect(() => {
    useHookInsideCallback();
  });
}

// good
function ComponentWithHook() {
  useHook();
}
```

- 【强制】<Strong>Hooks</Strong> 命名必须以 <Strong>use</Strong> 开头，小驼峰形式

```jsx
// bad
const customHook = () => {}

// good
const useCustomHook = () => {}
```

- 【强制】只在 React 函数组件和自定义 Hooks 中调用 Hooks，不能在普通的 JavaScript 函数中调用 Hooks。eslint: [rules of Hooks - only call Hooks from React functions](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)

```jsx
// bad - call Hooks inside class componennt
class ClassComponentWithHook extends React.Component {
  render() {
    React.useState();
  }
}

// bad - call Hooks inside normal function
function normalFunctionWithHook() {
  useHookInsideNormalFunction();
}

// good - call Hooks inside function component
function ComponentWithHook() {
  useHook();
}

// good - call Hooks inside custom Hooks
function useHookWithHook() {
  useHook();
}
```

- 【推荐】<Strong>useEffect</Strong> 及[类似 Hooks](https://github.com/facebook/react/blob/3c1a7ac87c5b4903aa0de02d11bd9ec2590ad598/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L1518) 需要声明所有依赖。eslint: exhaustive-deps

此规则在某些场景下可能过于严格，并且 ESLint autofix 可能会造成一些[问题](https://github.com/facebook/react/issues/16313)，因此需注意：

（1）升级 <Strong>eslint-plugin-react-hooks</Strong> 到 [2.4.0 版本及以上，因为 2.4.0 版本后该规则的 autofix 被默认禁用](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md#240)

（2）如果某些场景下此规则确实不适用，可以通过 ESLint 行注释手动禁用此规则，在行尾添加： <Strong>// eslint-disable-line react-hooks/exhaustive-deps</Strong>

```jsx
// bad
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, []);
}

// good
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, [local]);
}
```

## 无障碍

[无障碍丰富互联网应用规范（WAI-ARIA，简称 ARIA）](https://www.w3.org/TR/wai-aria/)是 W3C 发布的技术规范，定义了一组可用于元素的 HTML 特性，作为对 HTML 语义化的补充，让残障人士能更加便利的访问 Web 内容和使用 Web 应用。

本章节会涉及到一些 WAI-ARIA 规范中的术语：

（1）角色（role）：定义了元素的种类。如 <Strong>role="button"</Strong> 告诉屏幕阅读器这是一个按钮元素。

（2）属性（property）：通过给元素定义一些属性，让他们具备更多的语义。例如 <Strong>aria-required="true"</Strong> 意味着该元素在表单上是必填的。

（3）状态（state）：用于表达元素当前的条件的特殊属性，例如 <Strong>aria-disabled="true"</Strong>，屏幕阅读器就会禁止编辑这个表单元素。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 JavaScript。

[这篇文档](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)对 WAI-ARIA 规范的内容和使用做了初步介绍。

- 【推荐】<Strong>img</Strong> 标签应包含 <Strong>alt</Strong> 属性。eslint: [jsx-a11y/alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md?file=alt-text.md)

如果图片无需被无障碍阅读器识别(如作为 button 的 icon 使用)，你可以将 <Strong>alt</Strong> 属性写为空字符串

```jsx
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good - 图片无需被无障碍阅读器识别时
<button>
  <img src="icon.png" alt="" />
  Save
</button>
```

- 【推荐】img 标签的 alt 属性不要使用 <Strong>"image"</Strong>，<Strong>"photo"</Strong>，<Strong>"picture"</Strong> 之类的关键词。eslint: [jsx-a11y/img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md?file=img-redundant-alt.md)

屏幕阅读器已会将 <Strong>img</Strong> 元素识别成图片，再在 <Strong>alt</Strong> 中包含这类关键词没有意义。

```jsx
// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
```

- 【推荐】锚元素(即 <Strong>&lt;a&gt;</Strong> 元素)必须含有内容，且内容必须对屏幕阅读器可见(这里指内容不能通过设置 <Strong>aria-hidden</Strong> 属性隐藏)。eslint: [jsx-a11y/anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md?file=anchor-has-content.md)

```jsx
// bad - empty content
<a />

// bad - content not accessible to screen readers
<a><TextWrapper aria-hidden /></a>

// good
<a>Anchor Content!</a>
<a><TextWrapper /><a>
```

- 【推荐】禁止使用无效的 ARIA 属性，只能使用列在 [WAI-ARIA States and Properties spec](https://www.w3.org/TR/wai-aria/) 中的 <Strong>aria-*</Strong> 属性。eslint: [jsx-a11y/aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md?file=aria-props.md)

```jsx
// bad - Labeled using incorrectly spelled aria-labeledby
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">

// good - Labeled using correctly spelled aria-labelledby 
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">
```

- 【推荐】ARIA 属性、状态的值必须为有效值。eslint: [jsx-a11y/aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md?file=aria-proptypes.md)

```jsx
// bad - the aria-hidden state is of type true/false
<span aria-hidden="yes">foo</span>

// good
<span aria-hidden="true">foo</span>
```

- 【推荐】禁止特定元素包含 <Strong>role</Strong> 和 <Strong>aria-*</Strong> 属性。一些保留的 DOM 元素不支持设置 ARIA 角色或者属性，通常是因为这些元素是不可见的，例如 <Strong>meta</Strong>, <Strong>html</Strong>, <Strong>script</Strong>, <Strong>style</Strong>。eslint: [jsx-a11y/aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md?file=aria-unsupported-elements.md)

```jsx
// bad - the meta element should not be given any ARIA attributes
<meta charset="UTF-8" aria-hidden="false" />

// good
<meta charset="UTF-8" />
```

- 【推荐】仅使用有效的、非抽象的 ARIA roles，[了解更多](https://www.w3.org/TR/wai-aria/#roles_categorization)。eslint: [jsx-a11y/aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md?file=aria-role.md)

```jsx
// bad - not an ARIA role
<div role="datepicker" />

// bad - abstract ARIA role
<div role="range" />

// good
<div role="button" />
```

- 【推荐】有 ARIA role 的元素必须也声明该 <Strong>role</Strong> 需要的属性，[了解更多](https://www.w3.org/TR/wai-aria/#requiredState)。eslint: [jsx-a11y/role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md?file=role-has-required-aria-props.md)

```jsx
// bad - the checkbox role requires the aria-checked state
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>

// good - the checkbox role requires the aria-checked state
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
```

- 【推荐】强制拥有显式或隐式 role 的元素，只能含有该 role 支持的 <Strong>aria-*</Strong> 属性。eslint: [jsx-a11y/role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md?file=role-supports-aria-props.md)

一些元素会有隐式的 role ，譬如 <Strong>&lt;a href="#"&gt;</Strong> ，会被解析为 <Strong>role="link"</Strong>。很多 ARIA 属性只能在具有特定 role 的元素上使用

```jsx
// bad - the radio role does not support the aria-required property
<ul role="radiogroup" aria-labelledby="foo">
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul> 

// good - the radiogroup role does support the aria-required property
<ul role="radiogroup" aria-required aria-labelledby="foo">
  <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
```

- 【推荐】<Strong>&lt;iframe&gt;</Strong> 元素必须有一个唯一的 <Strong>title</Strong> 属性，表示其内容。eslint: [jsx-a11y/iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md?file=iframe-has-title.md)

```jsx
// bad
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />

// good
<iframe title="This is a unique title" />
```

- 【推荐】不要使用 <Strong>accessKey</Strong> 属性。<Strong>accessKey</Strong> 属性提供了为当前元素生成快捷键的方式，不过 <Strong>accessKey</Strong> 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突，所以不建议使用。eslint: [jsx-a11y/no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md?file=no-access-key.md)

```jsx
// bad
<div accessKey="h" />

// good
<div />
```

- 【推荐】禁止使用会造成视觉分散的元素。一些会引起视觉注意力分散的元素对视觉障碍的用户会造成问题，例如 <Strong>&lt;marquee&gt;</Strong> 和 <Strong>&lt;blink&gt;</Strong>。eslint: [jsx-a11y/no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md?file=no-distracting-elements.md)

```jsx
// bad
<marquee />
<blink />

// good
<div />
```

- 【推荐】scope 属性只能在 <Strong>&lt;th&gt;</Strong> 元素上使用，[了解更多](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#the_scope_attribute)。eslint: [jsx-a11y/scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md?file=scope.md)

```jsx
// bad 
<div scope />

// good
<th scope="col" />
```

## 参考资料

[React 官网](https://reactjs.org/docs/getting-started.html)

[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/)

[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

[MDN - 可访问性](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)
