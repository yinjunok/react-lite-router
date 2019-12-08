import { useCallback } from 'react'

/*
  对 history 上的方法封装一下, 便于使用
*/
const useHistory = () => {
  const push = useCallback((path: string) => {
    window.history.pushState({}, '',  window.location.origin + path)
  }, [])

  const history = window.history

  return {
    push,
    back: history.back.bind(history),
    go: history.go.bind(history),
    forward: history.forward.bind(history)
  }
}

export default useHistory
