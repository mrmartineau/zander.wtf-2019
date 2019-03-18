import React from 'react'
import {
  FeedWrapper,
  FeedList,
  FeedTitle,
  FeedItemLinkTitle,
  FeedItemLink,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'

export default props => {
  const feedItems = props.results.map((item, index) => {
    const linkUrl = item.data.link.url ? item.data.link.url : ''
    const title = item.data.title[0].text
    return (
      <li key={`work-${index}`}>
        <FeedItemLink href={linkUrl} target="_blank" rel="noopener">
          <FeedItemLinkTitle>{title}</FeedItemLinkTitle>
          {item.data.description.length > 0 && (
            <FeedItemDesc>{item.data.description[0].text}</FeedItemDesc>
          )}
          {linkUrl && <FeedItemLinkUrl>{linkUrl}</FeedItemLinkUrl>}
        </FeedItemLink>
      </li>
    )
  })

  return (
    <FeedWrapper>
      <FeedTitle id={encodeURI(props.title)}>{props.title}</FeedTitle>
      <FeedList>{feedItems}</FeedList>
    </FeedWrapper>
  )
}
