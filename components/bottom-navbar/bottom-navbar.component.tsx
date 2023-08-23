'use client'
import { Avatar } from '@nextui-org/react'
import { CategoryProps } from '../card'

export function BottomNavbar({ categories }: { categories: CategoryProps[] }) {
  return (
    <section className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {categories.map((item) => (
          <Avatar key={item.id} isBordered radius="md" src={item.image} />
        ))}
      </div>
    </section>
  )
}