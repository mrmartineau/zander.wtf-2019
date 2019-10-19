import React, { useEffect, useState } from 'react'
import jsonp from 'jsonp'

const WEBMENTIONS_BASE_PATH =
  'https://webmention.io/api/mentions?perPage=50&jsonp=parseWebmentions&target='

export const Webmentions = () => {
  const [mentions, setMentions] = useState([])

  useEffect(() => {
    jsonp(
      `${WEBMENTIONS_BASE_PATH}${window.location.href}`,
      null,
      (err, data) => {
        if (err) {
          console.error(err.message)
        } else {
          setMentions(data)
        }
      }
    )
  })

  return mentions.map((item, index) => {
    return (
      <div className="note note--list h-entry" key={index}>
        <div className="note__date">
          <a
            className="u-url dt-published"
            href="https://keithjgrant.com/replies/2019/01/yes-do-it/"
          >
            {item.verified_date}
          </a>
        </div>
        <div className="metadata text-left">
          in reply to
          <a
            className="u-in-reply-to"
            rel="in-reply-to"
            href="https://twitter.com/SaraSoueidan/status/1084833046140981248"
          >
            a post on twitter.com
          </a>
        </div>
        <div className="note__body e-content show-embeds">
          <p>Yes! DO IT ✨</p>
        </div>
      </div>
    )
  })
}
