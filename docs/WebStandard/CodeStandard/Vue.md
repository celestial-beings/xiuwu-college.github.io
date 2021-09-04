# Vue编码规范

## template 标准

### 标签

- 【必要】不允许 <Strong>template</Strong> 中有解析错误。eslint: [vue/no-parsing-error](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md?file=no-parsing-error.md)

（1）注释标签不能为空「abrupt-closing-of-empty-comment」

```vue
// bad
<template><!--></template>

// good
<template><div><!--<slot name="reference"></slot>--></div></template>
```

（2）注释中不能有 EOF「eof-in-comment」

```vue
// bad
<template><!--

// good
<template><div><!--<slot name="reference"></slot>--></div></template>
```

（3）注释要正确开闭「incorrectly-opened-comment」「incorrectly-closed-comment」

```vue
// bad
<template><!ELEMENT br EMPTY></template>
<template><!--comment--!></template>

// good
<template><div><!--<slot name="reference"></slot>--></div></template>
```

（4）注释不能嵌套「nested-comment」

```vue
// bad
<template><!--a<!--b--></template>

// good
<template><div><!--<slot name="reference"></slot>--></div></template>
```

（5）数字字符引用中必须含有数字「absence-of-digits-in-numeric-character-reference」

```vue
// bad
<template>&#qux;</template>

// good
<template>&#205;</template>
```

（6）CDATA 只能用于 MathML 或者 SVG「cdata-in-html-content」

```vue
// bad
<template><![CDATA[cdata]]></template>

// good
<template>
  <svg>
    <style>
      <![CDATA[
        #my-rect { fill: blue; }
      ]]>
    </style>
    <rect id="my-rect" x="0" y="0" width="10" height="10" />
  </svg>
</template>
```

（7）字符引用不能超出 unicode 编码范围「character-reference-outside-unicode-range」

```vue
// bad
<template>&#1234567;</template>

// good
<template>&#0x61;</template>
```

（8）除 ASCII 空白字符之外，不能包含控制字符「control-character-in-input-stream」

```vue
// bad
<template>\u0003</template>

// good
<template><div>demo</div></template>
```

（9）除 ASCII 空白字符之外，引用字符不能引用控制字符「control-character-reference」

```vue
// bad
<template>&#0003;</template>

// good
<template>&#0000;</template>
```

（10）eof-before-tag-name」

```vue
// bad
<template><

// good
<template><div>demo</div></template>
```

（11）「eof-in-cdata」

```vue
// bad
<template><svg><![CDATA[cdata

// good
<template><div>demo</div></template>
```

（12）「eof-in-tag」

```vue
// bad
<template><div class=""

// good
<template><div>demo</div></template>
```

（13）「missing-attribute-value」

```vue
// bad
<template><div id=></template>

// good
<template><div id="demo">demo</div></template>
```

（14）「missing-end-tag-name」

```vue
// bad
<template></></template>

// good
<template><i/></template>
```

（15）字符引用之后要加分号「missing-semicolon-after-character-reference」

```vue
// bad
<template>&amp</template>

// good
<template>&amp;</template>
```

（16）属性之间加空格「missing-whitespace-between-attributes」

```vue
// bad
<template><div id="foo"class="bar"></template>

// good
<template><div id="foo" class="bar"></template>
```

（17）「noncharacter-character-reference」

```vue
// bad
<template>&#xFFFE;</template>

// good
<template>&amp;</template>
```

（18）「noncharacter-in-input-stream」

```vue
// bad
<template>\uFFFE</template>

// good
<template>demo</template>
```

（19）数字字符引用不能引用 NULL「null-character-reference」

```vue
// bad
<template>&#0000;</template>

// good
<template>&#205;</template>
```

（20）数字字符引用不能引用 surrogate「null-character-reference」

```vue
// bad
<template>&#xD800;</template>

// good
<template>&#205;</template>
```

（21）html 中不能使用 surrogate「surrogate-in-input-stream」

```vue
// bad
<template>\uD800</template>

// good
<template>demo</template>
```

（22）属性名不能含有字符 ',",<「unexpected-character-in-attribute-name」

```vue
// bad
<template><div a"bc=""></template>

// good
<template><div abc="111">demo</div></template>
```

