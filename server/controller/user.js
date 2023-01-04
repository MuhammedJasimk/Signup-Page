const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Talent = require('../modal/talent')
const Fan = require('../modal/fan')

module.exports = {

    fanSignup:async(req,res)=>{
        console.log("req.body fansignup");
        console.log(req.body);
        let user = await Fan.findOne({email:req.body.email})
    if(user){
        res.json({message:"Existing email"})
    }else{
        let hashPassword = await bcrypt.hash(req.body.password,10)
        if(hashPassword){
            await new Fan({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                username:req.body.username,
                email:req.body.email,
                password:hashPassword
            }).save()
            res.json({message:"Account created succssfully"})
        }else{
            res.json({message:"password Error"})
        }
    }
    },

    talentSignup:async(req,res)=>{

        console.log("req.body talentSignup");
        console.log(req.body);
        let user = await Talent.findOne({email:req.body.email})
        if(user){
            res.json({message:"Existing email"})
        }else{
            let hashPassword = await bcrypt.hash(req.body.password,10)
            if(hashPassword){
                await new Talent({
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    username:req.body.username,
                    email:req.body.email,
                    password:hashPassword
                }).save()
                res.json({message:"Account created succssfully"})
            }else{
                res.json({message:"password Error"})
            }
        }
    }
}