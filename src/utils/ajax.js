import "whatwg-fetch";
import { message } from "antd";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
};

const fetchInitOption = (obj = {}) => {
  if (obj instanceof FormData) return obj;
  return Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
};

/**
 *
 * @param {string} url
 * @param {JSON} data
 * @returns {Promise}
 */
export default function HttpUtils(options) {
  const { url, data } = options;

  return new Promise((resolve, reject) => {
    const postdata = fetchInitOption(data);

    fetch(url, {
      method: "POST",
      headers: headers,
      body: postdata
    })
      .then(res => {
        if (res.ok) {
          return res.json();//JSON.parse(response.text());一个promise对象
        }
        // throw `${res.status}, ${res.statusText}`;
      })
      .then(json => {
        if (json && json.result === "success") {
          resolve(json);
        } else {
          reject(json);
          message.error(json.msg);
        }
      })
      .catch(err => {
        reject(err);
        message.error("网络异常");
      });
  });
}
