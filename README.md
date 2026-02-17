<div align="center">

<h1>🎮 Tic Tac Toe</h1>

[![GitHub stars](https://img.shields.io/github/stars/Arviixzuhs/TicTacToe?style=for-the-badge)](https://github.com/Arviixzuhs/TicTacToe/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Arviixzuhs/TicTacToe?style=for-the-badge)](https://github.com/Arviixzuhs/TicTacToe/network)
[![GitHub issues](https://img.shields.io/github/issues/Arviixzuhs/TicTacToe?style=for-the-badge)](https://github.com/Arviixzuhs/TicTacToe/issues)

**Real-time Tic Tac Toe game with single-player and multiplayer modes. Built with React, Redux, Socket.IO, and TypeScript for a seamless gaming experience.**

</div>

---

## 📚 Table of Contents

- [About The Project](#-about-the-project)
- [Architecture Overview](#-architecture-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Clone Repository](#1-clone-repository)
  - [Backend Setup](#-backend-setup)
  - [Frontend Setup](#-frontend-setup)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Design Principles](#-design-principles)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🚀 About The Project

**Tic Tac Toe** is a production-oriented web application implementing the classic game with real-time multiplayer and AI-based single-player modes. The project demonstrates:

- Clean and modular backend structure with Express.js and Socket.IO
- Real-time communication for multiplayer matches
- Structured frontend state management using Redux Toolkit
- Type-safe full-stack development with TypeScript
- Centralized game logic handling via API server
- Responsive and intuitive user interface

It is structured as two independent services:
- **Api** → REST & WebSocket server (Express.js + Socket.IO)
- **Client** → SPA Client (React + Vite)

---

## 🏗 Architecture Overview

```
TicTacToe/
├── Api/      # Backend server
└── Client/   # Frontend SPA
```

---

## ✨ Key Features

- 🔗 Real-time multiplayer mode
- 🤖 Single-player mode with AI
- 🖥 User-friendly interface with React and Redux
- 🔧 Robust API server handling game logic
- 🔄 Real-time communication and game state syncing
- 🗂 User session management with Redux and local storage
- 🎮 Full game logic handled by the API server

---

## 🛠 Tech Stack

### Frontend
- React
- Redux Toolkit
- React Router
- Socket.IO client
- TypeScript
- Vite

### Backend
- Express.js
- Socket.IO server
- TypeScript
- CORS
- Morgan
- Body-parser

### Build Tools
- Vite
- Webpack

---

## ⚙️ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Arviixzuhs/TicTacToe.git
cd TicTacToe
```

### 🧠 Backend Setup

```bash
cd Api
npm install
```

Start development server:

```bash
npm run dev
```

Backend runs at: `http://localhost:3000`

### 🎨 Frontend Setup

```bash
cd ../Client
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📁 Project Structure

### Backend (Api)

```
Api/
├── src/
│   ├── index.ts
│   ├── socketEvents/
│   └── ...
├── package.json
└── tsconfig.json
```

### Frontend (Client)

```
Client/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes/
│   ├── store/
│   ├── features/
│   ├── hooks/
│   ├── socket.ts
│   └── TicTacToe/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🧪 Scripts

### Backend

```bash
npm run dev    # Start development server
npm run build  # Build for production
```

### Frontend

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Preview production build
```

---

## 🎯 Design Principles

- Clean modular architecture
- Predictable state management with Redux Toolkit
- Real-time communication with Socket.IO
- Type-safe full-stack development
- Clear separation between API and client
- Maintainable folder structure
- User-friendly and responsive UI

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 👨‍💻 Author

Developed by **Arviixzuhs**

If you find this project useful, consider leaving a ⭐ on the repository.
