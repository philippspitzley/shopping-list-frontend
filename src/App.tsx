import ShoppingList from '@/components/ShoppingList'
import Hero from './components/Hero'

function App() {
  return (
    <div className="dark relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <Hero />
      <ShoppingList />
    </div>
  )
}

export default App
