import { RichTextRenderer } from 'prismic-reactjs-custom'
import { Link } from './Link'
import { Image } from './Image'

export const RichText = ({ text }) =>
  RichTextRenderer.render(text, {
    image: Image,
    hyperlink: Link,
  })
