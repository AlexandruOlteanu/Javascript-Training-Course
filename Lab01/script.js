
// 5.2

const person = {

    name : "Mihaela",
    age : 46,
    qualities : ["Smart", "Patient", "Kind"]
}

console.log(person.name);
console.log(person.age);
console.log(person.qualities);

// 5.3

const movie = {
    title: "World War Z", 
    duration: 120,
    actors: ["Brad Pit", "Alexander", "Martha"]
}

function getMovie() {
    console.log("\"" + movie.title + "\" running time is " + movie.duration + " minutes.");
    console.log(" Starring: " + movie.actors);
}

// 5.4


const blackFridayCart = {
    phone: "350",
    console: "250",
    tv: "450",
    headPhones: "10.60",
    watch: "20.34",
    bag: "22.36"
  };
  
function getCartValue(element) {

sum = parseInt(element.phone) + parseInt(element.console);
sum += parseInt(element.tv) + parseFloat(element.headPhones);
sum += parseFloat(element.watch) + parseFloat(element.bag);

return sum

}

console.log(getCartValue(blackFridayCart)); // 1103.3


// 5.5

Array.prototype.myMap = function(callbackFunction) {
    const array = this;
    let newArray = [];
    
    array.forEach(element => {
       newArray.push(callbackFunction(element)); 
    });

    return newArray
}
  
function multiplicator(element) {
    return 2 * element;
}

console.log([1,2,3].map(multiplicator)); // [2,4,6]
console.log([1,2,3].myMap(multiplicator)); // [2,4,6]

// 5.6

Array.prototype.myFilter = function(callbackFunction) {
    const array = this;
    let newArray = [];
    array.forEach(element => {
        if (callbackFunction(element)) {
            newArray.push(element);
        } 
    });
    return newArray
  }
  
  function biggerThanFive(element) {
      return element > 4;
  }
  
  console.log([1,2,3,4,5,6,7,8,9].filter(biggerThanFive)); // [5,6,7,8,9]
  console.log([1,2,3,4,5,6,7,8,9].myFilter(biggerThanFive)); // [5,6,7,8,9]


  // 5.7

  Array.prototype.myReduce = function(callbackFunction, initialVal) {
    const array = this;
    let accumulator = (initialVal === undefined) ? undefined : initialVal;
    array.forEach(element => {
        accumulator = callbackFunction(accumulator, element);
    });
    
    return accumulator
  }
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  console.log([1,2,3,4].reduce(reducer)); // 10
  console.log([1,2,3,4].myReduce(reducer, 0)); // 10

