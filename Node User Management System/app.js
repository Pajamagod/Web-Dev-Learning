const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const users = [
    {
        userName: "Aditya Gupta",
        userEmail: "aditya@gmail.com",
        userAge: "22",
        userUniqueId: '1'
    },
    {
        userName: "Vanshita Jaiswal",
        userEmail: "vanshita@gmail.com",
        userAge: "21",
        userUniqueId: '2'
    },
    {
        userName: "Sachin Yaday",
        userEmail: "sachin@gmail.com",
        userAge: "22",
        userUniqueId: '3'
    }
]

app.set('view engine', 'ejs');

//allows us to handle form data using request object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(__dirname + '/views'))

app.get("/", function (req, res) {
    res.render("home", { data: users })
})

app.post("/", (req, res) => {
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge
    const inputUserUniqueId = req.body.userUniqueId

    users.push({
        userName: inputUserName,
        userEmail: inputUserEmail,
        userAge: inputUserAge,
        userUniqueId: inputUserUniqueId
    })

    res.render("home", {
        data: users 
    })
})

app.post('/delete', (req, res) => {
    var requestedUserUniqueId = req.body.userUniqueId;
    var j = 0;
    users.forEach(user => {
        j = j + 1;
        if (user.userUniqueId === requestedUserUniqueId) {
            users.splice((j-1), 1)
        }
    })
    res.render("home", {
        data: users
    })
})

app.post('/update', (req, res) => {
    const inputUserName = req.body.userName
    const inputUserEmail = req.body.userEmail
    const inputUserAge = req.body.userAge
    const inputUserUniqueId = req.body.userUniqueId
    var j = 0;

    users.forEach(user => {
        j = j + 1;
        if (user.userUniqueId === inputUserUniqueId) {
            user.userName = inputUserName
            user.userEmail = inputUserEmail
            user.userAge = inputUserAge
        }
    })

    res.render("home", {
        data: users
    })
})

app.listen(3000, (req, res) =>{
    console.log("Listening on port " + PORT);
})