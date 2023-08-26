'use client'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'

import { redirectLink } from '~/lib'
import { useRouter } from 'next/navigation'
import { HeartFilledIcon, SettingsIcon } from '~/icons'

export function Menu() {
  const router = useRouter()

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
        onAction={(key) => redirectLink(key, router.push)}
      >
        {/* <DropdownItem key="login">Login</DropdownItem>
        <DropdownItem key="register">Register</DropdownItem> */}
        <DropdownItem
          key="about"
          color="default"
          startContent={<HeartFilledIcon />}
        >
          about
        </DropdownItem>
        <DropdownItem
          key="sponsor"
          className="text-danger"
          color="danger"
          startContent={<HeartFilledIcon className="text-danger" />}
        >
          Sponsor
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
