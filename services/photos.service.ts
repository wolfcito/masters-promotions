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
