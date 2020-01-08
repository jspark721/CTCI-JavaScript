// for .. in vs for .. of loops
let list = [4, 5, 6];

for(let i in list) {
    console.log(i); // lists the index
}

for(let i of list) {
    console.log(i); // lists the values
}

let petNames = ['harvey', 'marnie'];

for(let name in petNames) {
    console.log(petNames[name]);
}