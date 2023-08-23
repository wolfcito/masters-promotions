import { nanoid } from 'nanoid'
import { Card } from '~/components/card'
import { photos } from '~/services'

export default async function Home() {
  const newsFeed = await photos()

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      {newsFeed.map((item) => (
        <Card key={nanoid()} emoji={item.image} image={item.image} />
      ))}
    </section>
  )
}
