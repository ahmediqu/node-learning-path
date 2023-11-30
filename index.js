const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req,res) => {
   fs.readFile('./pages/index.html', (err,data) => {
    if(err) {
        res.send('something wants wrong')
    } else {
        res.write(data);
        res.end();
    }
   })
});

app.get('/about', (req,res) => {
    fs.readFile('./pages/about.html', (err,data) => {
     if(err) {
         res.send('something wants wrong')
     } else {
         res.write(data);
         res.end();
     }
    })
 });

app.listen(2000,() => {
    console.log('server is running')
})