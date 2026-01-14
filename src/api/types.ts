export type ShoppingItem = {
  _id: string
  name: string
  bought: boolean
}

export type CreateShoppingItem = Pick<ShoppingItem, 'name'>
export type UpdateShoppingItem = Partial<Omit<ShoppingItem, '_id'>>

export type ItemReturnData = {
  data: ShoppingItem | undefined
  error: unknown | undefined
}

export type ItemsReturnData = {
  data: ShoppingItem[] | undefined
  error: unknown | undefined
}

export type DeleteReturnData = {
  success: boolean
  error: unknown | undefined
}
