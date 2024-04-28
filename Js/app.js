'use strict';

console.log('I am in the HTML');
alert('Welcome to my Page');

function getName(){
  const usersName = prompt("what's your name");

  return usersName;

}


let theirName = getName();

console.log(theirName);

function greetUser(){
  document.write(' Hi ' + theirName + ' Welcome to my page');

}

codeFellows();
jobView();
stateView();
nextLevel();
//greetUser();


let knowLuther = prompt('Do you know Luther Williams?');
knowLuther = knowLuther.toUpperCase();
console.log(knowLuther);


if (knowLuther === 'NO' || knowLuther === 'N'){
  alert('Oh No!!, We have to make sure you get to know him');
}

if (knowLuther === 'YES' || knowLuther === 'Y'){
  alert("Awesome, he's a great guy");
}

let thoughtOnCodeFellows = prompt('Is code Fellows a good program?');
thoughtOnCodeFellows = thoughtOnCodeFellows.toLowerCase();
console.log(thoughtOnCodeFellows);

if (thoughtOnCodeFellows === 'yes' || thoughtOnCodeFellows === 'y'){
  alert('I agree, Code Fellows is a great program, KEEP Coding');
}

if (thoughtOnCodeFellows === 'no' || thoughtOnCodeFellows === 'n'){
  alert("I'm sorry you feel that way, maybe give it another try");
}


function codeFellows(thoughtOnCodeFellows){
  if (thoughtOnCodeFellows === 'yes' || thoughtOnCodeFellows === 'y'){
    console.log('codeFellows');

    document.write('You like Code Fellows, YEeaahh Buddy, CodeFellows for life');
  }
  if (thoughtOnCodeFellows === 'no' || thoughtOnCodeFellows === 'n'){
    console.log('codeFellows');

    document.write("Shucks, You don't like Code Fellows, I though everyone liked Code Fellows");
  }

}

let currentJob = prompt('Do you like you current job position?');
currentJob = currentJob.toLowerCase();
console.log(currentJob);


if (currentJob === 'no' || currentJob === 'n'){
  alert("It's a good thing you're taking this course");
}

if (currentJob === 'yes' || currentJob === 'y'){
  alert("Ok, so you're looking to move up within the company");
}

function jobView(currentJob){
  if (currentJob === 'yes' || currentJob === 'y'){
    console.log('jobView');

    document.write("It's a great thing when you like you job and able to move up within it");
  }
  if (currentJob === 'no' || currentJob === 'n'){
    console.log('jobView');

    document.write('Not liking your job can be very stressful, especially when all you think about is getting out');
  }

}

let currentState = prompt('Do you like the state you live in?');
currentState = currentState.toUpperCase();
console.log(currentState);


if (currentState === 'YES' || currentState === 'Y'){
  alert("That's awesome you like where you live");
}

if (currentState === 'NO' || currentState === 'N'){
  alert("Not liking the state you live in can really affect you. I hope you're able to move");
}


function stateView(currentState){
  if (currentState === 'YES' || currentState === 'Y'){
    console.log('stateView');

    document.write("It's great you like youre state, find away to capitalize off that.");
  }
  if (currentState === 'NO' || currentState === 'N'){
    console.log('stateView');

    document.write("You don't like you're state, It's time to: Hit the Road Jack");
  }

}

let yourConfidence = prompt('Do you have what is takes to make it to the next level?');
yourConfidence = yourConfidence.toLocaleUpperCase();
console.log(yourConfidence);



if (yourConfidence === 'YES' || yourConfidence === 'Y'){
  alert("I like the confidence you have in yourself");
}

if (yourConfidence === 'NO' || yourConfidence === 'N'){
  alert("You should have more confidence in yourself");
}


function nextLevel(yourConfidence){
  if (yourConfidence === 'YES' || yourConfidence === 'Y'){
    console.log('nextLevel');

    document.write('I agree you have everything it takes for the next level and you will make it.');
  }
  if (yourConfidence === 'NO' || yourConfidence === 'N'){
    console.log('nextLevel');

    document.write("Don't cancel yourself out with doubt, you are able to do anything you put committed effort into.");
  }

}