（23）当属性值没有写在引号中时，属性值不能包含 "<>,',<,=,`「unexpected-character-in-unquoted-attribute-value」

```vue
// bad
<template><div foo=b'ar'></template>

// good
<template><div abc="111">demo</div></template>
```

（24）禁止在属性名之前使用等号「unexpected-equals-sign-before-attribute-name」

```vue
// bad
<template><div =foo></template>

// good
```

（25）「unexpected-null-character」

```vue
// bad
<template>\u0000</template>

// good
<template>demo</template>
```

（26）「unexpected-question-mark-instead-of-tag-name」

```vue
// bad
<template><?xml?></template>

// good
<template><div>demo</div></template>
```

（27）「unexpected-solidus-in-tag」

```vue
// bad
<template><div id="" / class=""></template>

// good
<template><div id="demo" class="demo"></template>
```

（28）「unknown-named-character-reference」

```vue
// bad
<template>&unknown;</template>

// good
<template>&amp;</template>
```

（29）结束标签不能包含属性「end-tag-with-attributes」

```vue
// bad
<template><div></div id="end"></template>

// good
<template><div>demo</div></template>
```

（30）同一个标签不能包含重复的属性「duplicate-attribute」

```vue
// bad
<template><div id="" id=""></div></template>

// good
<template><div id=""></div></template>
```

（31）结束标签不能加尾部斜杠「end-tag-with-trailing-solidus」

```vue
// bad
<template><div></div/></template>

// good
<template><div id=""></div></template>
```

（32）开始标签不能加尾部斜杠「non-void-html-element-start-tag-with-trailing-solidus」

```vue
// bad
<template><div/></template>

// good
<template><div id=""></div></template>
```

（33）命名空间不合法「x-invalid-namespace」

```vue
// bad
<template><div xmlns=""></template>

// good
<div xmlns="http://www.w3.org/1999/Math/MathMl">x3/x</div>
```

## 语言特性

### 基本

- 【推荐】不要定义未被使用的组件。eslint: [vue/no-unused-components](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-components.md?file=no-unused-components.md)

```vue
// bad
<template>
  <div>
    <h2>Lorem ipsum</h2>
  </div>
</template>
<script>
  export default {
    components: {
      TheButton
    },
  }
</script>

// good
<template>
  <div>
    <TheButton />
  </div>
</template>
<script>
  export default {
    components: {
      TheButton
    },
  }
</script>
```

- 【必要】组件的 <Strong>data</Strong> 必须是一个函数。eslint: [vue/no-shared-component-data](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md?file=no-shared-component-data.md)

```vue
// bad
<script lang="js">
  export default {
    data: {
      foo: 'bar'
    }
  }
</script>

// good
<script lang="js">
  export default {
    data() {
      return {
        foo: 'bar'
      }
    }
  }
</script>
```

- 【必要】禁止定义同名属性。eslint: [vue/no-dupe-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md?file=no-dupe-keys.md)

```vue
// bad
<script lang="js">
  export default {
    props: {
      foo: String
    },
    computed: {
      foo: {
        get () {}
      }
    },
    data: {
      foo: null
    },
    methods: {
      foo () {}
    }
  }
</script>

// good
<script lang="js">
  export default {
    props: {
      foo: String
    },
    computed: {
      bar: {
        get () {}
      }
    }
  }
</script>
```

- 【必要】标签中禁止有重复的属性。eslint: [vue/require-prop-type-constructor](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-type-constructor.md?file=require-prop-type-constructor.md)

```vue
// bad
<template>
  <div>
    <MyComponent :foo="abc" foo="def" />
    <MyComponent foo="abc" :foo="def" />
    <MyComponent foo="abc" foo="def" />
    <MyComponent :foo.a="abc" :foo.b="def" />
    <MyComponent class="abc" class="def" />
  </div>
</template>

// good
<template>
  <div>
    <MyComponent :foo="abc" />
    <MyComponent class="abc" :class="def" />
  </div>
</template>
```

- 【推荐】在使用 vue 的内置组件 <Strong>component</Strong> 时，必须使用 <Strong>v-bind:is</Strong> 属性。eslint: [vue/require-component-is](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md?file=require-component-is.md)

```vue
// bad
<template>
  <div>
    <component/>
    <component is="type"/>
  </div>
</template>

// good
<template>
  <div>
    <component :is="type"/>
    <component v-bind:is="type"/>
  </div>
</template>
```

