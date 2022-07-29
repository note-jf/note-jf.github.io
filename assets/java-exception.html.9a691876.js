import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.c37b87a5.js";const e={},p=t(`<h2 id="\u5168\u5C40\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5F02\u5E38" aria-hidden="true">#</a> \u5168\u5C40\u5F02\u5E38 <a name="\u5168\u5C40\u5F02\u5E38"></a></h2><blockquote><ul><li>\u9519\u8BEF\u7801\u548C\u9519\u8BEF\u4FE1\u606F\u5B9A\u4E49\u7C7B</li><li><ol><li>\u9519\u8BEF\u7801\u5B9A\u4E49\u89C4\u5219\u4E3A5\u4E3A\u6570\u5B57</li></ol></li><li><ol start="2"><li>\u524D\u4E24\u4F4D\u8868\u793A\u4E1A\u52A1\u573A\u666F\uFF0C\u6700\u540E\u4E09\u4F4D\u8868\u793A\u9519\u8BEF\u7801\u3002\u4F8B\u5982\uFF1A10001\u300210:\u901A\u7528 001:\u7CFB\u7EDF\u672A\u77E5\u5F02\u5E38</li></ol></li><li><ol start="3"><li>\u7EF4\u62A4\u9519\u8BEF\u7801\u540E\u9700\u8981\u7EF4\u62A4\u9519\u8BEF\u63CF\u8FF0\uFF0C\u5C06\u4ED6\u4EEC\u5B9A\u4E49\u4E3A\u679A\u4E3E\u5F62\u5F0F</li></ol></li></ul></blockquote><h3 id="\u63A7\u5236\u5668\u7EDF\u4E00\u7684\u5F02\u5E38\u5904\u7406-exceptioncontrolleradvice" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668\u7EDF\u4E00\u7684\u5F02\u5E38\u5904\u7406-exceptioncontrolleradvice" aria-hidden="true">#</a> \u63A7\u5236\u5668\u7EDF\u4E00\u7684\u5F02\u5E38\u5904\u7406\uFF08ExceptionControllerAdvice\uFF09</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token operator">*</span> <span class="token number">4</span>\u3001\u7EDF\u4E00\u7684\u5F02\u5E38\u5904\u7406
 <span class="token operator">*</span> <span class="token annotation punctuation">@ControllerAdvice</span>
 <span class="token operator">*</span>  <span class="token number">1</span>\uFF09\u3001\u7F16\u5199\u5F02\u5E38\u5904\u7406\u7C7B\uFF0C\u4F7F\u7528<span class="token annotation punctuation">@ControllerAdvice</span>\u3002
 <span class="token operator">*</span>  <span class="token number">2</span>\uFF09\u3001\u4F7F\u7528<span class="token annotation punctuation">@ExceptionHandler</span>\u6807\u6CE8\u65B9\u6CD5\u53EF\u4EE5\u5904\u7406\u7684\u5F02\u5E38\u3002

<span class="token doc-comment comment">/**
 * \u96C6\u4E2D\u5904\u7406\u6240\u6709\u5F02\u5E38
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token comment">//@ResponseBody</span>
<span class="token comment">//@ControllerAdvice(basePackages = &quot;com.kong.yumall.product.controller&quot;)</span>
<span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YumallExceptionControllerAdvice</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 
     *value
     * <span class="token keyword">@param</span> <span class="token parameter">e</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">MethodArgumentNotValidException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">handleVaildException</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//log.error(&quot;\u6570\u636E\u6821\u9A8C\u51FA\u73B0\u95EE\u9898{}\uFF0C\u5F02\u5E38\u7C7B\u578B\uFF1A{}&quot;, e.getMessage(), e.getClass());</span>
        <span class="token class-name">BindingResult</span> bindingResult <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getBindingResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709\u5F02\u5E38</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> errorMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bindingResult<span class="token punctuation">.</span><span class="token function">getFieldErrors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fieldError<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            errorMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>fieldError<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fieldError<span class="token punctuation">.</span><span class="token function">getDefaultMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5B57\u6BB5getField</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">BizCodeEnume</span><span class="token punctuation">.</span>VAILD_EXCEPTION<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BizCodeEnume</span><span class="token punctuation">.</span>VAILD_EXCEPTION<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> errorMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5168\u90E8\u5F02\u5E38\uFF0C\u5904\u7406\u4EFB\u610F\u5F02\u5E38
     * \u6761\u4EF6\uFF1AhandleVaildException\u4E0D\u6210\u7ACB\u60C5\u51B5\u4E0B
     * <span class="token keyword">@param</span> <span class="token parameter">throwable</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">Throwable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">R</span> <span class="token function">handleException</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">BizCodeEnume</span><span class="token punctuation">.</span>UNKNOW_EXCEPTION<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">BizCodeEnume</span><span class="token punctuation">.</span>UNKNOW_EXCEPTION<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/***
 * \u9519\u8BEF\u7801\u548C\u9519\u8BEF\u4FE1\u606F\u5B9A\u4E49\u7C7B
 * 1. \u9519\u8BEF\u7801\u5B9A\u4E49\u89C4\u5219\u4E3A5\u4E3A\u6570\u5B57
 * 2. \u524D\u4E24\u4F4D\u8868\u793A\u4E1A\u52A1\u573A\u666F\uFF0C\u6700\u540E\u4E09\u4F4D\u8868\u793A\u9519\u8BEF\u7801\u3002\u4F8B\u5982\uFF1A100001\u300210:\u901A\u7528 001:\u7CFB\u7EDF\u672A\u77E5\u5F02\u5E38
 * 3. \u7EF4\u62A4\u9519\u8BEF\u7801\u540E\u9700\u8981\u7EF4\u62A4\u9519\u8BEF\u63CF\u8FF0\uFF0C\u5C06\u4ED6\u4EEC\u5B9A\u4E49\u4E3A\u679A\u4E3E\u5F62\u5F0F
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">BizCodeEnume</span> <span class="token punctuation">{</span>
    <span class="token function">UNKNOW_EXCEPTION</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token string">&quot;\u7CFB\u7EDF\u672A\u77E5\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">VAILD_EXCEPTION</span><span class="token punctuation">(</span><span class="token number">10001</span><span class="token punctuation">,</span><span class="token string">&quot;\u53C2\u6570\u683C\u5F0F\u6821\u9A8C\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> code<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
    <span class="token class-name">BizCodeEnume</span><span class="token punctuation">(</span><span class="token keyword">int</span> code<span class="token punctuation">,</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}var k=n(e,[["render",c],["__file","java-exception.html.vue"]]);export{k as default};
