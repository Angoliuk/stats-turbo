import {
  type ReactNode,
  type Ref,
  type UIEventHandler,
  type ReactElement,
  Fragment
} from 'react'
import { Loader } from '../loader'
import { useForwardedRef, useInfiniteScroll } from '@stats/hooks'
import { tw } from '@stats/tailwind/merge'

export type ListItemProps<T> = { item: T; index: number }

export type ListItem<T> = (params: ListItemProps<T>) => ReactNode

export type ListProps<T> = {
  listRef?: Ref<HTMLDivElement>
  data: T[] | undefined
  isError?: boolean
  error?: string
  isFirstLoading?: boolean
  isFetchingMore?: boolean
  isRefetching?: boolean
  inverted?: boolean
  horizontal?: boolean
  errorComponent?: ReactNode
  emptyComponent?: ReactNode
  headerComponent?: ReactNode
  className?: string
  isContentWrapped?: boolean
  contentWrapperClassName?: string
  loaderWrapperClassName?: string
  endReachedThreshold?: number
  listItem: ListItem<T>
  keyExtractor: (item: ListItemProps<T>) => string
  loadMore?: () => void
  onScroll?: UIEventHandler<HTMLDivElement>
}

export const List = <T,>({
  listRef,
  data,
  isError,
  error,
  isFirstLoading,
  isFetchingMore,
  isRefetching,
  inverted,
  horizontal,
  errorComponent,
  emptyComponent,
  headerComponent,
  className,
  loaderWrapperClassName,
  endReachedThreshold,
  contentWrapperClassName,
  isContentWrapped,
  listItem,
  loadMore,
  keyExtractor,
  onScroll
}: ListProps<T>): ReactElement | null => {
  const innerRef = useForwardedRef(listRef)

  useInfiniteScroll({
    ref: innerRef,
    loadMore,
    inverted,
    endReachedThreshold,
    enabled: !isFetchingMore && !isRefetching
  })

  if (isFirstLoading)
    return (
      <Loader
        className='my-4 min-h-[20px]'
        wrapperClassName={loaderWrapperClassName}
      />
    )
  if (isError) return errorComponent ? <>{errorComponent}</> : <p>{error}</p>
  if ((!data || data.length === 0) && emptyComponent)
    return <>{emptyComponent}</>

  // eslint-disable-next-line no-nested-ternary
  const direction = horizontal
    ? inverted
      ? 'flex-row-reverse'
      : 'flex-row'
    : inverted
    ? 'flex-col-reverse'
    : 'flex-col'

  const withContentWrapper = (children: ReactNode) =>
    isContentWrapped ? (
      <div
        className={tw(
          'flex w-full flex-wrap items-center',
          contentWrapperClassName
        )}>
        {children}
      </div>
    ) : (
      children
    )

  return (
    <div
      ref={innerRef}
      className={tw('flex', direction, className)}
      onScroll={onScroll}>
      {headerComponent}
      {isRefetching && !isFetchingMore && (
        <Loader className='my-4 min-h-[20px]' />
      )}
      {withContentWrapper(
        data?.map((item, index) => (
          <Fragment key={keyExtractor({ item, index })}>
            {listItem({ item, index })}
          </Fragment>
        ))
      )}
      {isFetchingMore && !isRefetching && (
        <Loader className='my-4 min-h-[20px]' />
      )}
    </div>
  )
}
