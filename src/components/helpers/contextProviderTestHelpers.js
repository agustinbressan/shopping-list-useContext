import ItemsListContext from "../../ItemsListContext"

export function contextProviderWrapper(children, value = {}) {
    return (
      <ItemsListContext.Provider value={value}>
          {children}
      </ItemsListContext.Provider>
    )
}