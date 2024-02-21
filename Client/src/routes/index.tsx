import { Route, Routes } from 'react-router-dom'
import { TicTacToeMain } from '../TicTacToe'
import { TicTacToeWithAFriend } from '../TicTacToe/WithAFriend'
import { TicTacToeMultiplayer } from '../TicTacToe/Multiplayer'
import { TicTacToeSingleplayer } from '../TicTacToe/Singleplayer'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<TicTacToeMain />} />
      <Route path='/friend' element={<TicTacToeWithAFriend />} />
      <Route path='/multiplayer' element={<TicTacToeMultiplayer />} />
      <Route path='/singleplayer' element={<TicTacToeSingleplayer />} />
    </Routes>
  )
}

export default Router
