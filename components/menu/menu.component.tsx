'use client'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from '@nextui-org/react'

import { HeartFilledIcon, SettingsIcon } from '~/icons'
import { siteConfig } from '~/config/site'

export function Menu() {
  const redirectLink = (key: React.Key, url: string) => {
    if (key === 'sponsor') window.open(url, '_blank', 'noreferrer')
  }

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="light" isIconOnly>
          <SettingsIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        aria-label="Static Actions"
        disabledKeys={['login', 'register']}
        onAction={(key) => redirectLink(key, siteConfig.links.sponsor)}
      >
        {/* <DropdownItem key="login">Login</DropdownItem>
        <DropdownItem key="register">Register</DropdownItem> */}
        <DropdownItem
          key="sponsor"
          className="text-danger"
          color="danger"
          startContent={<HeartFilledIcon className="text-danger" />}
        >
          <Link href={siteConfig.links.sponsor} color="danger" isExternal>
            Sponsor
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