- 【必要】<Strong>render</Strong> 函数必须有返回值。eslint: [vue/require-render-return](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md?file=require-render-return.md)

```vue
// bad
<script>
export default {
  render (h) {
    if (foo) {
      return h('div', 'hello')
    }
  }
}
</script>

// good
<script>
export default {
  render (h) {
    return h('div', 'hello')
  }
}
</script>
```

- 【必要】禁止使用 vue 中的关键字。eslint: [vue/no-reserved-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md?file=no-reserved-keys.md)

```vue
// bad
<script>
export default {
  props: {
    $el: String
  },
}
</script>

// good
<script>
export default {
  props: {
    custom: String
  },
}
</script>
```

- 【推荐】禁止在 <Strong>template</Strong> 标签中使用 <Strong>key</Strong> 属性。 eslint: [vue/no-template-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md?file=no-template-key.md)

```vue
// bad
<template key="foo"> ... </template>
<template v-bind:key="bar"> ... </template>
<template :key="baz"> ... </template>

// good
<template> demo </template>
```

- 【强制】禁止在 <Strong>textarea</Strong> 中出现 <Strong>{{ message }}</Strong>。 eslint: [vue/no-textarea-mustache](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md?file=no-textarea-mustache.md)

```vue
// bad
<template>
  <textarea>{{ message }}</textarea>
</template>

// good
<template>
  <textarea v-model="message" />
</template>
```

- 【推荐】禁止在 <Strong>v-for</Strong> 等指令或者 <Strong>scope</Strong> 中申明没有使用到的变量。 eslint: [vue/no-unused-vars](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md?file=no-unused-vars.md)

```vue
// bad
<template>
  <ol v-for="i in 5">
    <li>item</li>
  </ol>
</template>

// good
<template>
  <ol v-for="i in 5">
    <li>{{ i }}</li>
  </ol>
</template>
```

### Props

- 【必要】<Strong>Prop</Strong> 定义类型应该是构造函数。eslint: [vue/require-prop-type-constructor](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-type-constructor.md?file=require-prop-type-constructor.md)

```vue
// bad
<script>
export default {
  props: {
    myProp: 'Number',
    anotherType: ['Number', 'String'],
    extraProp: {
      type: 'Number',
      default: 10
    },
    lastProp: {
      type: ['Boolean']
    },
    nullProp: 'null'
  }
}
</script>

// good
<script>
export default {
  props: {
    myProp: Number,
    anotherProp: [Number, String],
    myFieldWithBadType: {
      type: Object,
      default: function() {
        return {}
      },
    },
    myOtherFieldWithBadType: {
      type: Number,
      default: 1,
    }
  }
}
</script>
```

- 【强制】<Strong>Prop</Strong> 的默认值必须匹配它的类型。eslint: [vue/require-valid-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md?file=require-valid-default-prop.md)

```vue
// bad
<script>
export default {
  props: {
    myProp: {
      type: String,
      default: {}
    }
  }
}
</script>

// good
<script>
export default {
  props: {
    myProp: {
      type: String,
      default: 'demo'
    }
  }
}
</script>
```

- 【强制】计算属性禁止包含异步方法。eslint: [vue/no-async-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md?file=no-async-in-computed-properties.md)

```vue
// bad
<script>
export default {
  computed: {
    pro () {
      return Promise.all([new Promise((resolve, reject) => {})])
    },
    foo: async function () {
      return await someFunc()
    }
  }
}
</script>

// good
<script>
export default {
  computed: {
    pro () {
      return 'pro'
    }
  }
}
</script>
```

- 【强制】计算属性必须有返回值。eslint: [vue/return-in-computed-property](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md?file=return-in-computed-property.md)

```vue
// bad
<script>
export default {
  computed: {
    pro () {
      if (this.baf) {
        return this.baf
      }
    }
  }
}
</script>

// good
<script>
export default {
  computed: {
    pro () {
      return 'pro'
    }
  }
}
</script>
```

- 【强制】为 <Strong>v-for</Strong> 设置键值。eslint: [vue/require-v-for-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md?file=require-v-for-key.md)

