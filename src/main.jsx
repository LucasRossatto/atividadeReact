import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Form from './components/form.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Header
    marca={"Corretora BlackDiamond"}
    topico1={"Home"}
    topico2={"Discover"}
    topico3={"Contact us"}
    />

    < Form 
    titulo={"Criar Conta"}
    label1={"nome"}
    label2={"email"}
    label3={"senha"}
    />

    < Footer
    titulo={"Texto"}
    desc={"lorem"}
    />
  </StrictMode>,
)
