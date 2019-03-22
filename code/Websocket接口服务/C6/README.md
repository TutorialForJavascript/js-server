# 动态创建wsserver

通过路由动态的创建wsserver,实现一个发布订阅模式.

用户订阅只要连接url`ws://localhost:3000/channel?id=1`这样指定channel的id即可.
发布则是通过在这个频道中推送一个`publish`event来实现.

## 用法

+ `npm run build`将源码编译到server文件夹
+ `npm start`启动服务
+ `npm run test1`测试使用channel1,注意可以多起几个查看发布订阅效果
+ `npm run test2`测试使用channel2,注意可以多起几个查看发布订阅效果




