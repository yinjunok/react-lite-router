import React, { createContext, FC, useState, useEffect } from 'react'

/*
  pushState 不会触发 popstate 事件,
  所以需要劫持原生的 pushstate, 然后手动触发 popstate 事件
*/
const originPushState = window.history.pushState
window.history.pushState = function(...params) {
  originPushState.apply(window.history, params)
  dispatchEvent(new PopStateEvent('popstate'))
}

const RouterCtx = createContext<string>('/')
const Router: FC = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    window.addEventListener('popstate', function() {
      setPath(window.location.pathname)
    })
  }, [])

  return (
    <RouterCtx.Provider value={path}>
      {children}
    </RouterCtx.Provider>
  )
}

export default Router
export {
  RouterCtx,
}
