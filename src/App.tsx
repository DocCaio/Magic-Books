import './App.css'
import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { CartDrawer } from './components/Cards/CartDrawer'
import Banner from './components/Banner'
import Cards from './components/Cards'
import NavBar from './components/NavBar'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <section className='app'>
     
      <NavBar onCartClick={() => setCartOpen(true)} />
      
      <main>
        <Banner />
        <Cards />
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </section>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App