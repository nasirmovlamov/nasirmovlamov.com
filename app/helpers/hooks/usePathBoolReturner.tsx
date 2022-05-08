import React, { useEffect, useState } from 'react'

import { is } from 'immer/dist/internal'
import { useRouter } from 'next/router'

type Props = {}

export const usePathBoolReturner = () => {
  const router = useRouter()
  const path = router.pathname

  const [isRoute, setIsRoute] = useState({
    home: true,
    guestbook: false,
    dashboard: false,
    blog: false,
    snippets: false,
    about:false
  })

  const defaultFalseRoute = {
    home: false,
    guestbook: false,
    dashboard: false,
    blog: false,
    snippets: false,
    about:false
  }


  const setRoute = (path:string) => {
    switch (path) {
      case '/':
        setIsRoute({
          ...defaultFalseRoute,
          home: true
        })
        break
      case '/guestbook':
        setIsRoute({
          ...defaultFalseRoute,
          guestbook: true,
        })
        break
      case '/dashboard':
        setIsRoute({
          ...defaultFalseRoute,
          dashboard: true,
        })
        break
      case '/blog':
        setIsRoute({
          ...defaultFalseRoute,
          blog: true,
        })
        break
      case '/snippets':
        setIsRoute({
          ...defaultFalseRoute,
          snippets: true,
        })
        break
      case '/about':
        setIsRoute({
          ...defaultFalseRoute,
          about: true,
        })
        break
      default:
        setIsRoute({
          ...defaultFalseRoute,
          home: true,
        })
        break
    }
  }

  useEffect(() => {
    setRoute(path)
  }, [path])
  return {isRoute}
}

