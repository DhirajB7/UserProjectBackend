const express = require('express')
const router = express.Router()
const User = require('../Model/UserModel')

//Get All Users
router.get('/', async (req,res) => {
   try {

    const allUsers = await User.find()

    res.json(allUsers)
       
   } catch (error) {
       res.send(error)
   }
})

//Get One User

router.get('/:id', async (req,res) => {
    try {
 
     const oneUserGet = await User.findById(req.params.id)
 
     res.json(oneUserGet)
        
    } catch (error) {
        res.send(error)
    }
 })


//Post A User

router.post('/', async (req,res)=>{

    try {

    if((await User.find()).filter(a => a.email===req.body.email.toLowerCase()).length > 0){

        res.send("USER ALREADY IN DB")

    }else{

    const oneUser = new User({
        name:req.body.name.toLowerCase(),
        email:req.body.email.toLowerCase(),
        role:req.body.role.toLowerCase(),
        status:req.body.status
    })

        await oneUser.save()

        res.send("USER ADDED "+oneUser.name)
}
        
    } catch (error) {

        res.send(error)
        
    }

})

//patch one user status

router.patch('/status/:id', async (req,res) => {
    try {
 
     const oneUserPatch = await User.findById(req.params.id)
     oneUserPatch.status = req.body.status
    await oneUserPatch.save()
 
     res.json(oneUserPatch)
        
    } catch (error) {
        res.send(error)
    }
 })

 //Delete user

 router.delete('/:id', async (req,res) => {
    try {
 
    await User.findByIdAndDelete(req.params.id)
 
     res.send("USER DELETED")
        
    } catch (error) {
        res.send(error)
    }
 })




module.exports = router