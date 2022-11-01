import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Slider from './components/Slider';

function App() {
  const [start, setStart] = useState(false);
  const [intervalSeconds, setIntervalSeconds] = useState(15);

  const handleStartClick = () => {
    setStart(!start);
    console.log('app START');
  };

  return (
    <main style={{ margin: '0 auto', width: '520px' }}>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
        }}
      >
        <Button
          disabled={!intervalSeconds}
          handleStartClick={handleStartClick}
          start={start}
          style={{
            width: '75px',
          }}
        />
        <Slider value={intervalSeconds} onChange={setIntervalSeconds} />
      </span>
      <Card intervalSeconds={intervalSeconds} start={start} />
    </main>
  );
}

export default App;
