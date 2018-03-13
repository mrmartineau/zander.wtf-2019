import React from 'react'
import Name from './Name'
import BigType from './BigType'

export default () => {
  const isFF = !!navigator.userAgent.match(/firefox/i)

  if (isFF) {
    return <Name />
  } else {
    return <BigType />
  }
}
