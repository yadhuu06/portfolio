import React, { useState } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';
import AIAssistant from './components/AIAssistant';
import Terminal from './components/Terminal';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Home />
        <AIAssistant />
        <Terminal />
      </div>
    </>
  );
}

export default App;
