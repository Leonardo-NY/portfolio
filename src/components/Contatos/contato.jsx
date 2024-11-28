import './contato.css'
function Contato(){
  return(
    <>
      <footer id='contato'>
        <p id='pstart'>PRECISA DE UM DESENVOLVEDOR?</p>
        <h2>Vamos trabalhar juntos.</h2>
        <section className='contatos'>
          <div className='links-contatos'>
            <p>Instagran</p> 
            <span id='ico-insta'></span>
          </div>
          <div className='links-contatos'>
            <p>Linkedin</p>
            <span id='ico-linke'></span>
          </div>
          <div className='links-contatos'>
            <p>E-mail</p>
            <span id='ico-email'></span>
          </div>
          <div className='links-contatos'>
            <p>E-mail</p>
            <span id='ico-email'></span>
          </div>
        </section>
        <p id='pfinal'>&copy;2024 todos os direitos reservados.</p>

      </footer>
    </>
  )
}
export default Contato