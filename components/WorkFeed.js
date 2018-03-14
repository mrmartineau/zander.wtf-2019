import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { ds } from '../designsystem'
import Container from './Container'
import {
  FeedWrapper,
  FeedList,
  FeedTitle,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemBox,
  FeedItemLinkUrl,
} from './Feed'

const Title = styled.div`
  position: relative;
  font-weight: bold;
  font-size: ${ds.fs(4)};
  text-transform: uppercase;
  line-height: 1;

  @media screen and (min-width: ${ds.bp('m')}) {
    font-size: ${ds.fs(5)};
  }
`

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
          <Title>{title}</Title>
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
