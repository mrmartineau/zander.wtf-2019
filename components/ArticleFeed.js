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
} from './Feed'

export default props => {
  const feedItems = props.results.map((item, index) => {
    return (
      <FeedItem key={`articleFeedItem-${index}`}>
        <Link href={`/writing/${item.uid}`}>
          <FeedItemLink title={item.data.title[0].text}>
            <FeedItemBox>
              <FeedItemLinkTitle>{item.data.title[0].text}</FeedItemLinkTitle>
              <FeedItemDate>{item.data.date}</FeedItemDate>
            </FeedItemBox>
            <FeedItemDesc>{item.data.subtitle[0].text}</FeedItemDesc>
          </FeedItemLink>
        </Link>
      </FeedItem>
    )
  })

  return (
    <FeedWrapper>
      <h2 id={encodeURI(props.title)}>{props.title}</h2>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
