import React from 'react'
import Write from '../../assets/write.mp3'
import { socket } from '../../socket'
import { useGame } from '../../hooks/useGame'
import { useSound } from '../../hooks/useSound'
import { useSelector } from 'react-redux'
import { SelectSymbol } from './selectSymbol'
import toast, { Toaster } from 'react-hot-toast'

export const TicTacToeMultiplayer = () => {
  const user = useSelector((state: any) => state.user)
  const [inQueue, setInQueue] = React.useState(true)
  const [timeLeft, setTimeLeft] = React.useState(5)
  const { changePlayer, checkWinner, handleGame, checkDraw, setWinner, player, winner } = useGame()
  const { Sound, audio, play } = useSound()
  const draw = checkDraw()

  React.useEffect(() => {
    socket.on('api:startGame', handleSetQueue)
    return () => {
      socket.off('api:startGame', handleSetQueue)
    }
  }, [])

  React.useEffect(() => {
    socket.on('api:handlerSquare', handlerSquare)
    return () => {
      socket.off('api:handlerSquare', handlerSquare)
    }
  }, [])

  const handlerSquare = async ({ id, playerData }: { id: string; playerData: any }) => {
    // Si ya hay un simbolo en la casilla, no se puede cambiar
    const target: any = document.getElementById(id)

    // El contenedor del simbolo
    const container = target.children[0]

    // Si ya hay un simbolo, no se puede cambiar y si hay un ganador tampoco
    if (container.textContent !== '' || winner) return

    // Se agrega el simbolo al tablero
    container.textContent = playerData.symbol
    play()

    // Se le agregan las clases para cambiar el color
    target.classList.add(playerData.class)
    container.classList.add('ani')
    checkWinner()

    // Se cambia el turno
    changePlayer(playerData.symbol)

    socket.emit('api:handlerSquare', { id, playerData: player, user })
  }

  React.useEffect(() => {
    checkWinner()
    if (user.turn == 'O') {
      setInQueue(false)
    }
  })

  const handleResetGame = () => {
    handleGame()
    setTimeLeft(5)
    changePlayer('O')
    setWinner(false)
  }

  const handleSetQueue = () => {
    setInQueue(!inQueue)
  }

  React.useEffect(() => {
    let interval: number | undefined
    if (timeLeft > 0 && (winner || draw) && !inQueue) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft <= 0) {
      handleResetGame()
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [winner, timeLeft, draw])

  React.useEffect(() => {
    setInterval(() => {
      checkWinner()
    }, 1000)
  })

  return (
    <div className='App'>
      {user.room == null ? (
        <SelectSymbol />
      ) : (
        <>
          {inQueue ? (
            <div>
              <h3>hola {user.name}, espera a tu compañero</h3>
              <h4>roomId: {user.room}</h4>
            </div>
          ) : (
            <>
              <div className='game-title'>
                <h1>Tic - Tac - Toe</h1>
                <h3>Multiplayer 🕹️</h3>
                <h3>Turno de ({player.symbol})</h3>
              </div>
              <div className='board'>
                {Array.from({ length: 9 }).map((_, index) => {
                  return (
                    <div
                      className='board-square'
                      id={'squeare-' + index}
                      onClick={() => {
                        if (user.turn !== player.symbol)
                          return toast.error('¡Debes esperar tu turno!')
                        handlerSquare({ id: 'squeare-' + index, playerData: player })
                      }}
                      key={index}
                    >
                      <p></p>
                    </div>
                  )
                })}
              </div>
              {draw || winner ? (
                <div className='menu'>
                  <h3>({timeLeft})</h3>
                </div>
              ) : null}
              <Sound audio={audio} src={Write} />
              <Toaster position='bottom-right' reverseOrder={false} />
            </>
          )}
        </>
      )}
    </div>
  )
}
