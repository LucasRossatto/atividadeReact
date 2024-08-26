import "../style/header.css"

const Header = ({marca,topico1, topico2, topico3}) =>{

return(
    <div className="header-container">
        <a href="#">{marca}</a>
        <ul>
            <li>{topico1}</li>
            <li>{topico2}</li>
            <li>{topico3}</li>
        </ul>
    </div>
)


}

export default Header;