import {
  wxRequest
} from '@/utils/wxRequest';
import {
  wxRequestJsonBody
} from '@/utils/wxRequest';
let env = "-test" //-dev 或者 -test



const apiJOJO = 'http://192.168.0.106:8000/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
// const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
// const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

// 微信code登录
const codeLogin = (params) => wxRequest(params, apiJOJO + "user/codeLogin")


export default {
  codeLogin,
}
