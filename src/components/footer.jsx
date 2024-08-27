import "../style/footer.css"

const Footer = ({titulo, desc, ano, nomeEmpresa}) =>{

return(
    <div className="footer-container">
      
<div className="text-container">
        <div className="text-controller">
            <h1>{titulo}</h1>
            <h2>{desc}</h2>
        </div>

        <div className="text-controller">
            <h1>Ajuda</h1>
            <h2>texto</h2>
            <h2>texto</h2>
        </div>

        <div className="text-controller">
            <h1>Sobre nós</h1>
            <h2>texto</h2>
            <h2>texto</h2>
        </div>

        <div className="text-controller">
            <h1>Redes Socias</h1>
            <h2>texto</h2>
            <h2>texto</h2>
        </div>
    </div>
        <hr />

        <div className="text-container">
                <h2>politicas de privacidade</h2>
                <h2>termos de uso</h2>
                <h2>© {ano} por {nomeEmpresa}. Todos os direitos reservados. </h2>
        </div>
    </div>

)


}

export default Footer;