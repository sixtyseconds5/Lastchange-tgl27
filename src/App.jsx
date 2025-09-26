import React, { useState } from 'react'

function Tile({ n, player }) {
  return (
    <div className={`relative w-12 h-12 rounded-md border border-white/30 bg-white/10 flex items-center justify-center`}>
      {player === n ? <img src="/assets/coin.png" alt="player" className="w-6 h-6" /> : <span className="text-xs">{n}</span>}
    </div>
  )
}

export default function App() {
  const [pos, setPos] = useState(1)
  const [dice, setDice] = useState(null)

  const SIZE = 30
  const ladders = {3: 15, 8: 12}
  const snakes = {18: 6, 24: 10}

  const roll = () => {
    const r = Math.floor(Math.random() * 6) + 1
    setDice(r)
    let next = pos + r
    if (ladders[next]) next = ladders[next]
    if (snakes[next]) next = snakes[next]
    if (next > SIZE) next = SIZE
    setPos(next)
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center" style={{ backgroundImage: 'url(/assets/background.jpg)', backgroundSize: 'cover' }}>
      <h1 className="text-3xl font-bold mb-4">🐍 Crypto Snakes & Ladders</h1>
      <div className="grid grid-cols-6 gap-1 mb-4">
        {Array.from({length: SIZE}, (_, i) => SIZE - i).map(n => (
          <Tile key={n} n={n} player={pos} />
        ))}
      </div>
      <p className="mb-2">🎲 Dice: {dice ?? '-'}</p>
      <p className="mb-4">📍 Position: {pos}</p>
      <button onClick={roll} className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700">Roll Dice</button>
    </div>
  )
}
