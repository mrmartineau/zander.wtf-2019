import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Container } from './common/Layout'
import {
  FeedWrapper,
  FeedList,
  FeedItem,
  FeedItemLink,
  FeedItemDesc,
  FeedItemBox,
  FeedItemLinkUrl,
} from './Feed'
import { ds } from '../designsystem'

export const WorkFeedItemBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WorkFeedItemImageWrapper = styled.div`
  margin-left: ${ds.space(2)};
  flex-basis: 20%;
  flex-shrink: 0;
`

export const WorkFeedItemImage = styled.img`
  display: block;
  max-width: 100%;
`

export default props => {
  const feedItems = props.results.map((item, index) => {
    const linkUrl = item.data.link.url ? item.data.link.url : ''
    const title = item.data.title[0].text
    return (
      <FeedItem key={`work-${index}`}>
        <FeedItemLink href={linkUrl} title={title} target="_blank">
          <WorkFeedItemBox>
            <div>
              <b>{title}</b>
              {item.data.description.length > 0 && (
                <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
              )}
            </div>
            {item.data.image.url && (
              <WorkFeedItemImageWrapper>
                <WorkFeedItemImage
                  src={item.data.image.url}
                  alt={`Image of ${title}`}
                />
              </WorkFeedItemImageWrapper>
            )}
          </WorkFeedItemBox>
          {linkUrl && <FeedItemLinkUrl>{linkUrl}</FeedItemLinkUrl>}
        </FeedItemLink>
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
