import { createClient } from '~/graphql/generated'

export const clientGraphql = createClient({
  fetcher: async (operation) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MV_GRAPHQL_MARTIAL_PROMOTIONS as string,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': process.env.HASURA_ADM_SECRET as string,
        },
        body: JSON.stringify(operation),
      }
    )

    return await response.json()
  },
})
