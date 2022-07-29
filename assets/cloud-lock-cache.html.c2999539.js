const e=JSON.parse('{"key":"v-b0eacb26","path":"/java/cloud-lock-cache.html","title":"\u5206\u5E03\u5F0F\u9501\u3001\u7F13\u5B58","lang":"zh-CN","frontmatter":{"icon":"edit","title":"\u5206\u5E03\u5F0F\u9501\u3001\u7F13\u5B58","category":["Java","Cloud"],"date":"2020-05-12T00:00:00.000Z","tag":["lock","cache"],"summary":"\u7F13\u5B58\u4E00\u81F4\u6027 1. \u53CC\u5199\u6A21\u5F0F\uFF1A\u5199\u6570\u636E\u5E93\uFF0C\u5199\u7F13\u5B58 2. \u5931\u6548\u6A21\u5F0F\uFF1A\u7F13\u5B58\u5931\u6548\uFF08\u5220\u9664\u7F13\u5B58\uFF09\uFF0C\u5199\u6570\u636E\u5E93\\r\\" \u8BFB\u53D6\u7F13\u5B58\u6B65\u9AA4\u6570\u636E\u4E00\u81F4\u6027\u4E00\u822C\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u4E00\u65E6\u6D89\u53CA\u5230\u6570\u636E\u66F4\u65B0\uFF1A\u6570\u636E\u5E93\u548C\u7F13\u5B58\u66F4\u65B0\uFF0C\u5C31\u5BB9\u6613\u51FA\u73B0\u7F13\u5B58(Redis)\u548C\u6570\u636E\u5E93\uFF08MySQL\uFF09\u95F4\u7684\u6570\u636E\u4E00\u81F4\u6027\u95EE\u9898\u3002\\"\\r\\"\\"\\r\\" \u4E0D\u7BA1\u5148\u4FDD\u5B58\u5230MySQL\uFF0C\u8FD8\u662F\u5148\u4FDD\u5B58\u5230Redis\u90FD\u9762\u4E34\u7740\u4E00\u4E2A\u4FDD\u5B58\u6210\u529F\u800C\u53E6\u5916\u4E00\u4E2A\u4FDD\u5B58\u5931\u8D25\u7684\u60C5\u51B5\u3002\\"\\r","head":[["meta",{"property":"og:url","content":"https://note-jf.cn/java/cloud-lock-cache.html"}],["meta",{"property":"og:site_name","content":"note-jf"}],["meta",{"property":"og:title","content":"\u5206\u5E03\u5F0F\u9501\u3001\u7F13\u5B58"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://note-jf.cn/"}],["meta",{"property":"og:updated_time","content":"2022-07-26T06:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"\u5206\u5E03\u5F0F\u9501\u3001\u7F13\u5B58"}],["meta",{"property":"article:tag","content":"lock"}],["meta",{"property":"article:tag","content":"cache"}],["meta",{"property":"article:published_time","content":"2020-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-26T06:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u89E3\u51B3\uFF1A","slug":"\u89E3\u51B3","children":[{"level":3,"title":"1 \u57FA\u4E8Emysql\u7684binlog\u65E5\u5FD7\uFF08canal\uFF09","slug":"_1-\u57FA\u4E8Emysql\u7684binlog\u65E5\u5FD7-canal","children":[]},{"level":3,"title":"2 \u6D88\u606F\u961F\u5217MQ","slug":"_2-\u6D88\u606F\u961F\u5217mq","children":[]}]},{"level":2,"title":"1.1 \u4F7F\u7528\u573A\u666F\uFF1A","slug":"_1-1-\u4F7F\u7528\u573A\u666F","children":[]},{"level":2,"title":"1.2 \u4F7F\u7528\u6D41\u7A0B\uFF1A","slug":"_1-2-\u4F7F\u7528\u6D41\u7A0B","children":[]},{"level":2,"title":"1.3 \u7B80\u5355\u5B9E\u4F8B\u683C\u5F0F\uFF1A","slug":"_1-3-\u7B80\u5355\u5B9E\u4F8B\u683C\u5F0F","children":[]},{"level":2,"title":"1.4 \u672C\u5730\u7F13\u5B58","slug":"_1-4-\u672C\u5730\u7F13\u5B58","children":[]},{"level":2,"title":"1.5 \u5206\u5E03\u5F0F\u7F13\u5B58","slug":"_1-5-\u5206\u5E03\u5F0F\u7F13\u5B58","children":[{"level":3,"title":"1.5.1 \u7F13\u5B58\u7A7F\u900F","slug":"_1-5-1-\u7F13\u5B58\u7A7F\u900F","children":[]},{"level":3,"title":"1.5.2 \u7F13\u5B58\u96EA\u5D29","slug":"_1-5-2-\u7F13\u5B58\u96EA\u5D29","children":[]},{"level":3,"title":"1.5.3 \u7F13\u5B58\u51FB\u7A7F","slug":"_1-5-3-\u7F13\u5B58\u51FB\u7A7F","children":[]},{"level":3,"title":"1.5.4 \u7F13\u5B58\u7A7F\u900F\u3001\u51FB\u7A7F\u3001\u96EA\u5D29\u7684\u533A\u522B\uFF1A","slug":"_1-5-4-\u7F13\u5B58\u7A7F\u900F\u3001\u51FB\u7A7F\u3001\u96EA\u5D29\u7684\u533A\u522B","children":[]}]},{"level":2,"title":"1.6 \u603B\u7ED3","slug":"_1-6-\u603B\u7ED3","children":[{"level":3,"title":"1.6.1\u3001\u89E3\u51B3\u7F13\u5B58\u7A7F\u900F\uFF1A\u7A7A\u7ED3\u679C\u7F13\u5B58","slug":"_1-6-1\u3001\u89E3\u51B3\u7F13\u5B58\u7A7F\u900F-\u7A7A\u7ED3\u679C\u7F13\u5B58","children":[]},{"level":3,"title":"1.6.2\u3001\u89E3\u51B3\u7F13\u5B58\u96EA\u5D29\uFF1A\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4(\u52A0\u968F\u673A\u503C) \u3002\u5B58\u5728\u7684\u6570\u636E\uFF0C\u5927\u9762\u79EF\u6570\u636E\u540C\u65F6\u5931\u6548","slug":"_1-6-2\u3001\u89E3\u51B3\u7F13\u5B58\u96EA\u5D29-\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4-\u52A0\u968F\u673A\u503C-\u3002\u5B58\u5728\u7684\u6570\u636E-\u5927\u9762\u79EF\u6570\u636E\u540C\u65F6\u5931\u6548","children":[]},{"level":3,"title":"1.6.3\u3001\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F\u3010\u96BE\u70B9\u3011\uFF1A\u52A0\u9501\uFF0C\u5B58\u5728\u7684\u6570\u636E\uFF0C\u67D0\u4E00\u4E2A\u6570\u636E\u70ED\u70B9\u5931\u6548","slug":"_1-6-3\u3001\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F\u3010\u96BE\u70B9\u3011-\u52A0\u9501-\u5B58\u5728\u7684\u6570\u636E-\u67D0\u4E00\u4E2A\u6570\u636E\u70ED\u70B9\u5931\u6548","children":[]}]},{"level":2,"title":"2.1 \u4E1A\u52A1\u6D4B\u8BD5","slug":"_2-1-\u4E1A\u52A1\u6D4B\u8BD5","children":[]},{"level":2,"title":"2.2 \u538B\u529B\u6D4B\u8BD5\u4E0Ebug\u89E3\u51B3","slug":"_2-2-\u538B\u529B\u6D4B\u8BD5\u4E0Ebug\u89E3\u51B3","children":[]},{"level":2,"title":"2.3 \u52A0\u9501\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F","slug":"_2-3-\u52A0\u9501\u89E3\u51B3\u7F13\u5B58\u51FB\u7A7F","children":[]},{"level":2,"title":"2.4 \u672C\u5730\u9501\u5728\u5206\u5E03\u5F0F\u670D\u52A1","slug":"_2-4-\u672C\u5730\u9501\u5728\u5206\u5E03\u5F0F\u670D\u52A1","children":[]},{"level":2,"title":"2.5 \u5206\u5E03\u5F0F\u9501\u539F\u7406&\u4F7F\u7528","slug":"_2-5-\u5206\u5E03\u5F0F\u9501\u539F\u7406-\u4F7F\u7528","children":[{"level":3,"title":"2.5.1 redis\u9501","slug":"_2-5-1-redis\u9501","children":[]},{"level":3,"title":"2.5.2 \u7B80\u5355\u7684\u4E1A\u52A1+\u5206\u6790","slug":"_2-5-2-\u7B80\u5355\u7684\u4E1A\u52A1-\u5206\u6790","children":[]}]},{"level":2,"title":"2.6 \u5B8C\u6574\u4E1A\u52A1\u5B9E\u4F8B","slug":"_2-6-\u5B8C\u6574\u4E1A\u52A1\u5B9E\u4F8B","children":[]},{"level":2,"title":"\u53D1\u73B0\u52A0\u9501\u4E0E\u89E3\u9501\u91CD\u590D\uFF0C\u628A\u4ED6\u63D0\u51FA\u6765\u5230\u5DE5\u5177\u7C7B\uFF0C\u4F46\u5206\u5E03\u5F0F\u6846\u67B6\u6709\u6210\u578B\u4EA7\u54C1\u300ARedisSon \u6574\u5408\u300B","slug":"\u53D1\u73B0\u52A0\u9501\u4E0E\u89E3\u9501\u91CD\u590D-\u628A\u4ED6\u63D0\u51FA\u6765\u5230\u5DE5\u5177\u7C7B-\u4F46\u5206\u5E03\u5F0F\u6846\u67B6\u6709\u6210\u578B\u4EA7\u54C1\u300Aredisson-\u6574\u5408\u300B","children":[]},{"level":2,"title":"3.1. RedisSon \u6574\u5408","slug":"_3-1-redisson-\u6574\u5408","children":[{"level":3,"title":"- - \u4F9D\u8D56","slug":"\u4F9D\u8D56","children":[]},{"level":3,"title":"- - \u914D\u7F6E","slug":"\u914D\u7F6E","children":[]},{"level":3,"title":"- - \u6D4B\u8BD5","slug":"\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"3.2. RedisSon-lock \u9501\u6D4B\u8BD5","slug":"_3-2-redisson-lock-\u9501\u6D4B\u8BD5","children":[{"level":3,"title":"- - \u7B80\u5355\u6D4B\u8BD5","slug":"\u7B80\u5355\u6D4B\u8BD5","children":[]},{"level":3,"title":"lock\u7279\u70B9\uFF1A","slug":"lock\u7279\u70B9","children":[]}]},{"level":2,"title":"3.3. RedisSon-lock \u770B\u95E8\u72D7\u539F\u7406","slug":"_3-3-redisson-lock-\u770B\u95E8\u72D7\u539F\u7406","children":[]},{"level":2,"title":"3.4. RedisSon \u8BFB\u5199\u9501 ReadWriteLock","slug":"_3-4-redisson-\u8BFB\u5199\u9501-readwritelock","children":[{"level":3,"title":"- - \u6D4B\u8BD5","slug":"\u6D4B\u8BD5-1","children":[]},{"level":3,"title":"- - \u7ED3\u8BBA","slug":"\u7ED3\u8BBA","children":[]}]},{"level":2,"title":"3.5. RedisSon \u95ED\u9501CountDownLatch \u6D4B\u8BD5","slug":"_3-5-redisson-\u95ED\u9501countdownlatch-\u6D4B\u8BD5","children":[{"level":3,"title":"- - \u653E\u5047\uFF0C\u9501\u95E8 \u6D4B\u8BD5","slug":"\u653E\u5047-\u9501\u95E8-\u6D4B\u8BD5","children":[]},{"level":3,"title":"- - \u7ED3\u8BBA","slug":"\u7ED3\u8BBA-1","children":[]}]},{"level":2,"title":"3.6. RedisSon \u4FE1\u53F7\u91CFSemaphore \u6D4B\u8BD5","slug":"_3-6-redisson-\u4FE1\u53F7\u91CFsemaphore-\u6D4B\u8BD5","children":[{"level":3,"title":"- - \u8F66\u5E93\u505C\u8F66\u6D4B\u8BD5","slug":"\u8F66\u5E93\u505C\u8F66\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"3.7. RedisSon \u7F13\u5B58\u4E00\u81F4\u6027\u89E3\u51B3","slug":"_3-7-redisson-\u7F13\u5B58\u4E00\u81F4\u6027\u89E3\u51B3","children":[{"level":3,"title":"- - \u539F\u7406\uFF1A\u53CC\u5199\u6A21\u5F0F\u3001\u5931\u6548\u6A21\u5F0F","slug":"\u539F\u7406-\u53CC\u5199\u6A21\u5F0F\u3001\u5931\u6548\u6A21\u5F0F","children":[]},{"level":3,"title":"- - \u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","children":[]},{"level":3,"title":"- - Canal","slug":"canal","children":[]},{"level":3,"title":"- - \u4F7F\u7528\u5931\u6548\u6A21\u5F0F","slug":"\u4F7F\u7528\u5931\u6548\u6A21\u5F0F","children":[]}]},{"level":2,"title":"RedissonLock\u5B8C\u6574\u4E1A\u52A1\u5B9E\u4F8B","slug":"redissonlock\u5B8C\u6574\u4E1A\u52A1\u5B9E\u4F8B","children":[]},{"level":2,"title":"4.1. \u6574\u5408","slug":"_4-1-\u6574\u5408","children":[]},{"level":2,"title":"4.2. @Cacheable\u7EC6\u8282\u8BBE\u7F6E","slug":"_4-2-cacheable\u7EC6\u8282\u8BBE\u7F6E","children":[]},{"level":2,"title":"4.3. \u81EA\u5B9A\u4E49\u7F13\u5B58\u8BBE\u7F6E","slug":"_4-3-\u81EA\u5B9A\u4E49\u7F13\u5B58\u8BBE\u7F6E","children":[]},{"level":2,"title":"4.4. @CacheEvict+Caching \u5931\u6548\u6A21\u5F0F\u4F7F\u7528","slug":"_4-4-cacheevict-caching-\u5931\u6548\u6A21\u5F0F\u4F7F\u7528","children":[{"level":3,"title":"4.4.1 \u5220\u9664\u4E00\u4E2A","slug":"_4-4-1-\u5220\u9664\u4E00\u4E2A","children":[]},{"level":3,"title":"4.4.2 \u5220\u9664\u591A\u4E2A","slug":"_4-4-2-\u5220\u9664\u591A\u4E2A","children":[]}]},{"level":2,"title":"4.5. @CachePut \u53CC\u5199\u6A21\u5F0F\u4F7F\u7528","slug":"_4-5-cacheput-\u53CC\u5199\u6A21\u5F0F\u4F7F\u7528","children":[]},{"level":2,"title":"4.6. \u539F\u7406\u4E0E\u4E0D\u8DB3","slug":"_4-6-\u539F\u7406\u4E0E\u4E0D\u8DB3","children":[]},{"level":2,"title":"4.7. \u603B\u7ED3","slug":"_4-7-\u603B\u7ED3","children":[]}],"git":{"createdTime":1657189870000,"updatedTime":1658818018000,"contributors":[{"name":"jinfang","email":"iskong9@163.com","commits":5}]},"readingTime":{"minutes":15.06,"words":4519},"filePathRelative":"java/cloud-lock-cache.md","localizedDate":"2020\u5E745\u670812\u65E5"}');export{e as data};