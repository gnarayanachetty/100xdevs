const fs = require('fs');
const path = require('path');
fs.readFile('./100xdevs/week-2/01-async-js/easy/hello.txt', 'utf-8',function(err, data) {
    if (err) {
        return console.log(err);
    }else{
        data += data
        fs.writeFile('./100xdevs/week-2/01-async-js/easy/hello.txt', data, function(err, data) {
            if (err) {
                return console.log(err);
            }
            console.log('added the data to file',data);
        });
    }
    console.log(data);
});
// let data = 1000;
// for(let i=0 ; i<data ; i++) {
//     console.log(i);
// }