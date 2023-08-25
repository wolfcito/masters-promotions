import { clientGraphql } from '~/graphql'

export const photos = async () => {
  const { photos } = await clientGraphql.query({
    photos: {
      id: true,
      image: true,
      liked: true,
      likes: true,
      user: { id: true, image: true, name: true, nickname: true },
      category: { image: true, name: true },
    },
  })

  return photos
}

export const photosByCategoryId = async ({ slug }: { slug: string }) => {
  const { photos } = await clientGraphql.query({
    photos: {
      __args: { where: { category: { slug: { _eq: slug } } } },
      id: true,
      image: true,
      liked: true,
      likes: true,
      user: { id: true, image: true, name: true, nickname: true },
      category: { image: true, name: true },
    },
  })

  return photos
}
