import { Card, CardProps } from '~/components/card'
import { categoriesService } from '~/services'

export default async function Home() {
  const categories: CardProps[] = await categoriesService()

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      {categories.map((category) => [
        <Card
          key={category.image}
          image={category.image}
          name="Luis Fernando Ushiña"
          nickname="@wolfcito"
          likes={category.likes}
        />,
      ])}
    </section>
  )
}
