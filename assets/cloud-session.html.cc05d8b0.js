import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as e}from"./app.c37b87a5.js";var t="/assets/true-image-20210926162217627.2385cc09.png",p="/assets/true-image-20210926163452492.d824ff42.png",o="/assets/true-image-20210926163659508.6a084e86.png",i="/assets/true-image-20210926165049222.0fc114b8.png";const c={},l=e('<h2 id="\u5206\u5E03\u5F0F-session" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F-session" aria-hidden="true">#</a> \u5206\u5E03\u5F0F session</h2><h3 id="_7-1-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_7-1-\u5206\u6790" aria-hidden="true">#</a> 7.1 \u5206\u6790</h3><p><img src="'+t+'" alt=""></p><h3 id="_7-2-\u89E3\u51B3session\u5DF2\u77E5\u5F0A\u7AEF" tabindex="-1"><a class="header-anchor" href="#_7-2-\u89E3\u51B3session\u5DF2\u77E5\u5F0A\u7AEF" aria-hidden="true">#</a> 7.2 \u89E3\u51B3session\u5DF2\u77E5\u5F0A\u7AEF\uFF1A</h3><p><img src="'+p+'" alt=""></p><p><img src="'+o+'" alt=""></p><p>\u4F7F\u7528\u7B2C\u4E00\u79CD\uFF0C\u4F46\u662F\u5B58\u5728\u5B50\u57DF\u540D\u95EE\u9898\uFF0C\u6240\u4EE5\u4F7F\u7528SpringSession</p><p><img src="'+i+`" alt=""></p><h3 id="_7-3-\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#_7-3-\u5F00\u59CB" aria-hidden="true">#</a> 7.3 \u5F00\u59CB</h3><h4 id="_7-3-1-\u4F9D\u8D56\u3001\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-3-1-\u4F9D\u8D56\u3001\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 7.3.1 \u4F9D\u8D56\u3001\u542F\u52A8\u7C7B</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u6574\u5408springsession --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.session<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-session-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableRedisHttpSession</span>     <span class="token comment">//\u5F00\u542Fspringsession</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_7-3-2-\u914D\u7F6E-\u653E\u5927\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_7-3-2-\u914D\u7F6E-\u653E\u5927\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 7.3.2 \u914D\u7F6E\uFF0C\u653E\u5927\u4F5C\u7528\u57DF</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionConfig</span><span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">CookieSerializer</span> <span class="token function">cookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token class-name">DefaultCookieSerializer</span> cookieSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultCookieSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u653E\u5927\u4F5C\u7528\u57DF</span>
      cookieSerializer<span class="token punctuation">.</span><span class="token function">setDomainName</span><span class="token punctuation">(</span><span class="token string">&quot;yumall.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cookieSerializer<span class="token punctuation">.</span><span class="token function">setCookieName</span><span class="token punctuation">(</span><span class="token string">&quot;YUMALLSESSION&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> cookieSerializer<span class="token punctuation">;</span><span class="token punctuation">}</span>
   <span class="token annotation punctuation">@Bean</span>
   <span class="token keyword">public</span> <span class="token class-name">RedisSerializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">springSessionDefaultRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring.session.store-type</span><span class="token punctuation">=</span><span class="token value attr-value">redis</span>
<span class="token key attr-name">server</span><span class="token punctuation">:</span>
<span class="token key attr-name">  servlet</span><span class="token punctuation">:</span>
<span class="token key attr-name">    session</span><span class="token punctuation">:</span>
<span class="token key attr-name">      timeout</span><span class="token punctuation">:</span> <span class="token value attr-value">30m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-2-\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#_7-3-2-\u5F00\u59CB" aria-hidden="true">#</a> 7.3.2 \u5F00\u59CB</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>LOGIN_USER<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${session.loginUser != null}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B22\u8FCE, [[\${session.loginUser.nickname}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${session.loginUser == null}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://auth.yumall.com/login.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\uFF0C\u8BF7\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),u=[l];function r(d,k){return s(),a("div",null,u)}var g=n(c,[["render",r],["__file","cloud-session.html.vue"]]);export{g as default};