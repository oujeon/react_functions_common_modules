"use strict";
import axios from "axios";

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function objectToParams(obj) {
//   var str = [];
//   for (var p in obj)
//     if (obj.hasOwnProperty(p)) {
//       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//     }
//   return "?" + str.join("&");
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_get(
//   url,
//   param,
//   config,
//   callBackReponse,
//   callBackError
// ) {
//   return axios
//     .get(url, param, config)
//     .then(function (response) {
//       callBackReponse = response;
//     })
//     .catch(function (error) {
//       callBackError = error;
//     })
//     .finally(function () {});
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios__async_await_function_get(
//   url,
//   param,
//   callBackReponse,
//   callBackError
// ) {
//   return await axios
//     .get(url, param)
//     .then(function (response) {
//       callBackReponse = response;
//     })
//     .catch(function (error) {
//       callBackError = error;
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_get(url) {
//   return axios.get(url);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_simple_get(url) {
//   return await axios.get(url);
// }
// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_post(url, param) {
//   return axios
//     .post(url, param)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_function_post(url, param) {
//   return await axios
//     .post(url, param)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_post(url, param) {
//   return axios.post(url, param);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_simple_post(url, param) {
//   return await axios.post(url, param);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_delete(url) {
//   return axios
//     .delete(url)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_delete(url) {
//   return axios.delete(url);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_function_delete(url) {
//   return await axios
//     .delete(url)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_simple_delete(url) {
//   return await axios.delete(url);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_put(url, data) {
//   return axios
//     .put(url, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }
// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_put(url, data) {
//   return axios.put(url, data);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_function_put(url, data) {
//   return await axios
//     .put(url, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }
// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_simple_put(url, data) {
//   return await axios.put(url, data);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_patch(url, data) {
//   return axios
//     .patch(url, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_patch(url, data) {
//   return axios.patch(url, data);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_function_patch(url, data) {
//   return await axios
//     .patch(url, data)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_simple_patch(url, data) {
//   return await axios.patch(url, data);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_postForm(url, formData) {
//   return axios
//     .postForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_postForm(url, formData) {
//   return axios.postForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_function_postForm(url, formData) {
//   return await axios
//     .postForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_simple_postForm(url, formData) {
//   return await axios.postForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_putForm(url, formData) {
//   return axios
//     .putForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_putForm(url, formData) {
//   return axios.putForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_function_putForm(url, formData) {
//   return await axios
//     .putForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_simple_putForm(url, formData) {
//   return await axios.putForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_patchForm(url, formData) {
//   return axios
//     .patchForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_patchForm(url, formData) {
//   return axios.patchForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_function_patchForm(url, formData) {
//   return await axios
//     .patchForm(url, formData)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export async function axios_async_await_simple_patchForm(url, formData) {
//   return await axios.patchForm(url, formData);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_request(config) {
//   return axios
//     .request(config)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_request(config) {
//   return axios.request(config);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_head(url) {
//   return axios
//     .head(url)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }
// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_head(url) {
//   return axios.head(url);
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_function_options(url) {
//   return axios
//     .options(url)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("finally");
//     });
// }

// /**
//  * URL 파라미터
//  *
//  * @param {*} str1
//  * @param {*} str2
//  * @returns
//  */
// export function axios_simple_options(url) {
//   return axios.options(url);
// }
