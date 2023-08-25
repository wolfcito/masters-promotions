'use client'
import { Avatar, Link } from '@nextui-org/react'
import { BottomNavbarProps } from './bottom-navbar.type'

export function BottomNavbar({ categories }: BottomNavbarProps) {
  return (
    <section className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {categories.map((item) => (
          <Link key={item.id} href={item.slug}>
            <div className="flex cursor-pointer flex-col">
              <Avatar isBordered radius="md" src={item.image} />
              <p className="text-center font-semibold text-stone-800 dark:text-slate-200">
                {item.emoji}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
