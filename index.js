const express= require('express')

const cors=require('cors')

const logic=require('./services/logics')

const contactServer=express()

contactServer.use(cors({
    origin:'http://localhost:3000'
}))

contactServer.use(express.json())

contactServer.listen(8001,()=>{
    console.log('contactServer listening on  the port 8001');
})

contactServer.get('/get-all-users',(req,res)=>{
        logic.getAllUsers().then((response)=>{
            res.status(response.statusCode).json(response)
        })    

})

contactServer.post('/add-user',(req,res)=>{
    logic.saveUser(req.body.id,req.body.name,req.body.email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

contactServer.delete('/delete-user/:id',(req,res)=>{
    logic.DeleteUser(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

contactServer.get('/view-user/:id',(req,res)=>{
    logic.viewUser(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })    

})

contactServer.post('/update-user/:id',(req,res)=>{
    logic.updateUser(req.params.id,req.body.name,req.body.email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })    

})


