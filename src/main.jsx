import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom'
// import './tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App/>
    </Router>
  </StrictMode>,
)