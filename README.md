<h1 align="center">Team Profile HTML Generator </h1>
<h2 align="center">Using Node.js </h2>    

<br/><br/>

<p align="center">
<img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

## Description
This is a command line application that runs with Node.js to dynamically generate an HTML file based on the user's inputs. The application takes information entered by the user and displays a summary for each person on a software engineering team. The rendered HTML output file will be located in the dist folder. 
***
<br/><br/>

## Table of Contents
>* [License](#license)
>* [Installation](#installation)
>* [Usage](#usage)
>* [Instructional Video](#instructional-video)
>* [Tests Video](#tests-video)
>* [Example Image](#example-image)
***
<br/><br/>

## License
  Copyright © Lisa Pessin 2021  
  This application is covered under the MIT License.  
  For more information, visit https://opensource.org/licenses/MIT.

  ***
  <br/><br/>

## Installation
1. Download the files in this repo.
  2. Open in Visual Studios Code.
  3. Through the terminal in VS Code, run `npm install` to install the included dependencies.
  ***

<br/><br/>

## Usage
1. Through the terminal in VS Code, run `node index.js`.
  2. The application uses `inquirer` to prompt you with a series of questions in the command line about your project.
  3. Based on the answers you supply, the application will generate an HTML, and `fs.writeFile` is used to create a MyTeam.html file for your project.
  4. Please watch the instructional video below.

  ***
<br/><br/>

## Instructional Video
![](https://github.com/lmp-beep/10-TeamProfileGenerator/blob/a0cd9c501d9977006a407c849d6c90b2ea73454f/assets/videos/InstructionalVideo.gif)
***
<br/><br/>

## Tests Video
![PassedTests](https://user-images.githubusercontent.com/77073582/115927825-1070c980-a453-11eb-96df-24b0b121d85d.gif)
***
<br/><br/>

## Example Image
![ExampleImage](https://user-images.githubusercontent.com/77073582/115917229-e6fc7180-a443-11eb-8636-bb8dbffb75f6.png)

***