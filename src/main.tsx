import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/animations.css'

import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: 'w-[1.75rem] h-[1.75rem]' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
)
