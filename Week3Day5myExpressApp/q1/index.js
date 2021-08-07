const express = require('express');

const app= express();


app.get('/', (req, res)=>{
    let name=req.query.name;
    let age=req.query.age;
    // let name="ghidiom";
    // let age=25;
    if(!name){
        name = "Person";
    }
    if(!age){
        age = "Not provided";
    }

    res.send('Welcome ${name}, your age is ${age}');
});

app.listen(3000);
