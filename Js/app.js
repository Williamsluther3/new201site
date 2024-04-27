
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

greetUser();

const knowLuther = prompt('Do you know Luther Williams?');


let text = knowLuther.toUpperCase();


if (knowLuther === 'YES'){
  console.log('YES');

}
if (knowLuther === 'NO'){
  console.log('NO');


}


function DoYouKnowLuther(knowLuther){
  if (knowLuther === 'YES'){
    alert("You don't say");
    document.write('You answered  ' + knowLuther + ' Are his friend?');
  }
  if (knowLuther === 'NO'){
    alert('You will after this');
    document.write('Would you like to know alittle about him');
  }

  return knowLuther;

}

console.log("Well let's find out");
