import Box from '@mui/material/Box'
import fotoTartaruga from './assets/img/tartaruga.jpg'
// (importando imagens) nome da variavel

import { ReactComponent as IconPuzzle } from './assets/img/puzzle.svg'
import {
  FaCartPlus as IconCarrinho,
  FaLuggageCart as CarrinhoBagagem
} from 'react-icons/fa'
// quando tem um ícone de um mesmo pacote não precisa fazer um novo import, só separar entre ",". Se for de um pacote diferente ai sim precisa

const Sidebar = () => {
  return (
    <Box sx={{
      background: "#DDD",
      width: 200,
      height: 500
    }}>
      <h2>Sidebar</h2>
      <img
        style={{ width: 200 }}
        src="https://super.abril.com.br/wp-content/uploads/2017/09/populac3a7c3a3o-de-tartarugas-marinhas-voltou-a-aumentar-em-todo-o-mundo1.png?w=1024&h=682&crop=1' alt='Tartaruguinha"></img>

      <hr />

      <img
        style={{ width: 200 }}
        src={fotoTartaruga} alt='2'></img>

      <hr />

      <IconPuzzle
        style={{
          width: 40,
          height: 40,
          fill: "#FF0000"
        }} />

      <hr />

      <IconCarrinho
        style={{
          width: 40,
          height: 40,
          color: '#345345'
        }} />
    </Box>
  )
}

export default Sidebar