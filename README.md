# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Arunan Thiviyanathan**

Time spent: **1 hour** 

Link to project: https://longing-cold-waterlily.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Button appearance changes on function call and on user input
- [X] Added Xs below the game to show how many strikes the user has accumulated on this iteration of the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Game Win](https://i.imgur.com/5UVY3Dr.gif)

[Game Loss 3 Strikes](https://i.imgur.com/pTAl8sB.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- I used the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to get the specific documentation for how the Math.random() function works in JavaScript

- I used these sites to get images for the [tree](https://clipartart.com/images/a-clipart-tree-4.png), [water droplet](http://clipart-library.com/clipart/328335.htm), [fire symbol](https://www.pinterest.com/pin/413275703307730666/), [electricity symbol](https://www.quantaservices.com/wp-content/uploads/2019/01/icon-electric-power-gold.png), and [X marker](http://www.clker.com/cliparts/x/T/e/E/B/Z/red-x-hi.png)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

- The biggest challenge I faced was changing the pattern to be randomly generated, as opposed to a static pattern. I did not know where to begin, so I first looked at the documentation for the Math.random() in Javascript. I saw that the function returns a decimal number in the range of [0, 1), but I needed to scale this to be the range of [1, 4]. The Math.random() function does not take in any parameters to influence how it generates numbers, so my only option was to manipulate the returned value of the function to get the range I desired. The first idea that came to me was to multiply the output of Math.random() by 4, so this would scale the output values from [0, 1) to [0, 4). I thought this would be sufficient, but when I ran the code, nothing was happening, and the console outputted an error. I logged the values that I was recording from my generator function to the console, and I realized that my numbers were still decimals, instead of integers. I had a button1, but not a button1.2472704, and this was causing my code to crash. I solved this by wrapping my calculation in a Math.floor(), which would round each decimal down to the nearest integer. Now, my sequence was all INTEGERS in the range of  [0, 3], and the last adjustment I made was to add 1 at the end of the calculation to get my desired range of [1, 4]. I considered using Math.ceil() instead of Math.floor() and adding one, but ceil() wouldn't work because Math.random() includes 0, so using Math.ceil() would have a range of outputs as [0, 4] but there is no button0, so this could potentially fail. With my solution of using Math.floor() and adding 1, I make sure that the lower bound is at least 1.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- I really enjoy working with web development because it allows me to be creative while also using my programming skills. The thing I am most curious about is how to add HTML elements to the DOM with Javascript. I wonder if it is possible to have an empty webpage, and have all the elements rendered through Javascript, and how difficult that would be. I think this would have a lot of applications because then the webpage would never be static, it could be dynamically adapting to best fit the needs of the end-user. 

- I am also curious as to how we could store data that can be loaded in next time the user loads the page. As far as I know, the javascript code is run for the first time when the webpage is first loaded in, and all the variables are lost whenever the user closes the tab. I'm interested to see if there is a way to store a variable so that the data isn't lost when the tab is closed, and then we can recover this saved data next time the user visits the page. This would allow somewhat of a "save game" for our memory game.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- I think the biggest area of improvement would be to refactor the code to be as abstract as possible, so if we ever want to add more features to the site, we can make changes knowing that modifying or removing a variable won't break the code in 20 different locations. Specifically, we can change the code so that instead of working for 4 or 6 buttons, it instead works for a variable number of buttons. And this allows us to add as many buttons as we want, and even have the program create buttons itself and add them to the DOM, incrementing its variables as it goes. 

- Adding onto that, with even more time, I would want to add an "Endless mode" where the number of buttons increase and the pattern gets longer, and the timing gets shorter as the player progresses throughout the game, and when they fail (after 3 strikes) they are given a score detailing how well they did, which they can use to compare the difficulty of their runs. On top of this, I can also store the user's Personal Best to show if they beat a personal record.



## License

    Copyright Arunan Thiviyanathan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.