"use strict";
/**
 * 년-월-일
 *
 * @param {*} name
 * @returns
 */
export function y_m_d(str) {
  str = str.substr(0, 4) + "-" + str.substr(4, 2) + "-" + str.substr(6, 2);
  return str;
}
/**
 * 년-월-일 시:분:초
 *
 * @param {*} name
 * @returns
 */
export function y_m_d_h_m_s(str) {
  str =
    str.substr(0, 4) +
    "-" +
    str.substr(4, 2) +
    "-" +
    str.substr(6, 2) +
    " " +
    str.substr(8, 2) +
    ":" +
    str.substr(10, 2) +
    ":" +
    str.substr(12, 2);

  return str;
}
/**
 * 년-월-일 시:분:초:밀리초
 *
 * @param {*} name
 * @returns
 */
export function y_m_d_h_m_s_i(str) {
  str =
    str.substr(0, 4) +
    "-" +
    str.substr(4, 2) +
    "-" +
    str.substr(6, 2) +
    " " +
    str.substr(8, 2) +
    ":" +
    str.substr(10, 2) +
    ":" +
    str.substr(12, 2) +
    ":" +
    str.substr(14, 3);
  return str;
}
/**
 * 년월일
 *
 * @param {*} name
 * @returns
 */
export function ymd(str) {
  str = str.replaceAll("-", "");
  str = str.substr(0, 8);
  return str;
}
/**
 * 년월일시분초
 *
 * @param {*} name
 * @returns
 */
export function ymdhms(str) {
  str = str.replaceAll("-", "");
  str = str.replaceAll(" ", "");
  str = str.replaceAll(":", "");
  str = str.substr(0, 12);

  return str;
}
/**
 * 년월일시분초밀리초
 *
 * @param {*} name
 * @returns
 */
export function ymdhmsi(str) {
  str = str.replaceAll("-", "");
  str = str.replaceAll(" ", "");
  str = str.replaceAll(":", "");
  str = str.substr(0, 15);
  return str;
}
/**
 * 오늘의 날짜
 *
 * 년-월-일
 *
 * @param {*} name
 * @returns
 */
export function today_y_m_d() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");

  return y + "-" + m + "-" + d;
}
/**
 * 오늘의 날짜시간
 *
 * 년-월-일 시:분:초
 *
 * @param {*} name
 * @returns
 */
export function today_y_m_d_h_m_s() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");
  var h = String(now.getHours()).padStart(2, "0");
  var min = String(now.getMinutes()).padStart(2, "0");
  var s = String(now.getSeconds()).padStart(2, "0");

  return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s;
}
/**
 * 오늘의 날짜시간
 *
 * 년-월-일 시:분:초:밀리초
 *
 * @param {*} name
 * @returns
 */
export function today_y_m_d_h_m_s_ms() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");
  var h = String(now.getHours()).padStart(2, "0");
  var min = String(now.getMinutes()).padStart(2, "0");
  var s = String(now.getSeconds()).padStart(2, "0");
  var ms = String(now.getMilliseconds()).padStart(3, "0");
  return y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s + ":" + ms;
}
/**
 * 오늘의 날짜
 *
 * 년-월-일
 *
 * @param {*} name
 * @returns
 */
export function today_ymd() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");

  return y + m + d;
}
/**
 * 오늘의 날짜시간
 *
 * 년-월-일 시:분:초
 *
 * @param {*} name
 * @returns
 */
export function today_ymdhms() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");
  var h = String(now.getHours()).padStart(2, "0");
  var min = String(now.getMinutes()).padStart(2, "0");
  var s = String(now.getSeconds()).padStart(2, "0");

  return y + m + d + h + min + s;
}
/**
 * 오늘의 날짜시간
 *
 * 년-월-일 시:분:초:밀리초
 *
 * @param {*} name
 * @returns
 */
export function today_ymdhmsms() {
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, "0");
  var d = String(now.getDate()).padStart(2, "0");
  var h = String(now.getHours()).padStart(2, "0");
  var min = String(now.getMinutes()).padStart(2, "0");
  var s = String(now.getSeconds()).padStart(2, "0");
  var ms = String(now.getMilliseconds()).padStart(3, "0");
  return y + m + d + h + min + s + ms;
}
