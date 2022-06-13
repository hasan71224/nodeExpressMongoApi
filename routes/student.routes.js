const express = require('express');
const app = express();
const studentExpressRoute = express.Router();
let StudentSchema=require('../model/student.model');

studentExpressRoute.route('/').get((req,res) =>{
    StudentSchema.find((error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

studentExpressRoute.route('/student/:id').get((req, res)=>{
    StudentSchema.findById(req.params.id,(error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports = studentExpressRoute;