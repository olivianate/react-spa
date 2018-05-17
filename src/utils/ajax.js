import "whatwg-fetch";
import { message } from "antd";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};

function hackMessage(msg) {
  if (msg) {
    if (msg == "authorityFailure" || msg == "没有登录！") {
      window.location.href = "/login";
    } else if (msg === "Read timed out") {
    } else if (msg.indexOf("验证码") > -1) {
      const regExp = new RegExp(/[a-zA-Z:\(\)/-]/g);
      message.error(msg.replace(regExp, ""));
    } else {
      message.error(msg);
    }
  }
}

const fetchInitOption = (obj = {}) => {
  if (obj instanceof FormData) return obj;
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
};

/**
 *
 * @param {string} url
 * @param {JSON} formdata
 * @returns {Promise}
 */
export default function HttpUtils(url, formdata) {
  return new Promise((resolve, reject) => {
    const postdata = fetchInitOption(formdata);

    fetch(url, {
      method: "POST",
      headers: headers,
      body: postdata
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw `${res.status}, ${res.statusText}`;
        // console.log(res);
      })
      .then(json => {
        if (json && json.result === "success") {
          resolve(json);
        } else {
          reject(json);
          hackMessage(json.msg);
        }
      })
      .catch(err => {
        reject(err);
        message.error("网络异常");
      });
  });
}
