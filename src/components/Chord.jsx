import { useEffect, useState } from 'react';
import { chordsAndScales, randomPick } from '../db';

const chordKeysArray = Object.keys(chordsAndScales);

const Chord = ({ start, intervalSeconds = 15 }) => {
  const [showHint, setShowHint] = useState(false);
  const [pickedChord, setPickedChord] = useState('');

  const handleHintClick = () => {
    setShowHint(!showHint);
  };

  useEffect(() => {
    setPickedChord(randomPick(chordKeysArray));
  }, []);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setPickedChord(randomPick(chordKeysArray));
      }, 1000 * intervalSeconds);
    }
    return () => interval && clearInterval(interval);
  }, [start, intervalSeconds]);

  return (
    <div>
      <h1
        style={{ display: 'flex', justifyContent: 'center', fontSize: '80px', marginBottom: '0px' }}
      >
        {chordsAndScales[pickedChord]?.name}
      </h1>
      <button
        className="extra content"
        onClick={() => {
          handleHintClick();
        }}
        style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'grey' }}
      >
        <i className="lightbulb outline icon" style={{ margin: '5px' }}></i>
        Hint
      </button>
      <div style={{ display: 'flex' }} className="image">
        {showHint && (
          <img
            style={{ flexGrow: 1, margin: '5px' }}
            alt="keys"
            src={chordsAndScales[pickedChord].chordImage}
          />
        )}
      </div>
      <div style={{ display: 'flex' }} className="image">
        {showHint && (
          <img
            style={{ width: '100%', margin: '5px' }}
            alt="keys"
            src={chordsAndScales[pickedChord].scaleImage}
          />
        )}
      </div>
    </div>
  );
};

export default Chord;
