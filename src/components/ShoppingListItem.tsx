import { Trash2 } from 'lucide-react'
import type { ShoppingItem } from '@/api/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ShoppingListItemProps {
  item: ShoppingItem
  onDelete: (itemId: string) => Promise<void>
  onBuy: (item: ShoppingItem) => Promise<void>
  onFocus: () => void
}

export default function ShoppingListItem({
  item,
  onDelete,
  onBuy,
  onFocus,
}: ShoppingListItemProps) {
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          onFocus()
        }
      }}
      className={cn(
        'group bg-primary/2 hover:border-primary/30 focus-within:ring-offset-background focus-within:ring-ring/50 flex flex-row items-center justify-between gap-4 rounded-lg border p-2 transition-colors duration-150 focus-within:ring-4 focus-within:ring-offset-2 focus-within:outline-none',
        item.bought ? 'bg-card/20' : 'hover:bg-primary/10',
      )}
    >
      <Button
        variant="ghost"
        onPointerDown={(e) => e.preventDefault()}
        onClick={() => onBuy(item)}
        type="button"
        aria-pressed={item.bought}
        className={cn(
          'w-full flex-1 cursor-pointer items-center justify-between rounded-lg p-4 text-left focus-visible:ring-0 dark:hover:bg-transparent',
          item.bought && 'font-thin line-through',
        )}
      >
        <span>{item.name}</span>
      </Button>

      <Button
        onClick={(e) => {
          e.stopPropagation()
          onDelete(item._id)
        }}
        aria-label={`Delete ${item.name}`}
        size="icon"
        variant="destructive"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  )
}
