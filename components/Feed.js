import React, { Component } from 'react'
import styled from 'styled-components'
import { ds } from '../designsystem'
import { linkStyles } from '../designsystem/globalStyles'

export const FeedWrapper = styled.div`
  margin: ${ds.pxTo(80, 25, 'rem')} 0;
`
export const FeedUrl = styled.a`
  font-size: ${ds.fs(-2)};
  font-family: ${ds.get('type.fontFamily.mono')};
  font-weight: normal;
  display: inline-block;
  margin-left: 0.4rem;
  text-decoration: none;

  ${linkStyles}
`

export const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const FeedTitle = styled.h2`
  text-align: center;
`

export const FeedItem = styled.li``

export const FeedItemLink = styled.a`
  display: block;
  padding: 1rem;
  color: ${ds.color('bright')};
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid;

  &:hover,
  &:active {
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
  font-size: ${ds.fs('s')};
`

export const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  margin-top: ${ds.pxTo(8, 25, 'rem')};
  word-wrap: break-word;
  font-size: ${ds.fs(-2)};
  font-family: ${ds.get('type.fontFamily.mono')};
`
