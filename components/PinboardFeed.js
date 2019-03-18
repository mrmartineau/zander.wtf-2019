import React, { Component } from 'react'
import styled from 'styled-components'
import 'fetch-everywhere'
import {
  FeedWrapper,
  FeedUrl,
  FeedTitle,
  FeedSubtitle,
  FeedList,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'

const FEED_PATH = 'https://pinboard-api-cache.now.sh/json/'
const PINBOARD_PATH = 'https://pinboard.in/'

const Center = styled.div`
  text-align: center;
  margin-top: 1vmax;
  margin-bottom: 1vmax;
`

export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: [],
    }
  }

  componentDidMount() {
    fetch(`${FEED_PATH}${this.props.feed}?count=${this.props.count}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(response => {
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
          <FeedItemLink href={item.u} target="_blank" rel="noopener">
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

        <FeedSubtitle>
          {this.props.subtitle}{' '}
          <FeedUrl
            href={`${PINBOARD_PATH}${this.props.feed}`}
            target="_blank"
            rel="noopener"
          >
            [i]
          </FeedUrl>
        </FeedSubtitle>
        <FeedList>{feedItems}</FeedList>
        <Center>
          <FeedUrl
            href={`${PINBOARD_PATH}${this.props.feed}`}
            target="_blank"
            rel="noopener"
          >
            See all 👉
          </FeedUrl>
        </Center>
      </FeedWrapper>
    )
  }
}

Feed.defaultProps = {
  count: 10,
}
