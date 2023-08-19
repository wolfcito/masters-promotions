import { SVGProps } from 'react'

export interface IconSvgProps
  extends SVGProps<SVGSVGElement>,
    JSX.IntrinsicAttributes {
  size?: number
}
