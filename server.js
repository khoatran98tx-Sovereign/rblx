const express=require('express');
const app=express();
app.use(express.json());

app.get('/api/games',(req,res)=>{
 res.json([{id:1,name:'Obby Adventure'}]);
});

app.post('/api/chat',(req,res)=>{
 res.json({reply:'AI response placeholder'});
});

app.listen(3001,()=>console.log('Running'));
