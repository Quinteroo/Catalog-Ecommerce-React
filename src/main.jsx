
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import FavoriteProvider from './providers/FavoriteContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </BrowserRouter>
)
