// ? wirte a program to find restaurant opens on Monday

const restaurants = require("./data/restaurant.json");


firterOpenAllDayRestaurant = []
restaurants.forEach((restaurant) => {
     let openDays = restaurant.open_days 
     let Alldays = ['SAT','SUN']
     

    // console.log(typeof(openDays));
        if(openDays.includes('SAT') && openDays.includes('SUN') && openDays.length === Alldays.length) {
            firterOpenAllDayRestaurant.push(restaurant)

        }
    })