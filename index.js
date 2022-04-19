const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send('Look mama I can code on node and I feel good')
});

const users= [
   {id:1,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:2,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:3,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:4,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:5,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:6,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
   {id:7,name:'sabana',email:'saban@gmail.com',phone:'01788888888'},
]

app.get('/users',(req,res) =>{
    res.send(users)
})

app.get('/user/:id', (req,res)=>{
   console.log(req.params);
   const id = parseInt(req.params.id);
   const user = users.find(u => u.id == id);
   res.send(user)
})

app.listen(port,() =>{
    console.log('Liseting to port',port);
})
