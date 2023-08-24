import { tw } from '@stats/tailwind/merge'
import { type ComponentProps, type FC } from 'react'
export type LoaderProps = { wrapperClassName?: string } & ComponentProps<'div'>

export const Loader: FC<LoaderProps> = ({
  wrapperClassName,
  className,
  ...props
}) => {
  return (
    <div className={tw('flex w-full justify-center', wrapperClassName)}>
      <div
        {...props}
        className={tw(
          'm-auto h-8 w-8 animate-spin rounded-full border-2 border-dashed dark:border-violet-200',
          className
        )}
      />
    </div>
  )
}
