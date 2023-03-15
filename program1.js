// ? write a program to find who provides 'Asian' cuisine

const restaurants = require("./data/restaurant.json");


// console.log(restaurants);


let filterCuisines =[]
restaurants.forEach((restaurant) => {
    
    let cuisines = restaurant.cuisines

     cuisines = cuisines.slice((''))

    let search = "Asian";

    // if (cuisines.indexOf(search) !== -1) {
    //    filterCuisines.push(restaurant)
    // //  console.log(restaurant)
    // } 

    if(cuisines.includes(search) !== true) {
        filterCuisines.push(restaurant)

    }
  

  });
  console.log(filterCuisines)