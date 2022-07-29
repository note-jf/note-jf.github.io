import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,b as s,e,d as n,a as l,r as c}from"./app.c37b87a5.js";const d={},r=s("h2",{id:"git\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git\u914D\u7F6E","aria-hidden":"true"},"#"),n(" git\u914D\u7F6E")],-1),p={href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"},u=n("gitee ssh\u914D\u7F6E\u9875"),g={href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"},v=n("github ssh\u914D\u7F6E\u9875"),m=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token function">git</span> --version

<span class="token function">git</span> config --global user.name <span class="token string">&quot;jf&quot;</span>		\uFF0C\u8FD9\u91CC\u968F\u4FBF\u53D6
<span class="token function">git</span> config --global user.email <span class="token string">&quot;iskong9@163.com&quot;</span> \uFF0C\u8FD9\u91CC\u662F\u90AE\u7BB1
ssh-keygen -t rsa -b <span class="token number">4096</span> -C <span class="token string">&quot;iskong9@163.com&quot;</span> \u63093\u6B21\u56DE\u8F66\uFF0C\u521B\u5EFAssh\u514D\u5BC6

ssh-add ~/.ssh/id_rsa
<span class="token builtin class-name">eval</span> <span class="token variable"><span class="token variable">\`</span>ssh-agent -s<span class="token variable">\`</span></span>

<span class="token function">cat</span> ~/.ssh/id_rsa.pub
\u628Aid_rsa.pub\u5185\u5BB9\u590D\u5236\u5230\uFF1Agitee --<span class="token operator">&gt;</span> \u5B89\u5168\u8BBE\u7F6E --<span class="token operator">&gt;</span> SSH\u516C\u94A5 --<span class="token operator">&gt;</span> \u6DFB\u52A0\u516C\u94A5 --<span class="token operator">&gt;</span> \u628Aid_rsa.pub\u5185\u5BB9\u7C98\u8D34\u8FDB\u6765\u3002
<span class="token function">ssh</span> -T git@gitee.com \u8F93\u5165yes\u4EE5\u540E\u63D0\u4EA4\u4EE3\u7801\u5C31\u4E0D\u7528\u8F93\u5165\u8D26\u53F7\u5BC6\u7801
<span class="token function">ssh</span> -T git@github.com	\u8F93\u5165yes\u4EE5\u540E\u63D0\u4EA4\u4EE3\u7801\u5C31\u4E0D\u7528\u8F93\u5165\u8D26\u53F7\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F3A\u5236\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u63A8\u9001" aria-hidden="true">#</a> \u5F3A\u5236\u63A8\u9001</h2><p>https://blog.csdn.net/qq_42476834/article/details/108263267?spm=1001.2014.3001.5501</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin develop \u2013allow-unrelated-histories
<span class="token function">git</span> push -u origin develop -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>idea\u4E0B\u8F7D</p><p>https://download.jetbrains.8686c.com/idea/ideaIU-2020.3.4.exe</p><p>Git \u5168\u5C40\u8BBE\u7F6E:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;jf&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;iskong9@163.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA git \u4ED3\u5E93:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> javacode
<span class="token builtin class-name">cd</span> javacode
<span class="token function">git</span> init 
<span class="token function">touch</span> README.md
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/kong19/javacode.git
<span class="token function">git</span> push -u origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5DF2\u6709\u4ED3\u5E93?</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_git_repo
<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/kong19/javacode.git
<span class="token function">git</span> push -u origin <span class="token string">&quot;master&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(h,k){const a=c("ExternalLinkIcon");return t(),o("div",null,[r,s("p",null,[s("a",p,[u,e(a)]),s("a",g,[v,e(a)])]),m])}var q=i(d,[["render",b],["__file","git-setting.html.vue"]]);export{q as default};
