var data ={
     "apis": [
          {
               "related": "Acount",
               "apiList": [
                    {
                         "name": "Signin(wechat)",
                         "versionApis": [
                              {
                                   "name": "Signin(wechat)",
                                   "method": "post",
                                   "url": "/account/signin/wechat",
                                   "version": "0.1.0",
                                   "permission": [
                                        "public"
                                   ],
                                   "description": "微信登陆\n",
                                   "group": "Acount",
                                   "headers": [
                                        {
                                             "name": "x-user-id ",
                                             "required": "true",
                                             "type": "string",
                                             "detail": "//授权过后的用户id"
                                        }
                                   ],
                                   "params": [
                                        {
                                             "name": "_regionId ",
                                             "required": "true",
                                             "type": "string",
                                             "detail": "//区域id"
                                        }
                                   ],
                                   "query": [
                                        {
                                             "name": "name",
                                             "required": "false",
                                             "type": "string",
                                             "detail": "//姓名"
                                        }
                                   ],
                                   "body": [
                                        {
                                             "name": "openid ",
                                             "required": "true",
                                             "type": "string",
                                             "detail": "//wechat openid"
                                        }
                                   ]
                              }
                         ]
                    }
               ]
          }
     ],
     "models": [
          {
               "name": "Banner",
               "fields": [
                    {
                         "name": "link",
                         "type": "string",
                         "detail": " , //link of banner"
                    },
                    {
                         "name": "title",
                         "type": "string",
                         "detail": " "
                    },
                    {
                         "name": "type",
                         "type": "string",
                         "detail": " // main , business"
                    },
                    {
                         "name": "isValid",
                         "type": "boolean",
                         "detail": " "
                    },
                    {
                         "name": "region",
                         "type": "",
                         "detail": ""
                    },
                    {
                         "name": "region.name",
                         "type": "string",
                         "detail": " "
                    }
               ]
          }
     ],
     "project": {
          "name": "project name",
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
               "403": "Access denied",
               "2003": "该号码已被注册"
          },
          "CommentQuery": {
               "sort": "排序",
               "limit": "限制返回数量（分页）",
               "skip": "跳过返回数量（分页）"
          }
     }
}