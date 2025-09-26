// api/leaderboard.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leaderboard = [
    { username: 'Alice', points: 120 },
    { username: 'Bob', points: 110 },
    { username: 'Charlie', points: 95 },
    { username: 'Diana', points: 90 },
    { username: 'Eve', points: 85 },
    { username: 'Frank', points: 82 },
    { username: 'Grace', points: 80 },
    { username: 'Hank', points: 75 },
    { username: 'Ivy', points: 70 },
    { username: 'Jack', points: 65 },
    { username: 'Ken', points: 60 },
    { username: 'Luna', points: 58 },
    { username: 'Mona', points: 55 },
    { username: 'Nash', points: 52 },
    { username: 'Omar', points: 50 },
    { username: 'Paul', points: 48 },
    { username: 'Quinn', points: 45 },
    { username: 'Rosa', points: 42 },
    { username: 'Steve', points: 40 },
    { username: 'Tina', points: 38 }
  ];

  res.status(200).json({
    frame: {
      version: '0.0.0',
      image: 'https://snakes-ledders.vercel.app/splash.png',
      buttons: [
        { label: '🎲 Play Game', action: 'post', target: 'https://snakes-ledders.vercel.app/api/frame' },
        { label: '🏆 Refresh Leaderboard', action: 'post', target: 'https://snakes-ledders.vercel.app/api/leaderboard' },
        { label: '🌐 Open Full Game', action: 'link', target: 'https://snakes-ledders.vercel.app/' }
      ]
    },
    data: leaderboard
  });
}