```vue
// bad
<template>
  <div v-for="todo in todos"/>
</template>

// good
<template>
  <div v-for="todo in todos" :key="todo.id"/>
</template>
```

- 【强制】禁止在计算属性中对属性修改。eslint: vue/no-side-effects-in-computed-properties

```vue
// bad
<script>
export default {
  computed: {
    fullName () {
      this.firstName = 'lorem' // <- side effect
      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.array.reverse() // <- side effect - orginal array is being mutated
    }
  }
}
</script>

// good
<script>
export default {
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
      return this.array.slice(0).reverse() // <- side effect - orginal array is being mutated
    }
  }
}
</script>
```

### 指令

- 【推荐】避免 <Strong>v-if</Strong> 和 <Strong>v-for</Strong> 用在一起。eslint: [vue/no-use-v-if-with-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-use-v-if-with-v-for.md?file=no-use-v-if-with-v-for.md)

```vue
// bad
<template>
  <TodoItem
      v-for="todo in todos"
      v-if="todo.shown"
      :todo="todo"
  />
</template>

// good
<template>
  <ul v-if="complete">
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
    />
  </ul>
</template>
```

- 【强制】强制在 <Strong>v-on</Strong> 指令使用 <Strong>exact</Strong> 修饰符，当同一个标签上有另一个带修饰符的 <Strong>v-on</Strong> 指令。eslint: [vue/use-v-on-exact](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/use-v-on-exact.md?file=use-v-on-exact.md)

```vue
// bad
<template>
  <button v-on:click="foo" v-on:click.ctrl="foo"></button>
</template>

// good
<template>
  <button v-on:click.exact="foo" v-on:click.ctrl="foo"></button>
</template>
```

- 【强制】检查 root 标签的合法性。eslint: vue/valid-template-root

```vue
// bad
<template></template>
<template>The root is text</template>
<template>
  <div>hello</div>
  <div>There are multiple root elements</div>
</template> 
<template>
  <div v-for="item in items"/>
</template>
<template>
  <slot />
</template>

// good
<template>
  <div>demo</div>
</template>
```

- 【强制】检查 <Strong>bind</Strong> 指令的合法性。eslint: [vue/valid-v-bind](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md?file=valid-v-bind.md)

```vue
// bad
<template>
  <div v-bind/>
  <div :aaa/>
  <div v-bind:aaa.bbb="foo"/>
</template>
  

// good
<template>
  <div v-bind="foo"/>
  <div v-bind:aaa="foo"/>
  <div :aaa="foo"/>
  <div :aaa.prop="foo"/>
</template>
```

- 【强制】检查 <Strong>v-cloak</Strong> 指令的合法性。eslint: [vue/valid-v-cloak](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md?file=valid-v-cloak.md)

```vue
// bad
<template>
  <div v-cloak:aaa/>
  <div v-cloak.bbb/>
  <div v-cloak="ccc"/>
</template>
  

// good
<template>
  <div v-cloak/>
</template>
```

- 【强制】检查 <Strong>v-else-if</Strong> 指令的合法性。eslint: [vue/valid-v-else-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md?file=valid-v-else-if.md)

```vue
// bad
<template>
  <div v-else-if/>
  <div v-else-if:aaa="foo"/>
  <div v-else-if.bbb="foo"/>
</template>
  

// good
<template>
  <div v-if="foo"/>
  <div v-else-if="bar"/>
</template>
```

- 【强制】检查 <Strong>v-else</Strong> 指令的合法性。eslint: [vue/valid-v-else](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md?file=valid-v-else.md)

```vue
// bad
<template>
  <div v-else="foo"/>
  <div v-else:aaa/>
  <div v-else.bbb/>
</template>
  

// good
<template>
  <div v-if="foo"/>
  <div v-else/>
</template>
```

- 【强制】检查 <Strong>v-for</Strong> 指令的合法性。eslint: [vue/valid-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md?file=valid-v-for.md)

```vue
// bad
<template>
  <div v-for/>
  <div v-for:aaa="todo in todos"/>
  <div v-for.bbb="todo in todos"/>
  <div
    v-for="todo in todos"
    is="MyComponent"
  />
  <MyComponent v-for="todo in todos"/>
  <MyComponent
    v-for="todo in todos"
    :key="foo"
  />
</template>

// good
<template>
  <div v-for="todo in todos"/>
  <MyComponent
    v-for="todo in todos"
    :key="todo.id"
  />
  <div
    v-for="todo in todos"
    :is="MyComponent"
    :key="todo.id"
  />
</template>
```

