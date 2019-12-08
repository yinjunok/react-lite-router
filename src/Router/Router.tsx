import React, { createContext, FC, useState, useEffect } from 'react'

const RouterCtx = createContext<string>('/')

const originPushState = window.history.pushState

window.history.pushState = function(...params) {
  originPushState.apply(window.history, params)
  dispatchEvent(new PopStateEvent('popstate'))
}

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
