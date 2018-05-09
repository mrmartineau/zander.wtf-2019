import Cookies from 'js-cookie';
import Prismic from 'prismic-javascript';
import qs from 'qs';
import React from 'react';
import { linkResolver } from '../utils/prismic';

const PREVIEW_EXPIRES = 1 / 48 // 30 minutes

export default class Preview extends React.Component {
  componentWillReceiveProps (props) {
    const params = qs.parse(props.location.search.slice(1))
    props.prismicCtx.api
      .previewSession(params.token, linkResolver, '/')
      .then(url => {
        Cookies.set(Prismic.previewCookie, params.token, {
          expires: PREVIEW_EXPIRES
        })
        props.history.push(url)
      })
  }

  render () {
    return <p>Loading previews...</p>
  }
}
