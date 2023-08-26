import { NavigateOptions } from 'next/dist/shared/lib/app-router-context'
import { siteConfig } from '~/config/site'

export const menuItems: { [key: string]: string } = {
  sponsor: siteConfig.links.sponsor,
  about: 'about',
}

export const redirectLink = (
  key: React.Key,
  push: (href: string, options?: NavigateOptions | undefined) => void
) => {
  if (key === 'sponsor') open(menuItems['sponsor'], '_blank', 'noreferrer')
  if (key === 'about') push(menuItems['about'])
}
