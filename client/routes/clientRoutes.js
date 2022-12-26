const router = require('express').Router()
const Client = require('../models/clientModel')

router.post('/client',async (req, res) =>{
   const { name, email } = req.body
   const newClient = new Client(name, email)
   const result = await newClient.insert()
   return res.status(201).json(result)
})
router.get('/client/:id?', async (req, res) => {
   let filter = {}
   const id = req.params.id
   if(id){
      filter = {id}
   }
   const client = await Client.find(filter)
   return res.status(201).json(client)
})


module.exports = router