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
        <h2>NY</h2>
        <nav id='nav'>
          <a class="links nav" href="#">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#projetos">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
        </nav>
        <div className='btns'>
          <button id="mode"onClick={btnModo} className=''><div></div></button>
          <button onClick={menu} id="menu">
            <div className="itemsMenu"></div>
            <div className="itemsMenu"></div>
            <div className="itemsMenu"></div>
          </button>
        </div>
        <nav id='mobileNav'>
          <a class="links nav" href="#">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
        </nav>
      </header>
    </>
  )
}
export default Header