const express = require('express');
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",    
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
     
})

module.exports = router;
