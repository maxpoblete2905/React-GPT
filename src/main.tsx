import React from 'react'
import ReactDOM from 'react-dom/client'
import { GPT } from './GPT.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GPT />
  </React.StrictMode>,
)
