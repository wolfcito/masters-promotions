import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import { siteConfig } from '~/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from '~/components/theme-switch'
import { HeartFilledIcon } from '~/icons'

export function Navbar() {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white/10 backdrop-blur-md"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit">Fūrinkazan</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Button
          isIconOnly
          isExternal
          as={Link}
          className="text-default-600 bg-default-100 text-sm font-normal"
          href={siteConfig.links.sponsor}
          startContent={<HeartFilledIcon className="text-danger" />}
          variant="light"
        ></Button>
      </NavbarContent>
    </NextUINavbar>
  )
}
