const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
    console.log('query',req.query);
    if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter(user =>user.name.toLowerCase().includes(search))
      res.send(matched);
    }
    else{
        res.send(users)
    }
    
})

app.get('/user/:id', (req,res)=>{
   console.log(req.params);
   const id = parseInt(req.params.id);
   const user = users.find(u => u.id == id);
   res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port,() =>{
    console.log('Liseting to port',port);
})
