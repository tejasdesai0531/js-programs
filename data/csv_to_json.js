const csvFilePath='./Orders.csv'
const csv=require('csvtojson')
const fs = require('fs');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const jsonData = JSON.stringify(jsonObj);

    fs.writeFile('orders.json', jsonData, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
})