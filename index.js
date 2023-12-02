const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./Models/User')

const app = express()
app.use(cors())
app.use(express.json())

const DB = "mongodb+srv://aman:aman@cluster0.mbt5hkt.mongodb.net/amanmis"; 

mongoose.connect(DB).then(() =>{
    console.log(`Connection successful`);
}).catch((err) => console.log(`No connection`));

app.get('/', (req, res) => {
    userModel.find() 
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/createUser', async (req, res) => {
    const { name, email, age } = req.body;

    try {
        if (!name || !email || !age) {
            return res.status(400).json({
                status: 400,
                message: 'All fields are required'
            });
        }

        const user = new userModel({ name, email, age });
        await user.save();

        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error: ' + error.message // Include the error message for debugging
        });
    }
});




app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(6001, () => {
    console.log("Server is Running");
})