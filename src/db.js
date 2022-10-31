//chords
import A_majorChord from './chord_images/A Maj.png';
import A_minorChord from './chord_images/A Min.png';
import Ab_majorChord from './chord_images/Ab Maj.png';
import Ab_minorChord from './chord_images/Ab Min.png';
import As_majorChord from './chord_images/A# Maj.png';
import As_minorChord from './chord_images/A# Min.png';

import B_majorChord from './chord_images/B Maj.png';
import B_minorChord from './chord_images/B Min.png';
import Bb_majorChord from './chord_images/Bb Maj.png';
import Bb_minorChord from './chord_images/Bb Min.png';

import C_majorChord from './chord_images/C Maj.png';
import C_minorChord from './chord_images/C Min.png';
import Cs_majorChord from './chord_images/C# Maj.png';
import Cs_minorChord from './chord_images/C# Min.png';

import D_majorChord from './chord_images/D Maj.png';
import D_minorChord from './chord_images/D Min.png';
import Ds_majorChord from './chord_images/D# Maj.png';
import Ds_minorChord from './chord_images/D# Min.png';
import Db_majorChord from './chord_images/Db Maj.png';
import DB_minorChord from './chord_images/Db Maj.png';

import E_majorChord from './chord_images/E Maj.png';
import E_minorChord from './chord_images/E Min.png';
import Eb_majorChord from './chord_images/Eb Maj.png';
import Eb_minorChord from './chord_images/Eb Min.png';

import F_majorChord from './chord_images/F Maj.png';
import F_minorChord from './chord_images/F Min.png';
import Fs_majorChord from './chord_images/F# Maj.png';
import Fs_minorChord from './chord_images/F# Min.png';

import G_majorChord from './chord_images/G Maj.png';
import G_minorChord from './chord_images/G Min.png';
import Gs_majorChord from './chord_images/G# Maj.png';
import Gs_minorChord from './chord_images/G# Min.png';
import Gb_majorChord from './chord_images/Gb Maj.png';
import Gb_minorChord from './chord_images/Gb Min.png';

//scales
import A_majorScale from './scale_images/A Maj Scale.png';
import A_minorScale from './scale_images/A Min Scale.png';
import Gs_Ab_majorScale from './scale_images/Gs:Ab Maj Scale.png';
import Gs_Ab_minorScale from './scale_images/Gs:Ab Maj Scale.png';
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
    scaleImage: Gs_Ab_majorScale,
  },
  AFMN: {
    name: 'A♭ MINOR',
    chordImage: Ab_minorChord,
    scaleImage: Gs_Ab_minorScale,
  },

  ASMJ: {
    name: 'A♯ MAJOR',
    chordImage: As_majorChord,
    scaleImage: As_Bb_majorScale,
  },
  ASMN: {
    name: 'A♯ MINOR',
    chordImage: As_minorChord,
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
    chordImage: Cs_majorChord,
    scaleImage: Cs_Db_majorScale,
  },
  CSMN: {
    name: 'C♯ MINOR',
    chordImage: Cs_minorChord,
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
    chordImage: Ds_majorChord,
    scaleImage: Eb_Ds_majorScale,
  },
  DSMN: {
    name: 'D♯ MINOR',
    chordImage: Ds_minorChord,
    scaleImage: Eb_Ds_minorScale,
  },
  DFMJ: {
    name: 'D♭ MAJOR',
    chordImage: Db_majorChord,
    scaleImage: Cs_Db_majorScale,
  },
  DFMN: {
    name: 'D♭ MINOR',
    chordImage: DB_minorChord,
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
    chordImage: Fs_majorChord,
    scaleImage: Fs_Gb_majorScale,
  },
  FSMN: {
    name: 'F♯ MINOR',
    chordImage: Fs_minorChord,
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
    chordImage: Gs_majorChord,
    scaleImage: Gs_Ab_majorScale,
  },
  GSMN: {
    name: 'G♯ MINOR',
    chordImage: Gs_minorChord,
    scaleImage: Gs_Ab_minorScale,
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
  'That piano wont play itself kiddo, try this:',
  'You are neglecting your keys, try this out:',
  // 'Life is like a sewer… you get out what you put in, time to do some putting-in:',
  // 'The road to success is dotted with many tempting parking space, keep driving my friend:',
  // 'Do or do not, there is no try. Do:',
  // 'The o Bnly place SUCCESS comes before WORK is the dictionary, now bang this out:',
  // "We talkin' 'bout practice?... Yes, yes we are:",
  // "Dairy cows don't get a day off, neither do you:",
  // "Show me a guy who's afraid to look bad, and I'll show you a guy you can beat every time, you wanna be beat?:",
  // "The best things in life are actually really expensive, so was that piano, get playin':",
  // "If the world didn't suck we'd all fly into space. Before that happens, play this:",
  // "Even if you are on the right track, you'll get run over if you just sit there, jump to it:",
  // 'If you think you are too small to be effective, you have never been in the dark with a mosquito... go be that mosquito:',
  // "You're only given a little spark of madness. You mustn't lose it:",
  // "Taking a step backward after taking a step forward is not a disaster, it's more like a cha-cha, let's dance twinkle toes:",
  // "There are two ways to pass a hurdle: leaping over or plowing through… let's monster truck this shit:",
  // "There's a fine line between genius and insanity. Let's erase that line, play this:",
  // "Failure is the condiment that gives success its flavor, let's spice this shit up:",
  // "We don't stop playing because we grow old; we grow old because we stop playing, so play!:",
  "'Mellifluous' is a sound that is pleasingly smooth and musical to hear, let's see what you got:",
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
  // 'Germany uncovers 2,000 tons of unexploded bombs every year.',
  // "Every time you shuffle a deck of cards, you get a combination that's never existed.",
  // 'Actor Bill Murray uses a 1-800 number instead of an agent or manager.',
  // "There's a device that creates energy from the static electricity of snowfall.",
  // 'Beaver bum goo is occasionally used to enhance vanilla flavorings.',
  // 'The word "MacGyvered" is in the Oxford English Dictionary.',
];

export const flat = '♭';
export const sharp = '♯';

export const randomPick = (arr) => {
  const getIndex = Math.floor(Math.random() * arr.length);
  const selected = arr[getIndex];

  return selected;
};
