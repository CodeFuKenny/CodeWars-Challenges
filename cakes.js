// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 
// describe('description example', function() {
//     var recipe, available;
  
//     it('pass example tests', function() {
//       recipe = {flour: 500, sugar: 200, eggs: 1};
//       available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//       Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1');
      
//       recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//       available = {sugar: 500, flour: 2000, milk: 2000};
//       Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2');
//     });
//   });

function cakes(recipe, available) {
    // TODO: insert code
    // take in a recipe (object) and available ingredients
    
    // determine max number of cakes pete can bake (integer)
    // if ingredient isn't present in the object, then it will default to 0

    let total = []
    for (ingredient in recipe) {
        if (ingredient in available) {
            
            total.push(Math.floor(available[ingredient] / recipe[ingredient]))
            console.log(total)

        }
        else {
            return(0)
        }
        return(Math.min(...total))
        console.log(ingredients in available)

    }
  }


  
  let   recipe = {"cream":200,"flour":300,"sugar":150,"milk":100,"oil":100}

  let  available = {"sugar":1700,"flour":20000,"milk":20000,"oil":30000,"cream":5000}

 cakes(recipe,available)

let total = []
// Check if all of the required ingredients for the recipe are in the available pantry
// loop through the recipe array, and check if the value is in the available array
// if it is not, then return 0
// if it is in it, then proceed with the tootal calculations
for (ingredients in recipe) {
    if (ingredients in available) {
        for (availableIng in available){
            if (ingredients == availableIng){
                console.log(`${recipe[ingredients]} and ${available[availableIng]}`)   
                total.push(Math.floor(available[availableIng] / recipe[ingredients]))
            }
        }
    }
    else {
        console.log(0)
        break
    }

    console.log(ingredients in available)

}