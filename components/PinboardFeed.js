import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'
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
          <Link href={item.u}>
            <FeedItemLink title={item.n}>
              <FeedItemLinkTitle>{item.d}</FeedItemLinkTitle>
              <FeedItemDesc>{item.n}</FeedItemDesc>
              <FeedItemLinkUrl>{item.u}</FeedItemLinkUrl>
            </FeedItemLink>
          </Link>
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
