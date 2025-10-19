import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ItemsProvider } from './context/ItemsCont.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsProvider>
      <App />
    </ItemsProvider>
  </StrictMode>,
)
