import React, { useContext, useState } from "react"
import ItemsListContext from "../ItemsListContext"

export default function AddNewItem() {
    const [description, setDesciption] = useState('')
    const { addItem } = useContext(ItemsListContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.length === 0) return

        addItem(description)
        setDesciption('')
    }

    return (
        <div>
            <h2>Add a new item</h2>
            <form onSubmit={handleSubmit}>
                Description <input type="text" value={description} onChange={e => setDesciption(e.target.value)} title='Item description' />
                <button disabled={!description.length} onClick={handleSubmit} title='Add item'>Add item</button>
            </form>
        </div>
    )
}