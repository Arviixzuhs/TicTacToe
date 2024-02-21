import { useNavigate } from 'react-router-dom'

export const TicTacToeMain = () => {
  const navigate = useNavigate()
  const gameModeTypes = ['Friend', 'Multiplayer', 'Singleplayer']

  return (
    <div className='App'>
      <div className='mainMenuTTT'>
        <div className='game-title'>
          <h1>Tic - Tac - Toe</h1>
          <h3>Select a game mode 🕹️</h3>
        </div>
        <div className='contentMenuButtons'>
          {gameModeTypes.map((item, index) => (
            <button onClick={() => navigate(`/${item.toLowerCase()}`)} key={index}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
