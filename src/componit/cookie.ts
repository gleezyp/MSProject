import Cookies from 'js-cookie'

/**
 * 设置 Cookie
 * @param key 键名
 * @param value 值
 * @param expires 过期时间（天），默认为 7 天
 */
export const setCookie = (key: string, value: any, expires: number = 7) => {
  Cookies.set(key, value, { expires })
}

/**
 * 获取 Cookie
 * @param key 键名
 */
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key)
}

/**
 * 删除 Cookie
 * @param key 键名
 */
export const removeCookie = (key: string) => {
  Cookies.remove(key)
}
