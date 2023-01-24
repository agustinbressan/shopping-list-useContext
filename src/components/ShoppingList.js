import React from "react"
import AddNewItem from "./AddNewItem"
import ItemsList from "./ItemsList"

export default function ShoppingList() {
    return (
        <div>
            <AddNewItem />
            <ItemsList />
        </div>
    )
}