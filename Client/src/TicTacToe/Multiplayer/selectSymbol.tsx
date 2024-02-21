import React from 'react'
import { socket } from '../../socket'
import { setMyUser } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

export const SelectSymbol = () => {
  const dispatch = useDispatch()

  const [dataInput, setDataInput] = React.useState({
    name: '',
    roomId: '',
  })

  React.useEffect(() => {
    socket.on('api:newGame', dataRoom)
    return () => {
      socket.off('api:newGame', dataRoom)
    }
  }, [])

  React.useEffect(() => {
    socket.on('api:roomLogInfo', roomLogInfo)
    return () => {
      socket.off('api:roomLogInfo', roomLogInfo)
    }
  }, [])

  const roomLogInfo = (data: any) => {
    return toast.error(data.description)
  }

  const dataRoom = (data: any) => {
    dispatch(
      setMyUser({
        turn: data.turn,
        room: data.room,
        name: data.name,
      })
    )
  }

  const handleChange = (e: any) => {
    setDataInput({
      ...dataInput,
      [e.target.name]: e.target.value,
    })
  }

  const handleCreateRoom = () => {
    socket.emit('api:createNewGame', dataInput)
  }

  const handleJoin = () => {
    socket.emit('api:handleJoin', dataInput)
  }

  return (
    <div>
      <div className='game-title'>
        <h1>Tic - Tac - Toe</h1>
        <h3>Multiplayer 🕹️</h3>
      </div>
      <h3>How To Play</h3>
      <ul>
        <li>Player 1 Create a new game by entering the username</li>
        <li>Player 2 Enter another username and the room id that is displayed on first window.</li>
        <li>Click on join game.</li>
        <li>Create a new Game</li>
      </ul>
      <div>
        <input type='text' placeholder='Enter your name' name='name' onChange={handleChange} />
        <button onClick={() => handleCreateRoom()}>NEW GAME</button>
      </div>
      <div>
        <h3>Join an existing game</h3>
        <input type='text' placeholder='Enter your name' name='name' onChange={handleChange} />
        <input type='text' placeholder='Enter game id' name='roomId' onChange={handleChange} />
        <button onClick={() => handleJoin()}>join</button>
      </div>
      <Toaster position='bottom-right' reverseOrder={false} />
    </div>
  )
}
