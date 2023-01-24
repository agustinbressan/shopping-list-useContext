import React, { useContext } from "react"
import ItemsListContext from "../ItemsListContext"
import Item from "./Item"

export default function ItemsList() {
    const {
        items
    } = useContext(ItemsListContext)

    const doneItemsCount = items.filter(i=>i.done).length

    return (
        <div>
            <h2>Items ({doneItemsCount}/{items.length}) {(items.length && doneItemsCount === items.length) ? '✅ All done!' : ''}</h2>
            {
                items.length ?
                items.map((item, index) => <Item key={item.id} item={item} itemNumber={(index+1)} />)
                : 'The item list is empty.'
            }
        </div>
    )
}