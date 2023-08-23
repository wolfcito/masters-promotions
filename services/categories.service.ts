import { clientGraphql } from '~/graphql'

export const categoriesService = async () => {
  const { category } = await clientGraphql.query({
    category: {
      id: true,
      emoji: true,
      image: true,
    },
  })
  return category
}
