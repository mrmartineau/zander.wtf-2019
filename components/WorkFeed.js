import React from 'react'
import Link from 'next/link'
import {
  FeedWrapper,
  FeedList,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemLinkUrl,
  FeedItemBox,
  FeedItemDate,
  FeedItemDesc,
  FeedItemImage,
} from './Feed'

export default props => {
  const feedItems = props.results.map((item, index) => {
    return (
      <li key={`work-${index}`}>
        <FeedItemLink href={item.data.link.url}>
          {item.data.image.url && (
            <FeedItemImage
              src={item.data.image.url}
              alt={`Image of ${item.data.title[0].text}`}
            />
          )}
          <b>{item.data.title[0].text}</b>
          {item.data.description.length > 0 && (
            <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
          )}
        </FeedItemLink>
      </li>
    )
  })

  return (
    <FeedWrapper>
      <h2 id={encodeURI(props.title)}>{props.title}</h2>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
