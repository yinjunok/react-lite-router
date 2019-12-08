import { pathToRegexp } from 'path-to-regexp'

/**
 * 
 * @param {string} routePath Route 上的path
 * @param {string} path  尝试匹配的路径
 * @returns {boolean} 是否匹配
 */
const isMatchPath = (routePath: string, path: string): boolean => {
  const re = pathToRegexp(routePath)
  return re.test(path)
}

export default isMatchPath
