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
  FeedItemImage,
} from './Feed'

export const WorkFeedItemBox = styled.div`
  display: flex;
  align-items: center;
`

export default props => {
  const feedItems = props.results.map((item, index) => {
    const linkUrl = item.data.link.url ? item.data.link.url : ''
    const title = item.data.title[0].text
    return (
      <FeedItem key={`work-${index}`}>
        <FeedItemLink href={linkUrl} title={title} target="_blank">
          <WorkFeedItemBox>
            {item.data.image.url && (
              <FeedItemImage
                src={item.data.image.url}
                alt={`Image of ${title}`}
              />
            )}
            <div>
              <b>{title}</b>
              {item.data.description.length > 0 && (
                <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
              )}
            </div>
          </WorkFeedItemBox>
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
