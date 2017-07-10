/**
@api {post} /account/signin/wechat
@apiName Signin(wechat)
@apiVersion 0.1.0
@apiGroup Acount
@apiPermission public
@apiDescription
   微信登陆
@apiBody
 {
   openid : string  //wechat openid
 }
@apiHeaders
 {
   x-user-id : string //授权过后的用户id
 }
@apiParams
 {
   _regionId : string //区域id
 }
@apiQuery
 {
   name? : string, //姓名
 }
*/
router.post('/account/signin/wechat',
   require('/routes/account/signin/wechat')
)