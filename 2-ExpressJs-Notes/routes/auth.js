const express = require('express');
const router = express.Router();

router.post('/', (req, res)=> {
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(201).json({success: true, data: name});
    } else {
        return res.status(400).json({success: false,  msg:'Please Provide Name Value'})
    }
    
})

module.exports = router;