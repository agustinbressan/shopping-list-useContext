import React, { useContext } from "react"
import ItemsListContext from "../ItemsListContext"

export default function ItemActions({item}) {
    const { id, description, done } = item
    const { deleteItem, toggleCrossoutItem } = useContext(ItemsListContext)

    return (
        <>
            <button onClick={() => toggleCrossoutItem(id, done)} title={done ? `Restore item (${description})` : `Crossout item (${description})`}>{done ? '🔄' : '✅'}</button>
            <button onClick={() => deleteItem(id)} title={`Delete item (${description})`}>❌</button>
        </>
    )
}