import React, { FC, useCallback } from 'react'

const Link: FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }> = ({ to, children, onClick, ...props }) => {
  const jumpTo = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    onClick(e)
    window.history.pushState({}, '', to)
  }, [])
  return <a {...props} href={to} onClick={jumpTo}>{children}</a>
}

export default Link
