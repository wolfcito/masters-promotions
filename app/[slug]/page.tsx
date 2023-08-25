import { nanoid } from 'nanoid'
import { Card } from '~/components/card'
import { photosByCategoryId } from '~/services'
import { CategoryPageProps } from './category.type'

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const newsFeedByCategory = await photosByCategoryId({ slug })
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      {newsFeedByCategory.map((item) => (
        <Card
          key={nanoid()}
          emoji={item.image}
          image={item.image}
          name={item.user.name}
          nickname={`@${item.user.nickname}`}
          likes={item.likes}
          categoryImage={item.category.image}
        />
      ))}
    </section>
  )
}
