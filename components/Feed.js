import styled from 'styled-components'
import { ds } from '../designsystem'
import { pxTo } from 'design-system-utils'
import { paddedLinkStyles } from '../designsystem/globalStyles'

export const FeedWrapper = styled.div`
  margin: ${pxTo(80, 25, 'rem')} 0;
`
export const FeedUrl = styled.a`
  font-size: ${ds.fs('s')};
  font-weight: normal;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  line-height: 1.4;
  margin-left: 0.5rem;
  ${paddedLinkStyles};
`

export const FeedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const FeedTitle = styled.h2`
  text-align: center;
  font-size: ${ds.fs('xxl')};
  margin: 2rem 0;
  font-style: italic;
  font-weight: normal;
`

export const FeedSubtitle = styled.p`
  text-align: center;
`

export const FeedItemLink = styled.a`
  display: block;
  padding: 1rem;
  color: ${ds.color('bright')};
  color: var(--theme-foreground);
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: 0;
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }
`
export const FeedItemLinkTitle = styled.div`
  font-style: italic;
  font-size: ${ds.fs('m')};
  line-height: ${ds.get('type.lineHeight.headings')};
`

export const FeedItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FeedItemDate = styled.div`
  font-size: ${ds.fs('xs')};
  font-family: ${ds.get('type.fontFamily.mono')};
  opacity: 0.6;
  width: 100px;
  text-align: right;
  flex-shrink: 0;
`

export const FeedItemDesc = styled.div`
  opacity: 0.6;
  margin-top: ${pxTo(8, 25, 'rem')};
  font-size: ${ds.fs('s')};
`

export const FeedItemLinkUrl = styled.div`
  opacity: 0.6;
  margin-top: ${pxTo(8, 25, 'rem')};
  word-wrap: break-word;
  font-size: ${ds.fs('xs')};
  font-family: ${ds.get('type.fontFamily.mono')};
`
