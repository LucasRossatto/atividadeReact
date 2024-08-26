import "../style/footer.css"

const Footer = ({titulo, desc}) =>{

return(
    <div className="footer-container">
        <div className="text-controller">
            <h1>{titulo}</h1>
            <h2>{desc}</h2>
        </div>
    </div>
    
)


}

export default Footer;