//list transformations

//nesting


const game = {
  'suspects': [
    {
      name:'Rusty',
      color: 'orange'
    }, {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
}

game['suspects'] // returns the array of objects of suspects

function getSuspectName(obj) {
  for(let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i].name);
  }
}

getSuspectName(game);

// looping exercise 2 -- loop through the suspects array and add if you think the suspect is guilty

function isGuilty() {
  for(let i = 0; i < game.suspects.length; i++) {
    if(game.suspects[i].color === 'red') {
      game.suspects[i].guilty = true;
    } else {
      game.suspects[i].guilty = false;
    }
  }
  return game;
}

isGuilty();

// destructure the nested data structure into two variables with the strings 'red' and 'orange'

let [color1, color2] = [game.suspects[0].color, game.suspects[1].color];

console.log([color1, color2]);

let [{color: firstColor}, {color: secondColor}] = game.suspects;

console.log(firstColor);
console.log(secondColor);

var [firstObj, secondColor] = suspects;
