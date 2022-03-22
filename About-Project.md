# Frontend Mentor - Space Tourism Website

This is a solution to the [Space Tourism Website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Acknowledgments](#Acknowledgments)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Home Page](src/img/print/printHome.png?raw=true "Home Page")
![Destination Page](src/img/print/printMars.png?raw=true "Destination Page")
![Technology Page](src/img/print/printCapsule.png?raw=true "Technology Page")

### Links

- Solution URL: https://github.com/ciiDmo/space-tourism-website

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library
- JQuery

### What I learned

Below there are some code snippets what I learned:

```css
/*apply the blur effect behind an element*/
.main ul {
    ...
    backdrop-filter: blur(2rem);
    ...
}
.directionHovered:hover {
    ...
    /*to create a space biggier below the text*/
    text-underline-offset: 4.1rem; 
    /*the two next apply an animation effect*/
    transform: scaleX(0); 
    transition: all 0.8s ease 0s;
}
/*this applys an image in the background*/
.main {
    ...
    background: url('../../img/bg-crew.jpg');
    background-size: cover;
    background-clip: border-box;
    ...
}
/*this create a grid and divide that grid into as many parts as I want*/
.info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
/*this in particular create a shadow, in the third information is the size, so
in this case, I centralized the shadow and put a big size to do the effect I wanted*/
.explore a:hover {    
    box-shadow: 0 0 0 8rem rgba(255, 255, 255, 0.123);
}
/*this completes the above css effect*/
.explorePath {
    ...
    transition-timing-function: ease-in-out;
    transition: 0.8s;
}
```

In this exercise, I learned so much things about CSS grid, flexbox, animations and effects. I learned in pratice, so much more about padding, margin, fonts, edited texts and backgrounds.
I lost the fear I had about CSS. Now I'm more confident in the CSS part.

About the React.js, I learned so much too. I understood more about the BrowserRouter, Routes, Route and Link of the React libraries.
I taped the props use too.

### Continued development

With this exercise I learned a lot of CSS codes, improving my abilities in this area making me so much proud of myself. Like the same case about the React.js.
I catched this exercise thinking if I could make. But I didnt give up, now you can see the result of my perseverance and my thirst of knoledge. I'm so happy and I intend to keep growing.

## Acknowledgments

I would thank my brother-in-law André, for helpme with a lot of things in this project.

## Author

- LinkedIn - [Cidmar Oliveira](https://www.linkedin.com/in/cidmar-oliveira-2b8166231/)
- GitHub - [ciiDmo](https://github.com/ciiDmo)
- Twitter - [@ciiDmo](https://twitter.com/ciiDmo)
