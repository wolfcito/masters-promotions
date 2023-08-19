export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Fūrinkazan - Masters Promotion Register',
  description:
    'Welcome to the Fūrinkazan Masters Showcase App! This platform is designed to honor and highlight the exceptional mastery of martial arts instructors associated with the Fūrinkazan philosophy.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/wolfcito',
    twitter: 'https://twitter.com/AKAwolfcito',
    docs: 'https://wolfcito.mundovirtual.solutions',
    discord: '#',
    sponsor: 'https://patreon.com/wolfcito',
  },
}
