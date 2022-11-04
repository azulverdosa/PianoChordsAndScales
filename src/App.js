import { useState, useEffect, useCallback } from 'react';

import Button from './components/Button';
import Card from './components/Card';
import Slider from './components/Slider';
import { intervalStepLength, intervalSteps } from './db';

function App() {
  const [start, setStart] = useState(false);
  const [intervalSeconds, setIntervalSeconds] = useState(15);

  const handleStartClick = () => {
    setStart(!start);
    console.log('app START');
  };

  const handleKeyUp = useCallback(
    (event) => {
      event.preventDefault();

      console.log('Pressed Key:', event.key);

      //start/stop with spacebar press
      switch (event.key) {
        case ' ': {
          console.log('Space Bar Pressed & start :>> ', start);
          return setStart(!start);
        }

        //slider time change with arrows
        case 'ArrowLeft': {
          const currentStep = intervalSteps.indexOf(intervalSeconds);
          console.log('Arrow Left pressed :>> ', currentStep, intervalSeconds);
          return currentStep > 0 && setIntervalSeconds(intervalSteps[currentStep - 1]);
        }

        case 'ArrowRight': {
          console.log('Arrow Right pressed :>> ');
          const currentStep = intervalSteps.indexOf(intervalSeconds);
          return (
            currentStep < intervalSteps.length - 1 &&
            setIntervalSeconds(intervalSteps[currentStep + 1])
          );
        }

        default:
          break;
      }
    },
    [intervalSeconds, start]
  );

  useEffect(() => {
    const args = ['keyup', handleKeyUp];
    document.addEventListener(...args);
    return () => document.removeEventListener(...args); //important to remember to remove or eventListener will multiply
  }, [handleKeyUp]);

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
        <Slider
          onChange={setIntervalSeconds}
          options={intervalSteps}
          step={intervalStepLength}
          value={intervalSeconds}
        />
      </span>
      <Card intervalSeconds={intervalSeconds} start={start} />
    </main>
  );
}

export default App;
