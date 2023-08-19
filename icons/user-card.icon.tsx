export function UserCardIcon({
  size,
  height,
  width,
  ...props
}: UserCardIconProps) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fill="currentColor"
        d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3ZM8.5 7.17c1.27 0 2.31 1.04 2.31 2.31s-1.04 2.31-2.31 2.31-2.31-1.04-2.31-2.31S7.23 7.17 8.5 7.17Zm3.87 9.49c-.09.1-.23.16-.37.16H5c-.14 0-.28-.06-.37-.16a.52.52 0 0 1-.13-.38 3.548 3.548 0 0 1 3.19-3.17 8.66 8.66 0 0 1 1.61 0c1.68.16 3.03 1.49 3.19 3.17.02.14-.03.28-.12.38Zm6.63.09h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      />
    </svg>
  )
}

interface UserCardIconProps
  extends JSX.IntrinsicAttributes,
    React.SVGProps<SVGSVGElement> {
  size: number
}
