## Compare api documentation generator

这里介绍几个我自己日常接触使用过的文档管理工具，主要包括：`apidoc`、`jsdoc`、`swagger`、`airapi`。

### [apidoc](https://github.com/apidoc/apidoc)
支持多种语言的文档管理（Java／GO/PHP/Scala/Python/Ruby/Perl...）
对应的语言都会有一些工具帮助生成管理文档。

**Hello-apidoc**

先上例子🌰  ：
(偷懒了，没有自己写例子，下面例子出处不明，感谢大神。)

```javascript
/**
 * @api {get} /user/:id Read data of a User
 * @apiVersion 0.3.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {String}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() { return; }

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {String} id         The new Users-ID.
 *
 * @apiUse CreateUserError
 */
function postUser() { return; }

```

- 可以看到apidoc的`/** */`之间的内容就是文档实际显示的内容啦
- apidoc有一套[关键字](http://apidocjs.com/#params)来标识各种属性
- 值得注意的是有一个`@apiVersion`，这个version可以用来区分不同的版本文档，但是需要同时记录之前的版本才能通过切换版本号显示
- apidoc生成的文档只有查看的功能，不能模拟请求

### [swagger](https://swagger.io)


    THE WORLD'S MOST POPULAR API TOOLING
    然而我也并不觉得很好用，most popular估计也是没得选的选择了。

  再上个例子🌰 ：

  ```javascript
  # swagger demo

  // 先默默的安装一个swagger
  $ npm install -g swagger
  // 安装好之后就可以使用swagger的命令啦， 先create一个项目，这里会叫你选择一个框架
  $ swagger project create hello-world
  // 开启编辑模式，可以直接通过浏览器进行编辑`.yaml`文件进行更新文档
  $ swagger project edit
  ```

  - .yaml文件里面会通过关键字标识很多的属性
  - .yaml文件可以通过一些特殊的关键字实现复用等操作，如：`$ref`
  - .yaml文件需要花费一定的人力去维护更新，可能导致文档更新速度跟不上代码更新速度

  再来一发Hapi-swagger的例子🌰 ：
  ```javascript
  const Hapi = require('hapi');
  const Inert = require('inert');
  const Vision = require('vision');
  const HapiSwagger = require('hapi-swagger');
  const Joi = require('joi')

  const server = new Hapi.Server();
  server.connection({ host: 'localhost', port: 3000 });

  const options = {
      info: {
              'title': 'Test API Documentation',
              'version': '0.0.1',
          }
      };
  // 注册插件
  server.register([
      Inert,
      Vision,
      {
          'register': HapiSwagger,
          'options': options
      }], (err) => {
          server.start( (err) => {
            console.log(err ? err : `Server running at: ${server.info.uri}`)
          });
      });

  server.route([{
        method: 'GET',
        path: '/cat/{id}',
        config: {
          handler: (request, reply) => { reply('I am a cat.') },
          description: 'Get Cat',
          notes: 'Using id to get cat',
          tags: ['api'],
          validate: {
            params: {
              id: Joi.number().required(),
            }
          },
          state: {
            parse: false,
            failAction: 'ignore',
          },
        },
  }])
  ```
  - hapi-swagger可以直接在路由的配置中进行更新文档
  - `validate`中的参数可以实时体现在文档和代码的修改中，改代码即改文档👍
  - `Joi`比较难去做复杂的validation
  - 目前在用着，路由的配置我觉得会有一些复杂化了

### [airapi](https://www.npmjs.com/package/airapi-cli)

根据代码自动创建API文档，灵活配置，支持所有开发语言。
 - **[传送门: airapi-cli使用教程](http://www.jianshu.com/p/b77fc2f6ba9a)**
 
我是例子🌰 ：

```shell
$ npm install airapi-cli -g
$ airapi-cli init // generate configuration file: .airapi.json
```

```javascript
# .airpi.json 可以对文档进行一些全局的配置
{
    "name": "world peace",
    "version": "0.1.0",
    "description": "project description",
    "title": "project title",
    "url": "backend url",
    "apiSuccessTemplate": {
        "status": "OK",
        "code": "200",
        "data": "DataObject"
    },
    "apiErrorTemplate": {
        "status": "Error",
        "error_code": "CODE",
        "error_msg": "ERROR_MESSAGE"
    },
    "ErrorCode": {
        "401": "Unauthorized",
        "403": "Access denied"
    },
    "CommentQuery": {
        "sort": "排序",
        "limit": "限制返回数量（分页）",
        "skip": "跳过返回数量（分页）"
    }
}

# model.js
/* @apiModel User
{
  id: number, 
  profile: {
    profile.name: string,
    profile.avatar: string,
  }
}
*/

# routes.js
/**
@api {post} /user
@apiName Registry
@apiVersion 0.1.0
@apiGroup User
@apiPermission public
@apiDescription
   User registration
@apiHeaders
 {
   Authorization: string
 }
@apiParams
 {
   id: number
 }
@apiQuery
 {
   name?: string,
 }
 @apiBody
 {
   name: string
 }
*/
router.post('/account/signin/wechat',
   require('/routes/account/signin/wechat')
)
```

- airapi通过配置文件可以配置公用的一些参数属性
- 把model抽出来单独维护，更简洁
- 在路由中可以灵活配置http的参数


## 总结

说一下我觉得好用的API管理工具具有怎样的特性

- 简单易懂易于维护，如airapi
- 能减少时间去特意维护文档就最好了，如hapi-swagger
  - 然而，hapi-swagger在项目大了之后分离一份schema，还是需要特定去维护
- 有直接call的功能，如swagger，可以直接在文档进行发请求
- 看着舒服的文档界面，如airapi。swagger原谅绿不能忍，配合swagger-ui功能丰富许多。