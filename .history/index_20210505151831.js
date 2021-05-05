// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring to complete this task.

let fruit;
let vegetable;
let food;



// #### 2.Object Destructuring
// * Create an object which contains a few key value pairs of human names and halloween costumes e.g. `fran: "witch"`. Assign each value to a variable. Print out the values.

const halloweenCostumes = {
    nancy: "hexe",
    jim: "warlock",
    agatha: "zombie"
};

const { nancy } = halloweenCostumes;
console.log(nancy);

const { jim } = halloweenCostumes;
console.log(jim);
 
const { agatha } = halloweenCostumes;
console.log(agatha);


// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to print all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```


const band = {
    name: "Siouxsie and the Banshees",
    singer: "Siouxsie Sioux",
    nationality: "British",
    genre: "Post-Punk"
};

function printWholeObject(param) {
    return band.name + " was a " + band.genre + " " + nationality + " band whose lead singer was "
 + band.singer;
}

console.log(printWholeObject);