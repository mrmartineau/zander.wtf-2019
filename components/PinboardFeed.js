import React, { Component } from 'react'
import axios from 'axios'
import {
  FeedWrapper,
  FeedUrl,
  FeedList,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'

const FEED_PATH = 'https://pinboard-api.now.sh/json/'
const PINBOARD_PATH = 'https://pinboard.in/'

export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: [],
    }
  }

  componentDidMount() {
    axios.get(`${FEED_PATH}${this.props.feed}`).then(response => {
      this.setState({
        feed: response.data,
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
        <FeedItem key={`feedItem-${index}`}>
          <FeedItemLink
            href={item.u}
            title={item.d}
            target="_blank"
            rel="noopener"
          >
            <FeedItemLinkTitle>{item.d}</FeedItemLinkTitle>
            {item.n && <FeedItemDesc>{item.n}</FeedItemDesc>}
            <FeedItemLinkUrl>{item.u}</FeedItemLinkUrl>
          </FeedItemLink>
        </FeedItem>
      )
    })

    return (
      <FeedWrapper>
        <h2 id={encodeURI(this.props.title)}>
          {this.props.title}
          <FeedUrl
            href={`${PINBOARD_PATH}${this.props.feed}`}
            target="_blank"
            rel="noopener"
          >
            [ ? ]
          </FeedUrl>
        </h2>

        <FeedList>{feedItems}</FeedList>
      </FeedWrapper>
    )
  }
}
