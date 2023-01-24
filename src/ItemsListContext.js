import { createContext, useState } from "react"

const ItemsListContext = createContext()

export function ItemsListProvider({children}) {
    const [items, setItems] = useState([])

    function addItem(description) {
        // Using the getTime method from the Date class to get a numeric value (milliseconds) to use it as an id
        setItems(prevState => [...prevState, {id: new Date().getTime(), description}])
    }

    function deleteItem(id) {
        setItems(prevState => prevState.filter(item => item.id !== id))
    }
    
    function toggleCrossoutItem(id, done) {
        setItems(prevState => prevState.map(item => {
            if (item.id === id) {
                return { ...item, done: !done }
            }
            return item
        }))
    }

    return (
        <ItemsListContext.Provider value={{
            items,
            addItem,
            deleteItem,
            toggleCrossoutItem
        }}>
            {children}
        </ItemsListContext.Provider>
    )
}

export default ItemsListContext;