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
  FeedSubtitle,
} from './Feed'
import { Link as MyLink } from '../components/Link'

export default ({ results, title, currentId = null }) => {
  const feedItems = results
    .filter((item) => item.id !== currentId)
    .map((item, index) => {
      const { date, title, subtitle } = item.data
      const theTitle = title[0].text

      return (
        <li key={`articleFeedItem-${index}`}>
          <Link href={`/writing/[id]`} as={`/writing/${item.uid}`}>
            <FeedItemLink href={`/writing/${item.uid}`}>
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

      <FeedSubtitle>
        <MyLink href="/atom.xml">RSS Feed</MyLink>
      </FeedSubtitle>
    </FeedWrapper>
  )
}
