import { Link } from 'react'
import './header.css'
function Header(){
  function btnModo(){
    document.body.classList.toggle("lightmode")
  }
  function menu(){
    if(mobileNav.style.display == 'flex'){
      mobileNav.style.display = 'none'
    }else{
      mobileNav.style.display = 'flex'
    }
  }
  return(
    <>
      <header>
        <nav id='nav'>
          <h2>NY</h2>
          <a class="links nav" href="#">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#projetos">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
        </nav>
        <button id="mode"onClick={btnModo} className=''><div></div></button>
      </header>
    </>
  )
}
export default Header