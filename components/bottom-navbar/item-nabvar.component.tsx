'use client'

import { Avatar, Link } from '@nextui-org/react'
import { CategoryProps } from '../card'

export function ItemNavbar(category: CategoryProps) {
  const { emoji, image, slug } = category
  return (
    <Link href={slug}>
      <div className="flex cursor-pointer flex-col">
        <Avatar isBordered radius="md" src={image} />
        <p className="text-center font-semibold text-stone-800 dark:text-slate-200">
          {emoji}
        </p>
      </div>
    </Link>
  )
}
