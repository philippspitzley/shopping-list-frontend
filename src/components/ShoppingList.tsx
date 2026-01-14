import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent } from './ui/card'
import ShoppingListItem from './ShoppingListItem'
import ErrorCard from './ErrorCard'
import api from '@/api/itemAPI'
import { Plus } from 'lucide-react'
import type { ShoppingItem } from '@/api/types'

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([])
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const fetchItems = useCallback(async () => {
    const { data, error } = await api.getItems()
    if (error && error instanceof Error) {
      setError(error.message)
    } else if (data) {
      setItems(data)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      await fetchItems()
    })()
  }, [])

  const addItem = useCallback(
    async (formData: FormData) => {
      const itemName = formData.get('item')

      if (typeof itemName === 'string' && itemName.trim() !== '') {
        const { data: newItem, error } = await api.createItem({
          name: itemName,
        })

        setError('')

        if (error && error instanceof Error) {
          setError(error.message)
        }

        if (newItem) {
          setItems([...items, newItem])
        }
      }
      inputRef.current?.focus()
    },
    [items],
  )

  const removeItem = async (itemId: string) => {
    const { success, error } = await api.deleteItem(itemId)

    if (error && error instanceof Error) {
      setError(error.message)
    }

    if (success) {
      await fetchItems()
    }
    inputRef.current?.focus()
  }

  const toggleBuyItem = async (item: ShoppingItem) => {
    const { success, error } = await api.buyItem(item._id, {
      bought: !item.bought,
    })

    if (error && error instanceof Error) {
      setError(error.message)
    }

    if (success) {
      await fetchItems()
    }
  }

  return (
    <div className="flex flex-row items-center justify-center pt-12">
      <Card className="relative w-4xl rounded-3xl border-none p-8 ring-1 ring-white/6 sm:p-10">
        <CardContent>
          <form action={addItem} className="transition-all duration-500">
            <div className="mb-4 flex flex-row items-end justify-between gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="item" className="w-full">
                  Item
                </Label>
                <Input
                  id="item"
                  name="item"
                  ref={inputRef}
                  placeholder="Pizza"
                />
              </div>

              <Button>
                <Plus /> Add
              </Button>
            </div>

            <ErrorCard error={error} setError={setError} />

            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <ShoppingListItem
                  key={item._id}
                  item={item}
                  onDelete={removeItem}
                  onBuy={toggleBuyItem}
                  onFocus={() => inputRef.current?.focus()}
                />
              ))}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
