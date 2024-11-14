import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/header/header'
import InvoiceTemplate from './component/invoice/invoice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Navbar/>
          <InvoiceTemplate/>
    </>
  )
}

export default App
