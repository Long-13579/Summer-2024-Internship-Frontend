import { cn } from '@/lib/utils'

export default function MultiLevelSelect({
  icon: IconComponent,
  title,
  extraClass,
  imgClass,
  titleClass,
  listClass,
  itemClass,
  bridgeClass,
  listItem,
  subItemName,
  ...rest
}) {
  return (
    <div
      className={cn(
        'group/item relative flex h-full items-center gap-1 hover:cursor-pointer hover:text-yellow-custom-700',
        extraClass
      )}
      {...rest}
    >
      <IconComponent className={imgClass} />
      <span className={titleClass}>{title}</span>
      {listItem && (
        <div
          className={cn(
            'absolute left-0 top-full z-10 hidden w-[200px] min-w-full rounded-lg border border-gray-custom-700 bg-main text-white shadow-md group-hover/item:block',
            listClass
          )}
        >
          {listItem.map((item) => (
            <div
              key={item.id}
              className={cn(
                'group/sub relative p-2 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-custom-700 hover:text-yellow-custom-700',
                itemClass
              )}
            >
              {item.name}
              {item[subItemName].length > 0 && (
                <div
                  className={cn(
                    'absolute left-full top-0 hidden min-w-[200px] whitespace-nowrap rounded-lg border border-gray-custom-700 bg-main text-white shadow-lg group-hover/sub:block',
                    listClass
                  )}
                >
                  {item[subItemName].map((subItem) => (
                    <div
                      key={subItem.id}
                      className={cn(
                        'relative p-2 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-custom-700 hover:text-yellow-custom-700',
                        itemClass
                      )}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className={cn('absolute left-0 top-0 h-full w-full bg-transparent', bridgeClass)}></div>
    </div>
  )
}
