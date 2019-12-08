import { FC, Children, isValidElement, useContext } from 'react'
import { RouterCtx } from './Router'
import isMatchPath from './isMatchPath'

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
