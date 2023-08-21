import NextLink from 'next/link'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { HeartFilledIcon } from '~/icons'
import { siteConfig } from '~/config/site'
import { Button } from '@nextui-org/button'
import { ThemeSwitch } from '~/components/theme-switch'

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
