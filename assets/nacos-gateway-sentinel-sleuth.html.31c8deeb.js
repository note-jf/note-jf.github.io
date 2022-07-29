const e=JSON.parse('{"key":"v-92c9202e","path":"/java/nacos-gateway-sentinel-sleuth.html","title":"nacos\u3001gateway\u3001sentinel\u3001sleuth","lang":"zh-CN","frontmatter":{"icon":"edit","title":"nacos\u3001gateway\u3001sentinel\u3001sleuth","category":["Cloud"],"date":"2020-01-01T00:00:00.000Z","tag":["Cloud"],"summary":"1\u3001Nacos \u5B98\u65B9\u5730\u5740\uFF1Ahttps://nacos.io github\u5730\u5740\uFF1Ahttps://github.com/alibaba/nacos https://nacos.io/zh-cn/docs/quick-start-spring-boot.html \u9762\u8BD5\u9898\uFF1A\u5FAE\u670D\u52A1\u95F4\u8FDC\u7A0B\u4EA4\u4E92\u7684\u8FC7\u7A0B\uFF1F 1. \u5148\u53BB\u6CE8\u518C\u4E2D\u5FC3\u67E5\u8BE2\u670D\u52A1\u7684\u670D\u52A1\u5668\u5730\u5740 2. \u8C03\u7528\u65B9\u7ED9\u5BF9\u65B9\u53D1\u9001htt","head":[["meta",{"property":"og:url","content":"https://note-jf.cn/java/nacos-gateway-sentinel-sleuth.html"}],["meta",{"property":"og:site_name","content":"note-jf"}],["meta",{"property":"og:title","content":"nacos\u3001gateway\u3001sentinel\u3001sleuth"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://note-jf.cn/"}],["meta",{"property":"og:updated_time","content":"2022-07-16T09:04:08.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"nacos\u3001gateway\u3001sentinel\u3001sleuth"}],["meta",{"property":"article:tag","content":"Cloud"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-16T09:04:08.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1\u3001Nacos","slug":"_1\u3001nacos","children":[{"level":3,"title":"\u9762\u8BD5\u9898\uFF1A\u5FAE\u670D\u52A1\u95F4\u8FDC\u7A0B\u4EA4\u4E92\u7684\u8FC7\u7A0B\uFF1F","slug":"\u9762\u8BD5\u9898-\u5FAE\u670D\u52A1\u95F4\u8FDC\u7A0B\u4EA4\u4E92\u7684\u8FC7\u7A0B","children":[]},{"level":3,"title":"\u53EF\u4EE5\u5E72\u4EC0\u4E48","slug":"\u53EF\u4EE5\u5E72\u4EC0\u4E48","children":[]},{"level":3,"title":"A\u3001spring cloud","slug":"a\u3001spring-cloud","children":[]},{"level":3,"title":"B\u3001spring boot","slug":"b\u3001spring-boot","children":[]}]},{"level":2,"title":"2\u3001 \u670D\u52A1\u7F51\u5173 Gateway","slug":"_2\u3001-\u670D\u52A1\u7F51\u5173-gateway","children":[{"level":3,"title":"","slug":"","children":[]}]},{"level":2,"title":"3\u3001openfeign \u8FDC\u7A0B\u8C03\u7528\u670D\u52A1","slug":"_3\u3001openfeign-\u8FDC\u7A0B\u8C03\u7528\u670D\u52A1","children":[]},{"level":2,"title":"4. Sentinel","slug":"_4-sentinel","children":[{"level":3,"title":"1\u3001\u5B89\u88C5+\u914D\u7F6E","slug":"_1\u3001\u5B89\u88C5-\u914D\u7F6E","children":[]},{"level":3,"title":"2\u3001\u81EA\u5B9A\u4E49\u6D41\u63A7","slug":"_2\u3001\u81EA\u5B9A\u4E49\u6D41\u63A7","children":[]},{"level":3,"title":"3\u3001\u7194\u65AD\u3001\u964D\u7EA7","slug":"_3\u3001\u7194\u65AD\u3001\u964D\u7EA7","children":[]},{"level":3,"title":"4\u3001\u81EA\u5B9A\u4E49\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90","slug":"_4\u3001\u81EA\u5B9A\u4E49\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90","children":[]},{"level":3,"title":"4.1. Sentinel \u662F\u4EC0\u4E48\uFF1F","slug":"_4-1-sentinel-\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"4.2. \u57FA\u672C\u6982\u5FF5\u53CA\u4F5C\u7528","slug":"_4-2-\u57FA\u672C\u6982\u5FF5\u53CA\u4F5C\u7528","children":[]},{"level":3,"title":"4.3. \u5FEB\u901F\u5F00\u59CB","slug":"_4-3-\u5FEB\u901F\u5F00\u59CB","children":[]},{"level":3,"title":"4.4. \u6574\u5408Feign\u7EC4\u4EF6","slug":"_4-4-\u6574\u5408feign\u7EC4\u4EF6","children":[]},{"level":3,"title":"4.5. \u6D41\u91CF\u63A7\u5236","slug":"_4-5-\u6D41\u91CF\u63A7\u5236","children":[]},{"level":3,"title":"4.6. \u7194\u65AD\u964D\u7EA7","slug":"_4-6-\u7194\u65AD\u964D\u7EA7","children":[]},{"level":3,"title":"4.7. \u89C4\u5219\u6301\u4E45\u5316","slug":"_4-7-\u89C4\u5219\u6301\u4E45\u5316","children":[]},{"level":3,"title":"5\u3001\u7F51\u5173\u6D41\u63A7","slug":"_5\u3001\u7F51\u5173\u6D41\u63A7","children":[]}]},{"level":2,"title":"5. Sleuth","slug":"_5-sleuth","children":[{"level":3,"title":"5.1. zipkin\u5206\u5E03\u5F0F\u76D1\u63A7\u5BA2\u6237\u7AEF","slug":"_5-1-zipkin\u5206\u5E03\u5F0F\u76D1\u63A7\u5BA2\u6237\u7AEF","children":[]},{"level":3,"title":"5.2. \u6539\u9020consumer/provider\u5DE5\u7A0B","slug":"_5-2-\u6539\u9020consumer-provider\u5DE5\u7A0B","children":[]},{"level":3,"title":"5.3. \u57FA\u672C\u6982\u5FF5","slug":"_5-3-\u57FA\u672C\u6982\u5FF5","children":[]}]},{"level":2,"title":"6\u3001sleuth+zipkin","slug":"_6\u3001sleuth-zipkin","children":[{"level":3,"title":"1\u3001\u4ECB\u7ECD","slug":"_1\u3001\u4ECB\u7ECD","children":[]},{"level":3,"title":"2\u3001\u914D\u7F6E","slug":"_2\u3001\u914D\u7F6E","children":[]},{"level":3,"title":"3\u3001zipkin\u53EF\u89C6\u5316","slug":"_3\u3001zipkin\u53EF\u89C6\u5316","children":[]},{"level":3,"title":"4\u3001zipkin \u6570\u636E\u4FDD\u5B58ES","slug":"_4\u3001zipkin-\u6570\u636E\u4FDD\u5B58es","children":[]}]}],"git":{"createdTime":1657189870000,"updatedTime":1657962248000,"contributors":[{"name":"jinfang","email":"iskong9@163.com","commits":2}]},"readingTime":{"minutes":29.37,"words":8811},"filePathRelative":"java/nacos-gateway-sentinel-sleuth.md","localizedDate":"2020\u5E741\u67081\u65E5"}');export{e as data};