import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.c37b87a5.js";var t="/assets/true-aa.95b42268.png",p="/assets/true-image-20220414220511243.16f2fae4.png";const i={},l=e(`<h2 id="\u4E00\u3001\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> \u4E00\u3001\u57FA\u7840\u8BED\u6CD5</h2><p>https://zh-hans.reactjs.org/</p><h3 id="_1\u3001react-\u5E38\u7528ui\u7EC4\u4EF6\u5E93" tabindex="-1"><a class="header-anchor" href="#_1\u3001react-\u5E38\u7528ui\u7EC4\u4EF6\u5E93" aria-hidden="true">#</a> 1\u3001react \u5E38\u7528UI\u7EC4\u4EF6\u5E93</h3><p>Material-UI\uFF1Ahttps://material-ui.com/\uFF08\u9762\u5411web\u7AEF\uFF09</p><p>\u8682\u8681\u8BBE\u8BA1Ant Design\uFF1Ahttps://ant.design/\uFF08\u9762\u5411web\u7AEF\uFF09</p><p>SemanticUI\uFF1Ahttps://semantic-ui.com/</p><p>React Desktop\uFF1A\uFF08\u9762\u5411MacOS Sierra\u548CWindows10\u684C\u9762\u98CE\u683C\u7684ReactUI\u7EC4\u4EF6\u5E93\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>i<wbr>mport.meta.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2\u3001\u901A\u8FC7-props-\u4F20\u9012\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u901A\u8FC7-props-\u4F20\u9012\u6570\u636E" aria-hidden="true">#</a> 2\u3001\u901A\u8FC7 Props \u4F20\u9012\u6570\u636E</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Board</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">renderSquare</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Square</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token plain-text">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Square extends React.Component {
 render() {
   return (
     &lt;button className=&quot;square&quot; onClick={() =&gt; console.log(&#39;click&#39;)}&gt;       {this.props.value}
     &lt;/button&gt;
   );
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u3001\u4F7F\u7528-setae-\u4FDD\u5B58\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4F7F\u7528-setae-\u4FDD\u5B58\u6570\u636E" aria-hidden="true">#</a> 3\u3001\u4F7F\u7528 setae \u4FDD\u5B58\u6570\u636E</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span>        
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token plain-text">      
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u3001\u7C7B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a> 4\u3001\u7C7B\u7EC4\u4EF6</h3><p>-constructor\u662F\u53EF\u9009\u7684\uFF0C\u6211\u4EEC\u901A\u5E38\u5728constructor\u4E2D\u521D\u59CB\u5316\u4E00\u4E9B\u6570\u636E\uFF1B</p><ul><li>this.state\u4E2D\u7EF4\u62A4\u7684\u5C31\u662F\u6211\u4EEC\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E\uFF1B</li><li>render() \u65B9\u6CD5\u662F class \u7EC4\u4EF6\u4E2D\u552F\u4E00\u5FC5\u987B\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF1B</li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Footer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/**/</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token operator">=</span><span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*\u662F class \u7EC4\u4EF6\u4E2D\u552F\u4E00\u5FC5\u987B\u5B9E\u73B0\u7684\u65B9\u6CD5*/</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello footer.tsx</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5\u3001\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> 5\u3001\u51FD\u6570\u7EC4\u4EF6</h3><p><strong>\u51FD\u6570\u7EC4\u4EF6\u5FC5\u987B\u9996\u5B57\u6BCD\u5927\u5199</strong></p><p>\u51FD\u6570\u7EC4\u4EF6\u7684\u7279\u70B9\uFF1A</p><ul><li>\u6CA1\u6709\u751F\u547D\u5468\u671F\uFF0C\u4E5F\u4F1A\u88AB\u66F4\u65B0\u5E76\u6302\u8F7D\uFF0C\u4F46\u662F\u6CA1\u6709\u751F\u547D\u5468\u671F\u51FD\u6570\uFF1B</li><li>\u6CA1\u6709this(\u7EC4\u4EF6\u5B9E\u4F8B\uFF09\uFF1B</li><li>\u6CA1\u6709\u5185\u90E8\u72B6\u6001\uFF08state\uFF09\uFF1B</li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6\u3001\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 6\u3001\u751F\u547D\u5468\u671F</h3><p>\u751F\u547D\u5468\u671F\u548C\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\u5173\u7CFB\uFF1A</p><blockquote></blockquote><ul><li></li><li></li><li></li></ul><h3 id="_7\u3001\u6570\u636E\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u6570\u636E\u66FF\u6362" aria-hidden="true">#</a> 7\u3001\u6570\u636E\u66FF\u6362</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var player = {score: 1, name: &#39;Jeff&#39;};
player.score = 2;
// player \u4FEE\u6539\u540E\u7684\u503C\u4E3A {score: 2, name: &#39;Jeff&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var player = {score: 1, name: &#39;Jeff&#39;};

var newPlayer = Object.assign({}, player, {score: 2});
// player \u7684\u503C\u6CA1\u6709\u6539\u53D8, \u4F46\u662F newPlayer \u7684\u503C\u662F {score: 2, name: &#39;Jeff&#39;}

// \u4F7F\u7528\u5BF9\u8C61\u5C55\u5F00\u8BED\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5199\u6210\uFF1A
// var newPlayer = {...player, score: 2};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8\u3001tsx-\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_8\u3001tsx-\u7ED3\u6784" aria-hidden="true">#</a> 8\u3001tsx \u7ED3\u6784</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u81EA\u5B9A\u4E49\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">updata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token punctuation">{</span>score<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    player<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">// {score: 2, name: &#39;Jeff&#39;}</span>
    <span class="token comment">// \u4F7F\u7528\u5BF9\u8C61\u5C55\u5F00\u8BED\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5199\u6210\uFF1A</span>
    <span class="token keyword">const</span> newPlayer2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>player<span class="token punctuation">,</span> score<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u51FD\u6570\u7EC4\u4EF6</span>
<span class="token keyword">class</span> <span class="token class-name">index</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u560E\u560E\u560E\u560E&quot;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">120</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7C7B\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">footer</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/**/</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            counter<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            history<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>squares<span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            squares<span class="token operator">:</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
<span class="token comment">//\u81EA\u5B9A\u4E49\u51FD\u6570</span>
    <span class="token function">handleClick</span><span class="token punctuation">(</span>i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> squares <span class="token operator">=</span> <span class="token number">000</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">/*\u662F class \u7EC4\u4EF6\u4E2D\u552F\u4E00\u5FC5\u987B\u5B9E\u73B0\u7684\u65B9\u6CD5*/</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token string">&#39;Josh Perez&#39;</span><span class="token punctuation">;</span><span class="token comment">//\u5D4C\u5165\u8868\u8FBE\u5F0F </span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token punctuation">{</span>name2<span class="token punctuation">}</span><span class="token plain-text">\u81EA\u5DF1\u5185\u5BB9 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
<span class="token comment">//\u5185\u7F6E\u51FD\u6570</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
 <span class="token comment">/**
     * \u5728\u7EC4\u4EF6\u6302\u8F7D\u540E\uFF08\u63D2\u5165 DOM \u6811\u4E2D\uFF09\u7ACB\u5373\u8C03\u7528
     */</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u6355\u83B7\u7EC4\u4EF6\uFF1A\u5F02\u5E38
     * @param error
     * @param errorInfo
     */</span>
    <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> errorInfo<span class="token operator">:</span> React<span class="token punctuation">.</span>ErrorInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u5728\u66F4\u65B0\u540E\u4F1A\u88AB\u7ACB\u5373\u8C03\u7528\uFF0C\u9996\u6B21\u6E32\u67D3\u4E0D\u4F1A\u6267\u884C\u6B64\u65B9\u6CD5\u3002
     * @param prevProps
     * @param prevState
     * @param snapshot
     */</span>
    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> prevState<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> snapshot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token comment">/**
     * \u5728\u7EC4\u4EF6\u5378\u8F7D\u53CA\u9500\u6BC1\u4E4B\u524D\u76F4\u63A5\u8C03\u7528
     */</span>
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9\u3001\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> 9\u3001\u9879\u76EE\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 mock/                         ## \u6A21\u62DF\u6570\u636E\u670D\u52A1
\u2502   \u251C\u2500\u2500 db.js                     ## \u6A21\u62DF\u6570\u636EDB
\u2502   \u2514\u2500\u2500 routes.json               ## \u6A21\u62DF\u6570\u636EAPI\u8DEF\u7531\u914D\u7F6E
\u2502   \u2514\u2500\u2500 ...
\u251C\u2500\u2500 public/                       ## \u9759\u6001\u8D44\u6E90\u6587\u4EF6\uFF08\u5305\u62ECcss, images, fonts, index.html\u7B49\uFF09
\u2502   \u2514\u2500\u2500 ...
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 components/               ## \u516C\u7528React\u7EC4\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 models/                   ## Dva\u6570\u636EStore\u5C42
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 pages/                    ## \u9875\u9762\u6A21\u5757
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 routes/                   ## App\u9875\u9762\u8DEF\u7531\u914D\u7F6E
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 services/                 ## API\u8BF7\u6C42\u670D\u52A1
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 style/                    ## \u901A\u7528CSS\u6837\u5F0F
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 utils/                    ## \u901A\u7528\u5DE5\u5177\u6A21\u5757
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u251C\u2500\u2500 App.css                   ## App \u9875\u9762CSS\u6837\u5F0F
\u2502   \u251C\u2500\u2500 App.tsx                   ## App \u5168\u5C40\u9875\u9762
\u2502   \u251C\u2500\u2500 App.test.tsx              ## App \u9875\u9762Jest\u6D4B\u8BD5\u7528\u4F8B
\u2502   \u251C\u2500\u2500 ent.ts                    ## App \u73AF\u5883\u53D8\u91CF\u914D\u7F6E
\u2502   \u251C\u2500\u2500 index.css                 ## \u5168\u5C40CSS\u6837\u5F0F
\u2502   \u251C\u2500\u2500 index.tsx                 ## React\u5165\u53E3\u6587\u4EF6
\u2502   \u251C\u2500\u2500 logo.svg                  ## App logo
\u2502   \u251C\u2500\u2500 Page.tsx                  ## \u5168\u5C40\u9875\u9762\u8DEF\u7531
\u2502   \u2502
\u251C\u2500\u2500 build/                        ## \u751F\u6210\u73AF\u5883\u9759\u6001\u8D44\u6E90\u6587\u4EF6
\u251C\u2500\u2500 .gitignore                    ## Git ignore \u914D\u7F6E\uFF08\u7981\u6B62\u968F\u610F\u7BE1\u6539\u914D\u7F6E!!!\uFF09
\u251C\u2500\u2500 .editorconfig                 ## \u7F16\u8F91\u5668\u914D\u7F6E\uFF08\u7981\u6B62\u968F\u610F\u7BE1\u6539\u914D\u7F6E!!!\uFF09
\u251C\u2500\u2500 config-overrides.js           ## Webpack \u9ED8\u8BA4\u914D\u7F6E\u8986\u76D6\u64CD\u4F5C
\u251C\u2500\u2500 tsconfig.json                 ## Typescript\u89C4\u5219\u914D\u7F6E\uFF08\u7981\u6B62\u968F\u610F\u7BE1\u6539\u89C4\u5219\uFF09
\u251C\u2500\u2500 tslint.json                   ## tslint\u89C4\u5219\u914D\u7F6E\uFF08\u7981\u6B62\u968F\u610F\u7BE1\u6539\u89C4\u5219\uFF09
\u2514\u2500\u2500 package.json                  ## \u6784\u5EFA\u811A\u672C\u548C\u4F9D\u8D56\u914D\u7F6E\uFF08\u7981\u6B62\u968F\u610F\u7BE1\u6539\u914D\u7F6E\uFF09
\u2514\u2500\u2500 yarn.lock                     ## Yarn\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10\u3001\u5D4C\u5165\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u5D4C\u5165\u7EC4\u4EF6" aria-hidden="true">#</a> 10\u3001\u5D4C\u5165\u7EC4\u4EF6</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Menu<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Index <span class="token keyword">from</span> <span class="token string">&#39;@/pages/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Index</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Index</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//\u51FD\u6570\u7EC4\u4EF6\u5FC5\u987B\u9996\u5B57\u6BCD\u5927\u5199</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Index 66</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11\u300112\u300113\u300114\u300115\u300116\u300117\u3001" tabindex="-1"><a class="header-anchor" href="#_11\u300112\u300113\u300114\u300115\u300116\u300117\u3001" aria-hidden="true">#</a> 11\u300112\u300113\u300114\u300115\u300116\u300117\u3001</h3><h2 id="\u4E8C\u3001\u521B\u5EFA\u9879\u76EE-react-vite-ts-ant-design4" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u521B\u5EFA\u9879\u76EE-react-vite-ts-ant-design4" aria-hidden="true">#</a> \u4E8C\u3001\u521B\u5EFA\u9879\u76EE react+vite+ts+Ant Design4</h2><p>Ant Design4\uFF1Ahttps://ant.design/</p><p>https://gitee.com/MFork/vite-material-ui</p><h3 id="_1\u3001\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 1\u3001\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u9879\u76EE</h3><p>vite</p><blockquote><p>mkdir javacode-react</p><p>cd javacode-react</p><p>npm init @vitejs/app</p><p>npm install</p></blockquote><p>ant-design-pro</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> my-app
$ <span class="token builtin class-name">cd</span> my-app
$ <span class="token function">yarn</span> create umi  <span class="token comment">## or npm create umi</span>

 Select the boilerplate <span class="token builtin class-name">type</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span> \u9009\u62E9 Ant Design Pro
\u276F ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
 Which language <span class="token keyword">do</span> you want to use? \u9009\u62E9\u4F60\u4F7F\u7528\u7684\u8BED\u8A00
\u276F TypeScript
  JavaScript
 Do you need all the blocks or a simple scaffold? \u4F60\u9700\u8981\u6240\u6709\u7684\u79EF\u6728\u8FD8\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u811A\u624B\u67B6\uFF1F
<span class="token operator">&gt;</span> simple \u7B80\u5355\u7684
  complete \u5B8C\u5168\u7684

$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token function">npm</span> start         <span class="token comment">## visit http://localhost:8000</span>

 <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;javacode-react&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.1&quot;</span>,
  <span class="token string">&quot;private&quot;</span><span class="token builtin class-name">:</span> true,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;\u57FA\u4E8Eant-design-pro\u521B\u5EFA\u7684react\u9879\u76EE&quot;</span>,

<span class="token string">&quot;npm-i&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm install &amp;&amp; node ./node_modules/esbuild-loader/node_modules/esbuild/install.js&quot;</span>,
    <span class="token string">&quot;npm-i-esbuild-exe&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
    <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;umi-serve&quot;</span>,
    <span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env UMI_ENV=dev umi dev &amp; rm /src/.umi /s&quot;</span>,
    <span class="token string">&quot;start:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev&quot;</span>,
        <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;umi build&quot;</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ant-design</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> app
<span class="token builtin class-name">cd</span> app
<span class="token function">npm</span> create @umijs/umi-app

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F\uFF1A</h4><p>https://gitee.com/MFork/ant-design-pro</p><p>https://v4-pro.ant.design/docs/layout-cn</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 config                   ## umi \u914D\u7F6E\uFF0C\u5305\u542B\u8DEF\u7531\uFF0C\u6784\u5EFA\u7B49\u914D\u7F6E
\u251C\u2500\u2500 mock                     ## \u672C\u5730\u6A21\u62DF\u6570\u636E
\u251C\u2500\u2500 public
\u2502   \u2514\u2500\u2500 favicon.png          ## Favicon
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 assets               ## \u672C\u5730\u9759\u6001\u8D44\u6E90
\u2502   \u251C\u2500\u2500 components           ## \u4E1A\u52A1\u901A\u7528\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 e2e                  ## \u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B
\u2502   \u251C\u2500\u2500 layouts              ## \u901A\u7528\u5E03\u5C40
\u2502   \u251C\u2500\u2500 models               ## \u5168\u5C40 dva model
\u2502   \u251C\u2500\u2500 pages                ## \u4E1A\u52A1\u9875\u9762\u5165\u53E3\u548C\u5E38\u7528\u6A21\u677F
\u2502   \u251C\u2500\u2500 services             ## \u540E\u53F0\u63A5\u53E3\u670D\u52A1
\u2502   \u251C\u2500\u2500 utils                ## \u5DE5\u5177\u5E93
\u2502   \u251C\u2500\u2500 locales              ## \u56FD\u9645\u5316\u8D44\u6E90
\u2502   \u251C\u2500\u2500 global.less          ## \u5168\u5C40\u6837\u5F0F
\u2502   \u2514\u2500\u2500 global.ts            ## \u5168\u5C40 JS
\u251C\u2500\u2500 tests                    ## \u6D4B\u8BD5\u5DE5\u5177
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent" tabindex="-1"><a class="header-anchor" href="#error-spawn-e-code-javacode-myre-node-modules-esbuild-loader-node-modules-esbuild-esbuild-exe-enoent" aria-hidden="true">#</a> Error: spawn E:\\code\\javacode\\myre\\node_modules\\esbuild-loader\\node_modules\\esbuild\\esbuild.exe ENOENT</h4><blockquote><p>\u89E3\u51B3\uFF1Acd E:\\code\\javacode\\myre\\node_modules\\esbuild-loader\\node_modules\\esbuild</p><p>\u8FD0\u884C\uFF1Anode .\\install.js npm install -g</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;npm-i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm install&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;npm-i-esbuild-exe&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/esbuild-loader/node_modules/esbuild/install.js&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u5185\u7F6E\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5185\u7F6E\u7EC4\u4EF6" aria-hidden="true">#</a> 2\u3001\u5185\u7F6E\u7EC4\u4EF6</h3><h4 id="react-fc-\u51FD\u6570\u5F0F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#react-fc-\u51FD\u6570\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a> React.FC\uFF08\u51FD\u6570\u5F0F\u7EC4\u4EF6\uFF09</h4><p>\u4F7F\u7528 React.FC \u6765\u5199 React \u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u662F\u4E0D\u80FD\u7528 setState \u7684\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F useState()\u3001useEffect()</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="react-vfc-\u65E0\u51FD\u6570\u5F0F\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#react-vfc-\u65E0\u51FD\u6570\u5F0F\u7EC4\u4EF6" aria-hidden="true">#</a> React.VFC\uFF08\u65E0\u51FD\u6570\u5F0F\u7EC4\u4EF6\uFF09</h4><h4 id="react-component" tabindex="-1"><a class="header-anchor" href="#react-component" aria-hidden="true">#</a> React.Component\uFF08\uFF09</h4><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">index</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>createModalVisible<span class="token punctuation">,</span> handleModalVisible<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    state <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u560E\u560E\u560E\u560E&quot;</span><span class="token punctuation">,</span>
        age<span class="token operator">:</span> <span class="token number">120</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
                <span class="token attr-name">onClickCapture</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;name:&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; age:&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="react-fc" tabindex="-1"><a class="header-anchor" href="#react-fc" aria-hidden="true">#</a> React.FC\uFF08\uFF09</h4><h3 id="_3\u3001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u8DEF\u7531" aria-hidden="true">#</a> 3\u3001\u8DEF\u7531</h3><p><img src="`+t+'" alt=""></p><h3 id="_4\u3001" tabindex="-1"><a class="header-anchor" href="#_4\u3001" aria-hidden="true">#</a> 4\u3001</h3><h3 id="_5\u30016\u30017\u30018\u3001" tabindex="-1"><a class="header-anchor" href="#_5\u30016\u30017\u30018\u3001" aria-hidden="true">#</a> 5\u30016\u30017\u30018\u3001</h3><h2 id="\u4E09\u3001react-vite-ts-material-ui" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001react-vite-ts-material-ui" aria-hidden="true">#</a> \u4E09\u3001react + vite + ts + Material-UI</h2><p>https://mui.com/zh/</p><p>\u6A21\u677F\u5E02\u573A</p><p>https://mui.com/store/?utm_source=docs&amp;utm_medium=referral&amp;utm_campaign=in-house-themes</p><p>01\uFF1Ahttps://mui.com/store/previews/berry-react-material-admin-free/</p><p>https://berrydashboard.io/free/#</p><p>https://gitee.com/kong19/react-admin-template</p><p><img src="'+p+'" alt=""></p><p>02\uFF1A</p><h3 id="_1\u3001" tabindex="-1"><a class="header-anchor" href="#_1\u3001" aria-hidden="true">#</a> 1\u3001</h3><h3 id="_2\u3001" tabindex="-1"><a class="header-anchor" href="#_2\u3001" aria-hidden="true">#</a> 2\u3001</h3><h3 id="_3\u3001" tabindex="-1"><a class="header-anchor" href="#_3\u3001" aria-hidden="true">#</a> 3\u3001</h3><h3 id="_4\u3001-1" tabindex="-1"><a class="header-anchor" href="#_4\u3001-1" aria-hidden="true">#</a> 4\u3001</h3><h3 id="_5\u30016\u30017\u30018\u3001-1" tabindex="-1"><a class="header-anchor" href="#_5\u30016\u30017\u30018\u3001-1" aria-hidden="true">#</a> 5\u30016\u30017\u30018\u3001</h3><h2 id="\u56DB\u3001\u4E94\u3001\u516D\u3001\u4E03\u3001\u516B\u3001\u4E5D" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u4E94\u3001\u516D\u3001\u4E03\u3001\u516B\u3001\u4E5D" aria-hidden="true">#</a> \u56DB\u3001\u4E94\u3001\u516D\u3001\u4E03\u3001\u516B\u3001\u4E5D</h2>',82),c=[l];function o(u,d){return s(),a("div",null,c)}var v=n(i,[["render",o],["__file","web-react.html.vue"]]);export{v as default};
