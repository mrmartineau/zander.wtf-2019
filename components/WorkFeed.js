import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs-custom'
import { FeedWrapper, FeedTitle, FeedItemLinkTitle, FeedItemDesc } from './Feed'
import { Link } from './Link'
import { ds } from '../designsystem'

const WorkFeedItem = styled.article`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  details {
    margin-top: 0.5rem;
  }

  summary {
    font-size: ${ds.fs('s')};
  }
`

const WorkTitle = styled(FeedItemLinkTitle)`
  font-size: ${ds.fs('l')};
`

const WorkLink = styled(Link)`
  font-size: ${ds.fs('s')};
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
      (!!long_description.length && !!long_description[0].text.length) ||
      (!!image && image.url)

    return (
      <WorkFeedItem key={`work-${index}`}>
        <WorkTitle>{projectTitle}</WorkTitle>

        {short_description && <FeedItemDesc>{short_description}</FeedItemDesc>}

        {linkUrl && <WorkLink href={linkUrl}>{linkUrl}</WorkLink>}

        {hasDetailsContent && (
          <details>
            <summary>More info</summary>

            <WorkContent>
              {!!long_description && <RichText richText={long_description} />}

              {!!image && image.url && (
                <WorkImg src={image.url} alt={projectTitle} />
              )}
            </WorkContent>
          </details>
        )}
      </WorkFeedItem>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle>{props.title}</FeedTitle>
      {feedItems}
    </FeedWrapper>
  )
}
