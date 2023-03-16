export default Home;

export default Home, faz vc importar dessa maneira no seu main ->import Home from './pages/Home'

export function Home() faz vc importar dessa maneira no seu main -> import {Home} from './pages/Home'



--------------------------------------


function Home() {
  return(
    //Fragment vazio <> </> tambem pode colocar div
    // jsx nao aceita multiplos elemento somente dentro de uma tag
    <> 
    <h1>Lista de presença</h1>
    <input type="text" placeholder="Digite o nome..."/>
    <button type="button">Adicionar</button>
    </>
  )
}

--------

contornos das fontes mais suave
no global.css  -webkit-font-smoothing: antialiased;

-------------


