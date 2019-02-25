function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

function objLength(input) {
  let type = toString(input)
  let length = 0
  if (type !== '[object Object]') {
    // throw '输入必须为对象{}！'
  } else {
    for (let key in input) {
      if (key !== 'number') {
        length++
      }
    }
  }
  return length
}
// 验证是否是手机号码
function vailPhone(number) {
  let flag = true
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (number.length !== 11 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = true
  let myreg = /^([6|7|9]{1}(\d+){8})$/
  if (number.length !== 9 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 浮点型除法
function div(a, b) {
  let c, d, e, f
  try {
    e = a.toString().split('.')[1].length
  } catch (g) { }
  try {
    f = b.toString().split('.')[1].length
  } catch (g) { }
  // [eslint] Return statement should not contain assignment. (no-return-assign)
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}
// 浮点型加法函数
function accAdd(arg1, arg2) {
  let r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}
// 浮点型乘法
function mul(a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += a.toString().split('.')[1].length
  } catch (f) { }
  try {
    c += b.toString().split('.')[1].length
  } catch (f) { }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

//  遍历对象属性和值
function displayProp(obj) {
  let names = ''
  for (let name in obj) {
    names += name + obj[name]
  }
  return names
}
//  去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/g, '')
}
// 去除所有:,英文冒号
function replaceColon(txt) {
  return txt.replace(/:/g, '')
}
// 转换星星分数
function convertStarArray(score) {
  // 1 全星,0 空星,2半星
  let arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}


//得到时间格式2018-10-02
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')

}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
function getDates(days, todate) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = month + '-' + dayFormate;
  dateObj.week = show_day[day];
  return dateObj;
}
// 格林威治时间转换
function UTC(time) {
  let dateee = new Date(time).toJSON();
  let date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  return date
}
// 普通时间转时间戳
function timeStamp(time) {
  let date = new Date(time);
  // 有三种方式获取
  let timeStamp = date.getTime();
  return timeStamp
}
// 时间戳转几分钟前几个月前
function getDateDiff(dateTimeStamp) {
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) { return; }
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  let result
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}
//获取昨天、今天0、明天1、后天的时间
function getDateStr(dayCount) {
  if (null == dayCount) {
    dayCount = 0;
  }
  var dd = new Date();
  dd.setDate(dd.getDate() + dayCount);//设置日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;//获取当前月份的日期
  var d = dd.getDate();
  return y + "-" + m + "-" + d;
}

/*根据出生日期算出年龄*/
function getAge(strBirthday){
  var returnAge;
  var strBirthdayArr = strBirthday.split("-");
  var birthYear = strBirthdayArr[0];
  var birthMonth = strBirthdayArr[1];
  var birthDay = strBirthdayArr[2];
  let d
  d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth() + 1;
  var nowDay = d.getDate();

  if (nowYear == birthYear) {
    returnAge = 0;//同年 则为0岁
  }
  else {
    var ageDiff = nowYear - birthYear; //年之差
    if (ageDiff > 0) {
      if (nowMonth == birthMonth) {
        var dayDiff = nowDay - birthDay;//日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        }
        else {
          returnAge = ageDiff;
        }
      }
      else {
        var monthDiff = nowMonth - birthMonth;//月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        }
        else {
          returnAge = ageDiff;
        }
      }
    }
    else {
      returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
    }
  }
   return returnAge//返回周岁年龄

}
// 普通时间转格林威治时间
function toGLWZ(time){
   // 获取某个时间格式的时间戳
   let timestamp2 = Date.parse(new Date(time));
   timestamp2 = timestamp2 / 1000;
   // 将当前时间换成时间格式字符串
   let newDate = new Date();
   newDate.setTime(timestamp2 * 1000);
   return newDate.toISOString();
}

module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceColon: replaceColon,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray,
  formatDate: formatDate,
  getDates: getDates,
  UTC: UTC,
  getDateDiff: getDateDiff,
  timeStamp: timeStamp,
  getDateStr: getDateStr,
  getAge: getAge,
  toGLWZ: toGLWZ
}
