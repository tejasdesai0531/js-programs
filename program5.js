//? Write a program to find a restaurant who opens on all days.

const restaurants = require("./data/restaurant.json");



firterOpenAllDayRestaurant = []
restaurants.forEach((restaurant) => {
     let openDays = restaurant.open_days 
     let Alldays = ['MON', 'TUE','WED', 'THU','FRI', 'SAT', 'SUN']
     

    // console.log(typeof(openDays));
        if(openDays.includes('MON', 'TUE','WED', 'THU','FRI', 'SAT', 'SUN') && openDays.length === Alldays.length) {
            firterOpenAllDayRestaurant.push(restaurant)

        }
})
console.log(firterOpenAllDayRestaurant)