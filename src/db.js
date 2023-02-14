//chords
import A_majorChord from './chord_images/A Maj.png';
import A_minorChord from './chord_images/A Min.png';
import Ab_majorChord from './chord_images/Ab Maj.png';
import Ab_minorChord from './chord_images/Ab Min.png';
import As_Bb_majorChord from './chord_images/Bb Maj.png';
import As_Bb_minorChord from './chord_images/Bb Min.png';

import B_majorChord from './chord_images/B Maj.png';
import B_minorChord from './chord_images/B Min.png';
import Bb_majorChord from './chord_images/Bb Maj.png';
import Bb_minorChord from './chord_images/Bb Min.png';

import C_majorChord from './chord_images/C Maj.png';
import C_minorChord from './chord_images/C Min.png';
import Cs_Db_majorChord from './chord_images/Db Maj.png';
import Cs_Db_minorChord from './chord_images/Db Min.png';

import D_majorChord from './chord_images/D Maj.png';
import D_minorChord from './chord_images/D Min.png';
import Ds_Eb_majorChord from './chord_images/Eb Maj.png';
import Ds_Eb_minorChord from './chord_images/Eb Min.png';
import Db_majorChord from './chord_images/Db Maj.png';
import Db_minorChord from './chord_images/Db Maj.png';

import E_majorChord from './chord_images/E Maj.png';
import E_minorChord from './chord_images/E Min.png';
import Eb_majorChord from './chord_images/Eb Maj.png';
import Eb_minorChord from './chord_images/Eb Min.png';

import F_majorChord from './chord_images/F Maj.png';
import F_minorChord from './chord_images/F Min.png';
import Fs_Gb_majorChord from './chord_images/Gb Maj.png';
import Fs_Gb_minorChord from './chord_images/Gb Min.png';

import G_majorChord from './chord_images/G Maj.png';
import G_minorChord from './chord_images/G Min.png';
import Gs_Ab_majorChord from './chord_images/Ab Maj.png';
import Gs_Ab_minorChord from './chord_images/Ab Min.png';
import Gb_majorChord from './chord_images/Gb Maj.png';
import Gb_minorChord from './chord_images/Gb Min.png';

//scales
import A_majorScale from './scale_images/A Maj Scale.png';
import A_minorScale from './scale_images/A Min Scale.png';
import Ab_Gs_majorScale from './scale_images/Gs:Ab Maj Scale.png';
import Ab_Gs_minorScale from './scale_images/Gs:Ab Maj Scale.png';
import As_Bb_majorScale from './scale_images/As:Bb Maj Scale.png';
import As_Bb_minorScale from './scale_images/As:Bb Min Scale.png';

import B_majorScale from './scale_images/B Maj Scale.png';
import B_minorScale from './scale_images/B Min Scale.png';

import C_majorScale from './scale_images/C Maj Scale.png';
import C_minorScale from './scale_images/C Min Scale.png';
import Cs_Db_majorScale from './scale_images/Cs:Db Maj Scale.png';
import Cs_Db_minorScale from './scale_images/Cs:Db Min Scale.png';

import D_majorScale from './scale_images/D Maj Scale.png';
import D_minorScale from './scale_images/D Min Scale.png';

import E_majorScale from './scale_images/E Maj Scale.png';
import E_minorScale from './scale_images/E Min Scale.png';
import Eb_Ds_minorScale from './scale_images/Ds:Eb Min Scale.png';
import Eb_Ds_majorScale from './scale_images/Ds:Eb Maj Scale.png';

import F_majorScale from './scale_images/F Maj Scale.png';
import F_minorScale from './scale_images/F Min Scale.png';
import Fs_Gb_majorScale from './scale_images/Fs:Gb Maj Scale.png';
import Fs_Gb_minorScale from './scale_images/Fs:Gb Min Scale.png';

import G_majorScale from './scale_images/G Maj Scale.png';
import G_minorScale from './scale_images/G Min Scale.png';