- 【强制】检查 <Strong>v-html</Strong> 指令的合法性。eslint: [vue/valid-v-html](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md?file=valid-v-html.md)

```vue
// bad
<template>
  <div v-html/>
  <div v-html:aaa="foo"/>
  <div v-html.bbb="foo"/>
</template>
  
// good
<template>
  <div v-html="foo"/>
</template>
```

- 【强制】检查 <Strong>v-if</Strong> 指令的合法性。eslint: [vue/valid-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md?file=valid-v-if.md)

```vue
// bad
<template>
  <div v-if/>
  <div v-if:aaa="foo"/>
  <div v-if.bbb="foo"/>
  <div
    v-if="foo"
    v-else
  />
  <div
    v-if="foo"
    v-else-if="bar"
  />
</template>

// good
<template>
  <div v-if="foo"/>
  <div v-else-if="bar"/>
  <div v-else/>
</template>
```

- 【强制】检查 <Strong>v-model</Strong> 指令的合法性。eslint: [vue/valid-v-model](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md?file=valid-v-model.md)

```vue
// bad
<template>
  <input v-model>
  <input v-model:aaa="foo">
  <input v-model.bbb="foo">
  <input v-model="foo + bar">
  <div v-model="foo"/>
  <div v-for="todo in todos">
    <input v-model="todo">
  </div>
</template>

// good
<template>
  <input v-model="foo">
  <input v-model.lazy="foo">
  <textarea v-model="foo"/>
  <MyComponent v-model="foo"/>
  <div v-for="todo in todos">
    <input v-model="todo.name">
  </div>
</template>
```

- 【强制】检查 <Strong>v-on</Strong> 指令的合法性。eslint: [vue/valid-v-on](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md?file=valid-v-on.md)

```vue
// bad
<template>
  <div v-on/>
  <div v-on:click/>
  <div v-on:click.aaa="foo"/>
  <div @click/>
</template>
  
// good
<template>
  <div v-on="foo"/>
  <div v-on:click="foo"/>
  <div @click="foo"/>
  <div @click.left="foo"/>
  <div @click.prevent/>
  <div @click.stop />
</template>
```

- 【强制】检查 v-once 指令的合法性。eslint: vue/valid-v-once

```vue
// bad
<template>
  <div v-once:aaa/>
  <div v-once.bbb/>
  <div v-once="ccc"/>
</template>
  
// good
<template>
  <div v-once/>
</template>
```

- 【强制】检查 <Strong>v-once</Strong> 指令的合法性。eslint: [vue/valid-v-once](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md?file=valid-v-once.md)

```vue
// bad
<template>
  <div v-once:aaa/>
  <div v-once.bbb/>
  <div v-once="ccc"/>
</template>
  
// good
<template>
  <div v-once/>
</template>
```

- 【强制】检查 <Strong>v-pre</Strong> 指令的合法性。eslint: [vue/valid-v-pre](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md?file=valid-v-pre.md)

```vue
// bad
<template>
  <div v-pre:aaa/>
  <div v-pre.bbb/>
  <div v-pre="ccc"/>
</template>

// good
<template>
  <div v-pre/>
</template>
```

- 【强制】检查 <Strong>v-show</Strong> 指令的合法性。eslint: [vue/valid-v-show](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md?file=valid-v-show.md)

```vue
// bad
<template>
  <div v-show/>
  <div v-show:aaa="foo"/>
  <div v-show.bbb="foo"/>
</template>
  
// good
<template>
  <div v-show="foo"/>
</template>
```

- 【强制】检查 <Strong>v-text</Strong> 指令的合法性。eslint: [vue/valid-v-text](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md?file=valid-v-text.md)

```vue
// bad
<template>
  <div v-text/>
  <div v-text:aaa="foo"/>
  <div v-text.bbb="foo"/>
</template>
  
// good
<template>
  <div v-text="foo"/>
</template>
```

## 参考资料

[eslint-plugin-vue](https://eslint.vuejs.org/)

[Style Guide - Vue](https://cn.vuejs.org/v2/style-guide/index.html)
