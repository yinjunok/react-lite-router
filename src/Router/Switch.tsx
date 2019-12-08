import { FC, Children, isValidElement, useContext } from 'react'
import { RouterCtx } from './Router'
import isMatchPath from './isMatchPath'

/*
  遍历 Switch 下的 Route 组件
  把匹配到的第一个展示
*/
const Switch: FC = ({ children }) => {
  const curPath = useContext(RouterCtx)
  let Match = null
  Children.map(children, (ch) => {
    if (isValidElement(ch) && !Match) {
      const path = ch.props.path
      if (isMatchPath(path, curPath)) {
        Match = ch
      }
    }
  })
  return Match
}

export default Switch
