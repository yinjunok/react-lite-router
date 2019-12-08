import React, { FC, useContext, createContext } from 'react'
import { match } from 'path-to-regexp'
import isMatchPath from './isMatchPath'
import { RouterCtx } from './Router'

export interface IParams {
  [p: string]: string | undefined
}

export interface IRouteProps {
  path: string
  component: React.ComponentType
}

/*
  参数上下文
  如果有 Route 嵌套, React 会选择最近的 Ctx. https://zh-hans.reactjs.org/docs/context.html#contextprovider
*/
const ParamsCtx = createContext<IParams>({})
const Route: FC<IRouteProps> = ({ path, component: Com }) => {
  const curPath = useContext(RouterCtx)
  const m = match(path)(curPath)

  return (
    <ParamsCtx.Provider value={ m ? m.params as { [p: string]: string } : {} }>
      <>
      {
        isMatchPath(path, curPath)
        ? <Com />
        : null
      }
      </>
    </ParamsCtx.Provider>
  )
}

export default Route
export {
  ParamsCtx,
}