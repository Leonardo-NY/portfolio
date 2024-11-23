import './home.css'
function Home(){
  return(
    <>
      <main>
        <div className='start'>
          <div className='titulo'>
            <h1>Leo.</h1>
            <h2>FRONT-END / UI DESIGN</h2>
          </div>
          <div className="img-home"></div>
          <div className='msg'>
            <span>001</span>
            <div>
              <h3>front-end</h3>
              <p>desenvolver o melhor trabalho</p>
            </div>
          </div>
        </div>
        <div className='carrossel'>
          <div className='item zero'><p><h4></h4></p></div>
          <div className="item one"><p>HTML</p></div>
          <div className='item two'><p><h4></h4></p></div>
          <div className="item three"><p>CSS</p></div>
          <div className='item fuor'><p><h4></h4></p></div>
          <div className="item five"><p>JS</p></div>
          <div className='item six'><p><h4></h4></p></div>
          <div className="item seven"><p>REACT</p></div>
        </div>
        <div className='end'>
          <h2>Eu crio interfaces <div>não convencionais</div>, mas funcionais e visualmente agradáveis para o celular e a web.</h2>
          <div className='left-post'>
          </div>
        </div>
      </main>
    </>
  )
}
export default Home