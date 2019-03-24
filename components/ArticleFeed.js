import React from 'react'
import Link from 'next/link'
import {
  FeedWrapper,
  FeedList,
  FeedTitle,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemBox,
  FeedItemDate,
  FeedItemDesc,
} from './Feed'

export default ({ results, title, currentId = null }) => {
  const feedItems = results
    .filter(item => {
      return item.id !== currentId
    })
    .map((item, index) => {
      const data = item.data
      const title = data.title[0].text

      return (
        <li key={`articleFeedItem-${index}`}>
          <Link
            href={`/writing/?id=${item.uid}`}
            as={`/writing/${item.uid}`}
            prefetch={index < 5}
            passHref
          >
            <FeedItemLink>
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
        </li>
      )
    })

  return (
    <FeedWrapper>
      <FeedTitle id={encodeURI(title)}>{title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
