import { Link } from 'react'
import './header.css'
function Header(){
  function btnModo(){
    document.body.classList.toggle("lightmode")
  }
  function menu(){
    
    if(nav.style.display == 'flex'){
      nav.style.display = 'none'
    }else{
      nav.style.display = 'flex'
    }
  }
  return(
    <>
      <header>
        <h2>NY</h2>
        <nav id='nav'>
          <a class="links nav" href="#home">Home</a>
          <a class="links nav" href="#">sobre</a>
          <a  class="links nav"href="#projetos">Projetos</a>
          <a class="links nav" href="#">Contatos</a>
        </nav>
        <div className='btns'>
          <button id="mode"onClick={btnModo} className=''><div></div></button>
          <button onClick={menu} id="menu">
            <div className="items-menu"></div>
            <div className="items-menu"></div>
            <div className="items-menu"></div>
          </button>
        </div>
      </header>
    </>
  )
}
export default Header