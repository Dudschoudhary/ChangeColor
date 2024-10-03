import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Color from './components/Color'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <Color/>
  </StrictMode>,
)
