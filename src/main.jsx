import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FourCard from './components/FourCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FourCard />
  </StrictMode>,
)
