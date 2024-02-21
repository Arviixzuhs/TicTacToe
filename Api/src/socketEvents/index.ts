/* Numero de salas creadas */
interface Room {
  users: Array<string>
  roomId: string
}

const rooms: Room[] = []

/* Funcion para marcar una casilla */
const handleSquare = async (io: any, data: any) => {
  io.to(data.user.room).emit('api:handlerSquare', data)
}

/* Funciona para crear una nueva sala */
const handleCreateNewGame = async (socket: any, data: any) => {
  if (!data.name || data.name.trim() == '') {
    return socket.emit('api:roomLogInfo', { description: 'Debes ingresar tu nombre' })
  }

  const room: string = 'room-' + rooms.length
  socket.join(room)

  rooms.push({
    users: [socket.id],
    roomId: room,
  })

  socket.emit('api:newGame', { name: data.name, room, turn: 'X' })
}

/* Funcion para entrar a una sala que ya existe */
const handleJoinAnExistingGame = async (socket: any, data: any) => {
  if (!data.name || data.name.trim() == '') {
    return socket.emit('api:roomLogInfo', { description: 'Debes ingresar tu nombre' })
  }

  if (!data.roomId || data.roomId.trim() == '') {
    return socket.emit('api:roomLogInfo', { description: 'Debes ingresar la id de una sala' })
  }

  const room = rooms.find((item) => item.roomId == data.roomId)

  if (room) {
    if (room.users.length == 2) {
      return socket.emit('api:roomLogInfo', { description: 'Esa sala está llena' })
    } else {
      socket.join(data.roomId)
      socket.emit('api:newGame', { name: data.name, room: data.roomId, turn: 'O' })
      socket.to(data.roomId).emit('api:startGame')
      room.users.push(socket.id)
    }
  } else {
    return socket.emit('api:roomLogInfo', { description: 'Esa sala no existe' })
  }
}

const socketEvents = (io: any) => {
  io.on('connection', (socket: any) => {
    socket.on('api:handleJoin', (data: any) => handleJoinAnExistingGame(socket, data))
    socket.on('api:handlerSquare', (data: any) => handleSquare(io, data))
    socket.on('api:createNewGame', (data: any) => handleCreateNewGame(socket, data))
  })
}

export default socketEvents
