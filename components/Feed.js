import React, { Component } from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'

export const FeedWrapper = styled.div`
  margin: ${ds.pxTo(80, 25, 'rem')} 0;
`

export const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const FeedItem = styled.li`
  /* border-bottom: 1px solid #ddd; */
`

export const FeedItemLink = styled.a`
  display: block;
  padding: ${ds.pxTo(16, 25, 'rem')};
  color: ${ds.color('bright')};
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid;

  &:hover {
    color: ${ds.color('dark')};
    background-color: ${ds.color('bright')};
  }
`
export const FeedItemLinkTitle = styled.div`
  font-weight: bold;
`

export const FeedItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FeedItemDate = styled.div`
  font-size: ${ds.fs('s')};
`

export const FeedItemDesc = styled.div`
  opacity: 0.6;
  margin-top: ${ds.pxTo(8, 25, 'rem')};
`

export const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  font-size: ${ds.fs('s')};
  margin-top: ${ds.pxTo(8, 25, 'rem')};
`
