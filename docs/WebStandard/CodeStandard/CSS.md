# CSS编码规范

CSS编码规范包括了CSS和一些预编译工具（Sass、Less），提供包括编码风格、最佳实践，相关规则可通过第三方工具（[stylelint](http://stylelint.docschina.org/)）进行统一配置使用。

## CSS

### 编码风格

![CSS编码风格](../../.vuepress/public/images/WebStandard/css-standard.svg)

- 【必要】所有声明都应该以分号结尾，不能省略。stylelint: [declaration-block-trailing-semicolon](http://stylelint.docschina.org/user-guide/rules/declaration-block-trailing-semicolon/)

虽然 CSS 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。

```css
/* bad */
.selector {
  margin-top: 10px;
  padding-left: 15px
}

/* good */
.selector {
  margin-top: 10px;
  padding-left: 15px;
}
```

- 【推荐】使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。stylelint: [indentation](http://stylelint.docschina.org/user-guide/rules/indentation/)

```css
/* bad */
.selector {
    padding-left: 15px;
}

/* good */
.selector {
  padding-left: 15px;
}
```

- 【推荐】选择器和 <Strong>{</Strong> 之间保留一个空格。stylelint: [block-opening-brace-space-before](http://stylelint.docschina.org/user-guide/rules/block-opening-brace-space-before/)

```css
/* bad */
.selector{
  padding-left: 15px;
}

/* good */
.selector {
  padding-left: 15px;
}
```

- 【推荐】属性名和 <Strong>:</Strong> 之前无空格，<Strong>:</Strong> 和属性值之间保留一个空格。stylelint: [declaration-colon-space-after](http://stylelint.docschina.org/user-guide/rules/declaration-colon-space-after/) [declaration-colon-space-before](http://stylelint.docschina.org/user-guide/rules/declaration-colon-space-before/)

```css
/* bad */
.selector {
  margin-top : 10px;
  padding-left:15px;
}

/* good */
.selector {
  margin-top: 10px;
  padding-left: 15px;
}
```

- 【推荐】<Strong>></Strong>、<Strong>+</Strong>、<Strong>~</Strong> 、<Strong>||</Strong> 等组合器前后各保留一个空格。stylelint: [selector-combinator-space-before](http://stylelint.docschina.org/user-guide/rules/selector-combinator-space-before/) [selector-combinator-space-after](http://stylelint.docschina.org/user-guide/rules/selector-combinator-space-after/)

```css
/* bad */
.selector>.children {
  padding-left: 15px;
}
.selector+.brother {
  padding-left: 15px;
}

/* good */
.selector > .children {
  padding-left: 15px;
}
.selector + .brother {
  padding-left: 15px;
}
```

- 【推荐】在使用 <Strong>,</Strong> 分隔的属性值中，<Strong>,</Strong> 之后保留一个空格。stylelint: [value-list-comma-space-after](http://stylelint.docschina.org/user-guide/rules/value-list-comma-space-after/)

```css
/* bad */
.selector {
  background-color: rgba(0,0,0,0.5);
  box-shadow: 0px 1px 2px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.5);
}

/* good */
.selector {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

- 【推荐】注释内容和注释符之间留有一个空格。stylelint: [comment-whitespace-inside](http://stylelint.docschina.org/user-guide/rules/comment-whitespace-inside/)

```css
/* bad */
.selector {
  /*comment*/
  /*  comment  */
  /**
   *comment
   */
  padding-left: 15px;
}

/* good */
.selector {
  /* comment */
  /**
   * comment
   */
  padding-left: 15px;
}
```

- 【推荐】声明块的右大括号 <Strong>}</Strong> 应单独成行。

```css
/* bad */
.selector {
  padding-left: 15px;}

/* good */
.selector {
  padding-left: 15px;
}
```

- 【推荐】属性声明应单独成行。stylelint: [declaration-block-single-line-max-declarations](http://stylelint.docschina.org/user-guide/rules/declaration-block-single-line-max-declarations/)

```css
/* bad */
.selector {
  padding-left: 15px;  margin-left: 10px;
}

/* good */
.selector {
  padding-left: 15px;
  margin-left: 10px;
}
```

- 【参考】使用多个选择器时，每个选择器应该单独成行。stylelint: [selector-list-comma-newline-after](http://stylelint.docschina.org/user-guide/rules/selector-list-comma-newline-after/)

```css
/* bad */
.selector, .selector-secondary, .selector-third {
  padding: 15px;
  margin-bottom: 15px;
}

/* good */
.selector,
.selector-secondary,
.selector-third {
  padding: 15px;
  margin-bottom: 15px;
}
```

- 【参考】声明块内只有一条语句时，也应该写成多行。

```css
/* bad */
.selector { padding-left: 15px; }

/* good */
.selector {
  padding-left: 15px;
}
```

- 【参考】注释行上方需留有一行空行，除非上一行是注释或块的顶部。stylelint: [comment-empty-line-before](http://stylelint.docschina.org/user-guide/rules/comment-empty-line-before/)

```css
/* bad */
.selector {

  /* comment */
  padding-left: 15px;
  /* comment */
  padding-right: 15px;
}

/* good */
.selector {
  /* comment */
  padding-left: 15px;

  /* comment */
  padding-right: 15px;
}
```

- 【参考】单行代码最多不要超过 100 个字符。 stylelint: [max-line-length](http://stylelint.docschina.org/user-guide/rules/max-line-length/) 除了以下两种情况：

（1）使用 <Strong>url()</Strong> 函数时

（2）CSS 属性值本身无法换行时，即属性值内无空格或逗号时

```css
/* bad */
background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.04, rgb(88, 94, 124)), color-stop(0.52, rgb(115, 123, 162)));

/* good */
background-image: -webkit-gradient(
  linear,
  left bottom,
  left top,
  color-stop(0.04, rgb(88, 94, 124)),
  color-stop(0.52, rgb(115, 123, 162))
);
```

### 选择器

- 【推荐】不要使用 id 选择器。stylelint: [selector-max-id](http://stylelint.docschina.org/user-guide/rules/selector-max-id/)

id 会带来过高的[选择器优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity?spm=a2o8t.11089562.0.0.20756654QinpUC)，使得后续很难进行样式覆盖（继而引发使用 <Strong>!important</Strong> 覆盖样式的恶性循环）。

```css
/* bad */
.normal {
  padding: 10px;
}
#special {
  padding: 15px;
}

/* good */
.normal {
  padding: 10px;
}
.normal.special {
  padding: 15px;
}
```

- 【参考】属性选择器的值始终用双引号包裹。stylelint: [selector-attribute-quotes](http://stylelint.docschina.org/user-guide/rules/selector-attribute-quotes/)

属性选择器的值的引号只有在[某些情况下](https://mathiasbynens.be/notes/unquoted-attribute-values?spm=a2o8t.11089562.0.0.20756654v6IFne#css)可以省略。

```css
/* bad */
input[type=text] {
  height: 20px;
}

/* good */
input[type="text"] {
  height: 20px;
}
```

-【参考】注意选择器性能。

使用 CSS 选择器时，应注意以下性能问题：

（1）使用 class 而不是原生元素标签

（2）减少在经常出现的组件中使用个别属性选择器（如 <Strong>[class^="..."]</Strong>）

（3）控制选择器的长度，每个组合选择器内的条目尽量不超过 3 个

### 属性和属性值

- 【强制】使用尽可能短的十六进制值。stylelint: [color-hex-length](http://stylelint.docschina.org/user-guide/rules/color-hex-length/)

```css
/* bad */
.selector {
  color: #ffffff;
}

/* good */
.selector {
  color: #fff;
}
```

- 【推荐】不要使用 <Strong>!important</Strong> 重写样式。

- 【推荐】十六进制值统一使用小写字母（小写字母更容易分辨）。stylelint: [color-hex-case](http://stylelint.docschina.org/user-guide/rules/color-hex-case/)

```css
/* bad */
.selector {
  color: #FEFEFE;
}

/* good */
.selector {
  color: #fefefe;
}
```

- 【推荐】长度值为 0 时，省略掉长度单位。stylelint: [length-zero-no-unit](http://stylelint.docschina.org/user-guide/rules/length-zero-no-unit/)

在 CSS 中，长度值为 0 时，它的单位是可选的（长度单位包括：<Strong>em</Strong>, <Strong>ex</Strong>, <Strong>ch</Strong>, <Strong>vw</Strong>, <Strong>vh</Strong>, <Strong>cm</Strong>, <Strong>mm</Strong>, <Strong>in</Strong>, <Strong>pt</Strong>, <Strong>pc</Strong>, <Strong>px</Strong>, <Strong>rem</Strong>, <Strong>vmin</Strong>, <Strong>vmax</Strong>）。省略长度单位可以使代码更简洁：

```css
/* bad */
.selector {
  margin-top: 0px;
  font-size: 0em;
}

/* good */
.selector {
  margin-top: 0;
  font-size: 0;
}
```

- 【参考】使用十六进制颜色值，不要使用 <Strong>rgb()</Strong> 和颜色关键字。stylelint: [color-named](http://stylelint.docschina.org/user-guide/rules/color-named/)

```css
/* bad */
.selector {
  background-color: rgb(99, 76, 217);
  border-color: grey;
  color: #333;
}

/* good */
.selector {
  background-color: #634cd9;
  border-color: #808080;
  color: #333;
}
```

- 【参考】保留小数点前的 0。stylelint: [number-leading-zero](http://stylelint.docschina.org/user-guide/rules/number-leading-zero/)

在 CSS 中，大于 -1 小于 1 的小数，小数点前的 0 可以省略：

```css
/* bad */
.selector {
  opacity: .5;
  left: -.5px;
}

/* good */
.selector {
  opacity: 0.5;
  left: -0.5px;
}
```

对于是否省略小数点前的 0，业界存在争议：

（1）省略 0 的好处是：代码更简洁，可以减少一个字符

（2）不省略的好处是：代码可读性更好、一致性更强

你可选择自己倾向的风格，在代码中风格统一即可，要么都省略，要么都保留。

我们推荐保留 0，因为当今很多 CSS 压缩工具会在压缩时帮我们去掉 0，不存在多占用一个字符的问题。保留 0 能增强代码的可读性和一致性。

- 【参考】属性声明的顺序。

相关联的属性声明最好写成一组，并按如下顺序排序：

（1）定位：如 <Strong>position</Strong>、<Strong>left</Strong>、<Strong>right</Strong>、<Strong>top</Strong>、<Strong>bottom</Strong>、<Strong>z-index</Strong>

（2）盒模型：如 <Strong>display</Strong>、<Strong>float</Strong>、<Strong>width</Strong>、<Strong>height</Strong>、<Strong>margin</Strong>、<Strong>padding</Strong>、<Strong>border</Strong>

（3）文字排版：如 <Strong>font</Strong>、<Strong>color</Strong>、<Strong>line-height</Strong>、<Strong>text-align</Strong>

（4）外观：如 <Strong>background</Strong>

（5）其他属性

「定位」和「盒模型」放在最前面，是因为它们决定了元素的布局、位置和尺寸。「定位」排在「盒模型」之前，是由于「定位」属性可以让元素脱离正常文本流，从而使「盒模型」属性失效。

除了「定位」和「盒模型」，其他属性都只在元素内部起作用，不会对前两类属性的结果产生影响，因此放在后面。

```css
.declaration-order {
  /* 定位 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 盒模型 */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  border: 1px solid #e5e5e5;

  /* 排版 */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* 外观 */
  background-color: #f5f5f5;

  /* 其他 */
  opacity: 1;
}
```

- 【参考】适时使用简写属性。stylelint: [declaration-block-no-shorthand-property-overrides](http://stylelint.docschina.org/user-guide/rules/declaration-block-no-shorthand-property-overrides/) [declaration-block-no-redundant-longhand-properties](http://stylelint.docschina.org/user-guide/rules/declaration-block-no-redundant-longhand-properties/)

常见的简写属性包括：

（1）<Strong>font</Strong>

（2）<Strong>background</Strong>

（3）<Strong>padding</Strong>

（4）<Strong>margin</Strong>

（5）<Strong>border</Strong>

（6）<Strong>border-radius</Strong>

使用简写属性时，需要显式地设置所有值。我们应该在真正需要设置所有值或大多数值时才使用简写属性。

如果只是想设置某一个属性，则不应该使用简写属性：

```css
/* bad */
.selector {
  margin: 0 0 10px;
}

/* good */
.selector {
  margin-bottom: 10px;
}
```

### 其他

- 【推荐】不要使用 CSS 的 <Strong>@import</Strong>。

与 <Strong>&lt;link&gt;</Strong> 相比, <Strong>@import</Strong> 更慢，增加了额外的页面请求，并可能引发其他的意想不到的问题。应该避免使用它们，而选择其他方案：

（1）使用多个 <Strong>&lt;link&gt;</Strong> 标签

（2）使用 CSS 预处理器，如 Sass 或 Less 将样式编译到一个文件中

（3）使用 Rails, Jekyll 或其他环境提供的功能，来合并 CSS 文件

```html
<!-- bad -->
<style>
  @import url("more.css");
</style>

<!-- good -->
<link rel="stylesheet" href="more.css">
```

## Sass 和 Less

> 对于 CSS 而言，可以在新项目中尝试放弃使用 Sass、Less 这样的处理器语言，因为：
> - 这些处理器语言是在一定历史条件下的产物，虽然这些产物在一定程度上提高开发者的开发效率，但不同的处理器语言也同时增加了项目的维护成本（特别是多人协作，多团队协作的时候）。
> - 更建议使用 PostCSS 处理器，它类似于 CSS 中的 Babel，不但具备 Sass 和 Less 的功能，而且社区繁荣，同时还可以根据自己的需求扩展相关的插件。
> - 随着 CSS 的一些新特性出现，Sass 和 Less 以往的优势也会慢慢消失。
 
- 【推荐】四则运算符两侧各保留一个空格：

```css
/* bad */
.selector {
  width: $default-width/2;
}

/* good */
.selector {
  width: $default-width / 2;
}
```

- 【推荐】<Strong>Mixin</Strong> 名称和括号 <Strong>()</Strong> 间无空格，在拥有多个参数的表达式中， <Strong>,</Strong> 之前无空格，<Strong>,</Strong> 之后保留一个空格：

```less
/* bad */
.selector {
  .size(30px,20px);
  .clearfix ();
}

/* good */
.selector {
  .size(30px, 20px);
  .clearfix();
}
```

- 【推荐】按如下顺序组织 Sass / Less 代码：

（1）<Strong>@import</Strong> 语句

（2）全局变量声明

（3）样式声明

```scss
@import 'common/theme.scss';

$color-red: #f0f0f0;

.selector {
  color: $color-red;
}
```

- 【推荐】同 class、id 的命名规则一致，在 Sass / Less 中，变量和 mixin 的命名规则为：

（1）全小写字母

（2）多个单词间用中划线（<Strong>-</Strong>）分割

```scss
// Sass 变量和 mixin
$my-variable: #f0f0f0;
@mixin my-mixin($property) {
  background: $property;
}
```

```less
// Less 变量和 mixin
@my-variable: #f0f0f0;
.my-mixin(@property) {
  background: @property;
}
```

- 【推荐】对于 Sass 和 Less，块内的属性声明按如下顺序排序：

（1）标准属性声明：除了 mixin 调用、extend 子级选择器的声明，其他属性声明的顺序与「属性声明的顺序」章节的规则一致

（2）mixin 调用：Sass 的 <Strong>@include</Strong> 声明、Less 的 mixin 调用

（3）嵌套的子级选择器：将嵌套的选择器放到块的末尾，并且在其上方保留一行空行

```scss
.btn {
  background: #ccc;
  font-weight: bold;
  @include transition(background 0.5s ease);

  .icon {
    margin-right: 10px;
  }
}
```

- 【推荐】嵌套选择器的深度不要超过 3 层，否则可能带来一些副作用：

（1）与 HTML 结构强耦合，难以复用

（2）过高的[选择器优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity?spm=a2o8t.11089562.0.0.207566543dwQCt)

```scss
.container {
  .header {
    .user-name {
      // STOP！不要再嵌套更深选择器
    }
  }
}
```

- 【推荐】可以使用双斜杠注释。但需要注意的是，编译为 CSS 后，代码中的双斜杠注释会被删除，而 <Strong>/* */</Strong> 会被保留。

```scss
// 单行注释
.selector-a {
  padding-left: 15px;
}

/*
 * 多行注释
 * 多行注释
 */
.selector-b {
  margin-left: 15px;
}
```

编译为 CSS 后，双斜杠注释会被删除：

```css
.selector-a {
  padding-left: 15px;
}

/*
 * 多行注释
 * 多行注释
 */
.selector-b {
  margin-left: 15px;
}
```

- 【推荐】使用 <Strong>Mixin</Strong> (@mixin 和 @include 指令) 来让代码遵循 DRY 原则（Don't Repeat Yourself）、增加抽象性和降低复杂度。

应避免使用 <Strong>@extend</Strong> 指令，它不够直观且具有潜在风险，尤其是在嵌套选择器中。即使继承的是顶层选择器，如果选择器的顺序发生变化，也可能引起问题。（比如，如果它们存在于其他文件，而加载顺序发生了变化）。

<Strong>Extend</Strong> 相比 <Strong>Mixin</Strong> 的好处是，如果无参数的 <Strong>mixin</Strong> 被多处使用，编译后会输出多段重复的代码。这时如果使用 <Strong>@extend</Strong>，可以避免这个问题。但是 <Strong>gzip</Strong> 等压缩工具就可以解决重复代码的问题，因此大多数情况下，你只需要使用 <Strong>mixin</Strong> 来让代码符合 DRY 原则。

## 参考资料

[Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css?spm=a2o8t.11089562.0.0.2075665445AK72)

[Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html?spm=a2o8t.11089562.0.0.20756654mCqxEK)

[spec css-style-guide](https://github.com/ecomfe/spec/blob/master/css-style-guide.md?spm=a2o8t.11089562.0.0.20756654odK3YQ&file=css-style-guide.md)

[stylelint中文文档](http://stylelint.docschina.org/)
