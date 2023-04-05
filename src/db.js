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
  "You can't hum if you hold your nose.",
  'Creedence Clearwater Revival has the most No. 2 Billboard hits—without ever hitting No. 1.',
  'Playing the accordion was once required for teachers in North Korea.',
  'Water makes different pouring sounds depending on its temperature.',
  'Canadian astronaut Chris Hadfield, released an album in 2015 in which all songs were recorded in space!',
  'Music helps plants grow.',
  'Prince played 27 instruments on his debut album.',
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
  "Monaco's army (82 soldiers) is small ther than it's military orchestra (85 musicians).",
  'The Simpsons "Do the Bartman" was written by Michael Jackson.',
  "Ed Sheeran slept on Jamie Foxx's couch for six weeks before he made it big in the music business.",
  "Whitney Houston's The Bodyguard soundtrack is the best-selling soundtrack album of all time.",
  'Hong Kong hosted the largest harmonica ensemble in November 2009.',
  'Elvis Presley is still the best-selling solo artist in the world.',
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
  'Learning musical instruments increases reasoning skills.',
  'Music helps coordinate speech network in the brain and improves speech difficulties.',
  'Musicians develop a better long-term memory, because they create lyrics and retain them for years.',
  'Music boosts the growth of grey matters found in the brain which translates into better academic performance.',
  'Michael Jackson so badly wanted to play Spider-Man in a movie that he attempted to buy Marvel Comics.',
  'Earworms can be triggered just by the experiences that bring up the memory of a song.',
  'The word piano is the shortened version of the word pianoforte, which means soft (piano) and loud (forte).',
  'The piano has the widest range of tones of all instruments.',
  'The piano was first created in Italy by Bartolomeo Cristofori in 1709.',
  'Music can help someone with severe brain injury, recall memories.',
  'Drummers have heightened problem solving abilities due to the complexity involved in playing the drums.',
  "People prefer the original versions of songs because it's the first version they heard, not because it's better.",
  "The harmonica is the world's best-selling music instrument.",
  'In 2016, Mozart sold more CDs than Beyoncé.',
  "The largest free concert event ever was Rod Stewart's 1993 New Year's Eve concert on Copacabana Beach in Rio de Janeiro, where an estimated 4.2 million people were in attendance.",
  'Music helps people with brain injuries recall personal memories.',
  'The theremin is an electronic musical instrument controlled WITHOUT physical contact by the performer.',
  'The violin is made up of 70 different pieces of wood.',
  "The word 'Karaoke' means empty orchestra in Japanese.",
  'The Sound of Music saved 20th Century Fox from going bankrupt in 1965.',
  'John Cage released a song in 1952 called " 4\'33" " that was 4 minutes and 33 secons of silence to prove that any sound could be music.',
  "Japan's national anthem, “Kimi Ga Yo”, has only four lines which makes it the shortest national anthemin the world.",
  'The oldest musical instrument in the world is a 35,000-year-old flute made of vulture bone.',
  'Paul McCartney was the first musician to make a live broadcast into outer space.',
  "British singer Katie Melua holds the world record for the deepest underwater concert plunging 303 metres below sea level on the Norwegian Statoil's Troll A platform in the North Sea.",
  'In Missy Elliott\'s "Work It" the lyrics everyone famously misunderstood are simply "I put my thing down, flip it, and reverse it" REVERSED - "ti esrever dna ti pilf nwod gniht ym tup I".',
  'Leo Fender, the founder of the iconic electric guitar and bass brand and Rock and Roll Hall of Fame inductee, never learned to play either instrument.',
  'A study shows that calming, slower, simpler music always trends before volatility occurs in the stock market.',
  'Learning an instrument improves memorization, pattern recognition and emotional development.',
  'Music helps coordinate speech network in the brain and improves speech difficulties.',
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
