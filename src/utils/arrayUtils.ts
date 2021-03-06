type Item = {
    id: string
}

export const findItemIndexById = <TItem extends Item>(
    items: TItem[],
    id: string
) => {
    return items.findIndex((item: TItem) => item.id === id)
}

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function insertItemAtIndex<TITem>(
    array: 
)