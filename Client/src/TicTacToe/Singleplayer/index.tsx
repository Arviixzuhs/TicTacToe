import React from 'react'
import Write from '../../assets/write.mp3'
import { useGame } from '../../hooks/useGame'
import { useSound } from '../../hooks/useSound'

export const TicTacToeSingleplayer = () => {
  const { changePlayer, checkWinner, handleGame, player, winner } = useGame()
  const { Sound, audio, play } = useSound()

  /* Cuadriculas utilizadas */
  const [usedSqueare, setUsedSqueare] = React.useState<string[]>([])

  const $$ = (selector: string) => document.querySelectorAll(selector)

  const $boardTiles = $$('.board-square')
  const boardTiles = Array.from($boardTiles)

  function handlerSquare({ id }: { id: string }) {
    // Si ya hay un simbolo en la casilla, no se puede cambiar
    const target: any = document.getElementById(id)

    // El contenedor del simbolo
    const container = target?.children[0]

    // Si ya hay un simbolo, no se puede cambiar y si hay un ganador tampoco
    if (!container || container.textContent !== '' || winner) return

    setUsedSqueare((prevUsedSqueare) => [...prevUsedSqueare, id])

    // Se agrega el simbolo al tablero
    container.textContent = player.symbol
    play()

    // Se le agregan las clases para cambiar el color
    target.classList.add(player.class)
    container.classList.add('ani')

    checkWinner()

    // Se cambia el turno
    changePlayer(player.symbol)
  }

  React.useEffect(() => {
    /* Si es el turno de la computadora, entonces continuamos */
    if (player.symbol == 'O') {
      /* Total de cuadriculas*/
      let totalSquares: any = []
      boardTiles.map((item) => totalSquares.push(item.id))

      /* Cuadriculas que se pueden usar */
      const missingSquares: any = totalSquares.filter(
        (square: any) => !usedSqueare.some((usedSquare: any) => usedSquare === square)
      )

      function getRandomNumberBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min
      }

      const randomNumber = getRandomNumberBetween(0, missingSquares.length)
      const markSqueare = missingSquares[randomNumber]

      return handlerSquare({ id: markSqueare })
    }
  }, [usedSqueare])

  return (
    <div className='App'>
      <div className='game-title'>
        <h1>Tic - Tac - Toe</h1>
        <h3>Singleplayer 🕹️</h3>
      </div>
      <div className='board'>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <div
              id={'squeare-' + index}
              className='board-square'
              onClick={() => handlerSquare({ id: 'squeare-' + index })}
              key={index}
            >
              <p></p>
            </div>
          )
        })}
      </div>
      <div className='menu'>
        <button
          onClick={() => {
            setUsedSqueare([])
            handleGame()
          }}
        >
          Restart
        </button>
      </div>
      <Sound audio={audio} src={Write} />
    </div>
  )
}
