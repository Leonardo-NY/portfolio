import { Link } from 'react'
import './header.css'
function Header(){
  function btnModo(){
    document.body.classList.toggle("lightmode")
  }
  return(
    <>
      <header>
        <nav>
          <a class="links nav" href="#home">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#projetos">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
          <button onClick={btnModo} className=''><div></div></button>
        </nav>
      </header>
    </>
  )
}
export default Header