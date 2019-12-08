import { pathToRegexp } from 'path-to-regexp'

const isMatchPath = (routePath: string, path: string): boolean => {
  const re = pathToRegexp(routePath)
  return re.test(path)
}

export default isMatchPath
