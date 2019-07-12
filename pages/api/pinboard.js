import axios from 'axios'
const DOMAIN = 'http://feeds.pinboard.in'

export default async (req, res) => {
  const apiSlug = `/json/u:MrMartineau/t:${req.query.tag}/?count=10`
  const requestPath = `${DOMAIN}${apiSlug}`
  const { data } = await axios(requestPath)
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(data))
}
