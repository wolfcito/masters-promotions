'use client'
import { Avatar } from '@nextui-org/react'
import { BottomNavbar } from './footer.type'
import { getButtomNavbarItems } from '~/services'

export async function Footer() {
  const buttonNavbar: BottomNavbar[] = await getButtomNavbarItems()

  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {buttonNavbar.map((item) => (
          <Avatar key={item.id} isBordered radius="md" src={item.cover} />
        ))}
      </div>
    </footer>
  )
}
