import { useEffect, useState } from 'react';

import { akaJon, randomPhrases, randomPick } from '../db';
import Chord from './Chord';

const Card = ({ start, intervalSeconds }) => {
  const [nickName, setNickName] = useState('');
  const [phrase, setPhrase] = useState('');

  const time = parseInt(new Date().toLocaleTimeString());

  useEffect(() => {
    setNickName(randomPick(akaJon));
    setPhrase(randomPick(randomPhrases));
  }, []);

  const partOfDay = () => {
    if (time >= 4 && time < 12) {
      return 'Morning';
    } else if (time >= 12 && time < 17) {
      return 'Afternoon';
    } else if (time >= 17 && time < 23) {
      return 'Evening';
    } else if (time >= 23 || time < 4) {
      return "You're up late";
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
      className="ui card"
    >
      <div className="image">
        <h3 style={{ margin: '5px' }}>
          {partOfDay()} {nickName},
        </h3>
        <div className="meta" style={{ margin: '5px' }}>
          <span>{phrase} </span>
        </div>
      </div>
      <Chord start={start} intervalSeconds={intervalSeconds} />
    </div>
  );
};

export default Card;
