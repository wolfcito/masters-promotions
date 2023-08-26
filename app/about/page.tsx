'use client'
import { title } from '~/components/primitives'
import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'
import { siteConfig } from '~/config/site'
import { GithubIcon } from '~/icons'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function AboutPage() {
  return (
    <div>
      <h1 className={title({ className: 'mb-8 text-center' })}>Fūrinkazan</h1>
      <Accordion selectionMode="multiple" selectedKeys={new Set(['1'])}>
        <AccordionItem
          key="1"
          aria-label={`"Fūrinkazan" (風林火山)`}
          subtitle="This platform is designed to honor and highlight the exceptional mastery
          of martial arts instructors associated with the Fūrinkazan philosophy."
          title={`"Fūrinkazan" (風林火山)`}
        >
          <p className="pb-2 text-left">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Fū (風) - Wind - Swift like the wind, which doesn't stop for
            anything.
          </p>
          <p className="pb-2 text-left">
            Rin (林) - Forest - Silent like the forest, which hides and lies in
            wait.
          </p>
          <p className="pb-2 text-left">
            Ka (火) - Fire - Impetuous and destructive like fire, which consumes
            and devastates.
          </p>
          <p className="pb-2 text-left">
            Zan (山) - Mountain - Unchanging like the mountain, firm and
            unyielding.
          </p>
          <p className="pb-2 text-left">
            Emphasizing the importance of adaptability, cunning, aggression when
            necessary, and steadfastness in resistance.
          </p>
        </AccordionItem>
      </Accordion>
      <span className="mb-3 flex"></span>

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
