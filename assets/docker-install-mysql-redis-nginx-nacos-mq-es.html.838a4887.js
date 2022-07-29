import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as o,b as n,e,d as s,a as i,r as l}from"./app.c37b87a5.js";const p={},r={id:"csdn-\u535A\u5BA2\u5730\u5740",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#csdn-\u535A\u5BA2\u5730\u5740","aria-hidden":"true"},"#",-1),u=s(),k={href:"https://blog.csdn.net/qq_42476834/article/details/112675953",target:"_blank",rel:"noopener noreferrer"},v=s("csdn \u535A\u5BA2\u5730\u5740"),m=i(`<h1 id="docker\u5B89\u88C5-mysql\u3001redis\u3001nginx\u3001nacos\u3001es-kibana\u3001seata" tabindex="-1"><a class="header-anchor" href="#docker\u5B89\u88C5-mysql\u3001redis\u3001nginx\u3001nacos\u3001es-kibana\u3001seata" aria-hidden="true">#</a> docker\u5B89\u88C5 MySQL\u3001Redis\u3001Nginx\u3001nacos\u3001es+kibana\u3001seata</h1><p>docker\u684C\u9762\u955C\u50CF\u52A0\u901F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">&quot;https://04eo9xup.mirror.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;https://098cc8006500f4db0f2fc01937bbce40.mirror.swr.myhuaweicloud.com&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>--name=&quot;\u5BB9\u5668\u65B0\u540D\u5B57&quot;\uFF1A\u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\uFF1B -i\uFF1A\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E-t\u6216\u8005-d\u540C\u65F6\u4F7F\u7528\uFF1B -t\uFF1A\u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E-i\u540C\u65F6\u4F7F\u7528\uFF1B -d: \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF1B -P: \u968F\u673A\u7AEF\u53E3\u6620\u5C04\uFF0C\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u7684\u7AEF\u53E3 -p: \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u4E3B\u673A(\u5BBF\u4E3B)\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3</p></blockquote><h2 id="mysql-5-7-x" tabindex="-1"><a class="header-anchor" href="#mysql-5-7-x" aria-hidden="true">#</a> mysql:5.7.x</h2><p>https://hub.docker.com/search?q=mysql&amp;type=image</p><blockquote><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/mysql:5.7.38</p></blockquote><p>\u67E5\u770B\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kong:/data/software<span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mysql               <span class="token number">5.7</span>.38              697daaecf703        <span class="token number">16</span> hours ago        448MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u521B\u5EFA\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E /etc/mysql/my.cnf \u548C /etc/mysql/conf.d/my.cnf \u4E0E\u8BBE\u7F6E\u4ECE\u540E\u8005\u91C7\u53D6\u4F18\u5148\u3002</span>
<span class="token comment">################################ Linux\u7AEF #################################</span>
<span class="token function">docker</span> run -p <span class="token number">3306</span>:3306 --name mysql <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
-d registry.cn-chengdu.aliyuncs.com/jinfang/mysql:5.7.38 <span class="token punctuation">\\</span>
--character-set-server<span class="token operator">=</span>utf8mb4 <span class="token punctuation">\\</span>
--collation-server<span class="token operator">=</span>utf8mb4_general_ci <span class="token punctuation">\\</span>
--symbolic-links<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">\\</span>
--max_connections<span class="token operator">=</span><span class="token number">1000</span> <span class="token punctuation">\\</span>
--explicit_defaults_for_timestamp<span class="token operator">=</span>true
<span class="token comment">################################## window\u7AEF ###############################</span>
 <span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
 OPTIONS:	-a -e -c -d -p -P -m
 
<span class="token comment">#################################################################</span>

<span class="token comment"># \u4F7F\u7528config</span>
<span class="token function">docker</span> run -p <span class="token number">3306</span>:3306 --name mysql -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>mysql<span class="token punctuation">\\</span>data:/var/lib/mysql -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>mysql<span class="token punctuation">\\</span>conf:/etc/mysql/ --restart<span class="token operator">=</span>always -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root -d registry.cn-chengdu.aliyuncs.com/jinfang/mysql:5.7.38

<span class="token comment"># \u4F7F\u7528\u547D\u4EE4\u914D\u7F6E\uFF08\u63A8\u8350\uFF09</span>
<span class="token function">docker</span> run -p <span class="token number">33061</span>:3306 --name mysql -v E:<span class="token punctuation">\\</span><span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span><span class="token punctuation">\\</span>mysql<span class="token punctuation">\\</span><span class="token punctuation">\\</span>log:/var/log/mysql -v E:<span class="token punctuation">\\</span><span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span><span class="token punctuation">\\</span>mysql<span class="token punctuation">\\</span><span class="token punctuation">\\</span>data:/var/lib/mysql --restart<span class="token operator">=</span>always -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root -d registry.cn-chengdu.aliyuncs.com/jinfang/mysql:5.7.38 --character-set-server<span class="token operator">=</span>utf8mb4 --collation-server<span class="token operator">=</span>utf8mb4_general_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E3B\u673A\u91CC\u914D\u7F6Emysql:</p><p>/docker/mysql/conf$ sudo vim my.cnf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default_character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8mb4

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token comment">#log-bin=mysql-bin</span>
<span class="token comment">#server-id=1</span>
<span class="token comment">#binlog_format=ROW</span>
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET collation_connection=utf8mb4_general_ci&#39;</span>
<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET NAMES utf8mb4&#39;</span>
character-set-server<span class="token operator">=</span>utf8mb4
collation-server<span class="token operator">=</span>utf8mb4_general_ci
skip-character-set-client-handshake
skip-name-resolve
default-storage-engine<span class="token operator">=</span>INNODB
symbolic-links<span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">1000</span>
<span class="token assign-left variable">explicit_defaults_for_timestamp</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542FMySQL\u5BB9\u5668\uFF0C\u5BB9\u5668\u67E5\u770B\uFF1Adocker exec -it mysql /bin/bash</p><h2 id="redis-buster" tabindex="-1"><a class="header-anchor" href="#redis-buster" aria-hidden="true">#</a> redis:buster</h2><p>\u4F7F\u7528\u6559\u7A0B\uFF1Ahttps://hub.docker.com/_/redis?tab=description</p><blockquote><p>docker pull redis:buster docker pull redis:latest</p><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest</p><p>docker tag redis:latest registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest</p><p>docker push registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest</p></blockquote><p>\u67E5\u770B\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kong:/data/software<span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mysql               <span class="token number">5.7</span>.38              697daaecf703        <span class="token number">16</span> hours ago        448MB
redis               buster              ef47f3b6dc11        <span class="token number">17</span> hours ago        104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /mydoc/redis/conf
<span class="token function">touch</span> /mydoc/redis/conf/redis.conf
<span class="token comment">#################linux</span>
<span class="token function">docker</span> run -p <span class="token number">6491</span>:6379 --name redis <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/redis/data:/data <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
-d registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest redis-server /etc/redis/redis.conf
<span class="token comment">#################window</span>
<span class="token function">docker</span> run -p <span class="token number">6491</span>:6379 --name redis --restart<span class="token operator">=</span>always -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>redis<span class="token punctuation">\\</span>data:/data -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>redis<span class="token punctuation">\\</span>conf<span class="token punctuation">\\</span>redis.conf:/etc/redis/redis.conf -d registry.cn-chengdu.aliyuncs.com/jinfang/redis:latest redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:6379 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:6379: bind: An attempt was made to access a socket in a way forbidden by its access permissions.</p></blockquote><h2 id="docker-\u7AEF\u53E3\u5360\u7528\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#docker-\u7AEF\u53E3\u5360\u7528\u95EE\u9898" aria-hidden="true">#</a> docker \u7AEF\u53E3\u5360\u7528\u95EE\u9898</h2><p>\u67E5\u770BTCP\uFF1Anetsh interface ipv4 show excludedportrange protocol=tcp</p><pre><code>  \u5F00\u59CB\u7AEF\u53E3    \u7ED3\u675F\u7AEF\u53E3
 --------  ----------
  5891        5990
  5991        6090
  6091        6190
  6191        6290
  6291        6390
  6391        6490
</code></pre><p>\u66F4\u6539\uFF1Adocker run -p 6491:6379</p><p>\u67E5\u770B\u5BB9\u5668</p><p>docker logs --since 30m redis</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kong:/data/software<span class="token comment"># docker ps -a</span>
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
ce812650e93c        redis:buster        <span class="token string">&quot;docker-entrypoint.s\u2026&quot;</span>   <span class="token number">15</span> seconds ago      Up <span class="token number">13</span> seconds       <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uFF08\u5B58\u5728\u95EE\u9898\uFF1A\u91CD\u542F\u540E\u6570\u636E\u6E05\u7A7A\uFF09\u6240\u4EE5\u8981</p><p>-- \u6301\u4E45\u5316</p><p>vim /mydoc/redis/conf/redis.conf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u767B\u9646\u5BB9\u5668\uFF0C\u767B\u9646redis\u5BA2\u6237\u7AEF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kong:/mydoc<span class="token comment"># docker exec -it f04aeda2074b redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> a val_123
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get a
<span class="token string">&quot;val_123&quot;</span>

\u9000\u51FA-\u91CD\u542F
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exit</span>
root@kong:/mydoc<span class="token comment"># docker restart redis</span>
redis
root@kong:/mydoc<span class="token comment"># docker exec -it 53466246e9a2 redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get a
<span class="token string">&quot;val_123&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redisinsight-web\u7AEF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#redisinsight-web\u7AEF\u7BA1\u7406" aria-hidden="true">#</a> redisinsight web\u7AEF\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">8001</span>:8001 --name redisinsight --restart<span class="token operator">=</span>always -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>redisinsight:/db -d registry.cn-chengdu.aliyuncs.com/jinfang/redisinsight:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://127.0.0.1:8001/</p><h2 id="nginx-perl" tabindex="-1"><a class="header-anchor" href="#nginx-perl" aria-hidden="true">#</a> nginx:perl</h2><p>mkdir -p nginx/conf | logs</p><blockquote><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/nginx:perl</p></blockquote><p>\u65E5\u5FD7\u683C\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$time_iso8601
172.17.0.1 - - [2022-01-20T03:13:28+00:00] 

autoindex_localtime on;
172.17.0.1 - - [2022-01-20T03:16:05+00:00]

$time_local
172.17.0.1 - - [20/Jan/2022:03:05:54 +0000]

$time_iso8601+\u81EA\u5B9A\u4E49\u683C\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##############window</span>
<span class="token function">docker</span> run --name nginx -d -p <span class="token number">80</span>:80 --restart<span class="token operator">=</span>always -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nginx<span class="token punctuation">\\</span>html:/usr/share/nginx/html -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nginx<span class="token punctuation">\\</span>conf.d:/etc/nginx/conf.d -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nginx<span class="token punctuation">\\</span>conf/nginx.conf:/etc/nginx/nginx.conf -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nginx<span class="token punctuation">\\</span>logs:/var/log/nginx registry.cn-chengdu.aliyuncs.com/jinfang/nginx:perl
<span class="token comment">##############linux</span>
<span class="token function">docker</span> run --name nginx -d -p <span class="token number">80</span>:80  <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nginx/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nginx/logs:/var/log/nginx registry.cn-chengdu.aliyuncs.com/jinfang/nginx:perl

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>docker logs --tail=&quot;10&quot; nginx</p><p>docker exec -it nginx /bin/bash</p></blockquote><p>E:\\docker\\nginx\\conf\\nginx.conf</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment">#user  nginx;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>       /etc/nginx/mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
	
    <span class="token comment">## $time_iso8601\u3001$time_local</span>
	<span class="token directive"><span class="token keyword">log_format</span>  main  <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_iso8601]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
					  <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
                      <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">log_format</span>  mylog <span class="token string">&#39;{&quot;date_time&quot;: &quot;<span class="token variable">$year</span>-<span class="token variable">$month</span>-<span class="token variable">$day</span> <span class="token variable">$hour</span>:<span class="token variable">$minutes</span>:<span class="token variable">$seconds</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;host&quot;: &quot;<span class="token variable">$server_addr</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;client_ip&quot;: &quot;<span class="token variable">$remote_addr</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;client_id&quot;: &quot;<span class="token variable">$remote_user</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;url&quot;: &quot;<span class="token variable">$request_uri</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;request&quot;: &quot;<span class="token variable">$request</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;referer&quot;: &quot;<span class="token variable">$http_referer</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;request_time&quot;: &quot;<span class="token variable">$request_time</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;status&quot;: &quot;<span class="token variable">$status</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;size&quot;: &quot;<span class="token variable">$body_bytes_sent</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;info&quot;: &quot;<span class="token variable">$http_user_agent</span>&quot;,&#39;</span>
                      <span class="token string">&#39;&quot;x_forwarded_for&quot;: &quot;<span class="token variable">$http_x_forwarded_for</span>&quot;&#39;</span>
                      <span class="token string">&#39;}&#39;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token comment">#tcp_nopush     on;</span>
	<span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

	<span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">50m</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">256k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">3m</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">3m</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">300s</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">300s</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">300s</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_ignore_client_abort</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarder-For <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>E:\\docker\\nginx\\conf.d\\\u81EA\u5DF1\u7684\u914D\u7F6E\u6587\u4EF6.conf</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> util_server</span> <span class="token punctuation">{</span> 
    <span class="token directive"><span class="token keyword">server</span> 192.168.101.4:51320</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> util_dev_server</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.101.4:51321</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">upstream</span> util_test_server</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 192.168.101.4:51322</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  www.util.cn</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/time.txt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/util.log  mylog</span><span class="token punctuation">;</span>	<span class="token comment"># buffer=32k;</span>
    
    <span class="token directive"><span class="token keyword">location</span> /util/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://util_server/util/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /util-dev/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://util_dev_server/util-dev/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /util-test/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://util_test_server/-util-test/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	
	<span class="token comment">#error_page  404              /404.html;</span>

    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>time.txt</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if ($time_iso8601 ~ &quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;) {
	set $year $1;
	set $month $2;
	set $day $3;
	set $hour $4;
	set $minutes $5;
	set $seconds $6;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8DE8\u57DF : \u5728server location\u4E0B\u6DFB\u52A0add_header</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Headers X-Requested-With;
add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> nacos</h2>`,56),b=s("\u5F53\u524D\u63A8\u8350\u7684\u7A33\u5B9A\u7248\u672C\u4E3A1.4.x\u62162.0.x\u3002"),g={href:"https://nacos.io/zh-cn/docs/quick-start.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u5B98\u7F51\u6587\u6863"),f={href:"https://blog.csdn.net/qq_42476834/article/details/121149424",target:"_blank",rel:"noopener noreferrer"},y=s("\u63A8\u8350\u53C2\u8003\uFF1Adocker\u5B89\u88C5nacos2.0.x + mysql5.7"),_={href:"https://hub.docker.com/r/nacos/nacos-server",target:"_blank",rel:"noopener noreferrer"},q=s("docker \u955C\u50CF"),x=i(`<blockquote><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:1.4.2</p><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:2.0.3</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-----------------------------------
window
-----------------------------------
<span class="token comment">############\u4F7F\u7528\u914D\u7F6E\u9879</span>
<span class="token function">docker</span> run --env <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone --name nacos --restart<span class="token operator">=</span>always -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>data:/home/nacos/data -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>logs:/home/nacos/logs -e <span class="token assign-left variable">PREFER_HOST_MODE</span><span class="token operator">=</span>ip -e <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql -e <span class="token assign-left variable">MYSQL_DATABASE_NUM</span><span class="token operator">=</span><span class="token number">1</span> -e <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.101.4 -e <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> -e <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos_config -e <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root -e <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span>root -d -p <span class="token number">8848</span>:8848 registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:1.4.2
<span class="token comment">############\u4F7F\u7528\u672C\u5730config\u6587\u4EF6\u914D\u7F6E</span>
<span class="token function">docker</span> run --env <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone --name nacos --restart<span class="token operator">=</span>always -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>conf:/home/nacos/conf -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>data:/home/nacos/data -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>logs:/home/nacos/logs -d -p <span class="token number">8848</span>:8848 registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:1.4.2


-----------------------------------
Linux
-----------------------------------
<span class="token function">docker</span> run --env <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone  --name nacos <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nacos/data:/home/nacos/data <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">SPRING_DATASOURCE_PLATFORM</span><span class="token operator">=</span>mysql <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_DATABASE_NUM</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_HOST</span><span class="token operator">=</span><span class="token number">192.168</span>.101.4 <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_PORT</span><span class="token operator">=</span><span class="token number">3306</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_DB_NAME</span><span class="token operator">=</span>nacos_config <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_USER</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_SERVICE_PASSWORD</span><span class="token operator">=</span>root <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">JVM_XMS</span><span class="token operator">=</span>1g <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">JVM_XMX</span><span class="token operator">=</span>1g <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">JVN_XMN</span><span class="token operator">=</span>512m <span class="token punctuation">\\</span>
-d -p <span class="token number">8848</span>:8848 registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:1.4.2
<span class="token comment">############\u4F7F\u7528\u672C\u5730config\u6587\u4EF6\u914D\u7F6E</span>
<span class="token function">docker</span> run --env <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone --name nacos <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nacos/conf:/home/nacos/conf <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nacos/data:/home/nacos/data <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/nacos/logs:/home/nacos/logs <span class="token punctuation">\\</span>
-d -p <span class="token number">8848</span>:8848 registry.cn-chengdu.aliyuncs.com/jinfang/nacos-server:1.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>docker exec -it nacos /bin/bash</p><p>docker exec -it web /bin/bash</p></blockquote><p>\u767B\u9646\uFF1Ahttp://localhost:8848/nacos \u8D26\u53F7\u3001\u5BC6\u7801\uFF1Anacos</p><h2 id="rabbitmq-3-8-x-management" tabindex="-1"><a class="header-anchor" href="#rabbitmq-3-8-x-management" aria-hidden="true">#</a> rabbitmq:3.8.x-management</h2><p>https://www.rabbitmq.com/networking.html</p><p>\u4E0B\u8F7D\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.9.20-management
-----------
<span class="token function">docker</span> pull rabbitmq:3.8.34-management
<span class="token function">docker</span> tag rabbitmq:3.8.34-management registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.8.34-management
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.8.34-management
-----------
<span class="token function">docker</span> pull rabbitmq:3.9.20-management
<span class="token function">docker</span> tag rabbitmq:3.9.20-management registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.9.20-management
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.9.20-management
-----------
<span class="token function">docker</span> pull rabbitmq:3.10.5-management
<span class="token function">docker</span> tag rabbitmq:3.10.5-management registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.10.5-management
<span class="token function">docker</span> push registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.10.5-management
--------------------
<span class="token function">docker</span> rmi rabbitmq:3.8.34-management
<span class="token function">docker</span> rmi rabbitmq:3.9.20-management
<span class="token function">docker</span> rmi rabbitmq:3.10.5-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --name rabbitmq3.9.20 --restart<span class="token operator">=</span>always -p <span class="token number">5671</span>:5671 -p <span class="token number">5672</span>:5672 -p <span class="token number">4369</span>:4369 -p <span class="token number">25672</span>:25672 -p <span class="token number">15672</span>:15672 registry.cn-chengdu.aliyuncs.com/jinfang/rabbitmq:3.9.20-management

<span class="token number">4369</span>, <span class="token number">25672</span> <span class="token punctuation">(</span>Erlang\u53D1\u73B0<span class="token operator">&amp;</span>\u96C6\u7FA4\u7AEF\u53E3<span class="token punctuation">)</span>
<span class="token number">5672</span>, <span class="token number">5671</span> <span class="token punctuation">(</span>AMQP\u7AEF\u53E3<span class="token punctuation">)</span>
<span class="token number">15672</span> <span class="token punctuation">(</span>web\u7BA1\u7406\u540E\u53F0\u7AEF\u53E3<span class="token punctuation">)</span>
<span class="token number">61613</span>, <span class="token number">61614</span> <span class="token punctuation">(</span>STOMP\u534F\u8BAE\u7AEF\u53E3<span class="token punctuation">)</span>
<span class="token number">1883</span>, <span class="token number">8883</span> <span class="token punctuation">(</span>MQTT\u534F\u8BAE\u7AEF\u53E3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>http://localhost:15672/#/ \u8D26\u53F7\uFF1Aguest</p><h2 id="elasticsearch-kibana" tabindex="-1"><a class="header-anchor" href="#elasticsearch-kibana" aria-hidden="true">#</a> elasticsearch+kibana</h2><p>\u5B89\u88C5</p><p>https://www.elastic.co/cn/downloads/elasticsearch#ga-release</p><blockquote><p>docker pull elasticsearch:7.17.4</p><p>docker pull kibana:7.17.4</p></blockquote><blockquote><p>docker tag elasticsearch:7.17.4 registry.cn-chengdu.aliyuncs.com/jinfang/elasticsearch:7.17.4</p><p>docker push registry.cn-chengdu.aliyuncs.com/jinfang/elasticsearch:7.17.4</p><p>docker rmi elasticsearch:7.17.4</p><hr><p>docker tag kibana:7.17.4 registry.cn-chengdu.aliyuncs.com/jinfang/kibana:7.17.4</p><p>docker push registry.cn-chengdu.aliyuncs.com/jinfang/kibana:7.17.4</p><p>docker rmi kibana:7.17.4</p></blockquote><blockquote><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/elasticsearch:7.17.4 \u5B58\u50A8\u548C\u68C0\u7D22\u6570\u636E</p><p>docker pull registry.cn-chengdu.aliyuncs.com/jinfang/kibana:7.17.4 \u53EF\u89C6\u5316\u6570\u636E</p></blockquote><p>\u914D\u7F6E</p><h3 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> elasticsearch</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">###############linux</span>
<span class="token function">mkdir</span> -p /data/docker/elasticsearch/config
<span class="token function">mkdir</span> -p /data/docker/elasticsearch/data
<span class="token function">mkdir</span> -p /data/docker/elasticsearch/plugins
<span class="token function">mkdir</span> -p /data/docker/elasticsearch/logs
<span class="token function">chmod</span> -R <span class="token number">775</span> /data/docker/elasticsearch
------------------------------------------------
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;&gt;</span> /data/docker/elasticsearch/config/elasticsearch.yml
------------------------------------------------
<span class="token function">docker</span> run --name es -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 -e <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx1g&quot;</span> <span class="token punctuation">\\</span>
--restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
-v /media/jf123/deepin/rj/docker/elasticsearch/logs:/usr/share/elasticsearch/logs <span class="token punctuation">\\</span>
-d registry.cn-chengdu.aliyuncs.com/jinfang/elasticsearch:7.17.4

<span class="token comment">###############window</span>
<span class="token function">docker</span> run --name es --restart<span class="token operator">=</span>always -p <span class="token number">9200</span>:9200 -p <span class="token number">9300</span>:9300 -e <span class="token string">&quot;discovery.type=single-node&quot;</span> -e <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx1g&quot;</span> -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>elasticsearch<span class="token punctuation">\\</span>config<span class="token punctuation">\\</span>elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>elasticsearch<span class="token punctuation">\\</span>data:/usr/share/elasticsearch/data -v E:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>elasticsearch<span class="token punctuation">\\</span>plugins:/usr/share/elasticsearch/plugins -d registry.cn-chengdu.aliyuncs.com/jinfang/elasticsearch:7.17.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>elasticsearch.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">http.host</span><span class="token punctuation">:</span> 0.0.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://localhost:9200</p><p>http://localhost:9200/_cat/nodes</p><h3 id="kibana" tabindex="-1"><a class="header-anchor" href="#kibana" aria-hidden="true">#</a> kibana</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name kibana --restart<span class="token operator">=</span>always -e <span class="token string">&quot;ELASTICSEARCH_HOSTS=http://192.168.0.5:9200&quot;</span> -p <span class="token number">5601</span>:5601 -d registry.cn-chengdu.aliyuncs.com/jinfang/kibana:7.17.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://localhost:5601</p><p>kibana.yml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kibana<span class="token punctuation">:</span>7.17.4
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./kibana.yml<span class="token punctuation">:</span>/usr/share/kibana/config/kibana.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ik-\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#ik-\u5206\u8BCD\u5668" aria-hidden="true">#</a> ik \u5206\u8BCD\u5668</h3><p>\u4E0B\u8F7D\uFF1Ahttps://github.com/medcl/elasticsearch-analysis-ik/releases</p><p>https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.4/elasticsearch-analysis-ik-7.17.4.zip</p><p>\u89E3\u538B\u5230es\uFF1Aplugins</p><p>\u91CD\u542F es</p>`,34);function w(E,S){const a=l("ExternalLinkIcon");return c(),o("div",null,[n("h1",r,[d,u,n("a",k,[v,e(a)])]),m,n("p",null,[b,n("a",g,[h,e(a)]),n("a",f,[y,e(a)]),n("a",_,[q,e(a)])]),x])}var A=t(p,[["render",w],["__file","docker-install-mysql-redis-nginx-nacos-mq-es.html.vue"]]);export{A as default};
