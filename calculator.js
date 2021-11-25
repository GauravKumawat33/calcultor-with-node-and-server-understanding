const express=require('express')
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({extended: true}));
const port=3000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post('/',(req,res)=>{
    // console.log(req)
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2) 
    var result=num1+num2;

    res.send("Te result of the calculation is "+result);
});

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post('/bmicalculator',(req,res)=>{
    var weight=parseFloat(req.body.weight)
    var height=parseFloat(req.body.height)
    var result=weight/(height/100*height/100)
    
    res.send("BMI is "+ result+" kg/m^2")
})

app.listen(port,()=>{
    console.log("Server is listening...")
});