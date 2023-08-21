import { title } from '~/components/primitives'
import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '~/config/site'
import { GithubIcon } from '~/icons'

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ className: 'mb-8 text-center' })}>Fūrinkazan</h1>

      <span className="mb-3 flex">
        This platform is designed to honor and highlight the exceptional mastery
        of martial arts instructors associated with the Fūrinkazan philosophy.
      </span>
      <div className="flex w-full flex-col gap-3">
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
        >
          See more projects
        </Link>
      </div>

      <div className="my-8 flex justify-center">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://mundovirtual.solutions/"
          title="Mundo Virtual Homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">MundoVirtual</p>
        </Link>
      </div>
    </div>
  )
}
