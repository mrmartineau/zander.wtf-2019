import React from 'react'
import Link from 'next/link'

export default props => {
  const articleFeed = props.results.map((item, index) => {
    return (
      <li key={`article-${item.uid}`}>
        <Link prefetch href={`/writing/${item.uid}`}>
          <a>{item.data.title[0].text}</a>
        </Link>
      </li>
    )
  })
  return <ul>{articleFeed}</ul>
}
