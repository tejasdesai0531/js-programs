// ? Write a program to find restaurants opens between 13 to 14 time slots (24 hour clock)

const restaurants = require("./data/restaurant.json");


// < 13
// > 14
let filterRestaurant = []
restaurants.forEach((restaurant) => {
     let timeSlot = restaurant.time_slot 
     let timeOne = 13
     let timeTwo = 14

    let time = timeSlot.find((slotS) => {
       return slotS.opens_at <= timeOne && slotS.closes_at > timeTwo
     })
    //  console.log(time)
     if(time) {
        filterRestaurant.push(restaurant)
     }
})
console.log(filterRestaurant)