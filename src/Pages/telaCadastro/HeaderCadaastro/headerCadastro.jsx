import '../telaCadastro.css'
import logo from '../../../assets/img/Logo.png'

export default function HeaderCadastro(){
    return(
        <header className='headerCadastro'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
    )
}