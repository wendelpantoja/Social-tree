import * as prismic from '@prismicio/client'

export const repositoryName = `${import.meta.env.VITE_PRISMIC_NAME_PAGE}`

export const client = prismic.createClient(repositoryName, {
  accessToken: `${import.meta.env.VITE_PRISMIC_ACCESS_TOKEN}`,
})