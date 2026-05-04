import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import './css/index.css'
// import './css/responsive.css'
import './fontawesome/css/all.css'
import './fontawesome/css/all.min.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
