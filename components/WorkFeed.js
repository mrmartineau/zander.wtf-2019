import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs-custom'
import { ds } from '../designsystem'
import {
  FeedWrapper,
  FeedTitle,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
  FeedList,
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

const WorkFeedItem = styled.li`
  margin-bottom: 1px;
`

const WorkDetails = styled.details`
  padding: 1rem;

  &:hover {
    background-color: var(--theme-foreground);
    color: var(--theme-background);
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const WorkSummary = styled.summary`
  cursor: default;

  &::-webkit-details-marker {
    display: none;
  }
`

const WorkImg = styled.img`
  max-width: 100%;
  display: block;
`

const WorkContent = styled.div`
  margin-top: 1rem;
`

export default props => {
  const feedItems = props.results.map((item, index) => {
    const {
      link,
      title,
      short_description,
      long_description,
      image,
    } = item.data
    const linkUrl = link.url ? link.url : ''
    const projectTitle = title[0].text
    const hasDetailsContent =
      !!long_description.length || (!!image && image.url)
    return (
      <WorkFeedItem key={`work-${index}`}>
        <WorkDetails as={hasDetailsContent ? 'details' : 'div'}>
          <WorkSummary>
            <FeedItemLinkTitle>{projectTitle}</FeedItemLinkTitle>

            {short_description && (
              <FeedItemDesc>{short_description}</FeedItemDesc>
            )}

            {linkUrl && (
              <FeedItemLinkUrl as="a" href={linkUrl}>
                {linkUrl}
              </FeedItemLinkUrl>
            )}
          </WorkSummary>

          {hasDetailsContent && (
            <WorkContent>
              {!!long_description && <RichText richText={long_description} />}

              {!!image && image.url && (
                <WorkImg src={image.url} alt={projectTitle} />
              )}
            </WorkContent>
          )}
        </WorkDetails>
      </WorkFeedItem>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle>{props.title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
