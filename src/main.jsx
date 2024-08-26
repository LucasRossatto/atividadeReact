import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Form from './components/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Form 
    titulo="Criar Conta"
    label1="nome"
    label2="email"
    label3="senha"
    />
  </StrictMode>,
)
