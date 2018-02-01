import React, { Component } from 'react'
import axios from 'axios'
import {
  FeedWrapper,
  FeedList,
  FeedItem,
  FeedItemLink,
  FeedItemLinkTitle,
  FeedItemDesc,
  FeedItemLinkUrl,
} from './Feed'

export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: [],
    }
  }

  componentDidMount() {
    axios.get(this.props.feed).then(response => {
      this.setState({
        feed: response.data,
      })
    })
  }

  render() {
    const feedItems = this.state.feed.map((item, index) => {
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
        <h2 id={encodeURI(this.props.title)}>{this.props.title}</h2>
        <FeedList>{feedItems}</FeedList>
      </FeedWrapper>
    )
  }
}
