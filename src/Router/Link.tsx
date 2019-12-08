import React, { FC, useCallback } from 'react'

/*
  Link 组件阻止 a 标签默认跳转事件, 使用 pushState 进行跳转
*/
const Link: FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }> = ({ to, children, onClick, ...props }) => {
  const jumpTo = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    onClick && onClick(e)
    window.history.pushState({}, '', to)
  }, [])
  return <a {...props} href={to} onClick={jumpTo}>{children}</a>
}

export default Link
