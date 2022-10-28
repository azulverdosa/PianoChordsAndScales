import aMajor from '../images/Ab Maj.png';

const ChordCard = () => {
  const time = parseInt(new Date().toLocaleTimeString());
  console.log('time :>> ', typeof time, 'time: >>', time);

  const randomPick = (arr) => {
    const getIndex = Math.floor(Math.random() * arr.length);
    const selected = arr[getIndex];

    return selected;
  };

  const names = [
    'Jonny Boy',
    'Jon Jon',
    'Pappa Jon',
    'Jno',
    'Piano Man',
    'Jonnie Wonder',
    'you Jon Lord wannabe',
    'JonE',
  ];

  const phrases = [
    // 'That piano wont play itself kiddo, try this:',
    // 'You are neglecting your keys, try this out:',
    'Life is like a sewer… you get out what you put in, time to do some putting-in:',
    'The road to success is dotted with many tempting parking space, keep driving my friend:',
    'Do or do not, there is no try. Practise:',
    'The only place SUCCESS comes before WORK is the dictionary, now bang this out:',
    "We talkin' 'bout practice?... Yes, yes we are:",
    "Dairy cows don't get a day off, neither do you:",
    "Show me a guy who's afraid to look bad, and I'll show you a guy you can beat every time, you wanna be beat?:",
    "The best things in life are actually really expensive, so was that piano, get playin':",
    "If the world didn't suck we'd all fly into space. Before that happens play this:",
    "Even if you are on the right track, you'll get run over if you just sit there, jump to it:",
    'If you think you are too small to be effective, you have never been in the dark with a mosquito... go be that mosquito:',
    "You're only given a little spark of madness. You mustn't lose it:",
    // "Taking a step backward after taking a step forward is not a disaster, it's more like a cha-cha, let's keep dancing:",
    "There are two ways to pass a hurdle: leaping over or plowing through… let's monster truck this shit:",
    "There's a fine line between genius and insanity. Let's erase that line, play this:",
    "Failure is the condiment that gives success its flavor, let's spice this shit up:",
    "We don't stop playing because we grow old; we grow old because we stop playing, so play!",
  ];

  const partOfDay = () => {
    if (time < 12) {
      return 'Morning';
    } else if (time >= 12 && time < 17) {
      return 'Afternoon';
    } else if (time >= 17) {
      return 'Evening';
    }
  };

  return (
    <div style={{ display: 'flex', margin: '20px' }} className="ui card">
      <div className="image">
        <h3>
          {partOfDay()} {randomPick(names)},
        </h3>
        <div className="meta">
          <span className="date">{randomPick(phrases)} </span>
        </div>
        <img alt="Chord" src={aMajor} />
      </div>
      <div className="content">
        <div className="description">Can I use this for something else?</div>
      </div>
      <div className="extra content">
        <i className="lightbulb outline icon"></i>
        Hint
      </div>
    </div>
  );
};

export default ChordCard;
