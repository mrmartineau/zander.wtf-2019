import React, { Component } from 'react'
import 'fetch-everywhere'
import {
  FeedWrapper,
  FeedTitle,
  FeedSubtitle,
  FeedList,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'
import { Link } from './Link'

const FEED_PATH = '/api/pinboard?tag='
const PINBOARD_PATH = 'https://pinboard.in/'

export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: [],
    }
  }

  componentDidMount() {
    fetch(`${FEED_PATH}${this.props.tag}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then((response) => {
        this.setState({
          feed: response,
        })
      })
  }

  render() {
    const maxDisplayCount = 10
    const newFeedList =
      this.state.feed.length <= maxDisplayCount
        ? this.state.feed
        : this.state.feed.slice(0, maxDisplayCount)
    const feedItems = newFeedList.map((item, index) => {
      return (
        <li key={`feedItem-${index}`}>
          <FeedItemLink href={item.u}>
            <FeedItemLinkTitle>{item.d}</FeedItemLinkTitle>
            {item.n && <FeedItemDesc>{item.n}</FeedItemDesc>}
            <FeedItemLinkUrl>{item.u}</FeedItemLinkUrl>
          </FeedItemLink>
        </li>
      )
    })

    return (
      <FeedWrapper>
        <FeedTitle id={encodeURI(this.props.title)}>
          {this.props.title}
        </FeedTitle>

        {!!this.props.subtitle && (
          <FeedSubtitle>
            {this.props.subtitle}{' '}
            <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${this.props.tag}`}>
              [i]
            </Link>
          </FeedSubtitle>
        )}
        <FeedList>{feedItems}</FeedList>

        <FeedSubtitle>
          <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${this.props.tag}`}>
            See all{' '}
            <span role="img" aria-label="Right pointing hand emoji">
              👉
            </span>
          </Link>
        </FeedSubtitle>
      </FeedWrapper>
    )
  }
}

Feed.defaultProps = {
  count: 10,
}
