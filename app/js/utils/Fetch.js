/* global ActiveXObject */

/**
 * 创建xhr对象
 * @return {Objectx} xhr
 */
function getXHR() {
  let xhr;
  try {
    xhr = new XMLHttpRequest();
  } catch (e) {
    const IEXHRVers = ['Msxml3.XMLHTTP', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP'];
    for (let i = 0, len = IEXHRVers.length; i < len; i++) {
      try {
        xhr = new ActiveXObject(IEXHRVers[i]);
      } catch (ee) {
        continue;
      }
    }
  }
  return xhr;
}

function requestFunc(method = 'GET', body) {
  console.log('------- requestFunc ----------');
}

/**
  * 第一个参数是请求方式,一般用get与post方法,与form标签的method类似
  * 第二个参数是请求的URL
  * 第三个参数是请求是同步进行还是异步进行,true表示异步
  * 调用了open方法仅仅是传递了参数而已
  * */

exports.get = (url) => {
  console.log('----- get ---------');

  // 创建xhr对象
  const xhr = getXHR();
  // 建立与Server主机的链接
  xhr.open('get', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
    }
  };

  // 手动指定响应编码格式
  if (xhr.overrideMimeType) {
    xhr.overrideMimeType('text\/plain; charset=utf-8');
  }

  // 发出请求
  xhr.send(null);
};

exports.post = () => {
  const xhr = getXHR();
  xhr.open('post', 'test.php', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
    }
  };
  // 比GET请求多了一步
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // 另外,数据是通过send方法发送的
  xhr.send('qs=true&userName=abc&pwd=123456');
};
