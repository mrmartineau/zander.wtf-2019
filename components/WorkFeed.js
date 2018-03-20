import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'
import Container from './Container'
import {
  FeedWrapper,
  FeedList,
  FeedTitle,
  FeedItemLinkTitle,
  FeedItem,
  FeedItemLink,
  FeedItemDesc,
  FeedItemBox,
  FeedItemLinkUrl,
} from './Feed'

export default props => {
  const feedItems = props.results.map((item, index) => {
    const linkUrl = item.data.link.url ? item.data.link.url : ''
    const title = item.data.title[0].text
    return (
      <FeedItem key={`work-${index}`}>
        <FeedItemLink
          href={linkUrl}
          title={title}
          target="_blank"
          rel="noopener"
        >
          <FeedItemLinkTitle>{title}</FeedItemLinkTitle>
          {item.data.description.length > 0 && (
            <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
          )}
          {linkUrl && <FeedItemLinkUrl>{linkUrl}</FeedItemLinkUrl>}
        </FeedItemLink>
      </FeedItem>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle id={encodeURI(props.title)}>{props.title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
