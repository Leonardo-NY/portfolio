import { Link } from 'react'
import './header.css'
function Header(){
  function btnModo(){
    document.body.classList.toggle("lightmode")
  }
  function menuMobile(){
    const btnMobile = document.getElementById('menu')
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
  return(
    <>
      <header>
        <h2>LY</h2>
        <nav id='nav'>
          <a class="links nav" href="#">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#projetos">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
          <button id="mode"onClick={btnModo} className=''><div></div></button>
        </nav>
        <button id='menu' onClick={menuMobile}>
          <span className="linha-menu" id="lum"></span>
          <span className="linha-menu" id="ldois"></span>
          <span className="linha-menu" id="ltres"></span>
        </button>
      </header>
    </>
  )
}
export default Header