import React from 'react'
import { Link } from '../routes'
import {
  FeedWrapper,
  FeedList,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemBox,
  FeedItemDate,
  FeedItemDesc,
} from './Feed'

export default props => {
  const feedItems = props.results.map((item, index) => {
    const data = item.data
    const title = data.title[0].text
    return (
      <FeedItem key={`articleFeedItem-${index}`}>
        <Link route="writing" params={{ slug: item.uid }} passHref>
          <FeedItemLink title={title}>
            <FeedItemBox>
              {data.title.length && (
                <FeedItemLinkTitle>{title}</FeedItemLinkTitle>
              )}
              {data.date && <FeedItemDate>{data.date}</FeedItemDate>}
            </FeedItemBox>
            {data.subtitle.length && (
              <FeedItemDesc>{data.subtitle[0].text}</FeedItemDesc>
            )}
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
