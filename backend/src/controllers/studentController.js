const studentData = require("../models/studentData")

// C = Create

exports.createStudentData = async(req,res)=>{
    try{
        let reqBody = req.body;
        let result = await studentData.create(reqBody)
        res.status(201).json({
            status : "success",
            data : result
        })
    }catch(e){
        res.status(500).json({
            status : "fail",
            error : e.toString()
        })
    }
}

exports.readStudentData = async (req,res)=>{
    try{
        let result = await studentData.find()
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch(e){
        res.status(500).json({
            status : "fail",
            error : e.toString()
        })
    }
}

exports.updateStudentData = async (req,res) =>{
    try{
        let reqBody = req.body;
        let id = req.params.id
        let query = {
            _id : id
        }
        let result = await studentData.updateOne(query,reqBody)
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch(e){
        res.status(500).json({
            status : "fail",
            error : e.toString()
        })
    }
}

exports.deleteStudentData = async (req,res) =>{
    try{
        let id = req.params.id
        let query = {
            _id : id
        }
        let result = await studentData.deleteOne(query)
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch(e){
        res.status(500).json({
            status : "fail",
            error : e.toString()
        })
    }
}