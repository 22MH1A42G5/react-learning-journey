import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ItemsProvider } from './context/ItemsCont.jsx'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ItemsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ItemsProvider>
  </StrictMode>
)
