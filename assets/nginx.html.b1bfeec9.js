import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.c37b87a5.js";const e={},i=t(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h2 id="\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u6307\u4EE4</h2><ol><li><strong>\u91CD\u542F</strong>\uFF1A./sbin/nginx -s quit &amp;&amp; ./sbin/nginx</li><li><strong>\u52A0\u8F7D\u914D\u7F6E</strong>\uFF1A./sbin/nginx -s reload</li><li><strong>\u9000\u51FA</strong>\uFF1A ./sbin/nginx -s quit</li><li><strong>\u542F\u52A8</strong>\uFF1A./sbin/nginx</li><li><strong>\u68C0\u67E5\u6587\u4EF6</strong>\uFF1A./sbin/nginx -t</li><li><strong>\u67E5\u770B\u670D\u52A1</strong>\uFF1Aps -ef | grep nginx</li></ol><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="http\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#http\u914D\u7F6E" aria-hidden="true">#</a> http\u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>http <span class="token punctuation">{</span>
  <span class="token comment">#\u9690\u85CFversion</span>
  server_tokens off;

  log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39; <span class="token punctuation">}</span>&#39;;

  keepalive_timeout  65;
  client_max_body_size 50m;
  <span class="token comment">#\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570,\u53EF\u4EE5\u7406\u89E3\u4E3A\u4FDD\u5B58\u5230\u672C\u5730\u518D\u4F20\u7ED9\u7528\u6237</span>
  client_body_buffer_size 256k;
  client_header_timeout 3m;
  client_body_timeout 3m;
  send_timeout 3m;
  <span class="token comment">#\u4EE3\u7406\u914D\u7F6E\u53C2\u6570</span>
  <span class="token comment">#nginx \u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
  proxy_connect_timeout 300s;
  <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
  proxy_read_timeout 300s;
  proxy_send_timeout 300s;
  <span class="token comment">#\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
  proxy_buffer_size 64k;
  <span class="token comment">#proxy_buffers \u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u5728 32k \u4EE5\u4E0B\u7684\u8BDD\uFF0C\u8FD9\u6837\u8BBE\u7F6E</span>
  proxy_buffers 4 32k;
  <span class="token comment">#\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
  proxy_busy_buffers_size 64k;
  <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECE upstream \u670D\u52A1\u5668\u4F20\u9012\u8BF7\u6C42\uFF0C\u800C\u4E0D\u7F13\u51B2\u5230\u78C1\u76D8</span>
  proxy_temp_file_write_size 64k;
  <span class="token comment">#\u4E0D\u5141\u8BB8\u4EE3\u7406\u7AEF\u4E3B\u52A8\u5173\u95ED\u8FDE\u63A5</span>
  proxy_ignore_client_abort on;
  <span class="token comment">## \u53EF\u4EE5\u653E\u5230\u5177\u4F53\u7684 location</span>
  proxy_set_header Host $host;
  proxy_set_header X<span class="token punctuation">-</span>Forwarder<span class="token punctuation">-</span>For $remote_addr;

  include /etc/nginx/conf.d/<span class="token important">*.conf;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65E5\u5FD7-\u81EA\u5B9A\u4E49\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7-\u81EA\u5B9A\u4E49\u683C\u5F0F" aria-hidden="true">#</a> \u65E5\u5FD7+\u81EA\u5B9A\u4E49\u683C\u5F0F</h3><p>\u83B7\u53D6\u4E0D\u5230\u7684\u503C\uFF1A\u4EE5 - \u4EE3\u66FF</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>http<span class="token punctuation">{</span>
  <span class="token comment">## $time_iso8601\u3001$time_local</span>
  log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
<span class="token comment">#172.17.0.1 - - [20/Jan/2022:03:05:54 +0000] &quot;GET /codeutil/get/log HTTP/1.1&quot; 200 19</span>
<span class="token comment">#&quot;-&quot; &quot;ApiPOST Runtime +https://www.apipost.cn&quot; &quot;-&quot;</span>
<span class="token comment">#172.17.0.1 - - [2022-01-20T04:21:16+00:00] &quot;GET /codeutil/get/log HTTP/1.1&quot; 200 19</span>
<span class="token comment">#&quot;-&quot; &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0&quot; &quot;-&quot;</span>

