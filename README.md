# Piano Scales And Chords

> A helpful tool for Jon who is trying to teach himself how to play piano. This was a really fun little project to work on and the first project I created completely on my own.

## Table of Contents

---

- [General Info](#general)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Available Commands](#available-commands)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

---

Jon, a friend of mine, bought himself a new piano and is currently trying to teach himself how to play. He asked if I could come up with a simple application to help with his training, and so I obliged. This is a simple React made application to cycle through random chords and scales to test Jon's knowledge. I applied some basic styling imported from a Semantic UI stylesheet as well as using some Semantic UI-React components. The syling proved to be some of the trickiest tasks to get it to look exactly the way I wanted.

## Tech Stack

---

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![Jvascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![SemanticUIReact](https://img.shields.io/badge/Semantic%20UI%20React-35BDB2.svg?style=for-the-badge&logo=Semantic-UI-React&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)

## Features

---

Note Card

- A card with the name of a note, indicates if the note is sharp or flat and in major or minor.
- You can personally chose if you want to play the chord of that note or the scale.

![main](./src/demo_images/main.png 'Main View')

Start/Stop Button

- Starts the timer that switches the note card that is is displayed.
- Press the start button to start the timer and the note changes on the time you have set.

Slider Timer

- Adjust the timer to specify how long you want the note to be displayed before the card changes to another note. Chords might be fast to play, but scales can take an extra second. You can play a few chords that change every 10 second then play a few scales that change every 30 seconds. Change the time between cards as you like.
- You can adjust the timer before you press start, or while the note cards are changing.
- You can start and stop the time with the spacebar and adjust the time slider with arrow keys.

Hint Button

- If you are stuck thinking of the chord or scale that matches the note, click on the hint button to reveal an image of both the chord and the scale - chords in red, scales in blue.

![hint](./src/demo_images/hint.png 'Hint Shown')

Custom greeting and fun fact

- Enjoy a personalised and randomised greeting on each load & refresh AND learn a little with a randomly generated music fact each time you load the app:

![personalise](./src/demo_images/personal.png 'Personalised')

## Setup

---

### Run Locally

1. Clone repo locally
2. Run `npm install` in your bash/command line
3. Run `npm start` in your bash/command line
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Commands

In the project directory, you can run:

`"npm start" : "react-scripts start"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
You will also see any lint errors in the console.

<!-- ### `"npm run dev": "concurrently "nodemon server" "npm run start"`,

For running the server and app together I am using concurrently this helps a lot in the MERN application as it runs both the server (client and server) concurrently. So you can work on them both together. -->

## Usage

---

This is really a basic flash card memory game and could be changed to show anything on the card. By updating the `db.js` you can change the `chordsAndScales` array to hold anything you like:

    export const chordsAndScales = {
      AMJ: {
        name: 'A MAJOR',
        chordImage: A_majorChord,
        scaleImage: A_majorScale,
      },
      ...

        export const plantCare = {
      p1: {
        name: 'Daisy',
        sunRequirements: 'Full Sun',
        waterNeeds: 'Once a week',
      },
      ...

      export const foodCookingInstructions = {
      f1: {
        name: 'Chicken',
        temperature: 350,
        time: '25-30min',
      },
      ...

## Project Status

---

Project is: COMPLETE

## Room for Improvement

---

Currently, the project is complete, (althought could use some fun styling) however I'll make any adjustments Jon requests as he improves his piano skills. Additionally, I'd like to add in some custom chords for Jon, to spice things up a bit.

![progressions](./src/demo_images/chord_progressions.png 'Chord Progressions')

Perhaps it could use some routes for other features as Jon's skills improve, so there is potential for that.

To do:

- [x] Add custom chords to chord db
- [x] Add routes for other features
- [x] Update styling
- [x] Improve app as Jon requests (ongoing)

## Acknowledgements

---

Shout-out to [Jon Eubank](https://github.com/joneubank) for letting me help him out, when he was perfectly capeable of doing it himself! 💚

##Contact

---

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')

## 🤝 Support

---

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## License

MIT License Copyright (c) [2022] [AvaElise]

---
