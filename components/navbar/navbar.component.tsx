import NextLink from 'next/link'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from '@nextui-org/navbar'

import { ThemeSwitch } from '~/components/theme-switch'
import { Menu } from '~/components/menu'

export function Navbar() {
  return (
    <NextUINavbar
      maxWidth="xl"
      className="bg-white/10 backdrop-blur-md"
      shouldHideOnScroll
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p
              className={
                'bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-lg font-bold text-transparent'
              }
            >
              Fūrinkazan
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Menu />
      </NavbarContent>
    </NextUINavbar>
  )
}
