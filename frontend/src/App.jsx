import React, { useState } from 'react';
import Home from './Home';

function App() {
  const [wallet] = useState("0x90d8...e561");
  const [balance, setBalance] = useState(5.999942);
  const [xp, setXP] = useState(1800);

  const handleGetTestAPT = () => {
    setBalance(prev => prev + 1);
    setXP(prev => prev + 100);
    alert("✅ Test APT received! XP +100");
  };

  const handleCompleteQuest = () => {
    setXP(prev => prev + 200);
    alert("🎯 Quest Completed! XP +200");
  };

  return (
    <Home
      wallet={wallet}
      balance={balance}
      xp={xp}
      onGetTestAPT={handleGetTestAPT}
      onCompleteQuest={handleCompleteQuest}
    />
  );
}

export default App;
