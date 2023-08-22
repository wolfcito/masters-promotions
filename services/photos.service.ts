export const categoriesService = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_MV_GRAPHQL_MARTIAL_PROMOTIONS as string,
      {
        method: 'POST',
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_ADM_SECRET as string,
        },
        body: JSON.stringify({
          query: `
          query newsfeed {
            photos {
              category_id
              id
              image
              liked
              likes
            }
          }
          `,
        }),
      }
    )

    const categories = await res.json()
    const { photos } = categories.data
    return photos
  } catch (e) {
    console.log(e)
  }
}