export const chordsAndScales = {
  AMJ: {
    name: 'A MAJOR',
    chordImage: A_majorChord,
    scaleImage: A_majorScale,
  },
  AMN: {
    name: 'A MINOR',
    chordImage: A_minorChord,
    scaleImage: A_minorScale,
  },
  AFMJ: {
    name: 'A♭ MAJOR',
    chordImage: Ab_majorChord,
    scaleImage: Ab_Gs_majorScale,
  },
  AFMN: {
    name: 'A♭ MINOR',
    chordImage: Ab_minorChord,
    scaleImage: Ab_Gs_minorScale,
  },

  ASMJ: {
    name: 'A♯ MAJOR',
    chordImage: As_Bb_majorChord,
    scaleImage: As_Bb_majorScale,
  },
  ASMN: {
    name: 'A♯ MINOR',
    chordImage: As_Bb_minorChord,
    scaleImage: As_Bb_minorScale,
  },
  BMJ: {
    name: 'B MAJOR',
    chordImage: B_majorChord,
    scaleImage: B_majorScale,
  },
  BMN: {
    name: 'B MINOR',
    chordImage: B_minorChord,
    scaleImage: B_minorScale,
  },
  BFMJ: {
    name: 'B♭ MAJOR',
    chordImage: Bb_majorChord,
    scaleImage: As_Bb_majorScale,
  },
  BFMN: {
    name: 'B♭ MINOR',
    chordImage: Bb_minorChord,
    scaleImage: As_Bb_minorScale,
  },
  CMJ: {
    name: 'C MAJOR',
    chordImage: C_majorChord,
    scaleImage: C_majorScale,
  },
  CMN: {
    name: 'C MINOR',
    chordImage: C_minorChord,
    scaleImage: C_minorScale,
  },
  CSMJ: {
    name: 'C♯ MAJOR',
    chordImage: Cs_Db_majorChord,
    scaleImage: Cs_Db_majorScale,
  },
  CSMN: {
    name: 'C♯ MINOR',
    chordImage: Cs_Db_minorChord,
    scaleImage: Cs_Db_minorScale,
  },
  DMJ: {
    name: 'D MAJOR',
    chordImage: D_majorChord,
    scaleImage: D_majorScale,
  },
  DMN: {
    name: 'D MINOR',
    chordImage: D_minorChord,
    scaleImage: D_minorScale,
  },
  DSMJ: {
    name: 'D♯ MAJOR',
    chordImage: Ds_Eb_majorChord,
    scaleImage: Eb_Ds_majorScale,
  },
  DSMN: {
    name: 'D♯ MINOR',
    chordImage: Ds_Eb_minorChord,
    scaleImage: Eb_Ds_minorScale,
  },
  DFMJ: {
    name: 'D♭ MAJOR',
    chordImage: Db_majorChord,
    scaleImage: Cs_Db_majorScale,
  },
  DFMN: {
    name: 'D♭ MINOR',
    chordImage: Db_minorChord,
    scaleImage: Cs_Db_minorScale,
  },

  EMJ: {
    name: 'E MAJOR',
    chordImage: E_majorChord,
    scaleImage: E_majorScale,
  },
  EMN: {
    name: 'E MINOR',
    chordImage: E_minorChord,
    scaleImage: E_minorScale,
  },
  EFMJ: {
    name: 'E♭ MAJOR',
    chordImage: Eb_majorChord,
    scaleImage: Eb_Ds_majorScale,
  },
  EFMN: {
    name: 'E♭ MINOR',
    chordImage: Eb_minorChord,
    scaleImage: Eb_Ds_minorScale,
  },
  FMJ: {
    name: 'F MAJOR',
    chordImage: F_majorChord,
    scaleImage: F_majorScale,
  },
  FMN: {
    name: 'F MINOR',
    chordImage: F_minorChord,
    scaleImage: F_minorScale,
  },
  FSMJ: {
    name: 'F♯ MAJOR',
    chordImage: Fs_Gb_majorChord,
    scaleImage: Fs_Gb_majorScale,
  },
  FSMN: {
    name: 'F♯ MINOR',
    chordImage: Fs_Gb_minorChord,
    scaleImage: Fs_Gb_minorScale,
  },
  GMJ: {
    name: 'G MAJOR',
    chordImage: G_majorChord,
    scaleImage: G_majorScale,
  },
  GMN: {
    name: 'G MINOR',
    chordImage: G_minorChord,
    scaleImage: G_minorScale,
  },
  GSMJ: {
    name: 'G♯ MAJOR',
    chordImage: Gs_Ab_majorChord,
    scaleImage: Ab_Gs_majorScale,
  },
  GSMN: {
    name: 'G♯ MINOR',
    chordImage: Gs_Ab_minorChord,
    scaleImage: Ab_Gs_minorScale,
  },
  GFMJ: {
    name: 'G♭ MAJOR',
    chordImage: Gb_majorChord,
    scaleImage: Fs_Gb_majorScale,
  },
  GFMN: {
    name: 'G♭ MINOR',
    chordImage: Gb_minorChord,
    scaleImage: Fs_Gb_minorScale,
  },
};

