const router = require('express').Router()
const Movel = require('../model/movelModel')

router.post('/movel', async (req, res) => {
    const {name, descriptProdut, color, price} = req.body
    const newMovel = new Movel(name, descriptProdut, color, price)
 
        try {
            const result = await newMovel.insert()
            if(result)
                res.status(200).json({message: 'Movel Cadastrado com Sucesso!!!'})
            res.status(404).send()
            
        } catch (error) {
            res.status(500).json({error: error})  
            
        }
})

router.get('/movel/:id?', async (req, res) => {
    const id = req.params.id;
    let filter = {}
    if(id)
        filter = {id}

    try {
        const movel = await Movel.find(filter)
        if(movel)
            res.status(200).json(movel) 
        else
            res.status(404).json({message:'Movel não encontrado!!!'})
    
    } catch (error) {
        res.status(500).json({error: error})  
            console.log({error: error})  
    }

})
router.put('/movel/:id?', async (req, res) => {
    const id = req.params.id
    const {name, descriptProdut, color, price} = req.body
   
})

module.exports = router