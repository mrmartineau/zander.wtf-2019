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
    .filter(item => item.id !== currentId)
    .map((item, index) => {
      const { date, title, subtitle } = item.data
      const theTitle = title[0].text

      return (
        <li key={`articleFeedItem-${index}`}>
          <Link href={`/writing/[id]`} as={`/writing/${item.uid}`} passHref>
            <FeedItemLink>
              <FeedItemBox>
                {theTitle.length && (
                  <FeedItemLinkTitle>{theTitle}</FeedItemLinkTitle>
                )}
                {date && <FeedItemDate>{date}</FeedItemDate>}
              </FeedItemBox>
              {subtitle.length && (
                <FeedItemDesc>{subtitle[0].text}</FeedItemDesc>
              )}
            </FeedItemLink>
          </Link>
        </li>
      )
    })

  return (
    <FeedWrapper>
      <FeedTitle>{title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
