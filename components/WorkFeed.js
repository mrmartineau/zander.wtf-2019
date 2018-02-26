import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
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
import { ds } from '../designsystem'

export const WorkFeedItemBox = styled.div`
  display: block;

  @media screen and (min-width: ${ds.bp('m')}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const WorkFeedItemImageWrapper = styled.div`
  margin-top: ${ds.space(2)};
  width: 50%;
  /* margin-left: auto; */
  /* margin-right: auto; */

  @media screen and (min-width: ${ds.bp('m')}) {
    margin-left: ${ds.space(2)};
    margin-top: 0;
    flex-basis: 27%;
    flex-shrink: 0;
  }
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
        <FeedItemLink href={linkUrl} title={title} target="_blank" rel="noopener">
          <WorkFeedItemBox>
            <div>
              <FeedItemLinkTitle>{title}</FeedItemLinkTitle>
              {item.data.description.length > 0 && (
                <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
              )}
              {linkUrl && <FeedItemLinkUrl>{linkUrl}</FeedItemLinkUrl>}
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
