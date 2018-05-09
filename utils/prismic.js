import Prismic from 'prismic-javascript'
const PRISMIC_ACCESS_TOKEN =
  'MC5XbVNqWkNrQUFBUUo1anA2.77-977-9AO-_ve-_ve-_ve-_vSBicDzvv73vv73vv73vv73vv70G77-9GO-_ve-_vWXvv71Q77-977-9cO-_ve-_ve-_ve-_vUE'
const PRISMIC_REPO = 'https://zanderwtf.prismic.io/api/v2'

export const initApi = req => {
  return Prismic.getApi(PRISMIC_REPO, {
    accessToken: PRISMIC_ACCESS_TOKEN,
    req: req
  })
}

// -- Links resolution rules
// This function will be used to generate links to Prismic.io documents
// As your project grows, you should update this function according to your routes
export const linkResolver = doc => {
  if (doc.type === 'article') return `/writing/${doc.uid}`
  return '/'
}
