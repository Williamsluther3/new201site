
console.log('I am in the HTML');
alert('Welcome to my Page');

function getName(){
  const usersName = prompt("what's your name");

  return usersName;

}


let theirName = getName();

console.log(theirName);

function greetUser(){
  document.write(' Hi ' + theirName + ' Welcome');

}

//greetUser();
codeFellows();
jobView();
stateView();


let knowLuther = prompt('Do you know Luther Williams?');
knowLuther = knowLuther.toUpperCase();
console.log(knowLuther);


// let really = prompt('Your answer was ' + knowLuther + ' Is this correct?');
// really = really.toUpperCase();
// console.log(really);

if (knowLuther == 'NO' || knowLuther == 'N'){
  alert('Oh No!!, We have to make sure you get to know him');
}

if (knowLuther == 'YES' || knowLuther == 'Y'){
  alert("Awesome, he's a great guy");
}

let thoughtOnCodeFellows = prompt('Is code Fellows a good program?');
thoughtOnCodeFellows = thoughtOnCodeFellows.toLowerCase();
console.log(thoughtOnCodeFellows);

if (thoughtOnCodeFellows == 'yes' || thoughtOnCodeFellows == 'y'){
  alert('I agree, Code Fellows is a great program, KEPP Coding');
}

if (thoughtOnCodeFellows == 'no' || thoughtOnCodeFellows == 'n'){
  alert("I'm sorry you feel that way, maybe give it another try");
}


function codeFellows(thoughtOnCodeFellows){
  if (thoughtOnCodeFellows == 'yes' || thoughtOnCodeFellows == 'y'){
    console.log('codeFellows');

    document.write('You like Code Fellows, YEeaahh Buddy, CodeFellows for life');
  }
  if (thoughtOnCodeFellows == 'no' || thoughtOnCodeFellows == 'n'){
    console.log('codeFellows');

    document.write("Shucks, You don't like Code Fellows, I though everyone liked Code Fellows");
  }

}

let currentJob = prompt('Do you like you currentjob position?');
currentJob = currentJob.toLowerCase();
console.log(currentJob);


if (currentJob == 'NO' || currentJob == 'N'){
  alert("It's a good thing you're taking this course");
}

if (currentJob == 'YES' || currentJob == 'Y'){
  alert("Ok, so you're looking to move up within the company");
}

function jobView(currentJob){
  if (currentJob == 'yes' || currentJob == 'y'){
    console.log('codeFellows');

    document.write("It's a great thing when you like you job and able to move up within it");
  }
  if (currentJob == 'no' || currentJob == 'n'){
    console.log('codeFellows');

    document.write('Not liking your job can be very stressful,especially when all you think about is getting out');
  }

}

let currentState = prompt('Do you know Luther Williams?');
currentState = currentState.toUpperCase();
console.log(currentState);


if (currentState == 'yes' || currentState == 'y'){
  alert("That's awesome you like where you live");
}

if (currentState == 'no' || currentState == 'n'){
  alert("No liking the state you live in sucks, i hope you're able to move");
}


function stateView(currentState){
  if (currentState == 'yes' || currentState == 'y'){
    console.log('codeFellows');

    document.write("It's great you like youre state, find away to capitalize off that.");
  }
  if (currentState == 'no' || currentState == 'n'){
    console.log('codeFellows');

    document.write("You don't like it, It's Time Hit the Road Jack");
  }

}



//alert("I'm glad you know")

// if (knowLuther == 'YES'){
//   console.log('YES');

// }
// if (knowLuther == 'NO'){
//   console.log('NO');
// }

// function knowingHim(knowLuther){
//   if (knowingHim == 'YES'){
//     console.log('YES');
//     alert("You don't say");
//     document.write('Are you two friend?');
//   }
//   if (knowingHim == 'NO'){
//     console.log('NO');
//     alert('You will after this');
//     document.write('Would you like to know alittle about him');
//   }
//   else {
//     console.log("You don't know me man!!!");
//   }

// knowingHim();
// really();


//}

//console.log("Well let's find out");

//doYouKnowLuther();
