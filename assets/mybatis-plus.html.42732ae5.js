import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.c37b87a5.js";const e={},p=t(`<h1 id="\u6574\u5408mybatis-plus" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408mybatis-plus" aria-hidden="true">#</a> \u6574\u5408mybatis-plus</h1><h2 id="_1\u3001commen\u5F15\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1\u3001commen\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a> 1\u3001commen\u5F15\u5165\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--    \u5BFC\u5165mysql\u9A71\u52A8    --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6570\u636E\u6E90" aria-hidden="true">#</a> 2\u3001\u6570\u636E\u6E90</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##### application.yml</span>
    server:
      port: <span class="token number">8100</span>

    spring:
      <span class="token comment"># \u73AF\u5883 dev|test|prod</span>
      profiles:
        active: dev
    <span class="token comment">#mybatis-plus</span>
    mybatis-plus:
      mapper-locations: classpath:/mapper/**/*.xml
      <span class="token comment">#\u5B9E\u4F53\u626B\u63CF\uFF0C\u591A\u4E2Apackage\u7528\u9017\u53F7\u6216\u8005\u5206\u53F7\u5206\u9694</span>
      typeAliasesPackage: com.kong.yumall.product.entity
      global-config:
        <span class="token comment">#\u6570\u636E\u5E93\u76F8\u5173\u914D\u7F6E</span>
        db-config:
          <span class="token comment">#\u4E3B\u952E\u7C7B\u578B  AUTO:&quot;\u6570\u636E\u5E93ID\u81EA\u589E&quot;, INPUT:&quot;\u7528\u6237\u8F93\u5165ID&quot;, ID_WORKER:&quot;\u5168\u5C40\u552F\u4E00ID (\u6570\u5B57\u7C7B\u578B\u552F\u4E00ID)&quot;, UUID:&quot;\u5168\u5C40\u552F\u4E00ID UUID&quot;;</span>
          id-type: AUTO
          logic-delete-value: -1
          logic-not-delete-value: <span class="token number">0</span>
        banner: <span class="token boolean">false</span>
 <span class="token comment">##### application-dev.yml</span>
 	spring:
      datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        druid:
          driver-class-name: com.mysql.cj.jdbc.Driver
          url: jdbc:mysql://localhost:3306/yumall_pms?useUnicode<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">characterEncoding</span><span class="token operator">=</span>UTF-8<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>false
          username: root
          password: root
          initial-size: <span class="token number">10</span>
          max-active: <span class="token number">100</span>
          min-idle: <span class="token number">10</span>
          max-wait: <span class="token number">60000</span>
          pool-prepared-statements: <span class="token boolean">true</span>
          max-pool-prepared-statement-per-connection-size: <span class="token number">20</span>
          time-between-eviction-runs-millis: <span class="token number">60000</span>
          min-evictable-idle-time-millis: <span class="token number">300000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3\u3001\u6D4B\u8BD5id\u81EA\u589E" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6D4B\u8BD5id\u81EA\u589E" aria-hidden="true">#</a> 3\u3001\u6D4B\u8BD5id\u81EA\u589E</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BrandService</span> brandService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getAotuId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">BrandEntity</span> brandEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrandEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandEntity<span class="token punctuation">.</span><span class="token function">setBrandId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandEntity<span class="token punctuation">.</span><span class="token function">setLogo</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        brandService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>brandEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FDD\u5B58OK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
         * String eq\uFF1A =
         * int ge: &gt;=
         * int gt: &gt;
         * int le: &lt;=
         * int lt: &lt;
         */</span>
<span class="token comment">//        brandService.list(new QueryWrapper&lt;BrandEntity&gt;().gt(&quot;brand_id&quot;, 0));</span>
<span class="token comment">//        brandService.list(new QueryWrapper&lt;BrandEntity&gt;().eq(&quot;name&quot;, &quot;\u534E\u4E3Apro&quot;));</span>
        brandService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BrandEntity</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token string">&quot;brand_id&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ins<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ins<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4\u3001\u542F\u52A8controller\u6D4B\u8BD5-coupon" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u542F\u52A8controller\u6D4B\u8BD5-coupon" aria-hidden="true">#</a> 4\u3001\u542F\u52A8controller\u6D4B\u8BD5\uFF1Acoupon</h2><p>http://localhost:8400/coupon/coupon/info/1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{&quot;msg&quot;:&quot;success&quot;,&quot;code&quot;:0,&quot;coupon&quot;:{&quot;id&quot;:1,&quot;couponType&quot;:null,&quot;couponImg&quot;:&quot;images-images-images-imagesimages&quot;,&quot;couponName&quot;:null,&quot;num&quot;:null,&quot;amount&quot;:null,&quot;perLimit&quot;:null,&quot;minPoint&quot;:null,&quot;startTime&quot;:null,&quot;endTime&quot;:null,&quot;useType&quot;:null,&quot;note&quot;:null,&quot;publishCount&quot;:null,&quot;useCount&quot;:null,&quot;receiveCount&quot;:null,&quot;enableStartTime&quot;:null,&quot;enableEndTime&quot;:null,&quot;code&quot;:null,&quot;memberLevel&quot;:null,&quot;publish&quot;:null}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),o=[p];function l(c,i){return s(),a("div",null,o)}var r=n(e,[["render",l],["__file","mybatis-plus.html.vue"]]);export{r as default};
