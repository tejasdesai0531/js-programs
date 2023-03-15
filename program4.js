//? I am searching for restarant on Sunday at 12 O'clock. 
//? write a program to find how any restaurant opens on day and on at that time.


const restaurants = require("./data/restaurant.json");



let restaurant1 = []
restaurants.forEach((restaurant2) => {
    let openDays = restaurant2.open_days
    let timeSlots = restaurant2.time_slot
    let searchDay = 'SUN'
    let searchTime = 12 

    // console.log(timeSlots)

    // if(openDays.includes(searchDay)) {
    //     restarants.push(restaurant)
    // }
  
    let time =  timeSlots.find((timeSlot) => {
        // console.log(timeSlot)
           return timeSlot.opens_at <= searchTime && timeSlot.closes_at > searchTime
    })
     if(openDays.includes(searchDay) && time){
        restaurant1.push(restaurant2)
     }

      
    // console.log(time)
    //  console.log( restarants.push(restaurant))
    

})
console.log(restaurant1)

   
// console.log(restarants)



