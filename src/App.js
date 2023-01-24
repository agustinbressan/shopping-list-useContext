import './App.css'
import ShoppingList from './components/ShoppingList'
import { ItemsListProvider } from './ItemsListContext'

function App() {
  return (
    <div className="App">
      <ItemsListProvider>
        <h1>Shopping List 🛒</h1>
        <ShoppingList />
      </ItemsListProvider>
    </div>
  );
}

export default App
