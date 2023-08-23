'use client'
import {
  Card as MainCard,
  CardHeader,
  CardFooter,
  Avatar,
  Image,
} from '@nextui-org/react'

import { HeartFilledIcon } from '~/icons'
import { CategoryProps } from './card.type'

export function Card({
  image,
  name = 'Unknown',
  nickname = '@unknown',
  likes = 0,
}: CategoryProps) {
  return (
    <MainCard
      className="w-full rounded-none dark:bg-stone-800 md:rounded-md"
      isBlurred
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/tigreicon.png" />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small text-default-600 font-semibold leading-none">
              {name}
            </h4>
            <h5 className="text-small text-default-400 tracking-tight">
              {nickname}
            </h5>
          </div>
        </div>
      </CardHeader>
      <div className="text-small text-default-400 flex justify-center py-0">
        <Image
          radius="none"
          alt={`image of ${name}`}
          className="object-cover"
          height={200}
          src={image}
          width={600}
        />
      </div>
      <CardFooter className="gap-3">
        <div className="flex justify-end gap-1">
          <HeartFilledIcon className="text-danger" />
          <p className="text-default-400 text-small font-semibold">{likes}</p>
          <p className="text-default-400 text-small">likes</p>
        </div>
      </CardFooter>
    </MainCard>
  )
}
