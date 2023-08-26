import { categoriesService } from '~/services'
import { ItemNavbar } from './item-nabvar.component'

export async function BottomNavbar() {
  const categories = await categoriesService()
  return (
    <section className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {categories.map((item) => (
          <ItemNavbar key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
