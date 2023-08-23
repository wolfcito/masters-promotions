import { clientGraphql } from '~/graphql'

export const photos = async () => {
  const { photos } = await clientGraphql.query({
    photos: {
      id: true,
      image: true,
      liked: true,
      likes: true,
    },
  })

  return photos
}
