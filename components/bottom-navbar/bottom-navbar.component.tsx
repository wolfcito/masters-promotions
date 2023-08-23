'use client'
import { Avatar } from '@nextui-org/react'
import { BottomNavbarProps } from './bottom-navbar.type'

export function BottomNavbar({ categories }: BottomNavbarProps) {
  return (
    <section className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {categories.map((item) => (
          <div key={item.id} className="flex flex-col">
            <Avatar isBordered radius="md" src={item.image} />
            <p className="text-center">{item.emoji}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
