import type {
  CreateShoppingItem,
  DeleteReturnData,
  ItemReturnData,
  ItemsReturnData,
  ShoppingItem,
  UpdateShoppingItem,
} from '@/api/types'

const HOST_URL =
  (import.meta.env.VITE_HOST_URL as string) || 'http://localhost:3000'

async function getItems(): Promise<ItemsReturnData> {
  try {
    const res = await fetch(`${HOST_URL}/api/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: { items: ShoppingItem[] } = await res.json()
    return { data: data.items, error: undefined }
  } catch (error) {
    console.error(error)
    return { data: undefined, error: error }
  }
}

async function createItem(
  nameProp: CreateShoppingItem,
): Promise<ItemReturnData> {
  try {
    const res = await fetch(`${HOST_URL}/api/items`, {
      method: 'POST',
      body: JSON.stringify(nameProp),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.status === 400) {
      throw new Error('Invalid item data.')
    }

    if (res.status === 409) {
      throw new Error('Item already exists.')
    }

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return { data: data.item, error: undefined }
  } catch (error) {
    console.error(error)
    return { data: undefined, error: error }
  }
}

async function deleteItem(id: string): Promise<DeleteReturnData> {
  try {
    const res = await fetch(`${HOST_URL}/api/items/${id}`, {
      method: 'DELETE',
    })

    if (res.status === 404) {
      throw new Error('Item not found.')
    }

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    return { success: true, error: undefined }
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}

async function buyItem(
  id: string,
  updateObject: UpdateShoppingItem,
): Promise<DeleteReturnData> {
  try {
    const res = await fetch(`${HOST_URL}/api/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObject),
      headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) {
      throw new Error('Failed to toggle buy')
    }

    return { success: true, error: undefined }
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}

const api = { getItems, deleteItem, createItem, buyItem }

export { api }
export default api
