import { Badge } from '@nextui-org/badge'

import { UserCardIcon } from '~/icons'

export function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-center bg-white/10 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Badge color="danger" content={5} isInvisible={false} shape="circle">
          <UserCardIcon className="fill-current" size={30} />
        </Badge>
      </div>
    </footer>
  )
}
