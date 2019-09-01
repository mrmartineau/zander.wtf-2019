import React from 'react'
import styled from 'styled-components'
import { RichText } from './RichText'
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

const WorkDl = styled.dl`
  font-size: ${ds.fs('s')};
`

const WorkDt = styled.dt`
  font-weight: bold;

  @media screen and (min-width: ${ds.bp('m')}) {
    display: block;
    width: 150px;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    flex-shrink: 0;
  }
`

const WorkDd = styled.dd`
  margin: 0 0 0.5rem;
`

const WorkMeta = styled.div`
  @media screen and (min-width: ${ds.bp('m')}) {
    display: flex;
  }
`
export default props => {
  const feedItems = props.results.map((item, index) => {
    const {
      link,
      title,
      short_description,
      long_description,
      image,
      project_metadata,
    } = item.data
    const linkUrl = link.url ? link.url : ''
    const projectTitle = title[0].text
    const hasLongDescription =
      !!long_description.length && !!long_description[0].text.length
    const hasImage = !!image && image.url
    const hasMetadata =
      !!project_metadata.length && !!project_metadata[0].project_metadata_key
    const hasDetailsContent = hasLongDescription || hasImage || hasMetadata

    return (
      <WorkFeedItem key={`work-${index}`}>
        <WorkTitle>{projectTitle}</WorkTitle>

        {short_description && <FeedItemDesc>{short_description}</FeedItemDesc>}

        {linkUrl && <WorkLink href={linkUrl}>{linkUrl}</WorkLink>}

        {hasDetailsContent && (
          <details>
            <summary>More info</summary>

            <WorkContent>
              {hasLongDescription && <RichText text={long_description} />}

              {hasImage && <WorkImg src={image.url} alt={projectTitle} />}

              {hasMetadata && (
                <WorkDl>
                  {project_metadata.map(
                    (
                      {
                        project_metadata_key,
                        project_metadata_value,
                        project_metadata_link,
                      },
                      index
                    ) => (
                      <WorkMeta key={index}>
                        <WorkDt>{project_metadata_key}</WorkDt>
                        <WorkDd>
                          {project_metadata_link ? (
                            <Link href={project_metadata_link}>
                              {project_metadata_value}
                            </Link>
                          ) : (
                            project_metadata_value
                          )}
                        </WorkDd>
                      </WorkMeta>
                    )
                  )}
                </WorkDl>
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
