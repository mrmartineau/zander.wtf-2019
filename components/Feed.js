import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { ds } from '../designsystem'

const FeedWrapper = styled.div`
  margin: ${ds.spacing(5)} 0;
`

const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const FeedItem = styled.li`
  border-bottom: 1px solid #ddd;
`
const FeedItemLink = styled.a`
  display: block;
  padding: ${ds.spacing(2)} 0;
  color: ${ds.color('text')};
  text-decoration: none;

  &:hover {
    color: ${ds.color('link', 'over')};
  }
`
const FeedItemLinkTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${ds.spacing(1)};
`
const FeedItemLinkDesc = styled.div`
  opacity: 0.6;
`
const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  font-size: ${ds.fs('s')};
  margin-top: ${ds.space(1)};
`

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
          <FeedItemLink href={item.u} title={item.n}>
            <FeedItemLinkTitle>{item.d}</FeedItemLinkTitle>
            <FeedItemLinkDesc>{item.n}</FeedItemLinkDesc>
            <FeedItemLinkUrl>{item.u}</FeedItemLinkUrl>
          </FeedItemLink>
        </FeedItem>
      )
    })

    return (
      <FeedWrapper>
        <h2>{this.props.title}</h2>
        <FeedList>{feedItems}</FeedList>
      </FeedWrapper>
    )
  }
}
