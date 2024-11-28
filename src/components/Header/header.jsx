import { Link } from 'react'
import './header.css'
function Header(){
  function btnModo(){
    document.body.classList.toggle('darkMode')
  }
  function menuMobile(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
  return(
    <>
      <header>
        <h2>LY</h2>
        <nav id='nav'>
          <ul id="menu">
            <li><a class="links nav" href="#">Home</a></li>
            <li><a class="links nav" href="#">sobre</a></li>
            <li><a  class="links nav"href="#projetos">Projetos</a></li>
            <li><a class="links nav" href="#">Contatos</a></li>
            <li><button id="mode"onClick={btnModo} className=''><div></div></button></li>
          </ul>
          <button id='btnMenu' onClick={menuMobile}>
            <span className="hambur"></span>
          </button>
        </nav>
      </header>
    </>
  )
}
export default Header