log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39; <span class="token punctuation">}</span>&#39;;
<span class="token comment">#{&quot;date_time&quot;: &quot;2022-01-20 06:25:05&quot;,&quot;host&quot;: &quot;172.17.0.9&quot;,&quot;client_ip&quot;: &quot;172.17.0.1&quot;,&quot;client_id&quot;: &quot;-&quot;,&quot;url&quot;:&quot;/codeutil/get/log&quot;,</span>
<span class="token comment">#&quot;request&quot;: &quot;GET /codeutil/get/log HTTP/1.1&quot;,&quot;referer&quot;: &quot;-&quot;,&quot;request_time&quot;: &quot;0.004&quot;,&quot;status&quot;: &quot;200&quot;,&quot;size&quot;: &quot;19&quot;,</span>
<span class="token comment">#&quot;info&quot;: &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0&quot;,&quot;x_forwarded_for&quot;: &quot;-&quot;}</span>

  server<span class="token punctuation">{</span>
      <span class="token comment">### \u8FD9\u91CC\u4EC5\u4EC5\u662F\u5F53\u524D\u914D\u7F6E</span>
      include /etc/nginx/conf.d/time.txt;
      <span class="token comment">#\u628Aif(){}\u62BD\u79BB\u5230time.txt</span>
      <span class="token comment">#if ($time_iso8601 ~ &quot;^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})&quot;) {</span>
      <span class="token comment">#  set $year $1;</span>
      <span class="token comment">#  set $month $2;</span>
      <span class="token comment">#  set $day $3;</span>
      <span class="token comment">#  set $hour $4;</span>
      <span class="token comment">#  set $minutes $5;</span>
      <span class="token comment">#  set $seconds $6;</span>
      <span class="token comment">#}</span>
      access_log  /var/log/nginx/my.log  mylog; <span class="token comment"># buffer=32k;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u793A\u4F8B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>$server_addr</td><td>172.17.0.9</td><td>\u670D\u52A1\u7AEFIP\u5730\u5740</td></tr><tr><td>$remote_addr,$http_x_forwarded_for</td><td>172.17.0.1,&quot;-&quot;</td><td>\u5BA2\u6237\u7AEFIP\u5730\u5740</td></tr><tr><td>$remote_user</td><td>-</td><td>\u5BA2\u6237\u7AEF\u7528\u6237</td></tr><tr><td>$time_iso8601</td><td>2022-01-20T03:25:07+00:00</td><td>\u65F6\u95F4</td></tr><tr><td>$time_local</td><td>20/Jan/2022:03:05:54 +0000</td><td>\u65F6\u95F4</td></tr><tr><td>$request</td><td>&quot;GET /codeutil/get/log HTTP/1.1&quot;</td><td>\u8BF7\u6C42</td></tr><tr><td>$request_time</td><td>12</td><td>\u8BF7\u6C42\u5904\u7406\u65F6\u95F4-\u79D2</td></tr><tr><td>$status</td><td>200</td><td>\u72B6\u6001</td></tr><tr><td>$body_bytes_sent</td><td>19</td><td>\u53D1\u9001\u7684\u6B63\u6587\u5B57\u8282</td></tr><tr><td>$http_referer</td><td>&quot;-&quot;</td><td>\u8BB0\u5F55\u4ECE\u54EA\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\u3002<br>\u573A\u666F\uFF1A\u9632\u76D7\u94FE\uFF08\u67D0\u7F51\u7AD9\u901A\u8FC7url\u5F15\u7528\u4E86\u4F60\u7684\u9875\u9762\uFF0C\u5F53\u7528\u6237\u5728\u6D4F\u89C8\u5668\u4E0A\u70B9\u51FBurl\u65F6\uFF0C<br>http\u8BF7\u6C42\u7684\u5934\u90E8\u4E2D\u4F1A\u901A\u8FC7referer\u5934\u90E8\uFF0C\u5C06\u8BE5\u7F51\u7AD9\u5F53\u524D\u9875\u9762\u7684url\u5E26\u4E0A\uFF0C<br>\u544A\u8BC9\u670D\u52A1\u5668\u672C\u6B21\u8BF7\u6C42\u662F\u7531\u8FD9\u4E2A\u9875\u9762\u53D1\u8D77\u7684\u3002\uFF09</td></tr><tr><td>$http_user_agent</td><td>&quot;ApiPOST Runtime +https://www.apipost.cn&quot;<br>&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0&quot;</td><td>\u8BB0\u5F55\u8C03\u7528\u7AEF\u3001\u8BBF\u95EE\u7AEF\u6D4F\u89C8\u5668\u76F8\u5173\u4FE1\u606F</td></tr></tbody></table><h3 id="https\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#https\u914D\u7F6E" aria-hidden="true">#</a> https\u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       443 ssl;
  server_name  www.xxx.cn;

  charset utf<span class="token punctuation">-</span>8;
  root html;
  index index.html index.htm;

  ssl_certificate /etc/nginx/conf.d/cert/www.xxx.cn.pem;
  ssl_certificate_key /etc/nginx/conf.d/cert/www.xxx.cn.key;

  ssl_session_timeout 5m;
  ssl_ciphers ECDHE<span class="token punctuation">-</span>RSA<span class="token punctuation">-</span>AES128<span class="token punctuation">-</span>GCM<span class="token punctuation">-</span>SHA256<span class="token punctuation">:</span>ECDHE<span class="token punctuation">:</span>ECDH<span class="token punctuation">:</span>AES<span class="token punctuation">:</span>HIGH<span class="token punctuation">:</span><span class="token tag">!NULL:</span><span class="token tag">!aNULL:</span><span class="token tag">!MD5:</span><span class="token tag">!ADH:</span><span class="token tag">!RC4;</span>
  <span class="token comment">#\u8868\u793A\u4F7F\u7528\u7684\u52A0\u5BC6\u5957\u4EF6\u7684\u7C7B\u578B\u3002</span>
  ssl_protocols TLSv1.1 TLSv1.2; <span class="token comment">#\u8868\u793A\u4F7F\u7528\u7684TLS\u534F\u8BAE\u7684\u7C7B\u578B\u3002 TLSv1 TLSv1.1 TLSv1.2</span>
  ssl_prefer_server_ciphers on;

  access_log  logs/https.www.xxx.log  mylog;

  <span class="token comment">#\u4EE3\u7406</span>
  location / <span class="token punctuation">{</span>
      proxy_pass https<span class="token punctuation">:</span>//www.xxx.cn/wwwvue/;
  <span class="token punctuation">}</span>
  location ^~/wwwvue/ <span class="token punctuation">{</span>
      alias   /data/xxxweb/wwwvue/;
      index	index.html index.htm;
      <span class="token comment"># vue\u89E3\u51B3\u5237\u65B0404\u95EE\u9898</span>
      try_files $uri $uri/ /$1/index.html last;
  <span class="token punctuation">}</span>
  location @rewrites <span class="token punctuation">{</span>
      rewrite ^/(wwwvue)/(.+)$ /$1/index.html last;
  <span class="token punctuation">}</span>
  <span class="token comment"># www \u6743\u9650\u7BA1\u7406\u7CFB\u7EDF\uFF1A\u540E\u7AEF</span>
  location /www/ <span class="token punctuation">{</span>
      proxy_pass https<span class="token punctuation">:</span>//xxx_server/www/;
  <span class="token punctuation">}</span>
  error_page  400 404              /40x.html;
  location = /40x.html <span class="token punctuation">{</span>
      root   html;
  <span class="token punctuation">}</span>
  error_page   500 502 503 504  /50x.html;
  location = /50x.html <span class="token punctuation">{</span>
      root   html;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EE3\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u914D\u7F6E" aria-hidden="true">#</a> \u4EE3\u7406\u914D\u7F6E</h3><h3 id="\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" aria-hidden="true">#</a> \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</h3><table><thead><tr><th>server\u6807\u7B7E</th><th>\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td>server 10.0.0.6:80</td><td>\u8D1F\u8F7D\u5747\u8861\u540E\u9762\u7684RS\u914D\u7F6E\uFF0C\u53EF\u4EE5\u662FIP\u6216\u57DF\u540D\uFF0C\u5982\u679C\u4E0D\u5199\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u662F80\u7AEF\u53E3\u3002\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0CIP\u53EF\u6362\u6210\u57DF\u540D\uFF0C\u901A\u8FC7DNS\u505A\u8D1F\u8F7D\u5747\u8861\u3002</td></tr><tr><td>weight=1</td><td>\u4EE3\u8868\u670D\u52A1\u5668\u7684\u6743\u91CD\uFF0C\u9ED8\u8BA4\u503C\u662F1\u3002\u6743\u91CD\u6570\u5B57\u8D8A\u5927\u8868\u793A\u63A5\u53D7\u7684\u8BF7\u6C42\u6BD4\u4F8B\u8D8A\u5927\u3002</td></tr><tr><td>max_fails=1</td><td>Nginx\u5C1D\u8BD5\u8FDE\u63A5\u540E\u7AEF\u4E3B\u673A\u5931\u8D25\u7684\u6B21\u6570\uFF0C\u8FD9\u4E2A\u6570\u503C\u662F\u914D\u7F6Eproxy_next_upstream\u3001fastcgi_next_upstream\u548Cmemcached_next_upstream\u4E09\u4E2A\u53C2\u6570\u6765\u4F7F\u7528\u7684\uFF0C<br>\u5F53Nginx\u63A5\u53D7\u540E\u7AEF\u670D\u52A1\u5668\u8FD4\u56DE\u8FD9\u4E09\u4E2A\u53C2\u6570\u5B9A\u4E49\u7684\u72B6\u6001\u7801\u65F6\uFF0C\u4F1A\u5C06\u8FD9\u4E2A\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u6B63\u5E38\u5DE5\u4F5C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u4F8B\u5982404\u3001502\u3001503\u3002max_fails\u7684\u9ED8\u8BA4\u503C\u662F1\uFF1B\u4F01\u4E1A\u573A\u666F\uFF1A\u5EFA\u8BAE2-3\u6B21\u3002</td></tr><tr><td>backup</td><td>\u70ED\u5907\u914D\u7F6E\uFF08RS\uFF09\u8282\u70B9\u7684\u9AD8\u53EF\u7528\uFF0C\u5F53\u671F\u9762\u6FC0\u6D3B\u7684RS\u90FD\u5931\u8D25\u540E\u4F1A\u81EA\u52A8\u542F\u7528\u70ED\u5907RS\u3002\u8FD9\u6807\u5FD7\u7740\u8FD9\u4E2A\u670D\u52A1\u5668\u4F5C\u4E3A\u5907\u4EFD\u670D\u52A1\u5668\uFF0C\u82E5\u4E3B\u670D\u52A1\u5668\u5168\u90E8\u5B95\u673A\u4E86\uFF0C\u5C31\u4F1A\u5411\u4ED6\u8F6C\u53D1\u8BF7\u6C42\uFF1B<br>\u6CE8\u610F\uFF1A\u5F53\u8D1F\u8F7D\u8C03\u5EA6\u7B97\u6CD5\u4E3Aip_hash\u65F6\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u5728\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u4E2D\u7684\u72B6\u6001\u4E0D\u80FD\u662Fweight\u548Cbackup\u3002</td></tr><tr><td>fail_timeout=10s</td><td>\u5728max_fails\u5B9A\u4E49\u7684\u5931\u8D25\u6B21\u6570\u540E\uFF0C\u8DDD\u79BB\u4E0B\u6B21\u68C0\u67E5\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u662F10s\uFF1B\u5982\u679Cmax_fails\u662F5\uFF0C\u4ED6\u5C31\u68C0\u6D4B5\u6B21\u3002\u5982\u679C5\u6B21\u90FD\u662F502\uFF0C\u90A3\u4E48\u4ED6\u5C31\u4F1A\u6839\u636Efail_timeout\u7684\u503C\uFF0C<br>\u7B49\u5F8510s\u518D\u53BB\u68C0\u67E5\uFF0C\u8FD8\u662F\u53EA\u68C0\u67E5\u4E00\u6B21\uFF0C\u5982\u679C\u6301\u7EED502\uFF0C\u5728\u4E0D\u91CD\u65B0\u52A0\u8F7Dnginx\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u969410s\u90FD\u53EA\u68C0\u6D4B\u4E00\u6B21\u3002\u5E38\u89C4\u4E1A\u52A1\uFF1A2-3\u79D2\u6BD4\u8F83\u5408\u7406\u3002</td></tr><tr><td>down</td><td>\u8FD9\u6807\u8BC6\u7740\u670D\u52A1\u5668\u6C38\u8FDC\u4E0D\u53EF\u7528\uFF0C\u8FD9\u4E2A\u53C2\u6570\u53EF\u914D\u5408ip_hash\u4F7F\u7528</td></tr></tbody></table><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>upstream www_server_pool <span class="token punctuation">{</span>
    server 10.0.0.7 weight=5;
    server 10.0.0.16 weight=10;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>upstream www_server <span class="token punctuation">{</span>
    server 10.0.0.5;   <span class="token comment">#\u8FD9\u4E00\u884C\u6807\u7B7E\u548C\u4E0B\u4E00\u884C\u662F\u7B49\u4EF7\u7684</span>
    server 10.0.0.6\uFF1A80 weight=1 max_fails=1 fails_timeout=10s; <span class="token comment">#\u6B64\u884C\u6807\u7B7E\u4E3A\u9ED8\u8BA4\u914D\u7F6E</span>
    server 10.0.0.7\uFF1A80 weight=1 max_fails=2  fails_timeout=10s backup;
    server 10.0.0.8\uFF1A80 weight=1 max_fails=3 fails_timeout=20s backup;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>upstream www_server_pool <span class="token punctuation">{</span>
    server www.test.com<span class="token punctuation">:</span>8080;
    server www.example.com weight=10;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5E38\u89C4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u914D\u7F6E" aria-hidden="true">#</a> \u5E38\u89C4\u914D\u7F6E</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>upstream www_server_pools <span class="token punctuation">{</span>
    server  172.16.1.16<span class="token punctuation">:</span>80 ;
    server  172.16.1.17<span class="token punctuation">:</span>80 ;
<span class="token punctuation">}</span>
 server <span class="token punctuation">{</span>
    listen 80;
    server_name www_server_pools;
        location / <span class="token punctuation">{</span>
            access_log logs/access.log main;
            proxy_pass http<span class="token punctuation">:</span>//www_server_pools;
            proxy_set_header Host $host;
            proxy_set_header X<span class="token punctuation">-</span>Forwarded<span class="token punctuation">-</span>For $remote_addr;
            proxy_redirect default;
            proxy_buffer_size 512k;
            proxy_buffers 6 512k;
            proxy_busy_buffers_size 512k;
            proxy_temp_file_write_size 512k;
            client_max_body_size 100m;
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72\u9879\u76EE</h2><h3 id="\u9759\u6001\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       80;
  server_name  static.xxx.cn;
  location ~ /(css<span class="token punctuation">|</span>data<span class="token punctuation">|</span>fronts<span class="token punctuation">|</span>img<span class="token punctuation">|</span>js<span class="token punctuation">|</span>common)/ <span class="token punctuation">{</span>
      root   /opt/static; <span class="token comment">#\u9759\u6001\u8D44\u6E90\u4F4D\u7F6E</span>
  <span class="token punctuation">}</span>

  location ~* \\.(gif<span class="token punctuation">|</span>jpg<span class="token punctuation">|</span>png<span class="token punctuation">|</span>swf<span class="token punctuation">|</span>flv)$ <span class="token punctuation">{</span>
      <span class="token comment"># \u767D\u540D\u5355\u9632\u76D7\u94FE</span>
      valid_referers none blocked 192.168.1.99 www.test.com  <span class="token important">*.jfedu.net;</span>
      root /usr/share/nginx/html;
      if ($invalid_referer) <span class="token punctuation">{</span>
        return 403;
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72-vue" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-vue" aria-hidden="true">#</a> \u90E8\u7F72 vue</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>server <span class="token punctuation">{</span>
  listen       80;
  server_name www.xxx.cn;
  charset utf<span class="token punctuation">-</span>8;
  access_log  /var/log/nginx/xxx.log  mylog;
  <span class="token comment">##########################################################</span>
  location / <span class="token punctuation">{</span>
      proxy_pass http<span class="token punctuation">:</span>//www.xxx.cn/demovue/;
  <span class="token punctuation">}</span>
  location ^~/demovue/ <span class="token punctuation">{</span>
      alias   /data/web/demovue/;
      index	index.html index.htm;
      try_files $uri $uri/ /$1/index.html last;
  <span class="token punctuation">}</span>
  location @rewrites <span class="token punctuation">{</span>
      rewrite ^/(demovue)/(.+)$ /$1/index.html last;
  <span class="token punctuation">}</span>
  <span class="token comment">##########################\u6216\u8005\u5982\u4E0B################################</span>
  location / <span class="token punctuation">{</span>
      root   /usr/share/nginx/html/demovue/;
      index	index.html index.htm;
      <span class="token comment"># \u89E3\u51B3vue\u53BB\u6389#\u90E8\u7F72\u5237\u65B0\u62A5\u9519</span>
      try_files $uri $uri/ /index.html;
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EE3\u7406java\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406java\u670D\u52A1" aria-hidden="true">#</a> \u4EE3\u7406java\u670D\u52A1</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u4EE3\u7406\u540E\u53F0\u7BA1\u740601</span>
    server <span class="token punctuation">{</span>
      listen       80;
      server_name  www.xxx.cn;
      charset utf<span class="token punctuation">-</span>8;
      access_log  logs/host.access.log  mylog;

      location /demo/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//192.168.3.2<span class="token punctuation">:</span>3655/;
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token comment">##########################\u6216\u8005\u5982\u4E0B################################</span>
    <span class="token comment"># \u4EE3\u7406\u540E\u53F0\u7BA1\u740602</span>
    <span class="token comment"># \u5FC5\u987B\u6307\u5B9A [ \u4E3B\u673AIP , \u670D\u52A1\u5668IP ] \u771F\u5B9EIP\uFF08\u9519\u8BEF\uFF1A127.0.0.1\uFF09</span>
    upstream demo_server <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51320;
    <span class="token punctuation">}</span>
    upstream demo_server_dev <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51321;
    <span class="token punctuation">}</span>
    upstream demo_server_test <span class="token punctuation">{</span>
        server 192.168.101.4<span class="token punctuation">:</span>51322;
    <span class="token punctuation">}</span>
    
    server <span class="token punctuation">{</span>
        listen       80;
        server_name  www.xxx.cn;
        charset utf<span class="token punctuation">-</span>8;
        access_log logs/host.access.log  mylog;
    
        location /demo/ <span class="token punctuation">{</span>
          <span class="token comment">##http://\u4EE3\u7406\u5217\u8868/\u81EA\u5DF1\u7684\u540E\u53F0\u540D\u79F0/;</span>
          proxy_pass http<span class="token punctuation">:</span>//demo_server/demo/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_server/javacode<span class="token punctuation">-</span>template/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>dev/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_dev_server/javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>dev/;
        <span class="token punctuation">}</span>
        location /javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>test/ <span class="token punctuation">{</span>
          proxy_pass http<span class="token punctuation">:</span>//javacode_util_test_server/javacode<span class="token punctuation">-</span>template<span class="token punctuation">-</span>test/;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B8C\u6574\u771F\u5B9E\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u771F\u5B9E\u6848\u4F8B" aria-hidden="true">#</a> \u5B8C\u6574\u771F\u5B9E\u6848\u4F8B</h2><p>nginx\\conf\\nginx.conf</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#user  nginx;</span>
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events <span class="token punctuation">{</span>
    worker_connections  1024;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
	server_tokens off;
    include       /etc/nginx/mime.types;
    default_type  application/octet<span class="token punctuation">-</span>stream;
	
    <span class="token comment">## $time_iso8601\u3001$time_local</span>
	log_format  main  &#39;$remote_addr <span class="token punctuation">-</span> $remote_user <span class="token punctuation">[</span>$time_iso8601<span class="token punctuation">]</span> &quot;$request&quot; &#39;
					  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    log_format  mylog &#39;<span class="token punctuation">{</span><span class="token key atrule">&quot;date_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;$year-$month-$day $hour:$minutes:$seconds&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;host&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$server_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_ip&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_addr&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;client_id&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$remote_user&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;url&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_uri&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;referer&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_referer&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;request_time&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$request_time&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;status&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$status&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;size&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$body_bytes_sent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;info&quot;<span class="token punctuation">:</span> <span class="token string">&quot;$http_user_agent&quot;</span><span class="token punctuation">,</span>&#39;
                      &#39;&quot;x_forwarded_for&quot;<span class="token punctuation">:</span> &quot;$http_x_forwarded_for&quot;&#39;
                      &#39;<span class="token punctuation">}</span>&#39;;

	
    sendfile        on;
	<span class="token comment">#tcp_nopush     on;</span>
	keepalive_timeout  65;

	client_max_body_size 50m;
	client_body_buffer_size 256k;
	client_header_timeout 3m;
	client_body_timeout 3m;
	proxy_connect_timeout 300s;
	proxy_read_timeout 300s;
	proxy_send_timeout 300s;
	proxy_buffer_size 64k;
	proxy_buffers 4 32k;
	proxy_busy_buffers_size 64k;
	proxy_temp_file_write_size 64k;
	proxy_ignore_client_abort on;
	proxy_set_header Host $host;
	proxy_set_header X<span class="token punctuation">-</span>Forwarder<span class="token punctuation">-</span>For $remote_addr;

    gzip  on;
    include /etc/nginx/conf.d/<span class="token important">*.conf;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\conf.d\\javacode.conf</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>upstream javacode_util_server <span class="token punctuation">{</span> 
    server 192.168.101.4<span class="token punctuation">:</span>51320;
<span class="token punctuation">}</span>
upstream javacode_util_dev_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>51321;
<span class="token punctuation">}</span>
upstream javacode_util_test_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>51322;
<span class="token punctuation">}</span>
upstream prod_api_server <span class="token punctuation">{</span>
    server 192.168.101.4<span class="token punctuation">:</span>8080;
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       80;
    server_name  www.javacode.cn;
    charset utf<span class="token punctuation">-</span>8;
    include /etc/nginx/conf.d/time.txt;
    access_log  /var/log/nginx/javacode.log  mylog;	<span class="token comment"># buffer=32k;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html/dist/;
        index	index.html index.htm;
        <span class="token comment"># \u89E3\u51B3vue\u53BB\u6389#\u90E8\u7F72\u5237\u65B0\u62A5\u9519</span>
        try_files $uri $uri/ /index.html;
    <span class="token punctuation">}</span>
    location /prod<span class="token punctuation">-</span>api/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//prod_api_server/;
    <span class="token punctuation">}</span>

    location /javacode<span class="token punctuation">-</span>util/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_server/javacode<span class="token punctuation">-</span>util/;
    <span class="token punctuation">}</span>
    location /javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>dev/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_dev_server/javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>dev/;
    <span class="token punctuation">}</span>
    location /javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>test/ <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span>//javacode_util_test_server/javacode<span class="token punctuation">-</span>util<span class="token punctuation">-</span>test/;
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    error_page   500 502 503 504  /50x.html;
    location = /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\conf.d\\time.txt</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>if ($time_iso8601 ~ &quot;^(\\d<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>)<span class="token punctuation">-</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">-</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)T(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">:</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)<span class="token punctuation">:</span>(\\d<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>)&quot;) <span class="token punctuation">{</span>
	set $year $1;
	set $month $2;
	set $day $3;
	set $hour $4;
	set $minutes $5;
	set $seconds $6;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx\\html</p><ul><li>50x.html</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>50x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>500\u670D\u52A1\u5668\u5F02\u5E38!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>404.html</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>404<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>An error occurred.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>404\uFF0C\u4F60\u7684\u8D44\u6E90\u98DE\u4E86\uFF01\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.html</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>ok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">body</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
            <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>\u52A0\u8F7DOK-666666666<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),l=[i];function p(o,c){return s(),a("div",null,l)}var r=n(e,[["render",p],["__file","nginx.html.vue"]]);export{r as default};