export const akaJon = [
  'Jonny Boy',
  'Jon Jon',
  'Pappa Jon',
  'Jno',
  'Piano Man',
  'Jonnie Wonder',
  'you Jon Lord wannabe',
  'JonE',
];

export const randomPhrases = [
  "'Mellifluous' is a sound that is pleasingly smooth and musical to hear.",
  // 'People are more creative in the shower.',
  // 'Australia is wider than the moon.',
  // "It's illegal to own just one guinea pig in Switzerland.",
  // 'The unicorn is the national animal of Scotland.',
  // 'Nutmeg is a hallucinogen.',
  // "The Japanese word 'Kuchi zamishi' is the act of eating when you're not hungry because your mouth is lonely.",
  // "You can hear a blue whale's heartbeat from over 2 miles away.",
  // 'The actors who voiced Mickey and Minnie mouse got married in real life.',
  // "The last letter added to the English alphabet was 'J'.",
  // "'Ultracrepidarian' is the word for someone giving an opinion on something they know nothing about.",
  // 'A jiffy is an actual unit of time.',
  "You can't hum if you hold your nose.",
  // 'The severed head of a sea slug can grow a whole new body.',
  // "The feeling of getting lost inside a mall is known as the 'Gruen transfer'.",
  // 'You lose up to 30 percent of your taste buds during a flight.',
  // "Rabbits can't puke.",
  // 'Marie Curie is the only person to earn a Nobel prize in two different sciences.',
  // 'The English word with the most definitions is "set."',
  'Creedence Clearwater Revival has the most No. 2 Billboard hits—without ever hitting No. 1.',
  // 'The healthiest place in the world is in Panama.',
  'Playing the accordion was once required for teachers in North Korea.',
  'Water makes different pouring sounds depending on its temperature.',
  // "Sandy Island, an island off the coast of Australia was shown on maps for 100 years, but it doesn't actually exist.",
  // 'Pigs are constitutionally protected in Florida.',
  // 'You can sneeze faster than a cheetah can run.',
  // 'The fire hydrant patent was lost in a fire.',
  // 'In Germany, people help toads cross the road.',
  // 'France has a dozen time zones.',
  // 'Men who are feeling stressed out prefer women with curvier figures.',
  // 'Shaq only ever made one three-pointer.',
  // 'Germany uncovers 2,000 tons of un-exploded bombs every year.',
  // "Every time you shuffle a deck of cards, you get a combination that's never existed.",
  // 'Actor Bill Murray uses a 1-800 number instead of an agent or manager.',
  // "There's a device that creates energy from the static electricity of snowfall.",
  // 'Beaver bum goo is occasionally used to enhance vanilla flavorings.',
  // 'The word "MacGyvered" is in the Oxford English Dictionary.',
  'Canadian astronaut, Chris Hadfield, released an album in 2015 in which all songs were recorded in space!',
  'Music helps plants grow.',
  'Prince played 27 instruments on his debut album. Lets get you going on just this one:',
  "There is a church in Germany that is playing the worlds longest running performance 'As SlowAs Possible' and it will end in the 27th century.",
  '"Wanna Be" by The Spice Girls is the catchiest song of all time.',
  'Finland has the most metal bands per capita.',
  'The british navy uses Britney Spears songs to scare off Somali pirates.',
  'None of The Beatles could read or write music.',
  'Metallica is the first and only band to play on all 7 continents.',
  'International Strange Music Day is a thing.',
  'There is a sea organ built into the coast of Croatia that plays music by way of sea waves.',
  "Cows produce more milke when listening to slow music. Let's slow it down for the cows:",
  "The Offspring's first drummer left the band to become a gynecologist.",
  "Billie Holiday was Billy Crystal's babysitter.",
  "Monaco's army is small ther than it's military orchestra.",
  'The Simpsons "Do the Bartman" was written by Michael Jackson.',
  "Ed Sheeran slept on Jamie Foxx's couch for six weeks before he made it big in the music business.",
  "Whitney Houston's The Bodyguard soundtrack is the best-selling soundtrack album of all time.",
  'Hong Kong hosted the largest harmonica ensemble in November 2009.',
  'Elvis is still the best-selling solo artist in the world.',
  'One in five country music songs refer to alcohol, one in three to tears and one in seven to “mama”.',
  "Bryan Adams photographed The Queen for a Canadian postal stamp commemorating Her Majesty's Golden Jubilee.",
  'Greece has the longest national anthem in the world.',
  '“Smells Like Teen Spirit” by Nirvana is actually about a deodorant for teenage girls.',
  "Michael Jackson's “Scream” has the most expensive music video of all time.",
  'The Japanese word “karaoke” means “empty orchestra.”',
  'Bluegrass country music originated in Kentucky.',
  'In Japan, people still buy a lot of CDs, with 85% of all music sales coming from CD purchases.',
  'The frame of a piano is made out of iron, not wood.',
  'Aretha Franklin became the first woman to be inducted into the Rock and Roll Hall of Fame in 1987.',
  '40% of musicians hear music in their sleep.',
  'A study shows that calming, slower, simpler music always trends before volatility occurs in the stock market.',
  'Cats enjoy music that uses similar frequencies to those with alternating frequencies.',
  'The human heartbeat always mimics the beat of the music a person is listening to.',
  'Only 1 in every 10,000 people has a perfect pitch.',
  'Learning musical instruments increases reasoning skills',
  'Music helps coordinate speech network in the brain and improves speech difficulties.',
  'Musicians develop a better long-term memory, because they create lyrics and retain them for years.',
  'Music boosts the growth of grey matters found in the brain which translates into better academic performance.',
  'Michael Jackson so badly wanted to play Spider-Man in a movie that he attempted to buy Marvel Comics.',
  'Earworms can be triggered just by the experiences that bring up the memory of a song.',
  'The word piano is the shortened version of the word pianoforte, which means soft (piano) and loud (forte).',
  'The piano has the widest range of tones of all instruments.',
  'The piano was first created in Italy by Bartolomeo Cristofori in 1709.',
  'Music can help someone with severe brain injury, recall memories.',
  'Drummers have heightened problem solving abilities.',
  "People prefer the original versions of songs because it's the first version they heard, not because it's better.",
  "The harmonica is the world's best-selling music instrument.",
];

export const intervalStepCount = 6;
export const intervalStepLength = 5;

export const intervalSteps = Array.from(
  { length: intervalStepCount },
  (_, index) => (index + 1) * intervalStepLength
);

export const randomPick = (arr) => {
  const getIndex = Math.floor(Math.random() * arr.length);
  const selected = arr[getIndex];

  return selected;
};
