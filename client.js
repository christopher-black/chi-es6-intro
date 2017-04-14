console.log('Script loaded.');

// SPREAD OPERATORS

let atticus = ['Atticus', 3832342, 45454];

function createEmployee(name,
                        employeeNumber,
                        salary,
                        ...hobbies) {

  console.log(name, employeeNumber, salary, hobbies);
}

var test = createEmployee(...atticus, 'salsa dancing', 'kayaking', 'basket weaving');
console.log(test);

// REST PARAMETERS

function restFunction(instructor = 'chris', ...gremlin) {
  console.log(instructor);
  console.log('----');
  for(let i = 0; i < gremlin.length; i++) {
    console.log(gremlin[i]);
  }
  console.log('----');
  console.log(gremlin);
}

restFunction('scott', 'fred', 'luke');


// CONFIG OBJECTS
function setupUser({name = 'no name', email} = {}) {
  console.log(name, email);
}

setupUser();


// FUNCTION ARGUMENTS
function processArray(array = []) {
  console.log(array.length);
}

processArray([1,2,3]);
processArray();
processArray(undefined);
processArray({});



// CONST
let numToppings = 4;
const NUM_TOPPINGS_FOR_DISCOUNT = 5;

if(numToppings < NUM_TOPPINGS_FOR_DISCOUNT){
  // No discount
} else {
  // 20% off!!!
}

// LET
function regularFunction() {
  if(true){
    let trueBlockVariable = "Hello";
  } else {
    let falseBlockVariable = "Goodbye!";
  }

  console.log(falseBlockVariable);
}

regularFunction();
