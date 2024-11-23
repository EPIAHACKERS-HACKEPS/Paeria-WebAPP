import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
)

