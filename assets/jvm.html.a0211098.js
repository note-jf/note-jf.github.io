const e=JSON.parse('{"key":"v-e6487068","path":"/java/jvm.html","title":"jvm","lang":"zh-CN","frontmatter":{"icon":"edit","title":"jvm","category":["Java"],"date":"2020-08-22T00:00:00.000Z","tag":["jvm"],"summary":"1. \u7C7B\u7684\u52A0\u8F7D\u8FC7\u7A0B 1.1 \u52A0\u8F7D\u8FC7\u7A0B\u4ECB\u7ECD \u5982\u679C JVM \u60F3\u8981\u6267\u884C\u8FD9\u4E2A .class \u6587\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u88C5\u8FDB\u4E00\u4E2A\u7C7B\u52A0\u8F7D\u5668\u4E2D\uFF0C\u5B83\u5C31\u50CF\u4E00\u4E2A\u642C\u8FD0\u5DE5\u4E00\u6837\uFF0C\u4F1A\u628A\u6240\u6709\u7684 .class \u6587\u4EF6\u5168\u90E8\u642C\u8FDB JVM \u91CC\u9762\u6765\u3002 \u91CD\u70B9\u77E5\u8BC6\uFF1A\\rJava \u6587\u4EF6\u7ECF\u8FC7\u7F16\u8BD1\u540E\u53D8\u6210 .class \u5B57\u8282\u7801\u6587\u4EF6\uFF1B; \\r\u5B57\u8282\u7801\u6587\u4EF6\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5668\u88AB\u642C\u8FD0\u5230 JVM \u865A\u62DF\u673A\u4E2D\uFF1B; \\r\u865A\u62DF\u673A\u4E3B\u8981\u7684 5 \u5927\u5757\uFF1A\u65B9\u6CD5","head":[["meta",{"property":"og:url","content":"https://note-jf.cn/java/jvm.html"}],["meta",{"property":"og:site_name","content":"note-jf"}],["meta",{"property":"og:title","content":"jvm"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://note-jf.cn/"}],["meta",{"property":"og:updated_time","content":"2022-07-26T06:46:58.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"jvm"}],["meta",{"property":"article:tag","content":"jvm"}],["meta",{"property":"article:published_time","content":"2020-08-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-26T06:46:58.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.1 \u52A0\u8F7D\u8FC7\u7A0B\u4ECB\u7ECD","slug":"_1-1-\u52A0\u8F7D\u8FC7\u7A0B\u4ECB\u7ECD","children":[]},{"level":2,"title":"1.2 \u7C7B\u52A0\u8F7D\u6D41\u7A0B","slug":"_1-2-\u7C7B\u52A0\u8F7D\u6D41\u7A0B","children":[]},{"level":2,"title":"1.3 \u7C7B\u52A0\u8F7D\u5668","slug":"_1-3-\u7C7B\u52A0\u8F7D\u5668","children":[]},{"level":2,"title":"2.1 \u5982\u4F55\u786E\u5B9A\u5BF9\u8C61\u5DF2\u6B7B","slug":"_2-1-\u5982\u4F55\u786E\u5B9A\u5BF9\u8C61\u5DF2\u6B7B","children":[]},{"level":2,"title":"2.2 \u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"_2-2-\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[]},{"level":2,"title":"2.3 \u5783\u573E\u6536\u96C6\u5668","slug":"_2-3-\u5783\u573E\u6536\u96C6\u5668","children":[]},{"level":2,"title":"3.1 Java \u5806\uFF08Heap\uFF09","slug":"_3-1-java-\u5806-heap","children":[]},{"level":2,"title":"3.2 \u865A\u62DF\u673A\u6808\uFF08JVM Stacks\uFF09","slug":"_3-2-\u865A\u62DF\u673A\u6808-jvm-stacks","children":[]},{"level":2,"title":"3.3 \u672C\u5730\u65B9\u6CD5\u6808\uFF08Native Method Stacks\uFF09","slug":"_3-3-\u672C\u5730\u65B9\u6CD5\u6808-native-method-stacks","children":[]},{"level":2,"title":"3.4 \u65B9\u6CD5\u533A\uFF08Method Area\uFF09","slug":"_3-4-\u65B9\u6CD5\u533A-method-area","children":[]},{"level":2,"title":"3.5 \u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08Program Counter Register\uFF09","slug":"_3-5-\u7A0B\u5E8F\u8BA1\u6570\u5668-program-counter-register","children":[]},{"level":2,"title":"4.1 \u5806\u5185\u5B58\u7ED3\u6784","slug":"_4-1-\u5806\u5185\u5B58\u7ED3\u6784","children":[]},{"level":2,"title":"4.2 GC\u7C7B\u578B","slug":"_4-2-gc\u7C7B\u578B","children":[]},{"level":2,"title":"4.3 Minor GC \u5DE5\u4F5C\u539F\u7406","slug":"_4-3-minor-gc-\u5DE5\u4F5C\u539F\u7406","children":[]},{"level":2,"title":"4.4 Full GC \u5DE5\u4F5C\u539F\u7406","slug":"_4-4-full-gc-\u5DE5\u4F5C\u539F\u7406","children":[]},{"level":2,"title":"5.1 GC \u65E5\u5FD7\u5F00\u542F","slug":"_5-1-gc-\u65E5\u5FD7\u5F00\u542F","children":[]},{"level":2,"title":"5.2 \u7406\u89E3 GC \u65E5\u5FD7","slug":"_5-2-\u7406\u89E3-gc-\u65E5\u5FD7","children":[]},{"level":2,"title":"6.1 jps","slug":"_6-1-jps","children":[]},{"level":2,"title":"6.2 jstat","slug":"_6-2-jstat","children":[]},{"level":2,"title":"6.3 jmap","slug":"_6-3-jmap","children":[]},{"level":2,"title":"6.4 jhat","slug":"_6-4-jhat","children":[]},{"level":2,"title":"6.5 jstack","slug":"_6-5-jstack","children":[]},{"level":2,"title":"7.1 jconsole","slug":"_7-1-jconsole","children":[]},{"level":2,"title":"7.2 VisualVM","slug":"_7-2-visualvm","children":[]},{"level":2,"title":"8.1 \u9009\u62E9\u5408\u9002\u7684\u5783\u573E\u56DE\u6536\u5668","slug":"_8-1-\u9009\u62E9\u5408\u9002\u7684\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":2,"title":"8.2 \u8C03\u6574\u5185\u5B58\u5927\u5C0F","slug":"_8-2-\u8C03\u6574\u5185\u5B58\u5927\u5C0F","children":[]},{"level":2,"title":"8.3 \u8BBE\u7F6E\u7B26\u5408\u9884\u671F\u7684\u505C\u987F\u65F6\u95F4","slug":"_8-3-\u8BBE\u7F6E\u7B26\u5408\u9884\u671F\u7684\u505C\u987F\u65F6\u95F4","children":[]},{"level":2,"title":"8.4 \u8C03\u6574\u5185\u5B58\u533A\u57DF\u5927\u5C0F\u6BD4\u7387","slug":"_8-4-\u8C03\u6574\u5185\u5B58\u533A\u57DF\u5927\u5C0F\u6BD4\u7387","children":[]},{"level":2,"title":"8.5 \u8C03\u6574\u5BF9\u8C61\u5347\u8001\u5E74\u4EE3\u7684\u5E74\u9F84","slug":"_8-5-\u8C03\u6574\u5BF9\u8C61\u5347\u8001\u5E74\u4EE3\u7684\u5E74\u9F84","children":[]},{"level":2,"title":"8.6 \u8C03\u6574\u5927\u5BF9\u8C61\u7684\u6807\u51C6","slug":"_8-6-\u8C03\u6574\u5927\u5BF9\u8C61\u7684\u6807\u51C6","children":[]},{"level":2,"title":"8.7 \u8C03\u6574GC\u7684\u89E6\u53D1\u65F6\u673A","slug":"_8-7-\u8C03\u6574gc\u7684\u89E6\u53D1\u65F6\u673A","children":[]},{"level":2,"title":"8.8 \u8C03\u6574 JVM\u672C\u5730\u5185\u5B58\u5927\u5C0F","slug":"_8-8-\u8C03\u6574-jvm\u672C\u5730\u5185\u5B58\u5927\u5C0F","children":[]},{"level":2,"title":"9.1 \u7F51\u7AD9\u6D41\u91CF\u6D4F\u89C8\u91CF\u66B4\u589E\u540E\uFF0C\u7F51\u7AD9\u53CD\u5E94\u9875\u9762\u54CD\u5F88\u6162","slug":"_9-1-\u7F51\u7AD9\u6D41\u91CF\u6D4F\u89C8\u91CF\u66B4\u589E\u540E-\u7F51\u7AD9\u53CD\u5E94\u9875\u9762\u54CD\u5F88\u6162","children":[]},{"level":2,"title":"9.2 \u540E\u53F0\u5BFC\u51FA\u6570\u636E\u5F15\u53D1\u7684 OOM","slug":"_9-2-\u540E\u53F0\u5BFC\u51FA\u6570\u636E\u5F15\u53D1\u7684-oom","children":[]}],"git":{"createdTime":1657189870000,"updatedTime":1658818018000,"contributors":[{"name":"jinfang","email":"iskong9@163.com","commits":4}]},"readingTime":{"minutes":21.76,"words":6529},"filePathRelative":"java/jvm.md","localizedDate":"2020\u5E748\u670822\u65E5"}');export{e as data};