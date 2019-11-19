const express = require ("express")
const bodyParser =require ("body-parser")
const {MongoClient , ObjectID}= require ('mongodb')
const assert=require ("assert")
const axios = require("axios")
const app= express ()

app.use (bodyParser.json())

const Mongo_url="mongodb://localhost:27017"
const DataBase='API'

MongoClient.connect(Mongo_url, { useNewUrlParser: true },(err,client)=> {
    assert.equal(err,null,'Connection Failed')

    const db=client.db(DataBase)
    axios.get("http://test.ats-digital.com:3000/products?size=100")
    .then((res)=>{
        var products=res.data
        db.collection('Products').insertMany(products,(err,data)=>{
            if(err) res.send('Can not add Products')
            else res.send(data)
        })
    })



app.get('/products/',(req,res)=>{
    db.collection('Products').find().toArray((err,data)=>{
        if(err) res.send ("Can not Get Products")
        else res.send(data)
    })

})

app.get('/Products/:id',(req,res)=>{
    var id=ObjectID(req.params.id)
    db.collection('Products').findOne({_id:id},(err,data)=>{
        if(err) res.send ("Can not Get Product")
        else res.send(data)   
    })
})





})


app.listen(3007, err => {
    if (err) console.log ("Server is not running")
    else console.log("Server is running ")

})