import React from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'
import {
  FeedWrapper,
  FeedTitle,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'

const WorkList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const WorkItemLink = styled.a`
  display: block;
  padding: 1rem;
  color: ${ds.color('bright')};
  color: var(--theme-foreground);
  background-color: ${ds.color('dark')};
  background-color: var(--theme-background);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: 0;
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }
`

const WorkFeedTitle = styled(FeedItemLinkTitle)`
  background-color: var(--theme-foreground);
  color: var(--theme-background);
  margin: -1rem -1rem 1rem -1rem;
  padding: 1rem;
`

export default props => {
  const feedItems = props.results.map((item, index) => {
    const linkUrl = item.data.link.url ? item.data.link.url : ''
    const title = item.data.title[0].text
    return (
      <WorkItemLink
        href={linkUrl}
        target="_blank"
        rel="noopener"
        key={`work-${index}`}
      >
        <WorkFeedTitle>{title}</WorkFeedTitle>
        {item.data.description.length > 0 && (
          <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
        )}
        {linkUrl && <FeedItemLinkUrl>{linkUrl}</FeedItemLinkUrl>}
      </WorkItemLink>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle id={encodeURI(props.title)}>{props.title}</FeedTitle>
      <WorkList>{feedItems}</WorkList>
    </FeedWrapper>
  )
}
