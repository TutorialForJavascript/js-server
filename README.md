# 使用Javascript搭建后端服务

通常后端服务不会选择使用js来构建,但现在微服务架构盛行,js也凭借其纯异步支持高并发和开发调试简单的特点成了后端服务的可选项之一.

通常js在后端的角色更多的是:

+ 微服务架构中作为组件提供接口
+ 作为连接前端的APIgateway根据业务需要聚合后端接口

而常见的技术主要是:

+ 基于HTTP的RESTful接口服务
+ 基于Websocket的长连接服务
+ GRpc提供的接口服务

而后端相关的技术有:

+ 关系数据库技术,常见的有[PostgreSQL](http://www.postgres.cn/docs/10/),业务上一般使用orm来操作数据库.常用的orm有[sequelize](http://docs.sequelizejs.com/)配合[pg](https://github.com/brianc/node-postgres)和[pg-hstore](https://github.com/scarney81/pg-hstore)使用
+ 共享内存技术,常见的是Redis,我们使用[node-redis](http://redis.js.org/)配合[bluebird](https://github.com/petkaantonov/bluebird)
+ 消息队列技术,常见的有rabbitMQ,我们使用[rabbit.js](https://github.com/squaremo/rabbit.js)
+ 消息的发布订阅工具,常见的有Redis,rabbitMQ,postgreSQL

另一种套路是使用[zmq](http://zeromq.org/)构建后台服务,这种方案现在用的不多,学习曲线也高,而且其实用什么语言并不重要更多的是如何设计结构和搭配消息传递方式,其官方文档相当详细靠谱而且例子有各种支持的语言实现,因此这边不讨论.有兴趣的可以直接啃官方文档.