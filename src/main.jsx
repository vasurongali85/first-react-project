import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
     <Provider store={store}><App /></Provider>
     </BrowserRouter>
  </StrictMode>,
)
